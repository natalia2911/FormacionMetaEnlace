<template>
  <div id="app">
    <MenuComponent />
    <router-view />
  </div>
</template>

<script>
import MenuComponent from "./components/MenuC.vue";

export default {
  name: "App",
  components: { MenuComponent },
};
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}


@import'~bootstrap/dist/css/bootstrap.css'
</style>
