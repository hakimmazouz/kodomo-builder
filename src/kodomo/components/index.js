import { uuid } from "../../js/utils";

export default class Component {
	constructor() {
		this.id = new uuid();
		return {
			id: this.id,
			name: this.constructor.name,
			...this.setup()
		}
	}
	setup() {
		return {}
	}
}