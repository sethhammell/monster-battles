import { characters } from "@/enums/characters";
import { playerActions } from "@/enums/playerActions";

export default {
  logBattleAction({ commit, dispatch, rootGetters }, payload) {
    var battleAction = '';
    battleAction += payload.by === characters.PLAYER ? rootGetters['playerStats/playerName'] : rootGetters['monsterStats/monsterName'];
    battleAction += ' ' + payload.type + 'ed ';
    if (payload.type === playerActions.HEAL) {
      battleAction += ' and healed ' + payload.value + ' health.';
    } else {
      battleAction += ' and dealt ' + payload.value + ' damage.';
    }
    commit('logBattleAction', { battleAction: battleAction });
    dispatch('battleMessageAnimation');
  },
  battleMessageAnimation({ commit, getters }) {
    commit('resetBattleAnimationMessage');
    var currentMessage = getters.latestBattleMessage;
    var currentBattleActionsLogLength = getters.battleMessagesLog.length;
    var i = 0;
    var interval = setInterval(() => {
      if (currentBattleActionsLogLength !== getters.battleMessagesLog.length || i >= currentMessage.length) {
        clearInterval(interval);
      }
      else {
        commit('appendBattleAnimationMessage', { char: currentMessage[i++] });
      }
    }, getters.battleAnimationMessageSpeed);
  },
  enemyApproaches({ commit, dispatch, rootGetters }) {
    var message = 'An enemy ' + rootGetters['monsterStats/monsterName'] + ' approaches.';
    commit('logBattleMessage', { battleMessage: message });
    dispatch('battleMessageAnimation');
  }
}
