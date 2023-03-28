<template>
    <div class="menu">
      <div class="header">
        <img alt="LOGO" src="../assets/img/logo.png" class="logo" align="left"/>
        <h1>Citas médicas</h1>
        <div class="buttonsContainer">
          <button v-if="username">{{ username }}</button>
          <button v-if="username" @click="logout" class="secondary">Salir</button>
        <hr>
        </div>
      
      </div>
    </div>
  </template>
  
  <script>
  import { mapMutations } from "vuex";
  export default {
    name: "MenuC",
    computed: {
      username() {
        const user = this.$store.getters.getUser;
        console.log(user);
        if (user) return user.username;
        else return null;
      },
    },
    methods: {
      ...mapMutations(["logout"]),
    },
  };
  </script>

<style lang="scss"></style>

  