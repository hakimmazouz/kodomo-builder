export const VIEW_MODE = {
	EDIT: "Edit mode",
	PLAY: "Play mode",
	INSPECT: "Inspection mode"
};

export const EDIT_MODE = {
	PAN: "Panning mode",
	DRAG: "Dragging mode",
	CONFIG: "Config mode"
};

export const BRAND = {
	COLOR: {
		PRIMARY: "#eeeeee",
		SECONDARY: "#dddddd",
		TERTIARY: "#000000"
	},
	FONT: {}
};

export const MUTATIONS = {
	SET_VIEW_MODE: "setViewMode",
	UPDATE_ENTITY: "updateEntity",
	UPDATE_COMPONENT: "updateComponent"
};

export const ASSETS = {
	tree: require("@/assets/images/tree.png"),
	ground: require("@/assets/images/ground.png"),
	trees: require("@/assets/images/trees.png"),
	hedge: require("@/assets/images/hedge.png"),
	bench: require("@/assets/images/bench.png")
};
