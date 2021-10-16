export class Character {
  constructor(name, battleActions, currentHealth, maxHealth, currentMana = 0, maxMana = 0) {
    this.name = name;
    this.battleActions = this.storeBattleActions();
    this.currentHealth = currentHealth;
    this.maxHealth = maxHealth;
    this.currentMana = currentMana;
    this.maxMana = maxMana;
  }
  storeBattleActions() {
    var battleActionsDict = new Object();
    for (const battleAction of this.battleActions) {
      battleActionsDict[battleAction.name] = battleAction;
    }
    return battleActionsDict;
  }
}
