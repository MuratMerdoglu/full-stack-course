<template>
  <div class="child_2">
    Child_2 Component <br />
    Child data: {{ deger }}
    <br />
    Child_1 den gelen veri: {{ child_1 }}
    <br />
  </div>
</template>

<script>
export default {
  name: "Child2",
  props: {
    child_1: {
      type: [String, Number],
      name: "mesaj",
    },
  },
  data: () => {
    return {
      deger: "abc",
    };
  },
  methods: {},
};
</script>

<style>
.child_2 {
  border: 1px solid blue;
  height: 200px;
}
</style>
