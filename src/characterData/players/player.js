import { BattleAction } from "@/classes/battleAction";
import { characters } from "@/enums/characters";
import { playerActions } from "@/enums/playerActions";
const { Character } = require("@/classes/character");

var playerAttack = BattleAction(
  playerActions.ATTACK,
  8,
  characters.MONSTER,
)

var playerSpecialAttack = BattleAction(
  playerActions.SPECIAL_ATTACK,
  14,
  characters.MONSTER
)

var playerHeal = BattleAction(
  playerActions.HEAL,
  14,
  characters.PLAYER,
  true
)

var playerBattleActions = [playerAttack, playerSpecialAttack, playerHeal]

export var player = Character(
  "You",
  playerBattleActions,
  100,
  100,
  100,
  100,
)
