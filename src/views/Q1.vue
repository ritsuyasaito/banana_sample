<template>
  <div id="q1">
    <h2>私の性別は {{ gender }} です。</h2>
    <div>あなたについて教えてください。</div>
    <div>
      <div v-on:click="checkGender('男')">男</div>
      <div v-on:click="checkGender('女')">女</div>
      <div v-on:click="checkGender('その他')">その他</div>
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

<style></style>
