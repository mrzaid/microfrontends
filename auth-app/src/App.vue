<template>
  <div id="auth-app">
    <h1>Login Page</h1>
    <button @click="loginHandler">Login/Signin</button>
  </div>
</template>

<script>

export default {
  name: 'auth-app',
  components: { },
  mounted() { },
  methods: {
    loginHandler() {
      localStorage.setItem('jwtToken', 'dummyToken222');
      window.vRouter.go('/');
    },
  }
}
</script>

<style>

</style>
