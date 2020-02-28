import System from ".";

export default class InteractionSystem extends System {
	constructor(viewport) {
		super();
		this.viewport = viewport;
	}
	onUpdate(entities = {}) {
		const filteredEntities = Object.values(entities).filter(entity =>
			entity.hasComponent("interaction")
		);
		if (
			filteredEntities.some(
				entity => entity.getComponent("interaction").state.active
			)
		) {
			this.viewport.on("pointerup", () => {
				filteredEntities.forEach(
					e => (e.getComponent("interaction").state.active = false)
				);
			});
			if (!this.viewport.plugins.plugins.drag.paused) {
				this.viewport.plugins.plugins.drag.paused = true;
			}
		} else {
			if (this.viewport.plugins.plugins.drag.paused) {
				this.viewport.plugins.plugins.drag.paused = false;
			}
		}
	}
}
