import Component from "./base";

export default class Movable extends Component {
	setup({ el, gate }) {
		let state = {
			delta: { x: 0, y: 0 },
			start: { x: 0, y: 0 }
		};

		function down({ data }) {
			state.start = {
				x: data.global.x,
				y: data.global.y
			};
			el.on("pointermove", move);
		}

		function move({ data }) {
			state.delta = {
				x: state.start.x - data.global.x,
				y: state.start.y - data.global.y
			};
			requestAnimationFrame(() => {
				state.start = {
					x: data.global.x,
					y: data.global.y
				};
				state.delta = {
					x: 0,
					y: 0
				};
			});
		}

		function up() {
			el.off("pointermove", move);
		}

		el.on("pointerdown", down);
		el.on("pointerup", up);

		return {
			state,
			name: "movable",
			gate,
			unhook: function() {
				//unsub listeners from events
				el.off("pointerdown", down);
				el.off("pointermove", move);
				el.off("pointerup", up);
			}
		};
	}
}
