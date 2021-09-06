export default {
  logBattleAction(state, payload) {
    state.battleActionsLog.unshift(payload.battleAction);
  },
  newGame(state) {
    state.battleActionsLog = [];
    state.battleActionAnimationMessage = '';
  },
  appendBattleActionAnimationMessage(state, payload) {
    state.battleActionAnimationMessage += payload.char;
  },
  resetBattleActionAnimationMessage(state) {
    state.battleActionAnimationMessage = '';
  }
}
