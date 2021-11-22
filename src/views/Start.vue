<template>
  <div id="start">
    <div class="intro">1分かからず！</div>
    <div class="main1">あなたに合った</div>
    <div class="main2">ユニークなバナナ料理を</div>
    <div class="main3">ご提案。</div>
    <!-- <button><router-link to="/q1">バナナ診断をする</router-link></button> -->
    <router-link to="/q1">
      <button class="btn btn-c btn--green btn--cubic">
        <i class="fa fas fa-envelope"></i>>バナナ診断をする
      </button>
    </router-link>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
/* scoped 付けるとこのファイル内でしか適用されない */
#start {
  position: absolute;
  width: 100%;
  min-height: 100vh;
  background: #ffe100;
}

.intro {
  margin: 100px 0 0 0;
  /* position: relative; */
  /* top: calc(50% - 0.5em); */
  top: 100px;
  width: 100%;
  text-align: center;
  line-height: 1;
  font-size: 14px;
  font-family: Roboto;
  font-style: normal;
  font-weight: bold;
  color: black;
}

.main1 {
  margin: 100px 0 0 0;
  /* position: absolute;
  /* top: calc(50% - 0.5em); */
  /* top: 200px;  */
  width: 100%;
  text-align: center;
  line-height: 1;
  font-size: 18px;
  font-family: Roboto;
  font-style: normal;
  font-weight: bold;
  color: black;
}
.main2 {
  margin: 20px 0 0 0;
  /* position: absolute; */
  /* top: calc(50% - 0.5em); */
  /* top: 250px; */
  width: 100%;
  text-align: center;
  line-height: 1;
  font-size: 18px;
  font-family: Roboto;
  font-style: normal;
  font-weight: bold;
  color: black;
}
.main3 {
  margin: 20px 0 0 0;
  /* position: absolute; */
  /* top: calc(50% - 0.5em); */
  /* top: 300px; */
  width: 100%;
  text-align: center;
  line-height: 1;
  font-size: 18px;
  font-family: Roboto;
  font-style: normal;
  font-weight: bold;
  color: black;
}

button.btn {
  margin: 20px 0 0 0;
  /* position: absolute; */
  /* top: calc(50% - 0.5em); */
  /* top: 300px; */
  width: 60%;
  font-size: 14px;
}

button.btn--green {
  color: #fff;
  background-color: #67421e;
}

button.btn--green:hover {
  color: #fff;
  background: #67421e;
}

button.btn--green.btn--cubic {
  border-bottom: 3px solid #000c05;
}

button.btn--green.btn--cubic:hover {
  margin-top: 13px;
  border-bottom: 2px solid #000c05;
}

button.btn-c {
  font-size: 12px;
  position: relative;
  padding: 1.5rem 3rem 1.5rem 2rem;
  border-radius: 100vh;
}

button.btn-c i.fa {
  margin-right: 1rem;
}

button.btn-c:before {
  font-family: "Font Awesome 5 Free";
  font-size: 14px;
  line-height: 1;
  position: absolute;
  top: calc(50% - 0.8rem);
  right: 1rem;
  margin: 0;
  padding: 0;
}
</style>
