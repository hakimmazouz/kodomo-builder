import { uuid } from "../../js/utils";
import PixiElement from "./PixiElement";

export default class Entity extends PixiElement {
	constructor(data = {}) {
		super();
		this.id = uuid();
		this._components = {};
		this.init(data);
	}
	init(data = {}) {}
	addComponent(component, data = {}) {
		if (component && typeof component === "object")
			this.components[component.name] = component;
		if (component && typeof component === "function")
			this.components[component.constructor.name] = new component(
				this,
				data
			);
		return this;
	}
	get components() {
		return this._components;
	}
	removeComponent(componentName) {
		const component = this.getComponent(componentName);
		if (component) {
			delete this.components[component.constructor.name];
		}
		return this;
	}
	getComponent(component) {
		let name = component;
		if (typeof component === "function") name = component.name;
		if (typeof component === "object") name = component.constructor.name;
		return this.components[name];
	}
	hasComponent(component) {
		return Boolean(this.getComponent(component));
	}
	hasComponents(components = []) {
		return !components.some(component => !this.hasComponent(component));
	}
}
