import battleMessagesState from './state.js';
import battleMessagesMutations from './mutations.js';
import battleMessagesActions from './actions.js';
import battleMessagesGetters from './getters.js';

export default {
  namespaced: true,
  state: battleMessagesState,
  mutations: battleMessagesMutations,
  actions: battleMessagesActions,
  getters: battleMessagesGetters
};
