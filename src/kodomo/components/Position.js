import Component from ".";

export class Position extends Component {
	constructor({ x = 0, y = 0, z = 0 }) {
		Object.assign(this, { _x: x, _y: y, _z: z });
	}
	static get name() { return "Position" }
	get x() {
		return this._x;
	}
	get y() {
		return this._y;
	}
	get z() {
		return this._z;
	}
}