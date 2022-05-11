<template>
  <div id="app">
    <notifications-index />
    <div class="content">
      <header-template />
      <router-view></router-view>
    </div>
    <footer-template />
  </div>
</template>

<script>
import FooterTemplate from "./components/FooterTemplate.vue";
import HeaderTemplate from "./components/HeaderTemplate.vue";
import NotificationsIndex from "./components/notifications/NotificationIndex.vue";

export default {
  name: "App",
  components: {
    FooterTemplate,
    HeaderTemplate,
    NotificationsIndex,
  },
};
</script>

<style lang="scss" scoped>
#app {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  font-family: Montserrat, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

.content {
  flex-grow: 1;
}
</style>
