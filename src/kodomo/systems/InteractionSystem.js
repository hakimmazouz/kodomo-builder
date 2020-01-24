import System from ".";
import InteractionComponent from "../components/Interaction";

export default class InteractionSystem extends System {
	setup() {
		window.addEventListener("touchstart", this.onTouchStart);
		window.addEventListener("touchmove", this.onTouchMove);
		window.addEventListener("touchend", this.onTouchEnd);
	}
	update(entities) {
		entities
		.filter(e => e.hasComponent(InteractionComponent))
		.forEach(entity => {
			// do some hit and gesture testing;
		})
	}
	cleanup() {
		window.removeEventListener("touchstart", this.onTouchStart);
		window.removeEventListener("touchmove", this.onTouchMove);
		window.removeEventListener("touchend", this.onTouchEnd);
	}

	onTouchStart({ targetTouches = [] }) {
		if (targetTouches[0]) {
			const { clientX, clientY } = targetTouches[0];
			this.startX = clientX;
			this.startY = clientY;
		}
	}
	onTouchMove({ targetTouches = [] }) {
		if (targetTouches[0]) {
			const { clientX, clientY } = targetTouches[0];
			this.x = clientX;
			this.y = clientY;
		}
	}
	onTouchEnd() {
	}
}