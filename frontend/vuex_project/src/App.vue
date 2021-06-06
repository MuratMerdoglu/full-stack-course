<template>
  <div id="app">
    <Show />
    <br />
    <Show2 />
    <hr />
    <Islem />
    <hr />
  </div>
</template>

<script>
import Show from "./components/Show.vue";
import Show2 from "./components/Show2.vue";
import Islem from "./components/Islem.vue";
export default {
  name: "App",
  components: {
    Show,
    Show2,
    Islem,
  },
  data() {
    return {};
  },
  methods: {},
};
</script>

<style></style>
