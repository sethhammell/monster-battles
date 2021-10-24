import { getRandomValue } from "@/helper-functions/rng";

export class BattleAction {
  constructor(name, value, target, level = 1, heal = false, manaCost = 0, variance = 0.4, levelUpAmount = 0.125) {
    this.name = name;
    this.value = value
    this.baseValue = value;
    this.target = target;
    this.level = level;
    this.heal = heal;
    this.manaCost = manaCost;
    this.variance = variance;
    this.levelUpAmount = levelUpAmount;
  }
  levelEffect(val) {
    return val * (1 + (this.level - 1) * this.levelUpAmount);
  }
  applyCurrentLevel(level) {
    this.level = level;
    this.value = this.levelEffect(this.baseValue);
  }
  getActionValue() {
    var min = this.value * (1 - this.variance);
    var max = this.value * (1 + this.variance);
    return Math.round(getRandomValue(min, max));
  }
}
