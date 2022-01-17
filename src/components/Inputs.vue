<template>
  <input class="input-data" type="text" :value='modelValue' @input="$emit('update:modelValue', $event.target.value)">
</template>

<script>
export default {
  props: {
    modelValue: { type: String, default: null }
  }
}
</script>

<style lang="scss" scoped>
  .input-data {
    padding-left: 10px;
    outline: 0;
    border: 0;
    width: 269px;
    height: 50px;
    background: #FFFFFF;
    border-radius: 5px;
    font-size: 25px;
    font-family: 'Oswald', sans-serif;
  }
</style>