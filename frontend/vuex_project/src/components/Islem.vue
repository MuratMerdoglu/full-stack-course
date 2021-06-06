<template>
  <div id="islem">
    <input type="text" v-model="deger" />
    <br />
    <br />
    <button @click="arttir">mutArrtir</button>
    <button @click="azalt">mutAzalt</button>
    <button @click="parametreliArttir(+deger)">sayi kadar arttir</button>
    <button @click="actionMethod">Veritabanindan al</button>
  </div>
</template>

<script>
export default {
  name: "Islem",
  components: {},
  data() {
    return {
      deger: 1,
    };
  },
  methods: {
    arttir() {
      this.$store.commit("mutArrtir");
    },
    azalt() {
      this.$store.commit("mutAzalt");
    },
    parametreliArttir(val) {
      this.$store.commit("mutParametreliIslem", val);
    },
    actionMethod() {
      this.$store.dispatch("serviseIstegi");
    },
  },
};
</script>

<style>
#islem {
  border: 1px solid blue;
  height: 50px;
  text-align: center;
  padding: 20px;
}
</style>
