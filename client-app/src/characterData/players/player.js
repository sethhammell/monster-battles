import { BattleAction } from "@/classes/battleAction";
import { Characters } from "@/enums/characters";
import { PlayerActions } from "@/enums/playerActions";
import { levelToExp } from "@/helper-functions/levelOperations";
const { Player } = require("@/classes/player");

var playerAttack = new BattleAction(
  PlayerActions.ATTACK,
  10,
  Characters.MONSTER,
);

var playerSpecialAttack = new BattleAction(
  PlayerActions.SPECIAL_ATTACK,
  16,
  Characters.MONSTER,
  1,
  false,
  20
);

var playerHeal = new BattleAction(
  PlayerActions.HEAL,
  15,
  Characters.PLAYER,
  1,
  true
);

var playerBurstHeal = new BattleAction(
  PlayerActions.BURST_HEAL,
  40,
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
  levelToExp(1),
  null,
  null,
  100,
  100,
);
