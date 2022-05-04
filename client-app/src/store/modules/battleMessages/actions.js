import { Characters } from "@/enums/characters";
import { PlayerActions } from "@/enums/playerActions";

export default {
  logBattleAction({ commit, rootGetters }, payload) {
    var battleAction = '';
    const playerName = rootGetters['playerStats/playerName'];
    const monsterName = rootGetters['monsterStats/monsterName'];

    battleAction += payload.by === Characters.PLAYER ? playerName : monsterName;
    battleAction += ' ' + payload.type + 'ed ';
    if (payload.type === PlayerActions.HEAL) {
      battleAction += payload.value + ' health.';
    } else {
      battleAction += payload.by === Characters.PLAYER ? monsterName : playerName;
      battleAction += ' and dealt ' + payload.value + ' damage.';
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
  async enemyApproaches({ commit, dispatch, rootGetters }) {
    var message = 'An enemy ' + rootGetters['monsterStats/monsterName'] + ' approaches.';
    commit('logBattleMessage', { battleMessage: message });
    await dispatch('battleMessageAnimation');
  },
  async battleResultTextAnimation({ commit, getters }, payload) {
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
  async displayBattleResults({ commit, dispatch, rootGetters }) {
    var headerMessage = rootGetters['battleStats/playerWin'] ? 'Victory!' : 'Game Over';
    var resultMessage = rootGetters['battleStats/playerWin'] ? 'You defeated the ' + rootGetters['monsterStats/monsterName'] + '.' : 'You were defeated by the ' + rootGetters['monsterStats/monsterName'] + '.';
    var expMessage = rootGetters['battleStats/playerWin'] ? 'You gained ' + rootGetters['monsterStats/monsterExpDrop'] + ' EXP points!' : '';
    resultMessage += '\n' + expMessage;
    var playerLevelBefore = rootGetters['playerStats/currentPlayerLevel'];
    if (rootGetters['battleStats/playerWin']) {
      commit('playerStats/increasePlayerExp', { value: rootGetters['monsterStats/monsterExpDrop'] }, { root: true });
      var playerLevelAfter = rootGetters['playerStats/currentPlayerLevel'];
      if (playerLevelAfter > playerLevelBefore) {
        resultMessage += '\n' + 'You reached level ' + playerLevelAfter + '.';
      }
    }
    await dispatch('battleResultTextAnimation', { currentMessage: headerMessage, variable: 'BattleResultHeader' }).then(async () => {
      await dispatch('battleResultTextAnimation', { currentMessage: resultMessage, variable: 'BattleResultMessage' }).then(() => {
        commit('showBattleResultButtons');
      });
    });
  }
}
