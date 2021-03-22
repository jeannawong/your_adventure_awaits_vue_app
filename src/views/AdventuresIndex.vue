<template>
  <div class="adventures-index">
    <h1>My Adventures</h1>
    <div v-for="adventure in adventures" v-bind:key="adventure.id">
      <h2>{{ adventure.title }}</h2>
      <p>Cost: ${{ adventure.cost }}</p>
      <p>Time of Day: {{ adventure.time_of_day }}</p>
      <p>Duration: {{ adventure.duration }}</p>
      <p v-if="adventure.helpful_hints.length > 0">Helpful Hints:</p>
      <div v-for="helpful_hint in adventure.helpful_hints" v-bind:key="helpful_hint.id">
        <p>{{ helpful_hint }}</p>
      </div>
      <!-- <p>Memory Post: {{ adventure.memory_post }}</p>
      <p>Memory Image: {{ adventure.memory_image }}</p> -->
      <router-link v-bind:to="`/adventures/${adventure.id}`">Embark on Adventure</router-link>
    </div>

    <div id="flipbook">
      <div class="hard">My Memories</div>
      <div class="hard"></div>
      <div v-for="adventure in adventures" v-bind:key="adventure.id">
        <p>{{ adventure.title }}</p>
        <p>{{ adventure.memory_post }}</p>
      </div>
      <div class="hard"></div>
      <div class="hard"></div>
    </div>

    <!-- <div id="posts" class="container">
      <div class="row">
        <section class="col-md-12 wow fadeIn">
          <div class="post big">
            <div class="row">
              <div class="col-md-6 media">
                <img src="img/photos/DeathtoStock_EnergyandSerenity2.jpg" class="img-fluid" />
              </div>
              <div class="col-md-6 caption">
                <span class="post-tag">#music</span>
                <a href="post-image.html" class="post-title">Don't look at me</a>
                <span class="post-date">19 Sept 2015</span>
                <p class="post-description">
                  Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean
                  massa. Cum sociis natoque penatibus et magnis dis
                  <a href="#">parturient montes</a>
                  , nascetur ridiculus mus. Aenean commodo ligula eget dolor.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section class="col-md-12 wow fadeIn">
          <div class="post big">
            <div class="row">
              <div class="col-md-6 caption">
                <span class="post-tag">#lifestype</span>
                <a href="post-image.html" class="post-title">I'm only breathing</a>
                <span class="post-date">5 Sept 2015</span>
                <p class="post-description">
                  Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean
                  massa. Cum sociis natoque penatibus et magnis dis
                  <a href="#">parturient montes</a>
                  , nascetur ridiculus mus. Aenean commodo ligula eget dolor.
                </p>
              </div>
              <div class="col-md-6 media">
                <img src="img/photos/DeathtoStock_EnergyandSerenity5.jpg" class="img-fluid" />
              </div>
            </div>
          </div>
        </section>
      </div>
    </div> -->
  </div>
</template>

<style scoped></style>

<script>
/* global $ */
import axios from "axios";
import Vue from "vue";

export default {
  data: function() {
    return {
      adventures: [],
    };
  },
  mounted: function() {
    axios.get("/api/adventures").then(response => {
      console.log("adventures index", response);
      this.adventures = response.data;
      Vue.nextTick(function() {
        $("#flipbook").turn({
          width: 800,
          height: 600,
          autoCenter: true,
        });
      });
    });
  },
  methods: {},
};
</script>
