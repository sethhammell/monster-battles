<template>
  <div>
    <p>
      {{ battleAnimationMessageSpeedMultiplier }}
    </p>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  computed: {
    ...mapGetters("battleMessages", ["battleAnimationMessageSpeed"]),
    battleAnimationMessageSpeedMultiplier() {
      return 'x' + 32 / this.battleAnimationMessageSpeed;
    }
  }
};
</script>

<style scoped>
p {
  display: flex;
  align-items: center;
  justify-content: space-around;
  font: inherit;
  box-sizing: border-box;
  background-color: #6d0000;
  color: white;
  border: 5px solid #000000;
  margin: 16px 10px 4px 10px;
  width: 5rem;
  height: 5rem;
  font-size: 125%;
  margin-right: 7rem;
  position: absolute;
  left: 11rem;
}
</style>
