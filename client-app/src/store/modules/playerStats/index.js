import playerStatsState from './state.js';
import playerStatsMutations from './mutations.js';
import playerStatsActions from './actions.js';
import playerStatsGetters from './getters.js';

export default {
  namespaced: true,
  state: playerStatsState,
  mutations: playerStatsMutations,
  actions: playerStatsActions,
  getters: playerStatsGetters
};
