<template>
  <div>
    <button @click="toggleOptionsMenu">
      {{ optionsButtonText }}
    </button>
  </div>
</template>

<script>
import { mapActions } from 'vuex';

export default {
  computed: {
    optionsButtonText() {
      return "OPTIONS";
    },
  },
  methods: {
    ...mapActions("battleStats", ["toggleOptionsMenu"]),
  }
};
</script>

<style scoped>
button {
  font: inherit;
  background-color: #88005b;
  color: white;
  padding: 1rem 2rem;
  border: 3px solid #000000;
  width: 16rem;
  height: 5rem;
  font-size: 125%;
  cursor: pointer;
  margin: 16px 112px;
  box-shadow: 2px 4px 10px gray;
  justify-content: right;
  position: absolute;
  right: 0;
}

button:focus {
  outline: none;
}

button:active {
  border-color: #423b3b;
  background-color: #af0a78;
  box-shadow: 0 0 0 white;
  margin: 17px 112px;
  padding-top: 1.0625rem;
}

button:hover {
  background-color: #af0a78;
}
</style>
