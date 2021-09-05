export default {
  logBattleAction(state, payload) {
    state.battleActionsLog.unshift({
      actionBy: payload.by,
      actionType: payload.type,
      actionValue: payload.value
    })
  },
  newGame(state) {
    state.battleActionsLog = [];
  }
}