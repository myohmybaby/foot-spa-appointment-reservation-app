<script setup></script>

<template>
  <main>
    <div class="container-info">
      <div class="logo-div">
        <h1><img class="logo" src="logo.jpg" /></h1>
      </div>

      <div class="foot-care-div-1">
        <div class="foot-care-title">Foot Care Services</div>

        <hr width="100%" size="1" align="left" color="white" />
      </div>

      <div class="product-box">
        <div class="product-image">
          <img class="image" src="nail-care.jpg" />
        </div>
        <div class="product-name">
          <h2 style="font-weight: 400">Nail</h2>
          <h2 style="font-weight: 400">Care</h2>
        </div>
        <router-link
          style="text-decoration: none; color: inherit"
          :to="{ name: 'nailcare' }"
          ><div class="price-details-div">
            <div class="price">Php 250.00</div>
            <div class="details">Details →</div>
          </div></router-link
        >
      </div>

      <div class="product-box-2">
        <div class="product-image">
          <img class="image" src="milk-soak.jpg" />
        </div>
        <div class="product-name">
          <h2 style="font-weight: 400">Milky Floral</h2>
          <h2 style="font-weight: 400">Foot Soak</h2>
        </div>
        <router-link
          style="text-decoration: none; color: inherit"
          :to="{ name: 'milkysoak' }"
          ><div class="price-details-div">
            <div class="price">Php 450.00</div>
            <div class="details">Details →</div>
          </div></router-link
        >
      </div>
    </div>

    <div class="container-main">
      <header class="nav">
        <input type="checkbox" id="nav-check" />
        <div class="nav-header"></div>
        <div class="nav-btn">
          <label for="nav-check">
            <span></span>
            <span></span>
            <span></span>
          </label>
        </div>

        <div class="nav-links">
          <router-link :to="{ name: 'welcome' }"
            ><div class="text-sign">Home</div></router-link
          >
          <router-link :to="{ name: 'services' }"
            ><div class="text-sign">Services</div></router-link
          >
          <router-link :to="{ name: 'appointments' }"
            ><div class="text-sign">Appointments</div></router-link
          >
          <router-link :to="{ name: 'notifications' }"
            ><div class="text-sign">Notifications</div></router-link
          >
          <router-link :to="{ name: 'notifications' }"
            ><div class="text-sign">Sign Out</div></router-link
          >
        </div>
      </header>

      <div class="product-box-3">
        <div class="product-image">
          <img class="image" src="PEPPERMINT-FOOT-SCRUB.jpg" />
        </div>
        <div class="product-name">
          <h2 style="font-weight: 400">Peppermint</h2>
          <h2 style="font-weight: 400">Foot Scrub</h2>
        </div>
        <router-link
          style="text-decoration: none; color: inherit"
          :to="{ name: 'peppermintscrub' }"
          ><div class="price-details-div">
            <div class="price">Php 750.00</div>
            <div class="details">Details →</div>
          </div></router-link
        >
      </div>

      <div class="product-box-4">
        <div class="product-image">
          <img class="image" src="moisturizing.jpg" />
        </div>
        <div class="product-name">
          <h2 style="font-weight: 400">Moisturizing</h2>
          <h2 style="font-weight: 400">Foot Mask</h2>
        </div>
        <router-link
          style="text-decoration: none; color: inherit"
          :to="{ name: 'moisturizing' }"
          ><div class="price-details-div">
            <div class="price">Php 650.00</div>
            <div class="details">Details →</div>
          </div></router-link
        >
      </div>
    </div>

    <div class="products">
      <div class="box-2">
        <div class="foot-care-div-2">
          <div class="foot-care-title-2">Foot Massage and Treatments</div>

          <hr width="100%" size="1" align="left" color="white" />
        </div>

        <div class="product-box-5">
          <div class="product-image">
            <img class="image" src="oriental.jpg" />
          </div>
          <div class="product-name">
            <h2 style="font-weight: 400">Oriental Foot</h2>
            <h2 style="font-weight: 400">Therapy</h2>
          </div>
          <router-link
            style="text-decoration: none; color: inherit"
            :to="{ name: 'oriental' }"
            ><div class="price-details-div">
              <div class="price">Php 950.00</div>
              <div class="details">Details →</div>
            </div></router-link
          >
        </div>

        <div class="product-box-6">
          <div class="product-image">
            <img class="image" src="thai.jpg" />
          </div>
          <div class="product-name">
            <h2 style="font-weight: 400">Thai Foot</h2>
            <h2 style="font-weight: 400">Massage</h2>
          </div>
          <router-link
            style="text-decoration: none; color: inherit"
            :to="{ name: 'thaimassage' }"
            ><div class="price-details-div">
              <div class="price">Php 1000.00</div>
              <div class="details">Details →</div>
            </div></router-link
          >
        </div>

        <div class="product-box-7">
          <div class="product-image">
            <img class="image" src="swedish-foot-massage.jpg" />
          </div>
          <div class="product-name">
            <h2 style="font-weight: 400">Swedish Foot</h2>
            <h2 style="font-weight: 400">Massage</h2>
          </div>
          <router-link
            style="text-decoration: none; color: inherit"
            :to="{ name: 'swedishmassage' }"
            ><div class="price-details-div">
              <div class="price">Php 650.00</div>
              <div class="details">Details →</div>
            </div></router-link
          >
        </div>

        <div class="product-box-8">
          <div class="product-image">
            <img class="image" src="deep-tissue-massage.jpg" />
          </div>
          <div class="product-name">
            <h2 style="font-weight: 400">Deep Tissue</h2>
            <h2 style="font-weight: 400">Foot Massage</h2>
          </div>
          <router-link
            style="text-decoration: none; color: inherit"
            :to="{ name: 'deepmassage' }"
            ><div class="price-details-div">
              <div class="price">Php 850.00</div>
              <div class="details">Details →</div>
            </div></router-link
          >
        </div>
      </div>
    </div>
  </main>
