import { BattleAction } from "@/classes/battleAction";
import { Characters } from "@/enums/characters";
import { MonsterActions } from "@/enums/monsterActions";
import image from '@/assets/monsters/rodent.png';
import backgroundImage  from '@/assets/backgrounds/greenMountain.jpg';
import { Monster } from "@/classes/monster";
import { levelToExp } from "@/helper-functions/levelOperations";

var monsterAttack = new BattleAction(
  MonsterActions.ATTACK,
  11,
  Characters.PLAYER,
);

var monsterStrongAttack = new BattleAction(
  MonsterActions.STRONG_ATTACK,
  13,
  Characters.PLAYER
)

var monsterBattleActions = [monsterAttack, monsterStrongAttack];

export var rodent = new Monster(
  "Rodent",
  monsterBattleActions,
  100,
  100,
  levelToExp(3),
  image,
  backgroundImage
);
