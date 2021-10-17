import { BattleAction } from "@/classes/battleAction";
import { characters } from "@/enums/characters";
import { monsterActions } from "@/enums/monsterActions";
const { Character } = require("@/classes/character");

var monsterAttack = BattleAction(
  monsterActions.ATTACK,
  11,
  characters.PLAYER,
)

var monsterBattleActions = [monsterAttack]

export var monster = Character(
  "Moss Golem",
  monsterBattleActions,
  100,
  100,
)
