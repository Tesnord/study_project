<template lang="">
  <div class="user-icon">
    <svg>
      <use href="../../../../public/images/icon/sprite.svg#user"></use>
    </svg>
  </div>
</template>
<script>
export default {
  name: 'ReviewsAvatar'
}
</script>
<style lang="scss" scoped>
  .user-icon {
    width: 32px; 
    height: 32px;

    & svg {
      width: 100%;
      height: 100%;
    }
  }
</style>