import Entity from "./entity";
import Components from "./../components";
import { Sprite } from "pixi.js";
import { loader } from "./../pixi";
import PositionComponent from "../components/Position";

const { Sprite: SpriteComponent } = Components;

export default class Ground extends Entity {
	constructor(...args) {
		super(...args);

		this.addComponent(
			new PositionComponent({ el: this.el, x: 0, y: 0 })
		).addComponent(
			new SpriteComponent({
				sprite: new Sprite(loader.resources["ground"].texture),
				el: this.el
			})
		);

		this.el.zIndex = -this.el.height;
	}
}