</template>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Merriweather:wght@300&family=Poppins:wght@200&display=swap");

main {
  max-width: 100%;
  overflow-x: hidden;
}
.container-info {
  display: inline-block;
  position: relative;
  width: 100%;
  min-height: 490px;
  background: #ecbc76;
}
@media (min-width: 768px) {
  .container-info {
    float: left;
    /*position: fixed;*/
    left: 0;
    top: 0;
    height: 100%;
    width: 50%;
  }
}

.container-main {
  background-image: url(background-try.jpg);
  background-repeat: no-repeat;
  border-radius: 0;
  display: inline-block;
  position: relative;
  min-height: 490px;
}
@media (min-width: 768px) {
  .container-main {
    float: right;
    /*position: fixed;*/
    right: 0;
    top: 0;
    height: 0%;
    width: 50%;
  }
}
.logo-div {
  display: flex;
  flex-direction: row;
  gap: 10px;
  align-items: flex-start;
  justify-content: flex-start;
  width: 209px;
  position: absolute;
  left: 25px;
  top: 10px;
}
.logo {
  border-radius: 50%;
  width: 86px;
  height: 86px;
}

.foot-care-div-1 {
  padding-top: -3px;
  position: relative;
  left: 30px;
  top: 135px;
  width: 30%;
  height: 25px;
  background: #ffff;
  border-radius: 35px;
  box-shadow: 2px 2px 5px #706f6f;
}
.foot-care-div-2 {
  padding-top: -3px;
  position: relative;
  left: 30px;
  top: 30px;
  width: 20%;
  height: 25px;
  background: #ffff;
  border-radius: 35px;
  box-shadow: 2px 2px 5px #706f6f;
}
.foot-care-title {
  padding-left: -7px;
  font: 400 16px "Poppins", sans-serif;
  color: #e48700;
  padding-top: 1px;
  text-align: center;
}
.foot-care-title-2 {
  padding-left: -7px;
  font: 400 16px "Poppins", sans-serif;
  color: #767676;
  padding-top: 1px;
  text-align: center;
}

@media screen and (max-width: 600px) {
  .foot-care-div-1 {
    width: 85%;
  }
  .foot-care-div-2 {
    width: 85%;
  }
  .product-box {
    width: 60%;
  }
}
.products {
  position: relative;
}
.product-box {
  padding-top: 12px;
  padding-left: 15px;
  position: relative;
  top: 155px;
  left: 31px;
  width: 280px;
  height: 130px;
  background-color: #e58a06;
  box-shadow: 2px 2px 5px #706f6f;
}
.product-box-2 {
  padding-top: 12px;
  padding-left: 15px;
  position: relative;
  top: 13px;
  left: 344px;
  width: 280px;
  height: 130px;
  background-color: #e58a06;
  box-shadow: 2px 2px 5px #706f6f;
}
.product-box-3 {
  padding-top: 12px;
  padding-left: 15px;
  position: relative;
  top: 129px;
  left: 31px;
  width: 280px;
  height: 130px;
  background-color: #e58a06;
  box-shadow: 2px 2px 5px #706f6f;
}
.product-box-4 {
  padding-top: 12px;
  padding-left: 15px;
  position: relative;
  top: -13px;
  left: 345px;
  width: 280px;
  height: 130px;
  background-color: #e58a06;
  box-shadow: 2px 2px 5px #706f6f;
}
.product-box-5 {
  padding-top: 12px;
  padding-left: 15px;
  position: relative;
  top: 55px;
  left: 31px;
  width: 280px;
  height: 130px;
  background-color: #e58a06;
  box-shadow: 2px 2px 5px #706f6f;
}
.product-box-6 {
  padding-top: 12px;
  padding-left: 15px;
  position: relative;
  top: -87px;
  left: 344px;
  width: 280px;
  height: 130px;
  background-color: #e58a06;
  box-shadow: 2px 2px 5px #706f6f;
}
.product-box-7 {
  padding-top: 12px;
  padding-left: 15px;
  position: relative;
  top: -229px;
  left: 695px;
  width: 280px;
  height: 130px;
  background-color: #e58a06;
  box-shadow: 2px 2px 5px #706f6f;
}
.product-box-8 {
  padding-top: 12px;
  padding-left: 15px;
  position: relative;
  top: -371px;
  left: 1010px;
  width: 280px;
  height: 130px;
  background-color: #e58a06;
  box-shadow: 2px 2px 5px #706f6f;
}

