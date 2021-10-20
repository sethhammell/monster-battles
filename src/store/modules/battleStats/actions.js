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
  newGame({ commit, dispatch }) {
    commit('newGame');
    commit('playerStats/newGame', null, { root: true });
    commit('monsterStats/newGame', null, { root: true });
    commit('battleMessages/newGame', null, { root: true });
    dispatch('battleMessages/enemyApproaches', null, { root: true });
  },
  toggleOptionsMenu({ commit }) {
    commit('toggleOptionsMenu');
  }
}
