import { threeBarGradient } from "@/helper-functions/gradient";

export default {
  monsterHealthBarStyles(state) {
    var width = state.currentMonsterHealth / state.maxMonsterHealth * 100;
    var style = 'width: ' + width.toString() + '%;';
    return style;
  },
  monsterHealthBarColor(state) {
    const fullBar = [0, 175, 123];
    const halfBar = [255, 255, 0];
    const emptyBar = [230, 27, 27];

    var rgb = threeBarGradient(fullBar, halfBar, emptyBar, state.currentMonsterHealth, state.maxMonsterHealth);
    var style = 'background-color: rgb(' + rgb.red.toString() + ', ' + rgb.green.toString() + ', ' + rgb.blue.toString() + ');';
    return style;
  },
  monsterName(state) {
    return state.monsterName;
  },
  currentMonsterHealth(state) {
    return state.currentMonsterHealth;
  },
  maxMonsterHealth(state) {
    return state.maxMonsterHealth;
  },
  monsterHealthBarAnimationSpeed(state) {
    return state.monsterHealthBarAnimationSpeed;
  }
}
