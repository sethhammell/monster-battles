export default {
  latestBattleMessage(state) {
    if (state.battleMessagesLog !== null && state.battleMessagesLog.length > 0) {
      return state.battleMessagesLog[0];
    }
  },
  battleMessagesLog(state) {
    return state.battleMessagesLog;
  },
  battleActionsLog(state) {
    return state.battleActionsLog;
  },
  battleAnimationMessage(state) {
    return state.battleAnimationMessage;
  },
  battleResultHeader(state) {
    return state.battleResultHeader;
  },
  battleResultMessage(state) {
    return state.battleResultMessage;
  },
  battleResultButtonsVisibility(state) {
    return state.battleResultButtonsVisibility;
  },
  battleAnimationMessageSpeed(state) {
    return state.battleAnimationMessageSpeed;
  }
}
