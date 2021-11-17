<template>
  <div id="q1">
    <h2>私の性別は {{ gender }} です。</h2>
    <div>あなたについて教えてください。</div>
    <div>
      <div>性別</div>
      <div class="gender">
        <button v-on:click="checkGender('男')">男</button>
        <button v-on:click="checkGender('女')">女</button>
        <button v-on:click="checkGender('その他')">その他</button>
        <!-- <div v-on:click="checkGender('男')">男</div>
        <div v-on:click="checkGender('女')">女</div>
        <div v-on:click="checkGender('その他')">その他</div> -->
      </div>
      <div>年代</div>
      <div class="age">
        <div>
          <button v-on:click="checkGender('10')">10代</button>
          <button v-on:click="checkGender('20')">20代</button>
          <button v-on:click="checkGender('30')">30代</button>
        </div>
        <div>
          <button v-on:click="checkGender('10')">40代</button>
          <button v-on:click="checkGender('20')">50代</button>
          <button v-on:click="checkGender('30')">60代</button>
        </div>
        <div>
          <button v-on:click="checkGender('10')">70代</button>
          <button v-on:click="checkGender('20')">80代</button>
          <button v-on:click="checkGender('30')">90代</button>
        </div>
      </div>
    </div>
    <button><router-link to="/result">診断結果</router-link></button>
  </div>
</template>

<script>
export default {
  data: function () {
    return {
      gender: "OO",
      age_category: "",
    };
  },
  methods: {
    checkGender: function (text) {
      this.gender = text;
    },
    sendData: function () {
      //
    },
  },
};
</script>

<style>
.gender {
  display: flex;
  justify-content: center;
}
/* 
button {
  padding: 10em;
} */
</style>
