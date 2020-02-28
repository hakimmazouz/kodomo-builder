import Component from "./base";

export default class SpriteComponent extends Component {
	setup({ sprite, el }) {
		console.warn("Added sprite component", el);
		el.addChild(sprite);
		return {
			sprite,
			name: "sprite"
		};
	}
}

// export default function SpriteComponent({ texture = "tree" } = {}) {
// 	const id = uuid();
// 	Object.assign(this, { texture });

// 	Object.defineProperty(this, "id", {
// 		value: id,
// 		writable: false
// 	});
// 	Object.defineProperty(this, "ref", {
// 		configurable: false,
// 		enumerable: false,
// 		writable: true
// 	});

// 	return this;
// }

SpriteComponent.prototype.name = "pixi-sprite";
SpriteComponent.prototype.icon = "image";
SpriteComponent.prototype.displayName = "Pixi Sprite";
SpriteComponent.prototype.description = "Adds a PIXI sprite to the entity.";
