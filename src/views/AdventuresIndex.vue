<template>
  <div class="adventures-index">
    <h1 class="adventure-header">My Adventures</h1>
    <fw-book
      :data="pages"
      :startPageIndex="1"
      :endPageIndex="pages.length - 2"
      :autoNextPage="autoNextPage"
      :autoNextPageDelayTime="1000"
      :loop="loop"
    >
      <template v-slot:page="{ page }">
        <img :src="page.src" :alt="'This adventure is not completed!'" />
        <h3>
          <router-link v-bind:to="page.href">{{ page.title }}</router-link>
        </h3>
        <p>{{ page.caption }}</p>
        <!-- <div class="page-content">
          <h3>{{ page.title }}</h3>
          <p>{{ page.caption }}</p>
          <router-link v-bind:to="page.href"><b>View Adventure</b></router-link>
        </div> -->
      </template>
    </fw-book>
    <br />
    <br />
    <br />
    <br />
    <br />

    <!-- <div v-for="adventure in adventures" v-bind:key="adventure.id">
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
        <img class="helpful_hint_symbol" v-bind:src="helpful_hint.hint_symbol" v-bind:alt="helpful_hint.id" />
      </div>
      <p>Memory Post: {{ adventure.memory_post }}</p>
      <p>Memory Image: {{ adventure.memory_image }}</p>
      <p></p>
      <p></p>
      <router-link v-bind:to="`/adventures/${adventure.id}`"><b>View Adventure</b></router-link>
      <p>---------------------------------------------------------------------------------------------------</p>
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
.adventure-header {
  text-align: center;
}
img.helpful_hint_symbol {
  height: 50px;
  width: 50px;
}
.fw-book {
  width: 720px;
  margin: 0 auto;
  border-radius: 10px;
  position: relative;
  perspective: 1500px;
}
.fw-book .fw-bookitem {
  width: 50%;
  height: 100%;
  border-radius: 10px;
  background: #ffffff;
  overflow: hidden;
  position: absolute;
  top: 0;
  right: 0;
}
.fw-book .fw-bookitem img {
  width: 100%;
  height: 200px;
  object-fit: cover;
}
.page-content {
  padding: 0.5em;
}
</style>

<script>
// /* global $ */
import axios from "axios";
// import Vue from "vue";

export default {
  data: function() {
    return {
      adventures: [],
      autoNextPage: false,
      loop: false,
      pages: [
        // {
        //   src: "https://raw.githubusercontent.com/Reidond/vue-turnjs/develop/static/bookblock/1.jpg",
        // },
        // {
        //   src: "https://raw.githubusercontent.com/Reidond/vue-turnjs/develop/static/bookblock/2.jpg",
        // },
        // {
        //   src: "https://raw.githubusercontent.com/Reidond/vue-turnjs/develop/static/bookblock/3.jpg",
        // },
        // {
        //   src: "https://raw.githubusercontent.com/Reidond/vue-turnjs/develop/static/bookblock/4.jpg",
        // },
        // {
        //   src: "https://raw.githubusercontent.com/Reidond/vue-turnjs/develop/static/bookblock/5.jpg",
        // },
      ],
    };
  },
  mounted: function() {
    axios.get("/api/adventures").then(response => {
      console.log("adventures index", response);
      this.adventures = response.data;
      this.pages = this.adventures.map(adventure => ({
        src:
          adventure.memory_image ||
          "https://st3.depositphotos.com/23594922/31822/v/600/depositphotos_318221368-stock-illustration-missing-picture-page-for-website.jpg",
        title: adventure.title,
        caption: adventure.memory_post || "This adventure is not completed yet!",
        href: `/adventures/${adventure.id}`,
      }));
      console.log(this.pages);
    });
  },
  methods: {},
};
</script>
