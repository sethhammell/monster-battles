import { threeBarGradient } from "@/helper-functions/gradient";
import { expGain } from "@/helper-functions/levelOperations";

export default {
  monsterHealthBarStyles(state) {
    var width = state.currentMonsterStats.currentHealth / state.currentMonsterStats.maxHealth * 100;
    var style = 'width: ' + width.toString() + '%;';
    return style;
  },
  monsterHealthBarColor(state) {
    const fullBar = [0, 175, 123];
    const halfBar = [255, 255, 0];
    const emptyBar = [230, 27, 27];

    var rgb = threeBarGradient(fullBar, halfBar, emptyBar, state.currentMonsterStats.currentHealth, state.currentMonsterStats.maxHealth);
    var style = 'background-color: rgb(' + rgb.red.toString() + ', ' + rgb.green.toString() + ', ' + rgb.blue.toString() + ');';
    return style;
  },
  monsterName(state) {
    return state.currentMonsterStats.name;
  },
  monsterLevelName(state) {
    return state.currentMonsterStats.getLevelName();
  },
  currentMonsterHealth(state) {
    return state.currentMonsterStats.currentHealth;
  },
  maxMonsterHealth(state) {
    return state.currentMonsterStats.maxHealth;
  },
  monsterImage(state) {
    return state.currentMonsterStats.image;
  },
  monsterBackgroundImage(state) {
    return state.currentMonsterStats.backgroundImage
  },
  monsterHealthBarAnimationSpeed(state) {
    return state.monsterHealthBarAnimationSpeed;
  },
  monsterBattleActionsList(state) {
    return state.currentMonsterStats.battleActionsList;
  },
  monsterExpDrop(state) {
    return expGain(state.currentMonsterStats.exp);
  },
  currentMonsterIndex(state) {
    return state.currentMonsterIndex;
  }
}