.product-image {
  width: 70%;
  height: 130px;
}
.image {
  width: 80%;
  height: 90%;
}
.product-name {
  font: 600 10px "Poppins", sans-serif;
  color: white;
  position: relative;
  left: 170px;
  top: -145px;
}
.price-details-div {
  position: relative;
  left: 165px;
  top: -150px;
}
.price {
  text-align: center;
  font: 600 13px "Poppins", sans-serif;
  background-color: white;
  border-radius: 13px;
  width: 100px;
  color: #e48700;
}
.details {
  position: relative;
  top: 12px;
  font: 400 15px "Poppins", sans-serif;
  color: white;
}

.box-2 {
  float: left;
  width: 100%;
  height: 830px;
  background-color: #c6c6c5;
  border: 0.125px solid white;
}

@media screen and (max-width: 600px) {
  .container-main {
    width: 100%;
  }
  .box-2 {
    width: 100%;
  }
  .product-box {
    width: 80%;
  }
  .product-box-2 {
    width: 80%;
    top: 164px;
    left: 31px;
  }
  .product-box-3 {
    width: 80%;
    top: 34px;
    left: 122px;
  }
  .product-box-4 {
    width: 80%;
    top: 45px;
    left: 122px;
  }
  .product-box-5 {
    width: 80%;
  }
  .product-box-6 {
    width: 80%;
    left: 31px;
    top: 70px;
  }
  .product-box-7 {
    width: 80%;
    left: 31px;
    top: 85px;
  }
  .product-box-8 {
    width: 80%;
    left: 31px;
    top: 102px;
  }
  .image {
    width: 60%;
  }
  .product-name {
    width: 80%;
  }
}

.nav {
  height: 50px;
  width: 100%;
  background-color: white;
  opacity: 0.8;
  position: relative;
}

.nav > .nav-header {
  display: inline;
}

.nav > .nav-header > .nav-title {
  display: inline-block;
  font-size: 22px;
  color: #c6c6c5;
  padding: 10px 10px 10px 10px;
}

.nav > .nav-btn {
  display: none;
}

.nav > .nav-links {
  display: inline;
  float: right;
  font-size: 16px;
}

.nav > .nav-links > a {
  display: inline-block;
  padding: 13px 10px 13px 10px;
  text-decoration: none;
  color: #e48700;
}

.nav > .nav-links > a:hover {
  background-color: #c6c6c5;
}

.nav-links {
  font: 600 15px "Poppins", sans-serif;
}

.nav > #nav-check {
  display: none;
}

@media (max-width: 600px) {
  .nav > .nav-btn {
    display: inline-block;
    position: absolute;
    right: 0px;
    top: 0px;
  }
  .nav > .nav-btn > label {
    display: inline-block;
    width: 20px;
    height: 20px;
    padding: 13px;
  }
  .nav > .nav-btn > label:hover,
  .nav #nav-check:checked ~ .nav-btn > label {
    background-color: rgba(0, 0, 0, 0.3);
  }
  .nav > .nav-btn > label > span {
    display: block;
    width: 25px;
    height: 10px;
    border-top: 2px solid #706f6f;
  }
  .nav > .nav-links {
    position: absolute;
    display: block;
    width: 100%;
    background-color: #333;
    height: 0px;
    transition: all 0.3s ease-in;
    overflow-y: hidden;
    top: 50px;
    left: 0px;
  }
  .nav > .nav-links > a {
    display: block;
    width: 100%;
  }
  .nav > #nav-check:not(:checked) ~ .nav-links {
    height: 0px;
  }
  .nav > #nav-check:checked ~ .nav-links {
    height: calc(100vh - 50px);
    overflow-y: auto;
  }
  .text-sign {
    font: 600 15px "Poppins", sans-serif;
    color: #e48700;
  }
}
</style>
