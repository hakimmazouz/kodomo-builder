import System from ".";

export default class PixiSystem extends System {
	setup(node) {
		this.app = new PIXI.Application({
			autoStart: false,
			width: node.offsetWidth,
			height: node.offsetHeight,
			resizeTo: node
		});

		node.appendChild(this.app.view);
	}

	update() {
		this.app.renderer.render();
	}
}