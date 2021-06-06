<template>
  <div id="show">
    {{ sayac }}
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  name: "Show",
  computed: {
    ...mapGetters(["getSayacString", "getSayac"]),

    sayac() {
      return this.getSayacString;
    },
  },
};
</script>

<style>
#show {
  border: 1px solid red;
  height: 50px;
  text-align: center;
  padding: 20px;
}
</style>
