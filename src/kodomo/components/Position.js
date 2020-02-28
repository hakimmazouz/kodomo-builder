import Component from "./base";

// import Component from ".";

// export class Position extends Component {
//     static get name() {
//         return "Position";
//     }
//     constructor({ x = 0, y = 0, z = 0 }) {
//         Object.assign(this, { _x: x, _y: y, _z: z });
//     }
//     get x() {
//         return this._x;
//     }
//     get y() {
//         return this._y;
//     }
//     get z() {
//         return this._z;
//     }

//     static stateTypes() {
//         return [
//             {
//                 x: {
//                     type: "number",
//                     editable: true
//                 },
//                 y: {
//                     type: "number",
//                     editable: true
//                 }
//             }
//         ];
//     }
// }

export default class PositionComponent extends Component {
	setup({ el, x, y }) {
		const state = {};
		Object.defineProperty(state, "x", {
			get() {
				return el.x;
			},
			set(value) {
				el.x = value;
			}
		});
		Object.defineProperty(state, "y", {
			get() {
				return el.y;
			},
			set(value) {
				el.y = value;
			}
		});

		state.x = x;
		state.y = y;

		return {
			state
		};
	}
}

PositionComponent.prototype.name = "position";
PositionComponent.prototype.icon = "arrows-alt";
PositionComponent.prototype.displayName = "Position";
PositionComponent.prototype.description =
	"Allows the entity to be positioned in the scene.";
