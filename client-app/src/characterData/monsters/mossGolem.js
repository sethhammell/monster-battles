import { BattleAction } from "@/classes/battleAction";
import { Characters } from "@/enums/characters";
import { MonsterActions } from "@/enums/monsterActions";
import image from "@/assets/monsters/mossGolem.png";
import backgroundImage from "@/assets/backgrounds/flatDirtGround.png";
import { Monster } from "@/classes/monster";
import { levelToExp } from "@/helper-functions/levelOperations";

function monsterAttack() {
  return new BattleAction(MonsterActions.ATTACK, 11, Characters.PLAYER);
}

function monsterStrongAttack() {
  return new BattleAction(MonsterActions.STRONG_ATTACK, 13, Characters.PLAYER);
}

export function mossGolem(level) {
  return new Monster(
    "Moss Golem",
    [monsterAttack(), monsterStrongAttack()],
    100,
    100,
    levelToExp(level),
    image,
    backgroundImage
  );
}
