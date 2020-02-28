import * as PIXI from "pixi.js";

import Entity from "./entities/entity";
import { view, viewport, renderer, loader } from "./pixi";
import PixiSystem from "./systems/PixiSystem";
import InteractionSystem from "./systems/InteractionSystem";
import { EventEmitter } from "../js/EventEmitter";
import { ASSETS } from "../const";
import MovableSystem from "./systems/MovableSystem";
import LayerSystem from "./systems/LayerSystem";
import PixiElement from "./entities/PixiElement";
import gsap from "gsap";

export class Kodomo extends EventEmitter {
	constructor() {
		super();
		this.assets = ASSETS;
		this.entities = {};
		this.systems = {};
		PIXI.utils.clearTextureCache();
		this.componentMap = this.createComponentMap();
		this.resources = {};
		this.loader = loader;
		this.raf = null;

		this.runSystems = this.runSystems.bind(this);
		this.setupSystems();
	}
	static createEntity(constructor = Entity, name, data) {
		return new constructor(name, data);
	}
	addEntity(entity) {
		this.entities[entity.id] = entity;
		viewport.addChild(entity.el);
		entity.el.x +=
			viewport.left + viewport.screenWidth * 0.5 - entity.el.width * 0.5;
		entity.el.y +=
			viewport.top + viewport.screenHeight * 0.5 - entity.el.width * 0.5;

		entity.el.pivot = new PIXI.Point(0.5, 0.5);
		gsap.from(entity.el.scale, {
			y: 0,
			x: 0,
			duration: 1.5,
			onComplete: () => {
				// entity.el.anchor = prevPoint;
			},
			ease: "elastic.out"
		});
		this.$emit("entity-added", this.entities);
	}
	setupSystems() {
		this.addSystem(new InteractionSystem(viewport))
			.addSystem(new MovableSystem(viewport))
			.addSystem(new LayerSystem())
			.addSystem(
				new PixiSystem({
					stage: viewport,
					renderer,
					view,
					loader: this.loader
				})
			);
	}
	addSystem(system) {
		this.systems[system.constructor.name] = system;
		return this;
	}
	start() {
		this.stopped = false;
		return new Promise(resolve => {
			if (Object.keys(this.loader.resources).length > 0) resolve();
			for (let key in this.assets) {
				this.loader.add(key, this.assets[key]);
			}
			this.loader.load((loader, resources) => {
				this.resources = resources;
				this.runSystems();
				resolve(view);
			});
		});
	}
	stop() {
		this.stopped = true;
		cancelAnimationFrame(this.raf);
		return this;
	}
	runSystems() {
		// TODO: Loop through systems that are awake
		if (this.stopped) return;
		this.raf = requestAnimationFrame(this.runSystems);
		for (let key in this.systems) {
			this.systems[key].update(this.entities);
		}
		this.stopped = false;
		return this;
	}
	updateComponentMap() {
		this.componentMap = this.createComponentMap();
		return this;
	}
	createComponentMap() {
		const map = {};
		for (let { components } in this.entities) {
			for (let component in components) {
				if (map[component.name]) map[component.name].push(component);
				else map[component.name] = [component];
			}
		}
		return map;
	}
	static component(name) {
		return this.components[name];
	}
}

export const kodomo = new Kodomo();
