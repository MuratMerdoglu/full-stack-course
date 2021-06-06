<template>
  <div class="parent">
    Parent Component <br />
    {{ adi }}
    <br />
    Child_1 den gelen veri: {{ childData }}
    <button @click="alert()"></button>
    <Child1
      mesaj="Parent tan gelen mesaj"
      :liste="liste"
      @childEmit="guncelle"
    />
    <br />
    <Child2 :child_1="childData" />
    <br />
  </div>
</template>

<script>
import Child1 from "./Child1";
import Child2 from "./Child2";

export default {
  name: "Parent",
  components: {
    Child1,
    Child2,
  },
  data: () => {
    return {
      adi: "Mehmet",
      liste: [
        { adi: "Ahmet", yasi: 54 },
        { adi: "Mehmet", yasi: 24 },
      ],
      childData: "",
    };
  },
  methods: {
    guncelle(info) {
      this.childData = info;
    },
  },
};
</script>

<style>
.parent {
  border: 1px solid black;
  height: 400px;
}
</style>
