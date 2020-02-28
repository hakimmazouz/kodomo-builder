export class EventEmitter {
	constructor() {
		this.events = [];
	}

	$on(event, callback) {
		this.events[event] = this.events.hasOwnProperty(event)
			? [...this.events[event], callback]
			: [callback];
	}

	$off(event, callback) {
		if (this.events.hasOwnProperty(event))
			this.events[event] = this.events[event].filter(
				storedCallback => storedCallback !== callback
			);
	}

	$emit(event, payload) {
		if (this.events.hasOwnProperty(event)) {
			this.events[event].forEach(callback => {
				callback(payload);
				if (callback.once) this.off(event, callback);
			});
		}
	}

	$once(event, callback) {
		callback.once = true;
		this.on(event, callback);
	}
}

export default new EventEmitter();
