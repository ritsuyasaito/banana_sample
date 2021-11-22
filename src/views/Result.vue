<template>
  <div id="result">
    <button v-on:click="test">a</button>
    <div class="header">
      <div class="head" id="cancel">
        <button>
          <router-link to="/">×</router-link>
        </button>
      </div>
      <div class="head" id="number">診断結果</div>
      <div class="head"></div>
    </div>
    <div class="body">
      <div class="block">
        <div>あなたにおすすめのバナナ料理は</div>
        <div class="cookTitle">{{ title }}</div>
        <img
          class="cookImg"
          src="../assets/logo.png"
          alt="image"
          title="空と海"
        />
        <div class="introText">
          ここに説明文ここに説明文ここに説明文ここに説明文ここに説明文ここに説明文ここに説明文ここに説明文ここに説明文ここに説明文ここに説明文ここに説明文ここに説明文
        </div>
      </div>
      <div class="v_line_fix"></div>
      <div class="block">
        <div class="subTitle">おすすめのバナナスタイル</div>
        <div class="bananaStryle">
          ここに説明文ここに説明文ここに説明文ここに説明文ここに説明文ここに説明文ここに説明文ここに説明文ここに説明文ここに説明文ここに説明文ここに説明文ここに説明文
        </div>
      </div>
      <div class="v_line_fix"></div>
      <div class="block">
        <div class="subTitle">調理方法</div>
        <div class="bananaStryle">
          こに説明文ここに説明文ここに説明文ここに説明文ここに説明文ここに説明文ここに説明文ここに説明文ここに説明文ここに説明文ここに説明文ここに説明文ここに説明文
        </div>
        <div class="time">調理時間：10分</div>
      </div>
      <div id="last-messeage">
        <div id="last-text">国産バナナを生産しております。</div>
        <div class="kodawari-button">
          <button
            type="“button”"
            onclick="location.href='https://shobaien.com/'"
          >
            勝梅園のこだわり
          </button>
        </div>

        <div class="ToTop">
          <router-link :to="{ name: 'Start' }">
            <button>Topへ</button>
          </router-link>
        </div>
      </div>
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

<style scoped>
@import url(../destyle.css);
#result {
  /* width: 500px; */
  display: grid;
  place-content: center;
  gap: 1ch;
  background-color: #f6f4f4;
}
.head {
  /* float: left; */
}
.header {
  background-color: #ffe100;
  width: 500px;
  top: 0px;
  height: 50px;
  /* display: flex; */
  /* justify-content: center; */
  /* text-align: center; */
  margin: 0 auto;
}

.header .head:nth-child(1) {
  color: #fff;
  align-self: center;
  font-size: 24px;
  flex-basis: 100px;
}

.header .head:nth-child(2) {
  color: #fff;
  /* 縦幅の中央揃え */
  align-self: center;
  font-family: Roboto;
  font-weight: bolder;
  font-size: 24px;
  flex-basis: 280px;
}
.header .head:nth-child(3) {
  background-color: green;
  /* 縦幅の中央揃え */
  align-self: center;

  font-size: 24px;
  flex-basis: 100px;
}

.body {
  width: 500px;
}

@media (max-width: 500px) {
  .header {
    width: 390px;
  }
  .quetionTitle {
    width: 350px;
  }
  .body {
    width: 390px;
  }
}

/* ここから */
.block {
  background-color: #fff;
  border-radius: 20px;
  margin-left: 20px;
  margin-right: 20px;
}

.v_line_fix {
  margin: 0 auto;
  width: 3px;
  height: 60px;
  background-color: #67421e;
}

.cookTitle {
  font-family: Roboto;
  font-style: normal;
  font-weight: bold;
  font-size: 36px;
  display: flex;
  align-items: flex-end;
  text-align: center;
  padding-right: 50px;
  padding-left: 50px;
}

.cookImg {
  border-radius: 20px;
}

.introText {
  font-family: Roboto;
  font-style: normal;
  font-weight: bold;
  font-size: 24px;
  line-height: 35px;
  /* or 146% */

  display: flex;
  align-items: center;
  text-align: center;
  padding: 30px 25px 30px 25px;

  color: #000000;
}

.subTitle {
  font-family: Roboto;
  font-style: normal;
  font-weight: bold;
  font-size: 20px;
  text-align: center;
  margin-left: auto;
  margin-right: auto;
  padding-top: 30px;
  padding-bottom: 30px;
}

.bananaStryle {
  font-family: Roboto;
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 30px;
  padding: 10px 50px 30px 50px;
  /* or 214% */

  text-align: center;
}

.HowToCook {
  font-family: Roboto;
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 10px;
  padding: 10px 50px 30px 50px;
  /* or 214% */
  text-align: center;
}

.time {
  font-family: Roboto;
  font-style: normal;
  font-weight: bold;
  font-size: 14px;
  line-height: 16px;
  text-align: center;
  margin-left: auto;
  margin-right: auto;
  padding-top: 10px;
  padding-bottom: 30px;
}

#last-text {
  font-family: Roboto;
  font-style: normal;
  font-weight: bold;
  font-size: 18px;
  line-height: 21px;
  text-align: center;
  margin-left: auto;
  margin-right: auto;
  padding-top: 70px;
  padding-bottom: 30px;
}

.kodawari-button {
  display: flex;
  justify-content: center;
}

.kodawari-button button {
  text-align: center;
  display: block;
  position: relative;
  /* margin: 0 auto; */
  margin: 20px 30px 50px 30px;
  padding: 1em 2em;
  width: 300px;
  color: #fff;
  font-size: 18px;
  font-weight: 700;
  background-color: #67421e;
  border-radius: 50vh;
  transition: 0.3s;
}

.kodawari-button button::before {
  content: "";
  position: absolute;
  top: 50%;
  right: 10px;
  transform: translateY(-50%);
  width: 50px;
  height: 50px;
  background-color: #f2f2f2;
  border-radius: 50vh;
}

.kodawari-button button::after {
  content: "";
  position: absolute;
  top: 50%;
  right: 32px;
  transform: translateY(-50%) rotate(45deg);
  width: 5px;
  height: 5px;
  border-top: 3px solid #333333;
  border-right: 3px solid #333333;
}

.kodawari-button button:hover {
  text-decoration: none;
  background-color: #cccccc;
}

.ToTop button {
  /* display: flex; */
  /* justify-content: space-between; */
  align-items: center;
  text-align: center;
  margin: 0px 0px 50px 0px;
  padding: 1em 2em 1em 2em;
  width: 300px;
  color: #67421e;
  font-size: 18px;
  font-weight: 700;
  border: 3px solid #67421e;
  border-radius: 50vh;
}

.ToTop button ::after {
  content: "";
  width: 5px;
  height: 5px;
  border-top: 3px solid #2285b1;
  border-right: 3px solid #2285b1;
  transform: rotate(45deg);
}

.ToTop button :hover {
  color: #333333;
  text-decoration: none;
  background-color: #a0c4d3;
}

.ToTop button :hover::after {
  border-top: 3px solid #333333;
  border-right: 3px solid #333333;
}
</style>
