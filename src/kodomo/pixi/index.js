import { Application, Graphics, State } from "pixi.js";
import { Viewport } from "pixi-viewport";

export const app = new Application({
	width: window.innerWidth,
	height: window.innerHeight,
	backgroundColor: 0xbbbbbb
	// autoStart: false
});

export const viewport = new Viewport({
	screenWidth: window.innerWidth,
	screenHeight: window.innerHeight,
	worldWidth: window.innerWidth * 2,
	worldHeight: window.innerHeight * 2,
	interaction: app.renderer.plugins.interaction
});

app.stage.addChild(viewport);
viewport
	.drag()
	.pinch()
	.wheel();

viewport.sortableChildren = true;

export const { view, ticker, renderer, loader } = app;
