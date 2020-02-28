import Component from "./base";

export default class DepthLayer extends Component {
	setup({ anchor } = { anchor: { x: 0.5, y: 1 } }) {
		return { anchor };
	}
}
