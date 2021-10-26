import { player } from "@/characterData/players/player";
import { BattleSpeeds } from "@/enums/battleSpeeds";

export default {
  playerStats: player,
  playerActionsVisibility: true,
  playerHealthBarAnimationSpeed: BattleSpeeds.START_BATTLE_SPEED
}
