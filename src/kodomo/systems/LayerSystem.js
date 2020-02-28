import System from "./index";

export default class LayerSystem extends System {
	constructor(viewport) {
		super();
		this.viewport = viewport;
	}
	onUpdate(entities = {}) {
		Object.values(entities).forEach(entity => {
			entity.el.zIndex = entity.el.y;
		});
	}
}
