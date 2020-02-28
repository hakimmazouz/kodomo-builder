<template>
	<details class="inspector-component" open>
		<summary class="heading">{{ capitalize(component.name) }}</summary>
		<div class="state">
			<div v-for="(value, key) in component" :key="value + key">
				<h4 class="state-piece">
					{{ key }}
					<input
						v-if="inputTypeOf(value) === 'number'"
						type="number"
						v-model.number="component[key]"
						@change="updateEntities"
					/>
					<input
						v-if="['text', 'checkbox'].includes(inputTypeOf(value))"
						:type="inputTypeOf(value)"
						v-model="component[key]"
						@change="updateEntities"
					/>
				</h4>
			</div>
		</div>
	</details>
</template>

<script>
export default {
	props: {
		component: Object
	},
	computed: {
		state() {
			return Object.keys();
		}
	},
	methods: {
		updateEntities() {
			this.$store.commit("updateComponent", this.component);
		},
		capitalize(string) {
			return string[0].toUpperCase() + string.slice(1, string.length);
		},
		inputTypeOf(value) {
			switch (typeof value) {
				case "number":
					return "number";
				case "boolean":
					return "checkbox";
				default:
					return "text";
			}
		}
	},
	mounted() {}
};
</script>

<style>
.heading {
	padding: 1rem 1.5rem;
	background-color: #c0c0c0;
	cursor: pointer;
}
.state {
	padding: 1rem 1.5rem;
	background-color: #cacaca;
}
.state-piece {
	margin: 0.5rem 0;
}
input[type="checkbox"],
input[type="number"],
input[type="text"] {
	margin-left: 1rem;
}
input[type="number"],
input[type="text"] {
	padding: 0.25rem;
}
</style>
