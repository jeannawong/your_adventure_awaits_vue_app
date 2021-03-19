<template>
  <div class="helpfulhints-index">
    <h1>Helpful Hints</h1>
    <div v-for="helpful_hint in helpful_hints" v-bind:key="helpful_hint.id">
      <img v-bind:src="helpful_hint.hint_symbol" v-bind:alt="helpful_hint.id" />
      {{ helpful_hint.description }}
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  data: function() {
    return {
      helpful_hints: [],
    };
  },
  created: function() {
    axios.get("/api/helpful_hints").then(response => {
      console.log("helpful_hints index", response);
      this.helpful_hints = response.data;
    });
  },
  methods: {},
};
</script>
