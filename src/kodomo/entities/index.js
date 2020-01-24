import { uuid } from "../../js/utils";

export default class Entity {
	constructor(name) {
		this.id = name || uuid();
		this._components = {};
	}
	addComponent(component) {
		if (component && typeof component === "object") this.components[component.constructor.name] = component;
		if (component && typeof component === "function") this.components[component.name] = new component();
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
		return Boolean(this.getComponent(component))
	}
}