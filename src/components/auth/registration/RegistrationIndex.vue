<template>
  <auth-container class="registration">
    <main-title class="registration__title">Логин</main-title>
    <form-index
      ref="form"
      class="registration__form"
      @submit.prevent="handleSubmit"
    >
      <custom-input
        v-model="formData.name"
        placeholder="Name"
        autocomplete="username"
        name="name"
        :rules="nameRules"
        class="registration__input"
      />
      <custom-input
        v-model="formData.email"
        placeholder="Email"
        autocomplete="email"
        name="email"
        :rules="emailRules"
        class="registration__input"
      />
      <custom-input
        v-model="formData.password"
        placeholder="Password"
        autocomplete="current-password"
        type="password"
        name="password"
        :rules="passwordRules"
        class="registration__input"
      />
      <custom-input
        v-model="formData.confirmPassword"
        placeholder="Confirm password"
        autocomplete="current-password"
        type="password"
        name="password"
        :rules="confirmPassword"
        class="registration__input"
      />
      <button-submit type="submit" :loading="loading" class="registration__btn"
        >Вход</button-submit
      >
    </form-index>
  </auth-container>
</template>
<script>
import FormIndex from "../../shared/form/FormIndex.vue";
import CustomInput from "../../shared/CustomInput.vue";
import ButtonSubmit from "../../shared/ButtonSubmit.vue";
import AuthContainer from "../../auth/AuthContainer.vue";
import MainTitle from "../../shared/MainTitle.vue";
import {
  emailValidation,
  passwordValidation,
  isRequired,
} from "../../../utils/validationRules";
import { RegisterUser } from "../../../services/auth.service";

export default {
  name: "RegistrationIndex",
  components: {
    FormIndex,
    CustomInput,
    ButtonSubmit,
    AuthContainer,
    MainTitle,
  },
  data() {
    return {
      loading: false,
      formData: {
        name: "",
        email: "",
        password: "",
        confirmPassword: "",
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
    nameRules() {
      return [this.rules.isRequired];
    },
    emailRules() {
      return [this.rules.isRequired, this.rules.emailValidation];
    },
    passwordRules() {
      return [this.rules.isRequired, this.rules.passwordValidation];
    },
    confirmPassword() {
      return [
        (val) => ({
          hasPassed: val === this.formData.password,
          message: "Пароли не совпадают",
        }),
      ];
    },
  },
  methods: {
    async handleSubmit() {
      const { form } = this.$refs;
      const isFormValid = form.validate();
      const { name, password, email } = this.formData;

      if (isFormValid) {
        try {
          this.loading = true;
          const { data } = await RegisterUser({ name, password, email });
          console.log(data);
          form.reset();
        } catch (error) {
          console.log(error);
        } finally {
          this.loading = false;
        }
      }
    },
  },
};
</script>
<style lang="scss" scoped>
.registration {
  &__title {
    text-align: center;
  }

  &__form {
    display: block;
    flex-direction: column;
  }

  &__input {
    margin-bottom: 30px;
    width: 100%;
  }

  &__btn {
    margin-top: 15px;
    width: 100%;
  }
}
</style>