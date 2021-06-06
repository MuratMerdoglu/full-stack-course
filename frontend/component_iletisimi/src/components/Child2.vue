<template>
  <div class="child_2">
    Child_2 Component <br />
    Child data: {{ deger }}
    <br />
    Child_1 den gelen veri: {{ child_1 }}
    <br />
    EventBus tan gelen veri: {{ eventBusData }}
    <br />
  </div>
</template>

<script>
import { eventBus } from "../main";

export default {
  name: "Child2",
  props: {
    child_1: {
      type: [String, Number],
      name: "mesaj",
    },
  },
  data() {
    return {
      deger: "abc",
      eventBusData: "",
    };
  },
  methods: {},
  created() {
    const _self = this;

    eventBus.$on("eventBusEmit", (data) => {
      _self.eventBusData = data;
    });
  },
};
</script>

<style>
.child_2 {
  border: 1px solid blue;
  height: 200px;
}
</style>
