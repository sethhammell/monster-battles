import { threeBarGradient } from "@/helper-functions/gradient";

export default {
  playerHealthBarStyles(state) {
    var width = state.currentPlayerHealth / state.maxPlayerHealth * 100;
    var style = 'width: ' + width.toString() + '%;';
    return style;
  },
  playerManaBarStyles(state) {
    return { width: state.currentPlayerMana / state.maxPlayerMana * 100 + '%' };
  },
  playerHealthBarColor(state) {
    const fullBar = [0, 175, 123];
    const halfBar = [255, 255, 0];
    const emptyBar = [230, 27, 27];

    var rgb = threeBarGradient(fullBar, halfBar, emptyBar, state.currentPlayerHealth, state.maxPlayerHealth);
    var style = 'background-color: rgb(' + rgb.red.toString() + ', ' + rgb.green.toString() + ', ' + rgb.blue.toString() + ');';
    return style;
  },
  playerName(state) {
    return state.playerName;
  },
  currentPlayerHealth(state) {
    return state.currentPlayerHealth;
  },
  maxPlayerHealth(state) {
    return state.maxPlayerHealth;
  },
  currentPlayerMana(state) {
    return state.currentPlayerMana;
  },
  specialAttackManaCost(state) {
    return state.specialAttackManaCost;
  },
  canUseSpecialAttack(state) {
    return state.currentPlayerMana < state.specialAttackManaCost;
  },
  playerActionsVisibility(state) {
    return state.playerActionsVisibility;
  },
  playerHealthBarAnimationSpeed(state) {
    return state.playerHealthBarAnimationSpeed;
  }
}
