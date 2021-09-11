import { getRandomValue } from '@/helper-functions/rng.js';
import { characters } from '@/enums/characters';
import { playerActions } from '@/enums/playerActions';

export default {
  playerAction({ commit, dispatch, getters }, payload) {
    commit('battleStats/incrementCurrentRound', null, { root: true });
    commit('hidePlayerActions');

    var actionValue = 0;
    var manaCost = 0;
    var increase = false;

    switch (payload.action) {
      case playerActions.ATTACK:
        actionValue = getRandomValue(5, 12);
        break;
      case playerActions.SPECIAL_ATTACK:
        actionValue = getRandomValue(8, 20);
        manaCost = getters.specialAttackManaCost;
        break;
      case playerActions.HEAL:
        actionValue = getRandomValue(8, 20);
        increase = true;
        break;
    }
    commit('decreasePlayerMana', { value: manaCost });
    dispatch('endPlayerTurn', { by: characters.PLAYER, type: payload.action, value: actionValue, increase: increase });
  },
  surrender({ commit }) {
    commit('battleStats/surrender', null, { root: true });
  },
  endPlayerTurn({ dispatch }, payload) {
    dispatch('battleMessages/logBattleAction', { by: payload.by, type: payload.type, value: payload.value }, { root: true });
    dispatch('battleMessages/battleMessageAnimation', null, { root: true }).then(() => {
      var animationFunction = payload.increase ? 'playerStats/playerHealthBarChangeAnimation' : 'monsterStats/monsterHealthBarChangeAnimation';
      dispatch(animationFunction, { increase: payload.increase, value: payload.value }, { root: true }).then(() => {
        dispatch('battleStats/updateWinner', null, { root: true });
        dispatch('monsterStats/monsterAction', null, { root: true });
      });
    });
  },
  playerHealthBarChangeAnimation({ commit, getters }, payload) {
    return new Promise((resolve) => {
      const changeValue = 1;
      var newHealth = payload.increase ? getters.currentPlayerHealth + payload.value : getters.currentPlayerHealth - payload.value;

      if (newHealth < 0) {
        newHealth = 0;
      }
      else if (newHealth > getters.maxPlayerHealth) {
        newHealth = getters.maxPlayerHealth;
      }

      var interval = setInterval(() => {
        if (getters.currentPlayerHealth === newHealth) {
          clearInterval(interval);
          resolve();
        }
        else if (getters.currentPlayerHealth != newHealth) {
          if (payload.increase === true) {
            commit('increasePlayerHealth', { value: changeValue });
          }
          else {
            commit('decreasePlayerHealth', { value: changeValue });
          }
        }
      }, getters.playerHealthBarAnimationSpeed);
    });
  }
}
