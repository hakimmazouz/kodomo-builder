import { uuid } from "./utils";
import { ECS } from "../kodomo/core";

function Sit(target) {
	// play run animation
	// add force towards
}

function Eat(target) {}

const actions = {};
const apple = {
	actions: {
		eat: {
			action: Eat,
			target: this
		},
		hold: {
			action: Pickup,
			target: this
		}
	}
};

class CollisionSystem {
	update(entities = {}, componentEntityMap = {}) {
		// test for collision on entities with collidable component
		// if they have collided, run the collision check
		for (let idA in componentEntityMap["Collidable"]) {
			for (let idB in componentEntityMap["Collidable"]) {
				this.collides(idA, idB) &&
					this.onCollision(entities[idA], entities[idB]);
			}
		}
	}
	onCollision(actor, target) {
		if (target.actions) {
			UISystem.showActions(target);
		}
	}
}

class UISystem {
	showActions(entity) {}
	hide(entity) {}
	show(entity) {}
	onTap(action) {}
}

const action = {
	function: Eat
};

function ActionsComponent() {
	this.actions = [];
}

entity.addComponent(
	new ActionsComponent([
		{
			action: "Sit",
			usableBy: ["CharacterComponent", "PlayerComponent"]
		},
		{
			action: "Eat",
			usableBy: ["CharacterComponent", "AnimalComponent"]
		}
	])
);

function SittableComponent() {
	this.action = "Sit"; // method on ActionSystem that has the logic for said action
	this.usableBy = ["CharacterComponent"]; // entity needs this component to trigger this action
}

class PlayerActionSystem {
	queueAction(type, target) {
		this.actionsQueue[uuid()] = { type, target };
	}
	commitAction(playerEntity) {
		const id = Object.keys(this.actionsQueue)[0];
		if (id) {
			const action = this.actionsQueue[id];
			this[action.type](playerEntity, action.target);
			delete this.actionsQueue[id];
		}
	}
	update(playerEntity) {
		if (!playerEntity.getComponent("BusyComponent").busy) {
			this.commitAction(playerEntity);
		}
	}
	sit(character, target) {
		const position = target.getComponent("Position");
		if (position) {
			character.navigateTo(position).then(() => character.sit());
		}
	}
	eat() {}
	hold() {}
	talk() {}
	lay() {}
	sleep() {}
}

// can be put on a chair, defines the action to trigger
function Actable(action) {
	this.actableOn = action;
	return this;
}

// can be put on a chair, defines the action
function ActionComponent(action) {
	this.perform = action;
	return this;
}

class ActionsSystem {
	perform(entity, actor) {
		if (entity.hasComponents(["actable"])) {
			ActionsSystem.actions[entity.components.action.perform](
				entity,
				actor
			);
		}
	}
	static actions = {
		sit,
		run,
		eat,
		hold,
		punch: (actor, target) => {}
	};
}

function AssetComponent(url) {
	this.url = url;
	return this;
}

// When editing mode is on
entities.forEach(e => {
	e.setInteractive();
	e.on(
		"interactive",
		() => ECS.setActiveEntity() /* logic for pull and drag and move */
	);
});

// When play-mode
