<template>
	<Panel position="bottom">
		<div class="tools">
			<h4>Tilføj element</h4>
			<button
				v-for="action in tools"
				:key="action.index"
				@click="getActionHandler(action.handler)"
			>
				{{ action.label }}
			</button>
		</div>
	</Panel>
</template>

<script>
import { kodomo, Kodomo } from "./../kodomo/core";
import Tree from "./../kodomo/entities/Tree";
import Hedge from "./../kodomo/entities/Hedge";
import Bench from "./../kodomo/entities/Bench";
import Panel from "./Panel";
import { mapActions } from "vuex";
export default {
	components: {
		Panel
	},
	data() {
		return {
			tools: [
				// {
				// 	name: "create-entity",
				// 	label: "New Entity",
				// 	handler: "handleCreateEntity"
				// },
				{
					name: "create-tree",
					label: "Træ",
					handler: "handleCreateTrees"
				},
				{
					name: "create-entity",
					label: "Hæk",
					handler: "handleCreateHedge"
				},
				{
					name: "create-entity",
					label: "Bænk",
					handler: "handleCreateBench"
				}
			]
		};
	},
	methods: {
		getActionHandler(handler) {
			return this[handler]
				? this[handler]()
				: console.warn("No handler designated for this action.");
		},
		handleCreateEntity() {
			this.addEntity();
		},
		handleCreateTrees() {
			kodomo.addEntity(Kodomo.createEntity(Tree));
		},
		handleCreateHedge() {
			kodomo.addEntity(Kodomo.createEntity(Hedge));
		},
		handleCreateBench() {
			kodomo.addEntity(Kodomo.createEntity(Bench));
		},
		...mapActions(["addEntity"])
	}
};
</script>

<style scoped>
.tools {
	padding: 1rem;
}
h4 {
	display: inline-block;
	font-family: "Gibson", sans-serif;
	font-size: 1.25rem;
	padding: 0 2rem;
}
button {
	background-color: black;
	padding: 0.5rem 1rem;
	border-radius: 12px;
	font-family: "Gibson", sans-erif;
	font-weight: 600;
	margin-right: 10px;
	color: rgba(255, 255, 255, 0.9);
	transition: all 0.25s ease-out;
}
button:hover {
	background-color: #666;
}
</style>
