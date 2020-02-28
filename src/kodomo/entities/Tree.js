import Entity from "./entity";
import Components from "./../components";
import { Sprite } from "pixi.js";
import { loader } from "./../pixi";
import PositionComponent from "../components/Position";

const {
	Sprite: SpriteComponent,
	Interaction: InteractionComponent,
	Movable: MovableComponent,
	DepthLayer: DepthLayerComponent
} = Components;

export default class Tree extends Entity {
	init() {
		this.addComponent(new PositionComponent({ el: this.el, x: 0, y: 0 }))
			.addComponent(
				new SpriteComponent({
					sprite: new Sprite(loader.resources["trees"].texture),
					el: this.el
				})
			)
			.addComponent(
				new InteractionComponent({ el: this.el, pointer: true })
			)
			.addComponent(
				new MovableComponent({
					el: this.el,
					gate: { interaction: { active: true } }
				})
			)
			.addComponent(new DepthLayerComponent());
	}
}
