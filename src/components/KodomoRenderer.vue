<template>
	<div class="render-view" ref="container">
		<div v-if="!view" class="wait"><h2>Loading assets</h2></div>
	</div>
</template>

<script>
import { kodomo, Kodomo } from "@/kodomo/core";
import Ground from "./../kodomo/entities/Ground";
// import { Kodomo as ECS } from "@/kodomo/core";
import { ASSETS } from "@/const";
import { mapActions } from "vuex";
export default {
	data() {
		return {
			// ecs: new ECS(),
			view: null
		};
	},
	created() {},
	mounted() {
		kodomo.start().then(view => {
			this.view = view;
			this.$refs.container.appendChild(view);
			kodomo.addEntity(Kodomo.createEntity(Ground));
		});
		kodomo.$on("entity-added", this.handleEntityAdded);
	},
	methods: {
		handleEntityAdded(entities) {
			this.updateEntities(entities);
		},
		...mapActions(["updateEntities"])
	},
	beforeDestroy() {
		kodomo.stop();
	}
};
</script>

<style scoped>
.render-view {
	position: relative;
	z-index: -1;
}
.wait {
	width: 100%;
	height: 100%;
	position: absolute;
	background-color: black;
	color: white;
	display: flex;
	align-items: center;
	justify-content: center;
	font-size: 3rem;
}
</style>
