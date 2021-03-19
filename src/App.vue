<template>
  <div id="app">
    <div class="loading"></div>

    <div id="header">
      <div class="top">
        <div class="search">
          <form role="form">
            <div class="form-group has-feedback">
              <input type="text" class="form-control input-sm" placeholder="Search.." />
              <i class="form-control-feedback fa fa-search"></i>
            </div>
          </form>
        </div>
        <a class="brand" href="#">
          <span>VV</span>
        </a>
      </div>

      <nav class="navbar navbar-expand-lg navbar-light navbar-ada">
        <a class="navbar-brand" href="#"></a>
        <button
          class="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarsExample08"
          aria-controls="navbarsExample08"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse justify-content-md-center" id="navbarsExample08">
          <ul class="navbar-nav">
            <li class="nav-item dropdown">
              <a
                class="nav-link dropdown-toggle"
                href="#"
                id="dropdown1"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                All Journeys
              </a>
              <div class="dropdown-menu" aria-labelledby="dropdown1">
                <a class="dropdown-item" href="/journeys">All Journeys</a>
              </div>
            </li>

            <li class="dropdown">
              <a
                class="nav-link dropdown-toggle"
                href="#"
                id="dropdown2"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                Signup
              </a>
              <div class="dropdown-menu" aria-labelledby="dropdown2">
                <a class="dropdown-item" href="/signup">Sign Up</a>
              </div>
            </li>

            <li class="dropdown">
              <a
                class="nav-link dropdown-toggle"
                href="#"
                id="dropdown3"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                Login
              </a>
              <div class="dropdown-menu" aria-labelledby="dropdown3">
                <a class="dropdown-item" href="/login">Login</a>
              </div>
            </li>

            <li class="dropdown">
              <a
                class="nav-link dropdown-toggle"
                href="#"
                id="dropdown4"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                My Adventures
              </a>
              <div class="dropdown-menu" aria-labelledby="dropdown4">
                <a class="dropdown-item" href="/adventures">My Adventures</a>
              </div>
            </li>

            <li class="dropdown">
              <a
                class="nav-link dropdown-toggle"
                href="#"
                id="dropdown4"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                Helpful Hints Key
              </a>
              <div class="dropdown-menu" aria-labelledby="dropdown4">
                <a class="dropdown-item" href="/helpful_hints">Helpful Hints Key</a>
              </div>
            </li>

            <li class="nav-item">
              <a class="nav-link" href="/orders" target="_blank">
                My Orders
              </a>
            </li>

            <li class="dropdown">
              <a
                class="nav-link dropdown-toggle"
                href="#"
                id="dropdown4"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                Sign Out
              </a>
              <div class="dropdown-menu" aria-labelledby="dropdown4">
                <a class="dropdown-item" href="/signout">Signout</a>
              </div>
            </li>
          </ul>
        </div>
      </nav>
    </div>

    <a id="scroll-to-top">
      <i class="fa fa-angle-up"></i>
    </a>

    <!-- Themeswitcher - REMOVE THESE LINES -->
    <!-- <div class="themeswitcher">
      <div class="toggle"><i class="fa fa-gear"></i></div>
      <div class="colors">
        <h4>Choose Color</h4>
        <div class="color orange btn btn-default btn-block" data-color="orange"></div>
        <div class="color green btn btn-default btn-block" data-color="green"></div>
        <div class="color red btn btn-default btn-block" data-color="red"></div>
        <div class="color blue btn btn-default btn-block" data-color="blue"></div>
        <div class="color pink btn btn-default btn-block" data-color="pink"></div>

        <div class="color azure btn btn-default btn-block" data-color="azure"></div>
        <div class="color yellow btn btn-default btn-block" data-color="yellow"></div>
        <div class="color purple btn btn-default btn-block" data-color="purple"></div>
        <div class="color army btn btn-default btn-block" data-color="army"></div>
        <div class="color cadet btn btn-default btn-block" data-color="cadet"></div>
      </div>
    </div> -->
    <router-view />

    <!-- <div id="footer">
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
      <div id="links">
        <div class="container">
          <div class="row">
            <div class="col-sm-2">
              <p class="brand"><span>VDV</span></p>
            </div>
            <div class="col-sm-8">
              <ul class="list-inline">
                <li class="list-inline-item"><a href="home-masonry.html">Home</a></li>
                <li class="list-inline-item"><a href="page-about.html">About</a></li>
                <li class="list-inline-item"><a href="page-contact.html">Contact</a></li>
              </ul>
            </div>
            <div class="col-md-2">
              <ul class="list-inline">
                <li class="list-inline-item">
                  <a href="#"><i class="fa fa-facebook"></i></a>
                </li>
                <li class="list-inline-item">
                  <a href="#"><i class="fa fa-twitter"></i></a>
                </li>
                <li class="list-inline-item">
                  <a href="#"><i class="fa fa-instagram"></i></a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div> -->
  </div>
</template>

<style></style>
