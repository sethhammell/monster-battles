import { BattleAction } from "@/classes/battleAction";
import { Characters } from "@/enums/characters";
import { PlayerActions } from "@/enums/playerActions";
import { levelToExp } from "@/helper-functions/levelOperations";
const { Player } = require("@/classes/player");

var playerAttack = new BattleAction(
  PlayerActions.ATTACK,
  8,
  Characters.MONSTER,
);

var playerSpecialAttack = new BattleAction(
  PlayerActions.SPECIAL_ATTACK,
  14,
  Characters.MONSTER,
  1,
  false,
  22
);

var playerHeal = new BattleAction(
  PlayerActions.HEAL,
  14,
  Characters.PLAYER,
  1,
  true
);

var playerBurstHeal = new BattleAction(
  PlayerActions.BURST_HEAL,
  20,
  Characters.Player,
  1,
  true,
  25
);

var playerBattleActions = [playerAttack, playerSpecialAttack, playerHeal, playerBurstHeal]

export var player = new Player(
  "",
  playerBattleActions,
  100,
  100,
  levelToExp(8),
  null,
  null,
  100,
  100,
);
