<template>
  <div class="container">
    <div class="row">
      <table class="table table-hover">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">User Name</th>
            <th scope="col">Mail</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(user, index) in users" :key="user._id">
            <th scope="row">{{ index + 1 }}</th>
            <td>{{ user.username }}</td>
            <td>{{ user.email }}</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    users: {
      type: Array,
    },
  },
};
</script>

<style></style>
