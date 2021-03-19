<template>
  <div class="adventures-index">
    <h1>My Adventures</h1>
    <div v-for="adventure in adventures" v-bind:key="adventure.id">
      <h2>{{ adventure.title }}</h2>
      <p>Cost: {{ adventure.cost }}</p>
      <p>Time of Day: {{ adventure.time_of_day }}</p>
      <p>Duration: {{ adventure.duration }}</p>
      <!-- <p>Helpful Hints: {{ adventure.adventures_helpful_hints_id }}</p> -->
      <p>Memory Post: {{ adventure.memory_post }}</p>
      <p>Memory Image: {{ adventure.memory_image }}</p>
      <router-link v-bind:to="`/adventures/${adventure.id}`">Complete Adventure</router-link>
    </div>

    <div id="posts" class="container">
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

        <section class="col-md-12 wow fadeIn">
          <div class="post big">
            <div class="row">
              <div class="col-md-6 media">
                <img src="img/photos/DeathtoStock_EnergyandSerenity6.jpg" class="img-fluid" />
              </div>
              <div class="col-md-6 caption">
                <span class="post-tag">#travel</span>
                <a href="post-image.html" class="post-title">Leave it alone</a>
                <span class="post-date">20 Aug 2015</span>
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
      </div>
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
