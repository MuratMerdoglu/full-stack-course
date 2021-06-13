<template>
  <div class="container">
    <h4>User Create Page</h4>
    <div class="user-form">
      <user-form @userData="saveUser" />
    </div>
  </div>
</template>

<script>
import UserForm from "../components/UserForm.vue";

export default {
  components: {
    UserForm,
  },
  methods: {
    saveUser(user) {
      this.axios.post("http://localhost:3000/users/register", user);
      this.$router.push("/users");
    },
  },
};
</script>

<style>
.user-form {
  margin-top: 20px;
}
</style>
