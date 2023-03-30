<!-- Página de Home, donde mostramos las citas de un usuario  -->

<template>
    <div class="columnContainer">
      <h2>Bienvenido a tu espacio de usuario</h2>
      <h3>{{ username }}</h3>
      <DatesListComponent />
    </div>
  </template>

  <script>
  import { mapState, mapMutations } from "vuex";
  import DatesListComponent from "../components/modules/ListC.vue";
  export default {
    name: "HomeC",
    computed: {
      username() {
        const user = this.$store.getters.getUser;
        return user.username;
      },
      ...mapState(["dates", "selectedDate"]),
      selectedDetails() {
        return this.dates.find(
          function (date) {
            return date.id === this.selectedDate;
          }.bind(this)
        );
      },
    },
    methods: {
      goToDashboard() {
        this.$router.push("/menu");
      },
      ...mapMutations(["selectDate", "logout"]),
      formatDate(date) {
        // format date as needed
        return date;
      },
    },
    components: { DatesListComponent },
  };
  </script>
 
 <style lang="scss"></style>

  