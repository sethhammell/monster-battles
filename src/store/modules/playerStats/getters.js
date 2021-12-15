import { threeBarGradient } from "@/helper-functions/gradient";

export default {
  playerHealthBarStyles(state) {
    var width = state.playerStats.currentHealth / state.playerStats.maxHealth * 100;
    var style = 'width: ' + width.toString() + '%;';
    return style;
  },
  playerManaBarStyles(state) {
    return { width: state.playerStats.currentMana / state.playerStats.maxMana * 100 + '%' };
  },
  playerHealthBarColor(state) {
    const fullBar = [0, 175, 123];
    const halfBar = [255, 255, 0];
    const emptyBar = [230, 27, 27];

    var rgb = threeBarGradient(fullBar, halfBar, emptyBar, state.playerStats.currentHealth, state.playerStats.maxHealth);
    var style = 'background-color: rgb(' + rgb.red.toString() + ', ' + rgb.green.toString() + ', ' + rgb.blue.toString() + ');';
    return style;
  },
  playerName(state) {
    return state.playerStats.name;
  },
  playerBattleActions(state) {
    return state.playerStats.battleActions;
  },
  playerBattleActionsList(state) {
    return state.playerStats.battleActionsList;
  },
  currentPlayerHealth(state) {
    return state.playerStats.currentHealth;
  },
  maxPlayerHealth(state) {
    return state.playerStats.maxHealth;
  },
  currentPlayerMana(state) {
    return state.playerStats.currentMana;
  },
  maxPlayerMana(state) {
    return state.playerStats.maxMana;
  },
  currentPlayerLevel(state) {
    return state.playerStats.getLevel();
  },
  playerActionsVisibility(state) {
    return state.playerActionsVisibility;
  },
  playerHealthBarAnimationSpeed(state) {
    return state.playerHealthBarAnimationSpeed;
  }
}
