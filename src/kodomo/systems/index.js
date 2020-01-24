import { EventEmitter } from "../../js/EventEmitter";

export default class System extends EventEmitter {
	setup()
	cleanup()
	beforeUpdate() {
		return this;
	}
	update(entities = []) {
		return this;
	}
	afterUpdate() {
		return this;
	}
}