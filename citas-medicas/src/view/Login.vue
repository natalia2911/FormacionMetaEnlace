<!-- @format -->
<!-- Formulario de login -->

<template>
  <div>
    <h2>Accede a tu cuenta:</h2>
    <form @submit.prevent="validateLogin">
      <label>
        Usuario:
        <input type="text" v-model="email" required />
      </label>
      <br />
      <label>
        Contraseña:
        <input type="password" v-model="password" required />
      </label>
      <br />
      <button type="submit" class="primary">Login</button>
    </form>
    <p v-if="error" style="color: red">{{ error }}</p>
  </div>
</template>

<script>
import axios from "axios";
const url = "https://run.mocky.io/v3/572f1b0b-23dd-45c8-980c-c2ce40ea2e36"

export default {
  name: "LoginComponent",
  data: () => ({
    email: "",
    password: "",
    error: "",
  }),
  methods: {
    checkInputs() {
      if (this.email === "" || this.password === "") {
        this.error = "Por favor rellena todos los campos";
        return false;
      } else {
        this.error = "";
        return true;
      }
    },
    async validateLogin() {
      if (!this.checkInputs()) {
        return;
      }
      try {
        const response = await axios.post(url, {
          username: this.username,
          password: this.password,
        });
        console.log(response.data.username);
        if (response.status === 200) {
          const user = {
            username: response.data.username,
          };
          this.$store.dispatch("login", user);
          this.$router.push("/home");
        } else {
          this.error = "Correo electrónico o contraseña no válidos";
        }
      } catch (error) {
        console.error(error);
        this.error = "Intentelo más tarde";
      }
    },
  },
};
</script>

<style lang="scss"></style>
