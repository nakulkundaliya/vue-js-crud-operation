import axios from 'axios';
import { API } from '../../utils/api';
export const state = {
  values: [],
  principles: [],
};

export const getters = {};

export const mutations = {
  ADD_VALUE_SUCCESS(state, newValue) {
    return (state.values = [...state.values, newValue]);
  },
  GET_VALUE_SUCCESS(state, newValues) {
    return (state.values = newValues);
  },
  ADD_PRINCIPLE_SUCCESS(state, newValue) {
    return (state.principles = [...state.principles, newValue]);
  },
  GET_PRINCIPLE_SUCCESS(state, newValues) {
    return (state.principles = newValues);
  },
};

export const actions = {
  // This is automatically run in `src/state/store.js` when the app
  // starts, along with any other actions named `init` in other modules.
  init() {},

  // Logs in the current user.
  addValue({ commit }, { value } = {}) {
    return API({
      method: 'POST',
      url: '/value/create',
      data: { value },
    }).then((response) => {
      const value = response.data;
      commit('ADD_VALUE_SUCCESS', value.data);
      return value;
    });
  },
  getValues({ commit }) {
    return API({
      method: 'GET',
      url: '/value/list?page=1&count=100',
    }).then((response) => {
      const values = response.data;
      commit('GET_VALUE_SUCCESS', values.data);
      return values;
    });
  },
  addPrinciple({ commit }, { principle } = {}) {
    return API({
      method: 'POST',
      url: '/principle/create',
      data: { principle },
    }).then((response) => {
      const value = response.data;
      commit('ADD_PRINCIPLE_SUCCESS', value.data);
      return value;
    });
  },
  getPrinciples({ commit }) {
    return API({
      method: 'GET',
      url: '/principle/list?page=1&count=100',
    }).then((response) => {
      const values = response.data;
      commit('GET_PRINCIPLE_SUCCESS', values.data);
      return values;
    });
  },
};
