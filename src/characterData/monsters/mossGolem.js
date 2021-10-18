import { BattleAction } from "@/classes/battleAction";
import { characters } from "@/enums/characters";
import { monsterActions } from "@/enums/monsterActions";
import image from '@/assets/monsters/mossGolem.png';
const { Character } = require("@/classes/character");

var monsterAttack = new BattleAction(
  monsterActions.ATTACK,
  11,
  characters.PLAYER,
);

var monsterStrongAttack = new BattleAction(
  monsterActions.STRONG_ATTACK,
  13,
  characters.PLAYER
)

var monsterBattleActions = [monsterAttack, monsterStrongAttack];

export var mossGolem = new Character(
  "Moss Golem",
  monsterBattleActions,
  100,
  100,
  image
);
