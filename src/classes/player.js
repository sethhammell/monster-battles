import { Character } from "./character";

export class Player extends Character {
  constructor(name, battleActions, currentHealth, maxHealth, level = 1, image = null, backgroundImage = null, currentMana = 0, maxMana = 0, levelUpAmount = 0.125) {
    super(name, battleActions, currentHealth, maxHealth, level, image, backgroundImage, currentMana, maxMana, levelUpAmount);
  }
}
