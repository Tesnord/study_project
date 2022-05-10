<template>
  <form-index ref="form" @submit.prevent="handleSubmit">
    <custom-input v-model="formData.email" name="email" :rules="emailRules" />
    <custom-input
      v-model="formData.password"
      name="password"
      :rules="passwordRules"
    />
    <button-submit type="submite">Click me</button-submit>
  </form-index>
</template>
<script>
import FormIndex from "../shared/form/FormIndex.vue";
import CustomInput from "../shared/CustomInput.vue";
import ButtonSubmit from "../shared/ButtonSubmit.vue";
import {
  emailValidation,
  passwordValidation,
  isRequired,
} from "../../utils/validationRules";

export default {
  name: "LoginIndex",
  components: {
    FormIndex,
    CustomInput,
    ButtonSubmit,
  },
  data() {
    return {
      formData: {
        email: "",
        password: "",
      },
    };
  },
  computed: {
    rules() {
      return {
        emailValidation,
        passwordValidation,
        isRequired,
      };
    },
    emailRules() {
      return [this.rules.isRequired, this.rules.emailValidation];
    },
    passwordRules() {
      return [this.rules.isRequired, this.rules.passwordValidation];
    },
  },
  methods: {
    handleSubmit() {
      const isFormValid = this.$refs.form.validate();
      if (isFormValid) {
        console.log(this.formData);
      }
    },
  },
};
</script>
<style lang="scss" scoped>
</style>