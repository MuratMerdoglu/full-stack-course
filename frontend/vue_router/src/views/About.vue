<template>
  <div>
    <p>Burasi About Sayfasi</p>
    <h3>{{ id }}</h3>
    <h3>{{ adi }}</h3>
  </div>
</template>

<script>
export default {
  data() {
    return {
      id: this.$route.params.id,
      adi: this.$route.query.adi,
    };
  },
};
</script>

<style></style>
