<template>
  <div class="child_1">
    Child_1 Component <br />
    Child data: {{ deger }}
    <br />
    Parent mesaji: {{ mesaj }}
    <br />
    <p v-for="(item, index) in liste" :key="index">{{ item.adi }}</p>

    <button @click="clickEvent">Parent a Gönder</button>
    <hr />
    <button @click="clickEventBus">EventBus üzerinden gönder</button>
  </div>
</template>

<script>
import { eventBus } from "../main";

export default {
  name: "Child1",
  // props: ["mesaj", "liste"],
  props: {
    mesaj: {
      type: [String, Number],
      name: "mesaj",
    },
    liste: {
      type: [Array],
      name: "liste",
    },
  },
  data: () => {
    return {
      deger: 123,
    };
  },
  methods: {
    clickEvent() {
      this.$emit("childEmit", "Child tan gelen veri");
    },
    clickEventBus() {
      // eventBus.$emit("eventBusEmit", "EventBus tan gelen veri");
      eventBus.changeData("EventBus tan gelen veri");
    },
  },
};
</script>

<style>
.child_1 {
  border: 1px solid red;
  height: 200px;
}
</style>
