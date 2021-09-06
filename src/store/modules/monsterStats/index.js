import monsterStatsState from './state.js';
import monsterStatsMutations from './mutations.js';
import monsterStatsActions from './actions.js';
import monsterStatsGetters from './getters.js';

export default {
  namespaced: true,
  state: monsterStatsState,
  mutations: monsterStatsMutations,
  actions: monsterStatsActions,
  getters: monsterStatsGetters
};
