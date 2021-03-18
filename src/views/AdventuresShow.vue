<template>
  <div class="adventures-show">
    <h2>{{ adventure.title }}</h2>
    <p>Description: {{ adventure.description }}</p>
    <p>Cost: {{ adventure.cost }}</p>
    <p>Time of Day: {{ adventure.time_of_day }}</p>
    <p>Duration: {{ adventure.duration }}</p>
    <!-- <p>Helpful Hints: {{ adventure.adventures_helpful_hints_id }}</p> -->
    <p>Memory Post: {{ adventure.memory_post }}</p>
    <p>Memory Image: {{ memory_image }}</p>
    <img v-bind:src="adventure.memory_image" v-bind:alt="adventure.title" />
    <router-link to="/adventures">Back To All Adventures</router-link>
  </div>
</template>

<script>
import axios from "axios";
export default {
  data: function() {
    return {
      adventure: {},
    };
  },
  created: function() {
    axios.get("/api/adventures/" + this.$route.params.id).then(response => {
      console.log("adventures show", response);
      this.adventure = response.data;
    });
  },
  methods: {},
};
</script>
