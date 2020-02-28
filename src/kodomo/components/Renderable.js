import Component from ".";

export default class RenderableComponent extends Component {
    setup(render = true) {
        this.render = render;
    }
    static stateTypes = {
        render: {
            type: "boolean",
            editable: true
        }
    };
}
