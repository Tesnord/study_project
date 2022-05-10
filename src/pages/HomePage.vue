<template>
  <main class="homepage">
    <container-section>
      <apartments-filter-form
        class="apartments-filter"
        @submit="filter"
      />
    </container-section>
    <container-section>
      <p v-if="!filteredApartments.length">Ничего не найдено</p>
      <apartments-list v-else :items="filteredApartments">
        <template v-slot:apartment="{ apartment }">
          <apartments-item
              :key="apartment.id"
              :id="apartment.id"
              :descr="apartment.descr"
              :rating="apartment.rating"
              :imgSrc="apartment.imgUrl"
              :price="apartment.price"
            />
        </template>
      </apartments-list>
    </container-section>
  </main>
</template>

<script>
import ApartmentsList from '../components/apartment/ApartmentsList.vue'
import ApartmentsItem from '../components/apartment/ApartmentsItem.vue'
import ApartmentsFilterForm from '../components/apartment/ApartmentFilterForm.vue'
import ContainerSection from '../components/shared/ContainerSection.vue'
import { getApartmentsList } from '../services/apartments.service'

export default {
  name: 'App',
  components: {
    ApartmentsList,
    ApartmentsItem,
    ApartmentsFilterForm,
    ContainerSection,
  },
  data() {
    return {
      text: '',
      apartments: [],
      filters: {
        city: '',
        price: 0
      }
    }
  },
  computed: {
    filteredApartments() {
      return this.filterByCityName(this.filterByPrice(this.apartments))
    }
  },
  async created() {
    try {
      const { data } = await getApartmentsList()
      this.apartments = data
    } catch (error) {
      console.error(error);
    }
  },
  methods: {
    filter({ city, price }) {
      this.filters.city = city
      this.filters.price = price
    },
    filterByCityName(apartments) {
      if(!this.filters.city) return apartments
      
      return apartments.filter(apartment => {
        return apartment.location.city === this.filters.city
      })
    },
    filterByPrice(apartments) {
      if(!this.filters.price) return apartments

      return apartments.filter(apartment => {
        return apartment.price >= this.filters.price
      })
    }
  }
}
</script>

<style lang="scss" scoped>
.apartments-filter {
  margin-bottom: 40px;
}
</style>
