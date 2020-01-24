export default class SpriteComponent {
	constructor({texture, parent}) {
		this.parent = parent;
		this.texture = texture;
	}
	setup() {
		return {
			parent: this.parent,
			sprite: new PIXI.Sprite(this.texture)
		}
	}
}