import { characters } from "@/enums/characters";
import { getRandomValue } from "@/helper-functions/rng"

export default {
  monsterAction({ dispatch, getters }) {
    var randomBattleAction = getRandomValue(0, getters.monsterBattleActionsList.length - 1);
    var monsterAction = getters.monsterBattleActionsList[randomBattleAction];

    var actionValue = monsterAction.getActionValue();
    var actionName = monsterAction.name;

    dispatch('endMonsterTurn', { by: characters.MONSTER, type: actionName, value: actionValue });
  },
  endMonsterTurn({ commit, dispatch }, payload) {
    dispatch('battleMessages/logBattleAction', payload, { root: true });
    dispatch('battleMessages/battleMessageAnimation', null, { root: true }).then(() => {
      dispatch('playerStats/playerHealthBarChangeAnimation', { increase: false, value: payload.value }, { root: true }).then(() => {
        dispatch('battleStats/checkForWinner', null, { root: true });
        commit('playerStats/showPlayerActions', null, { root: true });
      });
    });
  },
  monsterHealthBarChangeAnimation({ commit, getters }, payload) {
    return new Promise((resolve) => {
      const changeValue = 1;
      var newHealth = payload.increase ? getters.currentMonsterHealth + payload.value : getters.currentMonsterHealth - payload.value;

      if (newHealth < 0) {
        newHealth = 0;
      }
      else if (newHealth > getters.maxMonsterHealth) {
        newHealth = getters.maxMonsterHealth;
      }

      var interval = setInterval(() => {
        if (getters.currentMonsterHealth === newHealth) {
          clearInterval(interval);
          resolve();
        }
        else if (getters.currentMonsterHealth != newHealth) {
          if (payload.increase === true) {
            commit('increaseMonsterHealth', { value: changeValue });
          }
          else {
            commit('decreaseMonsterHealth', { value: changeValue });
          }
        }
      }, getters.monsterHealthBarAnimationSpeed);
    });
  },
}
