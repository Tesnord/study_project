<template>
  <main class="apartment-page">
    <container-section>
      <div class="apartment-page__content">
        <apartments-main-info :apartment="apartment"/>
        <apartments-owner class="apartment-page__owner" :owner="apartment.owner"/>
      </div>
    </container-section>
  </main>
</template>

<script>
import ContainerSection from '../components/shared/ContainerSection.vue'
import apartments from '../components/apartment/apartments'
import ApartmentsMainInfo from '../components/apartment/ApartmentsMainInfo.vue'
import ApartmentsOwner from '../components/apartment/ApartmentsOwner.vue'

export default {
  name: 'ApartmentPage',
  components: {
    ContainerSection,
    ApartmentsMainInfo,
    ApartmentsOwner,
  },
  computed: {
    apartment() {
      return apartments.find(
        (apartment) => apartment.id === this.$route.params.id
      )
    }
  }
}
</script>

<style lang="scss" scoped>
  .apartment-page {
    padding-bottom: 55px;

    &__content {
      display: flex;
      align-items: flex-start;
    }

    &__owner {
      min-width: 350px;
      margin-left: 30px;
    }
  }
</style>