import { Characters } from '@/enums/characters';

export default {
  playerAction({ commit, dispatch, getters }, payload) {
    commit('battleStats/incrementCurrentRound', null, { root: true });
    commit('hidePlayerActions');

    var playerAction = getters.playerBattleActions[payload.action]

    var actionValue = playerAction.getActionValue();
    var manaCost = playerAction.manaCost;
    var increase = playerAction.heal;

    commit('decreasePlayerMana', { value: manaCost });    
    dispatch('endPlayerTurn', { by: Characters.PLAYER, type: payload.action, value: actionValue, increase: increase });
  },
  surrender({ dispatch }) {
    dispatch('battleStats/updateWinner', { winner: Characters.MONSTER }, { root: true });
  },
  endPlayerTurn({ commit, dispatch, rootGetters }, payload) {
    dispatch('battleMessages/logBattleAction', { by: payload.by, type: payload.type, value: payload.value }, { root: true });
    dispatch('battleMessages/battleMessageAnimation', null, { root: true }).then(() => {
      var animationFunction = payload.increase ? 'playerStats/playerHealthBarChangeAnimation' : 'monsterStats/monsterHealthBarChangeAnimation';
      console.log(animationFunction)
      dispatch(animationFunction, { increase: payload.increase, value: payload.value }, { root: true }).then(() => {
        dispatch('battleStats/checkForWinner', null, { root: true });
        if (rootGetters['battleStats/gameOver']) {
          commit('showPlayerActions');
        }
        else {
          dispatch('monsterStats/monsterAction', null, { root: true });
        }
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
