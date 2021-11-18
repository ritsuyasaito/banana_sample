<template>
  <div id="result">
    <button v-on:click="test">a</button>
    <div id="first-block">
      <div>あなたにおすすめのバナナは</div>
      <div>{{ title }}</div>
      <img src="../assets/logo.png" alt="image" title="空と海" />
      <div>
        ここに説明文ここに説明文ここに説明文ここに説明文ここに説明文ここに説明文ここに説明文ここに説明文ここに説明文ここに説明文ここに説明文ここに説明文ここに説明文
      </div>
    </div>
    <div id="second-block">
      <div>おすすめのバナナスタイル</div>
      <div>
        ここに説明文ここに説明文ここに説明文ここに説明文ここに説明文ここに説明文ここに説明文ここに説明文ここに説明文ここに説明文ここに説明文ここに説明文ここに説明文
      </div>
    </div>
    <div id="third-block">
      <div>調理方法</div>
      <div>
        ここに説明文ここに説明文ここに説明文ここに説明文ここに説明文ここに説明文ここに説明文ここに説明文ここに説明文ここに説明文ここに説明文ここに説明文ここに説明文
      </div>
    </div>
    <div id="last-messeage">
      <div>国産バナナを製造しています</div>
      <button type="“button”" onclick="location.href='https://shobaien.com/'">
        勝梅園のこだわり
      </button>
    </div>
  </div>
</template>

<script>
export default {
  data: function () {
    return {
      title: "",
      time: "",
      recommend: "",
      imageUrl: "",
      category: "",
      features: "",
    };
  },
  methods: {
    test: function () {
      this.title = "青バナナのベーコン巻き";
      this.imageUrl = "../assets/logo.png";
      console.log(this.receivedAnswer);
    },
  },
};
</script>

<style></style>
