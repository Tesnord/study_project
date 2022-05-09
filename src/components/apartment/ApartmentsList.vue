<template>
    <container-section>
      <slot name="title"></slot>
      <div class="apartments-list">
        <template v-for="apartment in items">
          <slot name="apartment" v-bind:apartment="apartment"></slot>
        </template>
      </div>
    </container-section>
</template>
<script>
import ContainerSection from '../shared/ContainerSection.vue'


export default {
  name: 'ApartmentsList',
  components: {
    ContainerSection
  },
  props: {
    items: {
      type: Array,
      default: () => []
    }
  }
}
</script>
<style lang="scss" scoped>
  .apartments-list {
    display: flex;
    flex-wrap: wrap;
    margin: 0 -15px;
  }
</style>