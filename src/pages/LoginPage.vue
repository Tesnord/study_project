<template>
  <main class="login">
    <auth-section>
      <login-index />
    </auth-section>
  </main>
</template>
<script>
import LoginIndex from "../components/auth/login/LoginIndex.vue";
import AuthSection from "../components/auth/AuthSection.vue";

export default {
  name: "LogiPage",
  components: {
    LoginIndex,
    AuthSection,
  },
};
</script>
<style lang="scss" scoped>
</style>