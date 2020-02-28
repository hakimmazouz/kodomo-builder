import { EventEmitter } from "../../js/EventEmitter";

export default class System extends EventEmitter {
	constructor() {
		super();
		this.init();
	}
	init() {}
	cleanup() {}
	update(entities = {}) {
		return this.onUpdate(entities);
	}
	onUpdate(entities = {}) {
		return this;
	}
	destroy() {
		this.cleanup();
	}
}
