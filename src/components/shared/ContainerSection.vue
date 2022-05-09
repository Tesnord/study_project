<template>
  <div class="container">
    <slot>Default value</slot>
  </div>
</template>
<script>
export default {
  name: 'ContainerSection'
}
</script>
<style lang="scss">
  .container {
    max-width: 1110px;
    margin: 0 auto;
  }
</style>