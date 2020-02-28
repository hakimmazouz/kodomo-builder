<template>
	<Panel position="left">
		<div class="stage-graph">
			<h2>Stage</h2>
			<div class="entities">
				<StageGraphEntity
					@click="selectEntity(entity.id)"
					v-for="entity in entities"
					:key="entity.id"
					:entity="entity"
				/>
			</div>
		</div>
	</Panel>
</template>

<script>
import { Graphics } from "pixi.js";
import { viewport } from "@/kodomo/pixi";
import Panel from "./Panel";
import StageGraphEntity from "./StageGraphEntity";
import { mapState, mapActions, mapMutations } from "vuex";
export default {
	components: {
		Panel,
		StageGraphEntity
	},
	data() {
		return {
			children: viewport.children
		};
	},
	created() {
		viewport.on("added", this.updateChildren);
		viewport.on("removed", this.updateChildren);
	},
	mounted() {},
	computed: {
		...mapState(["entities"])
	},
	methods: {
		updateChildren() {
			this.children = viewport.children;
		},
		...mapActions(["selectEntity"])
	}
};
</script>

<style scoped>
.stage-graph {
	height: calc(100vh - 4rem);
	overflow: hidden;
	width: 300px;
}
h2 {
	font-size: 1.5rem;
	padding: 1.5rem;
	font-weight: 700;
}
</style>
