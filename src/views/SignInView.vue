<script setup></script>

<template>
  <div class="sign-in-page">
    <div class="frame-52">
      <img class="background-1-3" src="bg-1.jpg" />
    </div>

    <div class="frame-51">
      <div class="rectangle-76"></div>
    </div>

    <div class="frame-53">
      <div class="rectangle-13"></div>
    </div>

    <div class="frame-54">
      <div class="welcome-to-la-caresse">
        <span
          ><span class="welcome-to-la-caresse-span">Welcome to </span
          ><span class="welcome-to-la-caresse-span3">La Caresse</span></span
        >
      </div>
    </div>

    <div class="frame-56">
      <div class="sign-in2">Sign In</div>
    </div>

    <div class="frame-55">
      <div class="sign-up-div">
        <span
          ><span class="no-account---sign-up-span">No Account?<br /></span
          ><span class="no-account---sign-up-span2">Sign Up</span></span
        >
      </div>
    </div>

    <div class="frame-57">
      <div class="enter-your-email-address">Enter your Email Address</div>
    </div>

    <div class="frame-58">
      <input type="email" class="input-email" placeholder=" Email" />
    </div>

    <div class="frame-59">
      <div class="enter-your-password">Enter your Password</div>
    </div>

    <div class="frame-60">
      <input type="password" class="input-email" placeholder=" Password" />
    </div>

    <div class="frame-64">
      <router-link :to="{ name: 'home' }"
        ><div class="go-back">Go Back</div></router-link
      >
    </div>

    <router-link :to="{ name: 'welcome' }"
      ><div class="rectangle-18"></div
    ></router-link>

    <div class="frame-62">
      <div class="sign-in">Sign in</div>
    </div>
  </div>
</template>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Merriweather:wght@300&family=Poppins&display=swap");

