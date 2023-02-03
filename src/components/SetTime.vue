<script setup></script>

<template>
  <main>
    <div class="container-info">
      <div class="logo-div">
        <h1><img class="logo" src="logo.jpg" /></h1>
      </div>

      <div class="center-box">
        <div class="appointment-heading">BOOK AN APPOINTMENT</div>
        <hr class="line" width="50%" size="1" align="center" color="white" />
        <div class="select-date">Select Time:</div>
        <div class="container">
          <button class="time-box">10:00 AM</button>
          <button class="time-box">10:30 AM</button>
          <button class="time-box">11:00 AM</button>
          <button class="time-box">11:30 AM</button>
          <button class="time-box">12:00 PM</button>
          <button class="time-box">12:30 PM</button>
          <button class="time-box">01:00 PM</button>
          <button class="time-box">01:30 PM</button>
          <button class="time-box">02:00 PM</button>
          <button class="time-box">02:30 PM</button>
          <button class="time-box">03:00 PM</button>
          <button class="time-box">03:00 PM</button>
        </div>
        <router-link
          style="text-decoration: none; color: inherit"
          :to="{ name: 'selectpayment' }"
          ><div class="book-appointment">Proceed ></div></router-link
        >
        <router-link
          style="text-decoration: none; color: inherit"
          :to="{ name: 'setdate' }"
          ><div class="go-back">Go Back</div></router-link
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
    </div>

    <div class="products">
      <div class="box-2"></div>
    </div>
  </main>
</template>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Merriweather:wght@300&family=Poppins:wght@200&display=swap");

main {
  max-width: 100%;
  overflow-x: hidden;
}
.center-box {
  position: relative;
  z-index: 9999;
  padding: 30px 20px 10px 20px;
  top: 110px;
  left: 410px;
  width: 500px;
  height: 620px;
  border-radius: 8px;
  box-shadow: 2px 2px 2px gray;
  min-height: 490px;
  background-color: #e58a06;
  opacity: 0.85;
}
.appointment-heading {
  text-align: center;
  position: relative;
  margin-bottom: 52px;
  font: 400 18px "Poppins", sans-serif;
  color: white;
}
.line {
  position: relative;
  top: -52px;
  left: 112px;
  text-align: center;
}
.select-date {
  text-align: left;
  position: relative;
  margin-bottom: 12px;
  font: 400 16px "Poppins", sans-serif;
  color: white;
}
.time-box {
  margin: 10px;
  position: relative;
  width: 150px;
  height: 40px;
  font: 400 16px "Poppins", sans-serif;
  color: #b26900;
  background-color: white;
  border-width: 0px;
  border-radius: 8px;
}
.time-box {
  background-color: white;
}
.time-box:focus {
  background-color: #808080;
  color: #ffff;
  border-width: 3px;
  border-radius: 8px;
  border-color: white;
}

.header-div {
  position: relative;
  top: 15px;
  font: 400 15px "Poppins", sans-serif;
  color: white;
}

.book-appointment {
  z-index: 9999;
  padding-top: 4px;
  margin: auto;
  text-align: center;
  position: relative;
  font: 400 17px "Poppins", sans-serif;
  color: #ffff;

  border-radius: 8px;
  width: 210px;
  height: 33px;
  top: 15px;
  left: 5px;
}
.go-back {
  z-index: 9999;
  text-align: center;
  margin: auto;
  position: relative;
  color: #515151;
  font: 600 16px "Poppins", sans-serif;
  top: 20px;
  left: 5px;
}
@media screen and (max-width: 600px) {
  .center-box {
    width: 80%;

    top: 150px;
    left: 31px;
  }

  .book-appointment {
    left: -1px;
    top: 18px;
  }
  .go-back {
    left: -1px;
    top: 20px;
  }
  .line {
    left: 105px;
  }
}
.container-info {
  display: inline-block;
  position: absolute;
  width: 100%;
  height: 490px;
  min-height: 300px;
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
  min-height: 510px;
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

.rectangle {
  position: relative;
  left: 110px;
  top: 110px;
  width: 450px;
  height: 290px;
  background: #ffff;
  opacity: 0.8;
  border-radius: 35px;
}
@media screen and (max-width: 600px) {
  .container-main {
    width: 100%;
    height: 100%;
  }
  .rectangle {
    width: 60%;
  }
}
.products {
  position: relative;
}

.box-2 {
  float: left;
  width: 100%;
  height: 410px;
  background-color: #c6c6c5;
  border: 0.125px solid white;
}

@media screen and (max-width: 600px) {
  .box-2 {
    width: 100%;
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
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

:root {
  font-size: 3px;
  font: 600 15px "Poppins", sans-serif;
  color: #e48700;
}

h1 {
  text-align: center;
}
.container {
  position: relative;
  text-align: center;
  border-radius: 25%;
}
</style>
