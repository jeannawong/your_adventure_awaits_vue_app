<template>
  <div class="adventures-index">
    <h1>My Adventures</h1>
    <div v-for="adventure in adventures" v-bind:key="adventure.id">
      <h2>{{ adventure.title }}</h2>
      <p>Description: {{ adventure.description }}</p>
      <p>Cost: {{ adventure.cost }}</p>
      <p>Time of Day: {{ adventure.time_of_day }}</p>
      <p>Duration: {{ adventure.duration }}</p>
      <!-- <p>Helpful Hints: {{ adventure.adventures_helpful_hints_id }}</p> -->
      <p>Memory Post: {{ adventure.memory_post }}</p>
      <p>Memory Image: {{ memory_image }}</p>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  data: function() {
    return {
      adventures: [],
    };
  },
  created: function() {
    axios.get("/api/adventures").then(response => {
      console.log("adventures index", response);
      this.adventures = response.data;
    });
  },
  methods: {},
};
</script>
