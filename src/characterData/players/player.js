import { BattleAction } from "@/classes/battleAction";
import { characters } from "@/enums/characters";
import { playerActions } from "@/enums/playerActions";
const { Player } = require("@/classes/player");

var playerAttack = new BattleAction(
  playerActions.ATTACK,
  8,
  characters.MONSTER,
)

var playerSpecialAttack = new BattleAction(
  playerActions.SPECIAL_ATTACK,
  14,
  characters.MONSTER,
  1,
  false,
  22
)

var playerHeal = new BattleAction(
  playerActions.HEAL,
  14,
  characters.PLAYER,
  1,
  true
)

var playerBattleActions = [playerAttack, playerSpecialAttack, playerHeal]

export var player = new Player(
  "You",
  playerBattleActions,
  100,
  100,
  8,
  null,
  null,
  100,
  100,
)
