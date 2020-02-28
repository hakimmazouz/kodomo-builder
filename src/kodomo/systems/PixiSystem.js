import System from ".";
import { Sprite } from "pixi.js";

export default class PixiSystem extends System {
	setup({ view, stage, renderer, ticker, loader } = {}) {
		Object.assign(this, { view, stage, renderer, ticker, loader });
		this.query = ["pixi-sprite", "position"];
	}

	onUpdate() {
		// this.renderer.render();
	}

	createSprite(component) {
		const sprite = new Sprite(loader.resources[component.texture].texture);
		sprite._componentRef = component.id;
		component.ref = sprite;
		return sprite;
	}

	addChild(element) {
		this.stage.addChild(element);
	}
}
