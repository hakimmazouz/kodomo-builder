import System from ".";

export default class MovableSystem extends System {
	static gate = { position: true };
	constructor(viewport) {
		super();
		this.viewport = viewport;
	}
	onUpdate(entities = {}) {
		for (let key in entities) {
			let entity = entities[key];
			let movable = entity.getComponent("movable");
			if (
				movable &&
				this.testGate(
					{ ...movable.gate, ...MovableSystem.gate },
					entity.components
				)
			) {
				const {
					state: { delta }
				} = entity.getComponent("movable");
				entity.components.position.state.x -= delta.x;
				entity.components.position.state.y -= delta.y;
			}
		}
	}
	testGate(gate, components) {
		for (let key in gate)
			if (typeof gate[key] === "object") {
				for (let prop in gate[key])
					if (!components[key].state[prop] === gate[key][prop])
						return false;
			} else {
				if (!components[key]) return false;
			}

		return true;
	}
}
