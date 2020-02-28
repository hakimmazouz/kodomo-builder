<template>
	<details @click="handleItemClick">
		<summary class="heading">{{ entity.name || entity.id }}</summary>
		<div class="state"></div>
	</details>
</template>

<script>
export default {
	props: {
		entity: Object
	},
	computed: {
		state() {
			return Object.keys();
		}
	},
	methods: {
		handleItemClick() {
			this.$emit("click");
		}
	}
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
</style>
