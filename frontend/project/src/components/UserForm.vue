<template>
  <div class="card" style="width: 28rem">
    <div class="card-body">
      <form>
        <div class="form-group">
          <label for="user-name">User Name</label>
          <input
            id="user-name"
            type="text"
            class="form-control"
            placeholder="user name"
            v-model="username"
          />
        </div>

        <div class="form-group">
          <label for="exampleFormControlInput1">Email</label>
          <input
            type="email"
            class="form-control"
            placeholder="name@example.com"
            v-model="email"
          />
        </div>

        <div class="form-group">
          <label for="exampleFormControlInput1">Password</label>
          <input type="password" class="form-control" v-model="password" />
        </div>

        <div class="form-group">
          <label for="exampleFormControlInput1">Confirm Password</label>
          <input type="password" class="form-control" v-model="password_2" />
        </div>
        <div class="alert alert-danger" role="alert" v-if="alert">
          Passwords not matched!!!
        </div>

        <button type="submit" class="btn btn-primary" @click.prevent="emitUser">
          Send
        </button>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      username: "",
      email: "",
      password: "",
      password_2: "",
      alert: false,
    };
  },
  methods: {
    emitUser() {
      const user = {
        username: this.username,
        email: this.email,
        password: this.password,
      };

      if (this.password == this.password_2) {
        this.alert = false;
        this.$emit("userData", user);
      } else {
        this.alert = true;
      }
    },
  },
};
</script>

<style></style>
