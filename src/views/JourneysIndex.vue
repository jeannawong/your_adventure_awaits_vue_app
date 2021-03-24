<template>
  <div class="journeys-index">
    <div id="posts" class="container">
      <div class="row">
        <div class="col-md-12">
          <div class="row">
            <section class="col-md-6 wow fadeIn" v-for="journey in journeys" v-bind:key="journey.id">
              <div class="post">
                <div class="media">
                  <div class="owl-slides">
                    <img
                      class="img-fluid img-cover"
                      v-for="image in journey.images"
                      v-bind:key="image.id"
                      v-bind:src="image.url"
                      v-bind:alt="journey.name"
                    />
                    <!-- <img src="img/photos/DeathtoStock_EnergyandSerenity6.jpg" class="img-fluid" />
                    <img src="img/photos/DeathtoStock_EnergyandSerenity2.jpg" class="img-fluid" />
                    <img src="img/photos/DeathtoStock_EnergyandSerenity1.jpg" class="img-fluid" /> -->
                  </div>
                </div>
                <div class="caption text-center">
                  <a href="post-image.html" class="post-title">{{ journey.name }}</a>
                  <p>Price: ${{ journey.price }}</p>
                  <button v-on:click="createOrder(journey)" class="btn btn-primary">Purchase</button>
                  <!-- <span class="post-date">6 Aug 2015</span> -->
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>

    <div id="footer">
      <div id="subscribe">
        <div class="container">
          <div class="form-inline justify-content-center">
            <div class="form-group">
              <p>Stay updated on latest updates &amp; promotions</p>
            </div>
            <div class="form-group">
              <div class="input-group">
                <input type="text" class="form-control" placeholder="Your email address" />
                <span class="input-group-btn">
                  <button class="btn btn-ada-dark" type="button">Subscribe</button>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- <h1>All Journeys</h1>
    <div v-for="journey in journeys" v-bind:key="journey.id">
      <h2>{{ journey.name }}</h2>
      <img v-bind:src="journey.images[0].url" v-bind:alt="journey.name" />
      <p>Price: {{ journey.price }}</p>
      <button v-on:click="createOrder(journey)" class="btn btn-primary">Purchase</button>
    </div> -->
  </div>
</template>

<style scoped>
.img-cover {
  height: 200px;
  width: 100%;
  object-fit: cover;
}
</style>

<script>
/* global $ */
import axios from "axios";
import Vue from "vue";

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
      Vue.nextTick(function() {
        $(".owl-slides").owlCarousel({
          autoPlay: true,
          items: 1,
          navigation: true,
          navigationText: ['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>'],
          dots: false,
          loop: true,
          itemsDesktop: [1199, 1],
          itemsDesktopSmall: [980, 1],
          itemsMobile: [479, 1],
          itemsTablet: [768, 1],
          itemsTabletSmall: false,
        });
      });
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
