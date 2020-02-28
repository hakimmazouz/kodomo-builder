<template>
	<Panel>
		<div class="inspector">
			<h2>Components</h2>
			<div v-if="selectedEntity" class="wrapper center">
				<h4>{{ selectedEntity.id }}</h4>
				<button @click="showComponentPicker">Add component</button>
			</div>
			<div class="components" v-if="selectedEntity">
				<InspectorComponent
					v-for="component in selectedEntity.components"
					:key="component.id"
					:component="component"
				/>
			</div>
		</div>
	</Panel>
</template>

<script>
import Panel from "./Panel";
import InspectorComponent from "./InspectorComponent";
import { mapGetters, mapActions } from "vuex";

export default {
	components: {
		Panel,
		InspectorComponent
	},
	data() {
		return {
			components: [
				{
					id: "oaindoisandasd",
					name: "Position",
					state: {
						x: 20,
						y: -20
					}
				},
				{
					id: "oaindoisasdasdandasd",
					name: "Render",
					state: {
						shouldRender: true
					}
				}
			]
		};
	},
	methods: {
		...mapActions(["showComponentPicker"])
	},
	computed: {
		...mapGetters({
			selectedEntity: "getSelectedEntity"
		})
	}
};
</script>

<style scoped>
.inspector {
	width: 300px;
	height: calc(100vh - 4rem);
	overflow: hidden;
}
h2 {
	padding: 1.5rem;
	font-size: 1.5rem;
	font-weight: 700;
}
button {
	background-color: #cdcdcd;
	padding: 0.5rem 1rem;
	display: block;
	margin: 1rem auto;
}
.wrapper {
	padding: 1.5rem;
}
</style>
