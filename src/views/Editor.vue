<template>
	<div class="editor">
		<!-- <StageGraph /> -->
		<KodomoRenderer />
		<!-- <Inspector /> -->
		<Tools />
		<ComponentPicker v-if="showComponentPicker" />
	</div>
</template>

<script>
// @ is an alias to /src
import ComponentPicker from "@/components/ComponentPicker";
import KodomoRenderer from "@/components/KodomoRenderer";
import StageGraph from "@/components/StageGraph";
import Inspector from "@/components/Inspector";
import Tools from "@/components/Tools";
import { mapState } from "vuex";

export default {
	name: "editor",
	components: {
		ComponentPicker,
		KodomoRenderer,
		StageGraph,
		Inspector,
		Tools
	},
	computed: {
		...mapState(["showComponentPicker"])
	}
};
</script>

<style lang="scss" scoped>
.editor {
	position: fixed;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
	background-color: #eeeeee;
}
</style>
