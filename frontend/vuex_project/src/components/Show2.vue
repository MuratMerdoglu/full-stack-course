<template>
  <div id="show">
    {{ sayac }}
  </div>
</template>

<script>
export default {
  name: "Show",
  computed: {
    sayac() {
      return this.$store.getters.getSayac;
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
