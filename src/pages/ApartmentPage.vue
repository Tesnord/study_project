<template>
  <main class="apartment-page">
    <container-section>
      <div v-if="apartment" class="apartment-page__content">
        <apartments-main-info :apartment="apartment"/>
        <div class="apartment-page__additional-info">
          <apartments-owner class="apartment-page__owner" :owner="apartment.owner"/>
          <reviews-index :reviews="reviewsList"/>
        </div>
      </div>
    </container-section>
  </main>
</template>

<script>
import ContainerSection from '../components/shared/ContainerSection.vue'
import ApartmentsMainInfo from '../components/apartment/ApartmentsMainInfo.vue'
import ApartmentsOwner from '../components/apartment/ApartmentsOwner.vue'
import ReviewsIndex from '../components/reviews/ReviewsIndex.vue'
import ReviewsList from '../components/reviews/reviews.json'
import { getApartmentsById } from '../services/apartments.service'

export default {
  name: 'ApartmentPage',
  components: {
    ContainerSection,
    ApartmentsMainInfo,
    ApartmentsOwner,
    ReviewsIndex,
  },
  data() {
    return {
      apartment: null
    }
  },
  computed: {
    reviewsList() {
      return ReviewsList
    },
  },
  async created() {
    try {
      const { id } = this.$route.params
      const { data } = await getApartmentsById(id)

      this.apartment = data;
    } catch(error) {
      console.error(error);
    }
  },
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