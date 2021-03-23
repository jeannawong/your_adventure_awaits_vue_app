<template>
  <div class="adventures-show">
    <vue-scratchable>
      <div class="wrapper scratch">
        {{ adventure.description }}
      </div>
    </vue-scratchable>
    <h2>{{ adventure.title }}</h2>
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
      <img class="symbol" v-bind:src="helpful_hint.hint_symbol" v-bind:alt="helpful_hint.id" />
    </div>
    -------------------------------------------------------------------------------------------------------------------------------------------------
    <p>
      <b>Memory Post:</b>
      {{ adventure.memory_post }}
    </p>
    <p>
      <b>Photo Here:</b>
      {{ adventure.memory_image }}
    </p>
    <img v-bind:src="adventure.memory_image" v-bind:alt="adventure.title" />
    <p>
      <router-link v-bind:to="`/adventures/${adventure.id}/edit`"><b>Add Your Memory!</b></router-link>
    </p>
    <p><router-link to="/adventures">Back To My Adventures</router-link></p>

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
.scratch {
  height: 30vh;
  width: 30vw;
}
.symbol {
  height: 35px;
  width: 35px;
}
img {
  width: 600px;
  height: auto;
}
</style>

<script>
import axios from "axios";
import VueScratchable from "vue-scratchable";

export default {
  components: {
    VueScratchable,
  },
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
