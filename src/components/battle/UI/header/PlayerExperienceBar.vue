<template>
  <div class="bar">
    <div class="box level">
      {{ currentPlayerLevelText }}
    </div>
    <progress class="box experience" :value="progressToNextLevelValue" max="100"></progress>
    <div class="box experience experience__value">
      {{ progressToNextLevelText }}
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  computed: {
    ...mapGetters("playerStats", ["currentPlayerLevel", "progressToNextLevel"]),
    currentPlayerLevelText() {
      return 'Lv' + this.currentPlayerLevel;
    },
    progressToNextLevelValue() {
      return Math.round(this.progressToNextLevel * 100);
    },
    progressToNextLevelText() {
      return this.progressToNextLevelValue + '%';
    }
  }
};
</script>

<style scoped>
.box {
  display: flex;
  align-items: center;
  justify-content: space-around;
  font: inherit;
  box-sizing: border-box;
  color: white;
  border: 3px solid #000000;
  width: 5rem;
  height: 5rem;
  font-size: 125%;
  margin-right: 7rem;
  margin: 16px 10px 4px 10px;
  /* background-color: rgb(255, 255, 255); */
  position: absolute;
}

progress {
  z-index: -1;
}

.level {
  left: 64px;
  background-color: #1100ff;
}

.experience {
  left: 141px;
  width: 227px;
}
  

.experience::-webkit-progress-value{
  background:rgb(44, 206, 255);
  /* color: white; */
}

progress[value]::-webkit-progress-bar {
  background: #fde5e5;
}

.experience__value {
  color: black;
}

.bar {
  box-shadow: 0 8px 10px rgba(0, 0, 0, 0.26);
  padding-top: 6rem;
}
</style>
