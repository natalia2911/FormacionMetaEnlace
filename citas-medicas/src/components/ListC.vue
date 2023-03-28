<!-- Página de lista las nuevas citas -->

<template>
    <div id="list">
      <div v-if="newDates.length > 0" class="rowContainer">

        <div class="item-list">
          <ul style="list-style: none">
            <li v-for="item in newDates" :key="item.id" class="item">
              <button class="secondary" :class="{ active: item === selectedItem }" @click="selectItem(item)"> {{ item.date }}
              </button>
              
            </li>
            </ul>
        </div>

        <div id="textarea">
          <hr/>
          <div v-if="selectedItem">
            <h2>{{ selectedItem.valoracion }}</h2>
            <p>{{ selectedItem.tipoconsulta }}</p>
          </div>
          <div v-else>
            <h2>Selecciona un elemento</h2>
          </div>
        </div>
      </div>
      <p v-else>Cargando...</p>
    </div>
  </template>
  
  <script>
  import { mapState, mapMutations } from "vuex";
  import axios from "axios";
  
  const url =
    "https://run.mocky.io/v3/58abbbb3-a7a3-4a53-88c3-a1d1d13e47f9";
  
  export default {
    name: "ListC",
    computed: {
      ...mapState(["dates"]),
    },
    data() {
      return {
        selectedItem: null,
        newDates: [],
      };
    },
    methods: {
      ...mapMutations(["selectItem"]),
      selectItem(item) {
        this.selectedItem = item;
      }
    },
    created() {
      axios
        .post(url, {
          idUser: 1,
        })
        .then((response) => {
          console.log("Response data :" + response.data);
  
          // const responseData = response.data;
          // const dates = JSON.parse(responseData).dates; //responseData.dates; // or
          // console.log(dates); // This should log the "dates" array
  
          this.newDates = response.data.dates;
        });
    },
  };
  </script>
  
  <style lang="scss"></style>