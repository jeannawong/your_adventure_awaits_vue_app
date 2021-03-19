<template>
  <div class="adventures-edit">
    <h1>Add Your Memory!</h1>
    <form v-on:submit.prevent="addMemory(adventure)">
      <ul>
        <li v-for="error in errors" v-bind:key="error.id">{{ error }}</li>
      </ul>
      <p>
        Memory Post:
        <input type="text" v-model="adventure.memory_post" />
      </p>
      <p>
        Memory Image:
        <input type="text" v-model="adventure.memory_image" />
      </p>
      <input type="submit" value="Add Memory" />
    </form>
  </div>
</template>

<script>
import axios from "axios";
export default {
  data: function() {
    return {
      adventure: {},
      errors: [],
    };
  },
  created: function() {
    axios.get("/api/adventures/" + this.$route.params.id).then(response => {
      console.log("adventures show", response);
      this.adventure = response.data;
    });
  },
  methods: {
    addMemory: function(adventure) {
      var params = {
        memory_post: adventure.memory_post,
        memory_image: adventure.memory_image,
      };
      axios
        .patch("/api/adventures/" + adventure.id, params)
        .then(response => {
          console.log("adventures update", response);
          this.$router.push("/adventures");
        })
        .catch(error => {
          console.log("adventures update error", error.response);
          this.errors = error.response.data.errors;
        });
    },
  },
};
</script>
