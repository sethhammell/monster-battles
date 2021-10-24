import { characters } from "@/enums/characters";

export default {
  checkForWinner({ dispatch, rootGetters }) {
    if (rootGetters['monsterStats/currentMonsterHealth'] === 0) {
      dispatch('updateWinner', { winner: characters.PLAYER })
    }
    else if (rootGetters['playerStats/currentPlayerHealth'] === 0) {
      dispatch('updateWinner', { winner: characters.MONSTER })
    }
  },
  updateWinner({ dispatch, commit }, payload) {
    commit('updateWinner', payload)
    dispatch('battleMessages/displayBattleResults', null, { root: true });
  },
  nextBattle({ commit, dispatch }) {
    commit('monsterStats/nextMonster', null, { root: true });
    dispatch('resetStats');
  },
  resetBattle({ dispatch }) {
    dispatch('resetStats');
  },
  resetStats({ commit, dispatch }) {
    commit('resetStats');
    commit('playerStats/resetStats', null, { root: true });
    commit('monsterStats/resetStats', null, { root: true });
    commit('battleMessages/resetStats', null, { root: true });
    dispatch('battleMessages/enemyApproaches', null, { root: true });
  },
  toggleOptionsMenu({ commit }) {
    commit('toggleOptionsMenu');
  }
}
