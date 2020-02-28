import Component from "./base";

export default class InteractionComponent extends Component {
	setup({ el, pointer }) {
		const state = { active: false };
		el.interactive = true;
		el.buttonMode = !!pointer;

		function down() {
			state.active = true;
		}
		function up() {
			state.active = false;
		}

		el.on("pointerdown", down);
		el.on("pointerup", up);

		return {
			state,
			interactive: el.interactive,
			buttonMode: el.buttonMode,
			name: "interaction",
			unhook: function() {
				el.off("pointerdown", down);
				el.off("pointerup", up);
			}
		};
	}
}
