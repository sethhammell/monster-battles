<template>
  <div>
    <input
      class="name-input"
      type="text"
      :value="value"
      placeholder="Username"
      @input="$emit('onInput', $event.target.value)"
    />
  </div>
</template>

<script>
export default {
  props: {
    value: {
      type: String,
      default: "",
    },
  },
};
</script>

<style scoped>
input {
  display: inline-block;
  padding: 12px 20px;
  margin-top: 4rem;
  margin-bottom: 1rem;
  width: 20rem;
  height: 3rem;
  border: 2px solid;
  font-family: "uni05_53";
  border-radius: 4px;
  font-size: 2.2rem;
  box-shadow: 2px 4px 10px gray;
  text-align: center;
}
</style>
