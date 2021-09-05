import { getRandomValue } from '@/helper-functions/rng.js';
import { characters } from '@/enums/characters';
import { monsterActions } from '@/enums/monsterActions';
import { playerActions } from '@/enums/playerActions';

export default {
  attackPlayer({ commit, dispatch }) {
    const attackValue = getRandomValue(8, 15);
    commit('decreasePlayerHealth', { value: attackValue });
    commit('battleMessages/logBattleAction', { by: characters.MONSTER, type: monsterActions.ATTACK, value: attackValue }, { root: true });
    commit('battleStats/incrementCurrentRound', null, { root: true });
    dispatch('battleStats/updateWinner', null, { root: true });
  },
  healPlayer({ commit, dispatch }) {
    const healValue = getRandomValue(8, 20);
    commit('increasePlayerHealth', { value: healValue });
    commit('battleMessages/logBattleAction', { by: characters.PLAYER, type: playerActions.HEAL, value: healValue }, { root: true });
    dispatch('attackPlayer');
  }
}
