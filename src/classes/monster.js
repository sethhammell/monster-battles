import { Character } from "./character";

export class Monster extends Character {
  constructor(name, battleActions, currentHealth, maxHealth, exp = 1, image = null, backgroundImage = null, currentMana = 0, maxMana = 0, levelUpAmount = 0.125) {
    super(name, battleActions, currentHealth, maxHealth, exp, image, backgroundImage, currentMana, maxMana, levelUpAmount);
  }
}
