export default {
  latestBattleAction(state) {
    if (state.battleActionsLog !== null && state.battleActionsLog.length > 0) {
      return state.battleActionsLog[0];
    }
  },
  battleActionsLog(state) {
    return state.battleActionsLog;
  },
  battleActionAnimationMessage(state) {
    return state.battleActionAnimationMessage;
  },
  battleActionAnimationMessageSpeed(state) {
    return state.battleActionAnimationMessageSpeed;
  }
}
