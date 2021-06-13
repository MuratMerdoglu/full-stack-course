<template>
  <div>
    <p>Burasi Home Sayfasi</p>
    <br />
    <button @click="handleClick">About Page</button>
  </div>
</template>

<script>
export default {
  methods: {
    handleClick() {
      this.$router.push({ path: "/about/3" });
    },
  },
};
</script>

<style></style>
