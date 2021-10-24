<template>
  <div>
    <button @click="redirectToBattle()">
      {{ redirectToBattleText }}
    </button>
  </div>
</template>

<script>
import { mapActions } from 'vuex';

export default {
  computed: {
    redirectToBattleText() {
      return "START";
    },
  },
  methods: {
    redirectToBattle() {
      this.$router.push("/battle");
      this.resetBattle();
    },
    ...mapActions('battleStats', ['resetBattle'])
  },
};
</script>

<style scoped>
button {
  font: inherit;
  border: 1px solid #88005b;
  background-color: #88005b;
  color: white;
  padding: 1rem 2rem;
  border: 3px solid #000000;
  margin: 1rem;
  width: 16rem;
  height: 5rem;
  font-size: 160%;
  cursor: pointer;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.26);
}

button:focus {
  outline: none;
}

button:hover,
button:active {
  background-color: #af0a78;
  border-color: #423b3b;
  box-shadow: 1px 1px 8px rgba(0, 0, 0, 0.26);
}

button:disabled {
  background-color: #ccc;
  border-color: #ccc;
  box-shadow: none;
  color: #3f3f3f;
  cursor: not-allowed;
}
</style>
