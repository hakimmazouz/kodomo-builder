import Vue from "vue";
import Vuex from "vuex";
import Entity from "./kodomo/entities/entity";

Vue.use(Vuex);

export default new Vuex.Store({
	state: {
		currentEntity: null,
		softSelectedEntity: null,
		entities: {},
		showComponentPicker: false
	},
	mutations: {
		setEntities(state, entities) {
			state.entities = entities;
		},
		selectEntity(state, currentEntity) {
			state.currentEntity = currentEntity;
		},
		softSelectEntity(state, entityId) {
			state.softSelectedEntity = entityId;
		},
		addEntity(state, entity) {
			state.entities = { ...state.entities, [entity.id]: entity };
		},
		addComponentToEntity(state, { entityId, component }) {
			state.entities[entityId].addComponent(component);
			state.entities = { ...state.entities };
		},
		toggleComponentPicker(state, value) {
			state.showComponentPicker = value;
		},
		updateComponent(state, component) {
			const entity = state.entities[state.currentEntity];
			for (let key in entity.components) {
				if (entity.components[key] === component) {
					entity.components[key] = component;
				}
			}
			state.entities = { ...state.entities, [entity.id]: entity };
		}
	},
	actions: {
		selectEntity({ commit }, entityId) {
			commit("selectEntity", entityId);
		},
		highlightEntity({ commit }, entityId) {
			commit("softSelectEntity", entityId);
		},
		addEntity({ commit }, name = "New entity") {
			const entity = new Entity(name);
			commit("addEntity", entity);
			commit("selectEntity", entity.id);
		},
		addComponentToSelected({ commit, state }, component) {
			commit("addComponentToEntity", {
				component,
				entityId: state.currentEntity
			});
		},
		// addComponentToSelected({ commit, state }, componentName) {
		//     const component = new Komodo.createComponent(componentName);
		//     commit("addComponentToEntity", {
		//         component,
		//         entityId: state.currentEntity
		//     });
		// },
		showComponentPicker({ commit }) {
			this.commit("toggleComponentPicker", true);
		},
		updateEntities({ commit }, entities) {
			commit("setEntities", entities);
		},
		hideComponentPicker({ commit }) {
			this.commit("toggleComponentPicker", false);
		}
	},
	getters: {
		getSelectedEntity({ currentEntity, entities }) {
			return entities[currentEntity] || null;
		}
	}
});
