import { Characters } from "@/enums/characters";

export default {
  updateWinner({ dispatch, commit }, payload) {
    commit('updateWinner', payload)
    dispatch('battleMessages/displayBattleResults', null, { root: true });
  },
  checkForWinner({ dispatch, rootGetters }) {
    if (rootGetters['monsterStats/currentMonsterHealth'] === 0) {
      dispatch('updateWinner', { winner: Characters.PLAYER })
    }
    else if (rootGetters['playerStats/currentPlayerHealth'] === 0) {
      dispatch('updateWinner', { winner: Characters.MONSTER })
    }
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
  },
  doubleBattleSpeed({ commit }) {
    commit('battleMessages/doubleBattleAnimationMessageSpeed', null, { root: true });
    commit('playerStats/doublePlayerHealthBarAnimationSpeed', null, { root: true });
    commit('monsterStats/doubleMonsterHealthBarAnimationSpeed', null, { root: true });
  },
  halfBattleSpeed({ commit }) {
    commit('battleMessages/halfBattleAnimationMessageSpeed', null, { root: true });
    commit('playerStats/halfPlayerHealthBarAnimationSpeed', null, { root: true });
    commit('monsterStats/halfMonsterHealthBarAnimationSpeed', null, { root: true });
  }
}
