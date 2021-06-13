<template>
  <div id="app">
    <Nav />
    <router-view></router-view>
  </div>
</template>

<script>
// import Home from "./views/Home.vue";
import Nav from "./components/Nav.vue";

export default {
  name: "App",
  components: {
    Nav,
    // About,
  },
};
</script>

<style></style>
