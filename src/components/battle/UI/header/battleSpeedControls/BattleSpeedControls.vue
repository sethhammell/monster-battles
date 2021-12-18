<template>
  <div class="battle-speed-controls">
    <battle-speed-decrease-button></battle-speed-decrease-button>
    <current-battle-speed-display></current-battle-speed-display>
    <battle-speed-increase-button></battle-speed-increase-button>
  </div>
</template>

<script>
import BattleSpeedDecreaseButton from '@/components/battle/UI/header/battleSpeedControls/BattleSpeedDecreaseButton.vue';
import BattleSpeedIncreaseButton from '@/components/battle/UI/header/battleSpeedControls/BattleSpeedIncreaseButton.vue';
import CurrentBattleSpeedDisplay from '@/components/battle/UI/header/battleSpeedControls/CurrentBattleSpeedDisplay.vue';

export default {
  component: { BattleSpeedIncreaseButton, BattleSpeedDecreaseButton, CurrentBattleSpeedDisplay }
}
</script>

<style scoped>
.battle-speed-controls {
  padding-top: 0rem;
}
</style>
