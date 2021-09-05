import { characters } from "@/enums/characters";

export default {
  updateWinner({ commit, rootGetters }) {
    if (rootGetters['monsterStats/currentMonsterHealth'] === 0) {
      commit('updateWinner', { winner: characters.PLAYER })
    }
    else if (rootGetters['playerStats/currentPlayerHealth'] === 0) {
      commit('updateWinner', { winner: characters.MONSTER })
    }
  },
  newGame({ commit }) {
    commit('newGame');
    commit('playerStats/newGame', null, { root: true });
    commit('monsterStats/newGame', null, { root: true });
    commit('battleStats/newGame', null, { root: true });
  },
  surrender({ commit }) {
    commit('surrender');
  }
}
