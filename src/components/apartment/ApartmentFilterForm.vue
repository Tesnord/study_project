<template>
  <form class="form" @submit.prevent="handleSubmit">
    <custom-select
      :items="cities"
      v-model="city"
      class="form__select"
    />
    <custom-input
      v-model="price"
      type="number"
      placeholder="Цена, от"
      error-message="Не должно быть пустым"
      :rules="rules"
    />
    <button-submit
      class="form__submit"
      type="submit"
    >
      Подбор жилья
    </button-submit>
  </form>
</template>

<script>
import CustomSelect from '../shared/CustomSelect.vue'
import CustomInput from '../shared/CustomInput.vue'
import ButtonSubmit from '../shared/ButtonSubmit.vue'
import { isRequired, charLimit } from '../../utils/validationRules'

export default {
  components: {
    CustomSelect,
    CustomInput,
    ButtonSubmit
  },
  data() {
    return {
      price: '',
      city: ''
    }
  },
  computed: {
    rules() {
      return [isRequired, charLimit(10)]
    },
    cities() {
      return [ { value: '', label: 'Город', selected: true}, "Kyiv", "Odesa", "Poltava", "Kharkiv", "Dnipro", "Lviv", "Kherson", "Mariupol"]
    }
  },
  methods: {
    handleSubmit() {
      this.$emit('submit', {
        city: this.city,
        price: this.price
      })
    }
  }
}
</script>

<style lang="scss" scoped>
.form {
  display: flex;

  &__select {
    margin-right: 30px;
  }

  &__submit {
    margin-left: auto;
  }
}
</style>