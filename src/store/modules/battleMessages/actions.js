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
    dispatch('battleActionAnimation');
  },
  battleActionAnimation({ commit, getters }) {
    commit('resetBattleActionAnimationMessage');
    var currentMessage = getters.latestBattleAction;
    var currentBattleActionsLogLength = getters.battleActionsLog.length;
    var i = 0;
    var interval = setInterval(() => {
      if (currentBattleActionsLogLength !== getters.battleActionsLog.length || i >= currentMessage.length) {
        clearInterval(interval);
      }
      else {
        commit('appendBattleActionAnimationMessage', { char: currentMessage[i++] });
      }
    }, getters.battleActionAnimationMessageSpeed);
  }
}
