import { characters } from "@/enums/characters";
import { playerActions } from "@/enums/playerActions";
import { getRandomValue } from "@/helper-functions/rng"

export default {
  attackMonster({ commit, dispatch }) {
    const attackValue = getRandomValue(5, 12);
    commit('decreaseMonsterHealth', { value: attackValue })
    dispatch('battleMessages/logBattleAction', { by: characters.PLAYER, type: playerActions.ATTACK, value: attackValue }, { root: true });
    dispatch('playerStats/attackPlayer', null, { root: true });
  },
  specialAttackMonster({ commit, dispatch, rootGetters }) {
    const attackValue = getRandomValue(8, 20);
    commit('decreaseMonsterHealth', { value: attackValue })
    dispatch('battleMessages/logBattleAction', { by: characters.PLAYER, type: playerActions.SPECIAL_ATTACK, value: attackValue }, { root: true });
    commit('playerStats/decreasePlayerMana', { value: rootGetters['playerStats/specialAttackManaCost'] }, { root: true });
    dispatch('playerStats/attackPlayer', null, { root: true });
  }
}
