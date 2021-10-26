import { BattleSpeeds } from "@/enums/battleSpeeds";
import { boundedDiv, boundedMult } from "@/helper-functions/boundedOperations";

export default {
  logBattleAction(state, payload) {
    state.battleMessagesLog.unshift(payload.battleAction);
    state.battleActionsLog.unshift(payload.battleAction);
  },
  logBattleMessage(state, payload) {
    state.battleMessagesLog.unshift(payload.battleMessage);
  },
  resetStats(state) {
    state.battleMessagesLog = [];
    state.battleActionsLog = [];
    state.battleAnimationMessage = '';
    state.battleResultHeader = '';
    state.battleResultMessage = '';
    state.battleResultButtonsVisibility = false;
  },
  appendBattleAnimationMessage(state, payload) {
    state.battleAnimationMessage += payload.char;
  },
  appendBattleResultHeader(state, payload) {
    state.battleResultHeader += payload.char;
  },
  appendBattleResultMessage(state, payload) {
    state.battleResultMessage += payload.char;
  },
  hideBattleResultButtons(state) {
    state.battleResultButtonsVisibility = false;
  },
  showBattleResultButtons(state) {
    state.battleResultButtonsVisibility = true;
  },
  resetBattleAnimationMessage(state) {
    state.battleAnimationMessage = '';
  },
  doubleBattleAnimationMessageSpeed(state) {
    state.battleAnimationMessageSpeed = boundedMult(state.battleAnimationMessageSpeed, 2, BattleSpeeds.MAX_BATTLE_SPEED);
  },
  halfBattleAnimationMessageSpeed(state) {
    state.battleAnimationMessageSpeed = boundedDiv(state.battleAnimationMessageSpeed, 2, BattleSpeeds.MIN_BATTLE_SPEED);
  }
}
