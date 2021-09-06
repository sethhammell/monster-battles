<template>
  <section id="log" class="battle-log">
    {{ battleActionAnimationMessage }}
  </section>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  computed: {
    ...mapGetters("battleMessages", ["battleActionAnimationMessage"]),
  }
};
</script>

<style scoped>
.battle-log {
  width: 30rem;
  overflow: hidden;
  height: 8rem;
  border: 8px solid black;
  padding: 0.5rem;
  margin: 1rem auto;
  box-shadow: 0 5px 10px rgba(0, 0, 0, 0.26);
  display: block;
  padding-left: 1.5rem;
  text-align: left;
  /* outline: #4CAF50 solid 10px; */
  /* text-overflow: ellipsis;
  word-wrap: break-word; */
  /* line-height: 1.8em; */
  /* border-radius: 0px; */
}

#log ul {
  list-style: none;
  margin: 0;
  padding: 0;
}

#log li {
  margin: 0.5rem 0;
}

/* .log--player {
  color: #7700ff;
}

.log--monster {
  color: #da8d00;
}

.log--damage {
  color: red;
}

.log--heal {
  color: green;
} */
</style>
