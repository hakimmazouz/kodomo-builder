import Component from ".";

export default class RenderableComponent extends Component {
	setup() {
		return {
			render: true,
		}
	}
}