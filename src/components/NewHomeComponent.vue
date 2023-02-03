<template>
  <div class="main-page">
    <div class="frame-50">
      <img class="background-1-1" src="bg-1.jpg" />
    </div>

    <div class="background-plain">
      <div class="rectangle-76"></div>
    </div>

    <div class="rec-frame">
      <div class="rec-1"></div>
    </div>

    <div class="logo">
      <img class="logo-1" src="logo.jpg" />
    </div>

    <div class="label-one">
      <div class="text-one">Book your future appointments.</div>
    </div>

    <div class="label-two">
      <div class="text-two">
        Browse and choose the best for you among our offered services.
      </div>
    </div>

    <div class="sign-in">
      <router-link :to="{ name: 'signin' }"
        ><div class="text-sign">Sign in with Google</div></router-link
      >
    </div>
  </div>
</template>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Merriweather:wght@300&family=Poppins&display=swap");

.main-page,
.main-page * {
  box-sizing: border-box;
}
.main-page {
  background: #ffffff;
  width: 1340px;
  height: 670px;
  position: relative;
  overflow: hidden;
}
.frame-50 {
  padding: 10px 10px 10px 10px;
  display: flex;
  flex-direction: row;
  gap: 10px;
  align-items: flex-start;
  justify-content: flex-start;
  position: absolute;
  left: 455px;
  top: -11px;
}
.background-1-1 {
  flex-shrink: 0;
  width: 881px;
  height: 660px;
  position: relative;
}
.background-plain {
  padding: 10px 10px 10px 10px;
  display: flex;
  flex-direction: row;
  gap: 10px;
  align-items: flex-start;
  justify-content: flex-start;
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
.rec-frame {
  display: flex;
  flex-direction: column;
  gap: 10px;
  align-items: flex-start;
  justify-content: flex-start;
  position: absolute;
  left: 368px;
  top: 460px;
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
}
.rec-1 {
  background: #fff4e3;
  border-radius: 9px;
  flex-shrink: 0;
  width: 188px;
  height: 35px;
  position: relative;
}
.logo {
  padding: 10px 10px 10px 10px;
  display: flex;
  flex-direction: column;
  gap: 10px;
  align-items: flex-start;
  justify-content: flex-start;
  position: absolute;
  left: 298px;
  top: 110px;
}
.logo-1 {
  border-radius: 50%;
  flex-shrink: 0;
  width: 311px;
  height: 307.03px;
  position: relative;
}
.label-one {
  padding: 10px 10px 10px 10px;
  display: flex;
  flex-direction: row;
  gap: 10px;
  align-items: flex-start;
  justify-content: flex-start;
  position: absolute;
  left: 75px;
  top: 600px;
}

.label-two {
  padding: 10px 10px 10px 10px;
  display: flex;
  flex-direction: row;
  gap: 10px;
  align-items: flex-start;
  justify-content: flex-start;
  position: absolute;
  left: 620px;
  top: 600px;
}

.sign-in {
  padding: 10px 10px 10px 10px;
  display: flex;
  flex-direction: row;
  gap: 10px;
  align-items: center;
  justify-content: center;
  position: absolute;
  left: 378px;
  top: 455px;
}
.text-sign {
  color: #e48700;
  text-align: left;
  text-decoration-line: underline;
  font: 500 16px "Poppins", sans-serif;
  font-weight: 550;
  position: relative;
}

.text-two {
  color: #c87318;
  text-align: left;
  font: 500 18px "Poppins", sans-serif;
  font-weight: 600;
  position: relative;
}

.text-one {
  color: #ffffff;
  text-align: left;
  font: 500 18px "Poppins", sans-serif;
  font-weight: 500;
  position: relative;
}
</style>
