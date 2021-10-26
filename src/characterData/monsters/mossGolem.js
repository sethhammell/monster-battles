import { BattleAction } from "@/classes/battleAction";
import { Characters } from "@/enums/characters";
import { MonsterActions } from "@/enums/monsterActions";
import image from '@/assets/monsters/mossGolem.png';
import { Monster } from "@/classes/monster";

var monsterAttack = new BattleAction(
  MonsterActions.ATTACK,
  11,
  Characters.PLAYER,
);

var monsterStrongAttack = new BattleAction(
  MonsterActions.STRONG_ATTACK,
  13,
  Characters.PLAYER
);

var monsterBattleActions = [monsterAttack, monsterStrongAttack];

export var mossGolem = new Monster(
  "Moss Golem",
  monsterBattleActions,
  100,
  100,
  2,
  image
);
