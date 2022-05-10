<template>
  <header class="header">
    <container-section>
      <logo-template />
    </container-section>
  </header>
</template>
<script>
import ContainerSection from "./shared/ContainerSection.vue";
import LogoTemplate from "./LogoTemplate.vue";

export default {
  name: "HeaderTemplate",
  components: {
    ContainerSection,
    LogoTemplate,
  },
};
</script>
<style lang="scss" scoped>
@import "../assets/scss/variables";

.header {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  padding: 16px 0;
  background: $secondary-color;
  min-height: 30px;
  z-index: 100;
}
</style>