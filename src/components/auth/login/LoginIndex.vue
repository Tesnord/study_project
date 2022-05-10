<template>
  <auth-container class="login">
    <main-title class="login__title">Логин</main-title>
    <form-index ref="form" class="login__form" @submit.prevent="handleSubmit">
      <custom-input
        v-model="formData.email"
        placeholder="Email"
        autocomplete="email"
        name="email"
        :rules="emailRules"
        class="login__input"
      />
      <custom-input
        v-model="formData.password"
        placeholder="Password"
        autocomplete="current-password"
        type="password"
        name="password"
        :rules="passwordRules"
        class="login__input"
      />
      <button-submit type="submit" :loading="loading" class="login__btn"
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
import { LoginUser } from "../../../services/auth.service";

export default {
  name: "LoginIndex",
  components: {
    FormIndex,
    CustomInput,
    ButtonSubmit,
    AuthContainer,
    MainTitle,
  },
  data() {
    return {
      loading: true,
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
      return [this.rules.isRequired];
    },
  },
  methods: {
    async handleSubmit() {
      this.loading = true;
      const isFormValid = this.$refs.form.validate();
      if (isFormValid) {
        try {
          const { data } = await LoginUser(this.formData);
          console.log(data);
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
.login {
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