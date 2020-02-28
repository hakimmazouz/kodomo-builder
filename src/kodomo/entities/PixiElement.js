import { EventEmitter } from "../../js/EventEmitter";
import { Container, Point } from "pixi.js";
import { viewport } from "../pixi";

export default class PixiElement extends EventEmitter {
	constructor() {
		super();

		this.el = new Container();
		this.el.ref = this;
		this.el.pivot = new Point(0.5, 1);
	}
	addTo(world) {
		world.addChild(this.el);
	}
}