.sign-in-page,
.sign-in-page * {
  box-sizing: border-box;
}
.sign-in-page {
  background: #ffffff;
  width: 1341px;
  height: 700px;
  position: relative;
  overflow: hidden;
}
.frame-52 {
  padding: 10px 10px 10px 10px;
  display: flex;
  flex-direction: row;
  gap: 10px;
  align-items: flex-start;
  justify-content: flex-start;
  position: absolute;
  left: 450px;
  top: -10px;
}
.background-1-3 {
  flex-shrink: 0;
  width: 881px;
  height: 660px;
  position: relative;
}
.frame-51 {
  padding: 10px 10px 20px 10px;
  display: flex;
  flex-direction: row;
  gap: 10px;
  align-items: flex-start;
  justify-content: flex-start;
  height: 670px;
  position: absolute;
  left: -10px;
  top: -10px;
}
.rectangle-76 {
  background: #ecbc76;
  flex-shrink: 0;
  width: 465px;
  height: 660px;
  position: relative;
}
.frame-53 {
  padding: 10px 10px 10px 10px;
  display: flex;
  flex-direction: row;
  gap: 10px;
  align-items: flex-start;
  justify-content: flex-start;
  width: 457px;
  height: 574px;
  position: absolute;
  left: 408px;
  top: 46px;
}
.rectangle-13 {
  background: #ffffff;
  border-radius: 40px;
  flex-shrink: 0;
  width: 457px;
  height: 549px;
  position: relative;
  box-shadow: 0px 4px 35px 0px rgba(0, 0, 0, 0.08);
}
.frame-54 {
  padding: 10px 10px 10px 10px;
  display: flex;
  flex-direction: row;
  gap: 10px;
  align-items: flex-start;
  justify-content: flex-start;
  width: 209px;
  position: absolute;
  left: 444px;
  top: 87px;
}
.welcome-to-la-caresse {
  text-align: left;
  font: 400 16px "Poppins", sans-serif;
  position: relative;
}
.welcome-to-la-caresse-span {
  color: #000000;
  font: 400 16px "Poppins", sans-serif;
}
.welcome-to-la-caresse-span2 {
  color: #e48700;
  font: 400 16px "Poppins", sans-serif;
}
.welcome-to-la-caresse-span3 {
  color: #000000;
  font: 400 16px "Poppins", sans-serif;
}
.frame-55 {
  padding: 10px 10px 10px 10px;
  display: flex;
  flex-direction: row;
  gap: 10px;
  align-items: flex-start;
  justify-content: flex-start;
  width: 113px;
  position: absolute;
  left: 718px;
  top: 83px;
}
.sign-up-div {
  text-align: left;
  font: 400 14px "Poppins", sans-serif;
  position: relative;
}
.no-account---sign-up-span {
  color: #8d8d8d;
  font: 400 16px "Poppins", sans-serif;
}
.no-account---sign-up-span2 {
  color: #b87514;
  font: 400 16px "Poppins", sans-serif;
}
.frame-57 {
  padding: 10px 10px 10px 10px;
  display: flex;
  flex-direction: row;
  gap: 10px;
  align-items: flex-start;
  justify-content: flex-start;
  width: 199px;
  position: absolute;
  left: 444px;
  top: 243px;
}
.enter-your-email-address {
  color: #000000;
  text-align: left;
  font: 400 14px "Poppins", sans-serif;
  position: relative;
}
.frame-58 {
  padding: 10px 10px 10px 10px;
  display: flex;
  flex-direction: column;
  gap: 10px;
  align-items: flex-start;
  justify-content: flex-start;
  width: 385px;
  position: absolute;
  left: 444px;
  top: 275px;
}
.input-email {
  font: 500 16px "Poppins", sans-serif;
  background: #ffffff;
  border-radius: 9px;
  border: solid #4285f4;
  border-width: 1px;
  text-indent: 10px;
  flex-shrink: 0;
  width: 389px;
  height: 50px;
  position: relative;
}
.frame-59 {
  padding: 10px 10px 10px 10px;
  display: flex;
  flex-direction: row;
  gap: 10px;
  align-items: flex-start;
  justify-content: flex-start;
  width: 165px;
  position: absolute;
  left: 444px;
  top: 357px;
}
.enter-your-password {
  color: #000000;
  text-align: left;
  font: 400 14px "Poppins", sans-serif;
  position: relative;
}
.frame-60 {
  padding: 10px 10px 10px 10px;
  display: flex;
  flex-direction: column;
  gap: 10px;
  align-items: flex-start;
  justify-content: flex-start;
  width: 385px;
  position: absolute;
  left: 444px;
  top: 388px;
}
.rectangle-172 {
  background: #ffffff;
  border-radius: 9px;
  border: solid #adadad;
  border-width: 1px;
  flex-shrink: 0;
  width: 389px;
  height: 50px;
  position: relative;
}
.frame-64 {
  padding: 10px 10px 10px 10px;
  display: flex;
  flex-direction: row;
  gap: 10px;
  align-items: flex-start;
  justify-content: flex-start;
  position: absolute;
  left: 611px;
  top: 534px;
}
.go-back {
  text-decoration-line: underline;
  color: #e48700;
  text-align: left;
  font: 400 16px "Poppins", sans-serif;
  position: relative;
}
.rectangle-18 {
  background: #e48700;
  border-radius: 46px;
  width: 389px;
  height: 47px;
  position: absolute;
  left: 454px;
  top: 487px;
  box-shadow: 0px 4px 19px 0px rgba(119, 147, 65, 0.3);
}
.frame-62 {
  padding: 10px 10px 10px 10px;
  display: flex;
  flex-direction: row;
  gap: 10px;
  align-items: flex-start;
  justify-content: flex-start;
  width: 72px;
  position: absolute;
  left: 617px;
  top: 489px;
}
.sign-in {
  color: #ffffff;
  text-align: left;
  font: 500 15px "Poppins", sans-serif;
  position: relative;
}
.frame-56 {
  padding: 10px 10px 10px 10px;
  display: flex;
  flex-direction: row;
  gap: 10px;
  align-items: flex-start;
  justify-content: flex-start;
  width: 168px;
  position: absolute;
  left: 444px;
  top: 111px;
}
.sign-in2 {
  color: #515151;
  text-align: left;
  font: 500 35px "Poppins", sans-serif;
  position: relative;
}
</style>
