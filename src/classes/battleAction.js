import { getRandomValue } from "@/helper-functions/rng";

export class BattleAction {
  constructor(name, baseValue, target, heal = false, manaCost = 0, variance = 0.4) {
    this.name = name;
    this.baseValue = baseValue;
    this.target = target;
    this.heal = heal;
    this.manaCost = manaCost;
    this.variance = variance;
  }
  getActionValue() {
    var min = this.baseValue * (1 - this.variance);
    var max = this.baseValue * (1 + this.variance);
    return Math.round(getRandomValue(min, max));
  }
}
