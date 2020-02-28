<template>
	<div class="panel" :class="classes">
		<div class="inner" :class="darkClass">
			<slot />
		</div>
	</div>
</template>

<script>
export default {
	props: {
		position: {
			type: String,
			default: "right"
		},
		bleed: {
			type: Boolean,
			default: false
		},
		dark: {
			type: Boolean,
			default: false
		}
	},
	computed: {
		classes() {
			return { [this.position]: this.position, bleed: this.bleed };
		},
		darkClass() {
			return { dark: this.dark };
		}
	}
};
</script>

<style scoped>
.panel {
	position: fixed;
	padding: 2rem;
}
.panel.bleed {
	padding: 0;
}
.panel .inner {
	background-color: #ddd;
	border-radius: 10px;
}
.panel .inner.dark {
	background-color: black;
	color: white;
}
.panel.right {
	right: 0;
	top: 0;
}
.panel.left {
	left: 0;
	top: 0;
}
.panel.top {
	left: 0;
	right: 0;
	top: 0;
}
.panel.bottom {
	left: 0;
	right: 0;
	bottom: 0;
}
</style>
