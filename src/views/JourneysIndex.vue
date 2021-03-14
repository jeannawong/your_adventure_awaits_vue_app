<template>
  <div class="journeys-index">
    <h1>All Journeys</h1>
    <div v-for="journey in journeys" v-bind:key="journey.id">
      <h2>{{ journey.name }}</h2>
      <img v-bind:src="journey.images[0].url" v-bind:alt="journey.name" />
      <p>Price: {{ journey.price }}</p>
      <button v-on:click="createOrder(journey)" class="btn btn-primary">Purchase</button>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  data: function() {
    return {
      journeys: [],
    };
  },
  created: function() {
    axios.get("/api/journeys").then(response => {
      console.log("journeys index", response);
      this.journeys = response.data;
    });
  },
  methods: {
    createOrder: function(journey) {
      var params = {
        journey_id: journey.id,
      };
      axios
        .post("/api/orders", params)
        .then(response => {
          console.log("orders create", response);
          this.$router.push("/orders");
        })
        .catch(error => {
          console.log("orders create error", error.response);
          this.errors = error.response.data.errors;
        });
    },
  },
};
</script>
