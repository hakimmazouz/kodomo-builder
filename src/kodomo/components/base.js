import { uuid } from "../../js/utils";

export default class Component {
	constructor(props) {
		this.id = new uuid();
		return {
			id: this.id,
			name: this.constructor.name.toLowerCase().split("component")[0],
			...this.setup(props)
		};
	}
	setup(state) {
		return { state };
	}
}

export function createComponent({ name, state = {} } = {}) {
	const defaultState = state;
	const stateInterface = {};

	for (let key in defaultState) {
		Object.defineProperty(stateInterface, key, {
			get() {
				return defaultState[key];
			},
			set(value) {
				defaultState[key] = value;
			}
		});
	}

	Object.defineProperty(this, name, {
		value: name,
		enumerable: false,
		configurable: false,
		writable: false
	});

	Object.assign(this, stateInterface);

	return this;
}
