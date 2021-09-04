import { getRandomValue } from '@/helper-functions/rng.js';

export default {
  attackPlayer({ commit }) {
    const attackValue = getRandomValue(8, 15);
    commit('decreasePlayerHealth', { value: attackValue });
    commit('battleMessages/logBattleAction', { by: 'monster', type: 'attack', value: attackValue }, { root: true });
    commit('battleStats/incrementCurrentRound', null, { root: true });
  },
  healPlayer({ commit, dispatch }) {
    const healValue = getRandomValue(8, 20);
    commit('increasePlayerHealth', { value: healValue });
    commit('battleMessages/logBattleAction', { by: 'player', type: 'heal', value: healValue }, { root: true });
    dispatch('attackPlayer');
  }
}
