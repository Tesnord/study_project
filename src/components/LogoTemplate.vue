<template>
  <router-link :to="{name: 'homepage'}" class="logo">
    <img src="../assets/svg/logo.svg"><span class="logo--accent">GO</span>Home
  </router-link>
</template>
<script>
export default {
  
}
</script>
<style lang="scss" scoped>
@import '../assets/scss/variables';
  
  .logo {
    display: flex;
    align-items: center;
    text-decoration: none;
    width: 30px;
    font-weight: 700;
    font-size: 18px;
    line-height: 22px;
    color: $main-color;

    &--accent {
      padding-left: 10px;
      color: $accent-color;
    }
  }
</style>