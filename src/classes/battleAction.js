import { getRandomValue } from "@/helper-functions/rng";
import { expToLevel } from "@/helper-functions/levelOperations";

export class BattleAction {
  constructor(name, value, target, exp = 1, heal = false, manaCost = 0, variance = 0.4, levelUpAmount = 0.125) {
    this.name = name;
    this.value = value
    this.baseValue = value;
    this.target = target;
    this.exp = exp;
    this.heal = heal;
    this.manaCost = manaCost;
    this.variance = variance;
    this.levelUpAmount = levelUpAmount;
  }
  getLevel() {
    return expToLevel(this.exp);
  }
  levelEffect(val) {
    return val * (1 + (this.getLevel() - 1) * this.levelUpAmount);
  }
  applyCurrentLevel(exp) {
    this.exp = exp;
    this.value = this.levelEffect(this.baseValue);
  }
  getActionValue() {
    var min = this.value * (1 - this.variance);
    var max = this.value * (1 + this.variance);
    return Math.round(getRandomValue(min, max));
  }
}
