import { monsters } from "@/characterData/monsters/monsters";
import { BattleSpeeds } from "@/enums/battleSpeeds";

export default {
  monsters: monsters,
  currentMonsterIndex: 0,
  currentMonsterStats: monsters[0],
  monsterHealthBarAnimationSpeed: BattleSpeeds.START_BATTLE_SPEED
}
