import { characters } from "@/enums/characters";
import { playerActions } from "@/enums/playerActions";

export default {
  logBattleAction({ commit, rootGetters }, payload) {
    var battleAction = '';
    battleAction += payload.by === characters.PLAYER ? rootGetters['playerStats/playerName'] : rootGetters['monsterStats/monsterName'];
    battleAction += ' ' + payload.type + 'ed ';
    if (payload.type === playerActions.HEAL) {
      battleAction += payload.value + ' health.';
    } else {
      battleAction += 'and dealt ' + payload.value + ' damage.';
    }
    commit('logBattleAction', { battleAction: battleAction });
  },
  battleMessageAnimation({ commit, getters }) {
    return new Promise((resolve) => {
      commit('resetBattleAnimationMessage');
      const currentMessage = getters.latestBattleMessage;
      const currentBattleActionsLogLength = getters.battleMessagesLog.length;
      var i = 0;

      var interval = setInterval(() => {
        if (currentBattleActionsLogLength !== getters.battleMessagesLog.length || i >= currentMessage.length) {
          clearInterval(interval);
          resolve();
        }
        else if (i < currentMessage.length) {
          commit('appendBattleAnimationMessage', { char: currentMessage[i] });
        }
        i++;
      }, getters.battleAnimationMessageSpeed);
    });
  },
  enemyApproaches({ commit, dispatch, rootGetters }) {
    var message = 'An enemy ' + rootGetters['monsterStats/monsterName'] + ' approaches.';
    commit('logBattleMessage', { battleMessage: message });
    dispatch('battleMessageAnimation');
  },
  battleResultTextAnimation({ commit, getters }, payload) {
    return new Promise((resolve) => {
      const currentMessage = payload.currentMessage;
      const length = currentMessage.length;
      var i = 0;

      var interval = setInterval(() => {
        if (i >= length) {
          clearInterval(interval);
          resolve();
        }
        else if (i < length) {
          commit('append' + payload.variable, { char: currentMessage[i] });
        }
        i++;
      }, getters.battleAnimationMessageSpeed);
    });
  },
  displayBattleResults({ commit, dispatch, rootGetters }) {
    var headerMessage = rootGetters['battleStats/playerWin'] ? 'Victory!' : 'Game Over';
    var resultMessage = rootGetters['battleStats/playerWin'] ? 'You defeated the ' + rootGetters['monsterStats/monsterName'] + '.' : 'You were defeated by the ' + rootGetters['monsterStats/monsterName'] + '.';
    dispatch('battleResultTextAnimation', { currentMessage: headerMessage, variable: 'BattleResultHeader' }).then(() => {
      dispatch('battleResultTextAnimation', { currentMessage: resultMessage, variable: 'BattleResultMessage' }).then(() => {
        commit('showBattleResultButtons');
      });
    });
  }
}
