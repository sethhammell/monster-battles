export default {
  logBattleAction(state, payload) {
    state.battleMessagesLog.unshift(payload.battleAction);
    state.battleActionsLog.unshift(payload.battleAction);
  },
  logBattleMessage(state, payload) {
    state.battleMessagesLog.unshift(payload.battleMessage);
  },
  newGame(state) {
    state.battleMessagesLog = [];
    state.battleActionsLog = [];
    state.battleAnimationMessage = '';
  },
  appendBattleAnimationMessage(state, payload) {
    state.battleAnimationMessage += payload.char;
  },
  resetBattleAnimationMessage(state) {
    state.battleAnimationMessage = '';
  }
}
