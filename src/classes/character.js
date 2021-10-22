export class Character {
  constructor(name, battleActions, currentHealth, maxHealth, level = 1, image = null, currentMana = 0, maxMana = 0, levelUpAmount = 0.125) {
    this.name = name;
    this.battleActions = this.storeBattleActions(battleActions);
    this.battleActionsList = battleActions;
    this.currentHealth = currentHealth;
    this.maxHealth = maxHealth;
    this.image = image;
    this.currentMana = currentMana;
    this.maxMana = maxMana;
    this.level = level;
    this.baseMaxHealth = maxHealth;
    this.baseMaxMana = maxMana;
    this.levelUpAmount = levelUpAmount;
    this.applyCurrentLevel()
  }
  getLevelName() {
    return 'Level ' + this.level + ' ' + this.name; 
  }
  levelEffect(val) {
    return val * (1 + (this.level - 1) * this.levelUpAmount);
  }
  applyCurrentLevel() {
    this.maxHealth = this.levelEffect(this.baseMaxHealth);
    this.currentHealth = this.maxHealth;
    this.maxMana = this.levelEffect(this.baseMaxHealth);
    this.currentMana = this.maxMana;
    for (const battleAction of this.battleActionsList) {
      battleAction.applyCurrentLevel(this.level);
    }
  }
  storeBattleActions(battleActions) {
    var battleActionsDict = new Object();
    for (const battleAction of battleActions) {
      battleActionsDict[battleAction.name] = battleAction;
    }
    return battleActionsDict;
  }
}
