import { monsters } from "@/characterData/monsters/monsters";

export default {
  monsters: monsters,
  currentMonsterIndex: 0,
  currentMonsterStats: monsters[0],
  monsterHealthBarAnimationSpeed: 1 // 50
}
