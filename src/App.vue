<template>
  <div id="app">
    <!-- <img alt="satori logo" src="./assets/logo-satori.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/> -->

    <nav class="navbar nav">
    <a class="navbar-brand" href="#">
      <img src="./assets/logo-satori.png" width="50" height="50" class="d-inline-block" alt="">
      <span>RH</span>
      <button></button>
    </a>
  </nav>

    <router-view></router-view>
  </div>
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue';
// import Login from './components/Login'

export default {
  name: 'App',
  components: {
    // HelloWorld,
    // Login
  }
}
</script>

<style>

span{
  color: black;
  vertical-align: middle;
  font-family: -apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,"Noto Sans",sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol","Noto Color Emoji";
}
router-view{
  /* font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50; */
  /* margin-top: 60px; */
  height: 90%;
  margin: auto;
}

.nav{
  background: #fce525;
}

#app{
  width: 100%;
}
</style>
