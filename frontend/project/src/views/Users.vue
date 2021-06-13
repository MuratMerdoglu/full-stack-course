<template>
  <div class="container">
    <h4>Users Page</h4>
    <div class="row" style="margin-bottom: 10px">
      <button class="btn btn-primary" @click="redirectNewUser">New User</button>
    </div>
    <div class="row">
      <users-list :users="users.data" />
    </div>
  </div>
</template>

<script>
import UsersList from "../components/UsersList.vue";

export default {
  components: {
    UsersList,
  },
  data() {
    return {
      users: [],
    };
  },
  methods: {
    redirectNewUser() {
      this.$router.push("/users/create");
    },
  },
  async mounted() {
    this.users = await this.axios.get("http://localhost:3000/users/");
  },
};
</script>

<style></style>
