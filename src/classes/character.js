export class Character {
  constructor(name, battleActions, currentHealth, maxHealth, currentMana = 0, maxMana = 0) {
    this.name = name;
    this.battleActions = this.storeBattleActions(battleActions);
    this.currentHealth = currentHealth;
    this.maxHealth = maxHealth;
    this.currentMana = currentMana;
    this.maxMana = maxMana;
  }
  storeBattleActions(battleActions) {
    var battleActionsDict = new Object();
    for (const battleAction of battleActions) {
      battleActionsDict[battleAction.name] = battleAction;
    }
    return battleActionsDict;
  }
}
