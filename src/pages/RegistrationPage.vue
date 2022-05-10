<template>
  <main class="registration">
    <auth-section>
      <registration-index />
    </auth-section>
  </main>
</template>
<script>
import AuthSection from "../components/auth/AuthSection.vue";
import RegistrationIndex from "../components/auth/registration/RegistrationIndex.vue";
export default {
  name: "RegistrationPage",
  components: {
    AuthSection,
    RegistrationIndex,
  },
};
</script>
<style la,
    RegistrationIndexng="scss" scoped>
</style>