<template>
  <div class="adventures-index">
    <h1>My Adventures</h1>

    <div>
      <VueSlickCarousel v-bind="settings">
        <div><h3>1111111</h3></div>
        <div><h3>2222222</h3></div>
        <!-- <div v-for="adventure in adventures" v-bind:key="adventure.id">
          <h3>
            <b>{{ adventure.title }}</b>
          </h3>
        </div> -->
      </VueSlickCarousel>
    </div>

    <div v-for="adventure in adventures" v-bind:key="adventure.id">
      <h3>
        <b>{{ adventure.title }}</b>
      </h3>
      <p>
        <b>Cost:</b>
        ${{ adventure.cost }}
      </p>
      <p>
        <b>Time of Day:</b>
        {{ adventure.time_of_day }}
      </p>
      <p>
        <b>Duration:</b>
        {{ adventure.duration }}
      </p>
      <p v-if="adventure.helpful_hints.length > 0"><b>Helpful Hints:</b></p>
      <div v-for="helpful_hint in adventure.helpful_hints" v-bind:key="helpful_hint.id">
        <img v-bind:src="helpful_hint.hint_symbol" v-bind:alt="helpful_hint.id" />
      </div>
      <!-- <p>Memory Post: {{ adventure.memory_post }}</p>
      <p>Memory Image: {{ adventure.memory_image }}</p> -->
      <p></p>
      <p></p>
      <router-link v-bind:to="`/adventures/${adventure.id}`"><b>View Adventure</b></router-link>
      <p>---------------------------------------------------------------------------------------------------</p>
    </div>

    <!-- <div>
      <VueSlickCarousel :arrows="true" :dots="true">
        <div v-for="adventure in adventures" v-bind:key="adventure.id">
          <h2>{{ adventure.title }}</h2>
          <p>Cost: ${{ adventure.cost }}</p>
          <p>Time of Day: {{ adventure.time_of_day }}</p>
          <p>Duration: {{ adventure.duration }}</p>
          <p v-if="adventure.helpful_hints.length > 0">Helpful Hints:</p>
          <div v-for="helpful_hint in adventure.helpful_hints" v-bind:key="helpful_hint.id">
            <p>{{ helpful_hint }}</p>
          </div>
          <p>Memory Post: {{ adventure.memory_post }}</p>
          <p>Memory Image: {{ adventure.memory_image }}</p>
          <router-link v-bind:to="`/adventures/${adventure.id}`">Embark on Adventure</router-link>
        </div>
      </VueSlickCarousel>
    </div> -->

    <!-- <div id="flipbook">
      <div class="hard">My Memories</div>
      <div class="hard"></div>
      <div v-for="adventure in adventures" v-bind:key="adventure.id">
        <p>{{ adventure.title }}</p>
        <p>{{ adventure.memory_post }}</p>
      </div>
      <div class="hard"></div>
      <div class="hard"></div>
    </div> -->

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

<style scoped>
img {
  height: 50px;
  width: 50px;
}
.slick-prev,
.slick-next {
  color: black;
}
</style>

<script>
// /* global $ */
import axios from "axios";
// import Vue from "vue";
import VueSlickCarousel from "vue-slick-carousel";
import "vue-slick-carousel/dist/vue-slick-carousel.css";
// note: optional style for arrows & dots
import "vue-slick-carousel/dist/vue-slick-carousel-theme.css";

export default {
  name: "My Component",
  components: { VueSlickCarousel },
  data: function() {
    return {
      adventures: [],
      settings: {
        // adventures: [],
        arrows: true,
        dots: true,
        infinite: true,
        slidesToScroll: 1,
        rtl: true,
      },
    };
  },
  mounted: function() {
    axios.get("/api/adventures").then(response => {
      console.log("adventures index", response);
      this.adventures = response.data;
      // Vue.nextTick(function() {
      //   $("#flipbook").turn({
      //     width: 800,
      //     height: 600,
      //     autoCenter: true,
      //   });
      // });
    });
  },
  methods: {},
};
</script>
