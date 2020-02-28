<template>
	<div class="container">
		<div class="backdrop" @click="hideComponentPicker"></div>
		<Panel :dark="true" position="bottom" :bleed="true">
			<div class="component-picker">
				<div
					class="component"
					@click="handleComponentClick(component)"
					v-for="component in components"
					:key="component.index"
				>
					<h3 class="component-name">
						<fa-icon :icon="['fas', component.prototype.icon]" />
						{{ component.prototype.displayName }}
					</h3>
					<h4 class="component-description">
						{{ component.prototype.description }}
					</h4>
				</div>
			</div>
		</Panel>
	</div>
</template>

<script>
import { mapActions } from "vuex";
import Panel from "./Panel";
import Components from "@/kodomo/components";
export default {
	components: {
		Panel
	},
	data() {
		return {
			components: Object.values(Components)
		};
	},
	methods: {
		...mapActions(["hideComponentPicker", "addComponentToSelected"]),
		handleComponentClick(component) {
			this.addComponentToSelected(new component());
		}
	}
};
</script>

<style scoped>
.backdrop {
	position: fixed;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
	background-color: rgba(0, 0, 0, 0.5);
}
.component-picker {
	padding: 4rem;
	display: flex;
	flex-wrap: wrap;
}
.component {
	padding: 2rem;
	flex-basis: 25%;
	transition: background-color 0.15s ease-in;
}
.component:hover {
	background-color: #222;
	cursor: pointer;
}
.component-name {
	font-size: 1.5rem;
}
.component-name svg {
	margin-right: 0.5rem;
}
.component-description {
	font-size: 1rem;
	opacity: 0.75;
}
</style>
