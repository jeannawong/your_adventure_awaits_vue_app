<template>
  <div class="home">
    <!-- <h1>{{ message }}</h1> -->
    <div id="single">
      <div class="container">
        <div class="post">
          <div class="caption">
            <div class="header">
              <img src="img/adventure_awaits.jpg" class="avatar img-circle" />

              <h1>Your Journey</h1>
              <p>Navigate to your My Adventures tab to begin!</p>
            </div>

            <!-- <p>
              <strong>Aliquam lorem ante</strong>
              , dapibus in, viverra quis, feugiat a, tellus. Phasellus viverra nulla ut metus varius laoreet. Quisque
              rutrum. Aenean imperdiet. Etiam ultricies nisi vel augue. Curabitur ullamcorper ultricies nisi. Nam eget
              dui.
              <strong>Etiam rhoncus</strong>
              . Maecenas tempus, tellus eget condimentum rhoncus, sem quam semper libero, sit amet adipiscing sem neque
              sed ipsum. Nam quam nunc, blandit vel, luctus pulvinar, hendrerit id, lorem. Maecenas nec odio et ante
              <a href="#">tincidunt tempus</a>
              .
            </p>

            <blockquote>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.</p>
            </blockquote>

            <p>
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa.
              Cum sociis natoque penatibus et magnis dis parturient montes,
              <a href="#">nascetur ridiculus</a>
              mus. Donec quam felis, ultricies nec, pellentesque eu,
              <strong>pretium quis, sem.</strong>
            </p> -->

            <div class="row">
              <div class="col-md-4">
                <h2>Step 1</h2>
                <p><b>Choose your adventure.</b></p>
                <p>Find a title that sounds fun and scratch it off.</p>
                <img src="img/Step1.png" class="avatar img-circle" />
              </div>
              <div class="col-md-4">
                <h2>Step 2</h2>
                <p><b>Complete your adventure.</b></p>
                <p>Once it's scratched off, no take backs!</p>
                <img src="img/Step2.png" class="avatar img-circle" />
              </div>
              <div class="col-md-4">
                <h2>Step 3</h2>
                <p><b>Capture your adventure.</b></p>
                <p>
                  Don’t forget to take a picture and journal your experience! When finished, you’ll have a keepsake full
                  of your adventures.
                </p>
                <img src="img/Step3.png" class="avatar img-circle" />
              </div>
            </div>

            <!-- <p>
              Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus. Phasellus viverra nulla ut metus varius
              laoreet. Quisque rutrum. Aenean imperdiet. Etiam ultricies nisi vel augue. Curabitur ullamcorper ultricies
              nisi. Nam eget dui.
              <strong>Etiam rhoncus</strong>
              . Maecenas tempus, tellus eget condimentum rhoncus, sem quam semper libero, sit amet adipiscing sem neque
              sed ipsum. Nam quam nunc, blandit vel, luctus pulvinar, hendrerit id, lorem. Maecenas nec odio et ante
              <a href="#">tincidunt tempus</a>
              .
            </p> -->
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
  </div>
</template>

<style></style>

<script>
export default {
  data: function() {
    return {
      // message: "Your adventure awaits! Please go to My Adventures in the nav bar to begin. Enjoy!",
    };
  },
  created: function() {},
  methods: {},
};
</script>
