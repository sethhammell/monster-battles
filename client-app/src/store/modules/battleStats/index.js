import battleStatsState from './state.js';
import battleStatsMutations from './mutations.js';
import battleStatsActions from './actions.js';
import battleStatsGetters from './getters.js';

export default {
  namespaced: true,
  state: battleStatsState,
  mutations: battleStatsMutations,
  actions: battleStatsActions,
  getters: battleStatsGetters
};
