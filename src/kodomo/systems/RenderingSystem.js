import System from ".";
import RenderableComponent from "../components/Renderable";

export default class RenderSystem extends System {
	update(entities) {
		entities.filter(e => e.hasComponent(RenderableComponent)).forEach(e => {
			const c = e.getComponent(RenderableComponent);
			if (c.render && !c.instance.parent) c.parent.addChild(instance);
		})
	}
}