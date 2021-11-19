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
import { collection, getDocs, getFirestore } from "firebase/firestore";

export default {
  data: function () {
    return {
      allData: [],
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
      this.loadData();
      console.log(this.allData);
    },

    loadData: function () {
      const db = getFirestore();
      console.log(db);
      const querySnapshot = getDocs(collection(db, "BananaList"));
      console.log(querySnapshot);

      querySnapshot.forEach((doc) => {
        // doc.data() is never undefined for query doc snapshots
        console.log(doc.id, " => ", doc.data());
      });
    },
  },
};
</script>

<style scoped></style>
