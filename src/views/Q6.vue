<template>
  <div id="q6">
    <button v-on:click="test">a</button>
    <div class="header">
      <div class="head" id="cancel">
        <button>
          <router-link to="/">×</router-link>
        </button>
      </div>
      <div class="head" id="number">Q6</div>
      <div class="head"></div>
    </div>
    <div class="body">
      <div class="quetionTitle">好きなものは？</div>
      <div>
        <div class="select">
          <button
            class="Button2"
            v-bind:class="{ buttoncolor: State[1] }"
            v-on:click="check(1)"
          >
            お酒
          </button>
          <button
            class="Button2"
            v-bind:class="{ buttoncolor: State[2] }"
            v-on:click="check(2)"
          >
            読書
          </button>

          <button
            class="Button2"
            v-bind:class="{ buttoncolor: State[3] }"
            v-on:click="check(3)"
          >
            運動
          </button>
          <button
            class="Button2"
            v-bind:class="{ buttoncolor: State[4] }"
            v-on:click="check(4)"
          >
            音楽を聴く
          </button>

          <button
            class="Button2"
            v-bind:class="{ buttoncolor: State[5] }"
            v-on:click="check(5)"
          >
            旅行
          </button>
          <button
            class="Button2"
            v-bind:class="{ buttoncolor: State[6] }"
            v-on:click="check(6)"
          >
            掃除
          </button>

          <button
            class="Button2"
            v-bind:class="{ buttoncolor: State[7] }"
            v-on:click="check(7)"
          >
            ドライブ
          </button>
          <button
            class="Button2"
            v-bind:class="{ buttoncolor: State[8] }"
            v-on:click="check(8)"
          >
            演奏
          </button>
        </div>
      </div>
      <div class="button_wrapper">
        <router-link :to="{ name: pathName }">
          <button class="btn btn-c btn--green btn--cubic" v-on:click="dicbool">
            <i class="fa fas fa-envelope"></i>>結果を見る
          </button>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
import { collection, addDoc, getFirestore } from "firebase/firestore";

export default {
  props: ["receivedAnswer"],
  data: function () {
    return {
      gender: "OO",
      age_category: "",
      selectDic: {
        1: "お酒",
        2: "読書",
        3: "運動",
        4: "音楽を聴く",
        5: "旅行",
        6: "掃除",
        7: "ドライブ",
        8: "演奏",
      },
      State: {
        1: false,
        2: false,
        3: false,
        4: false,
        5: false,
        6: false,
        7: false,
        8: false,
      },
      q6: [],
      pathName: "Q6",
      received: [],
    };
  },
  methods: {
    test: function () {
      console.log("receivedAnswer", this.receivedAnswer);
      let q1Answer =
        this.receivedAnswer["receivedAnswer"]["receivedAnswer"][
          "receivedAnswer"
        ]["receivedAnswer"]["q1"];
      let q2Answer =
        this.receivedAnswer["receivedAnswer"]["receivedAnswer"][
          "receivedAnswer"
        ]["receivedAnswer"]["q2"];
      let q3Answer =
        this.receivedAnswer["receivedAnswer"]["receivedAnswer"][
          "receivedAnswer"
        ]["q3"];
      let q4Answer =
        this.receivedAnswer["receivedAnswer"]["receivedAnswer"]["q4"];
      let q5Answer = this.receivedAnswer["receivedAnswer"]["q5"];
      let q6Answer = this.receivedAnswer["q6"];
      console.log("q1Answer", q1Answer);
      console.log("q2Answer", q2Answer);
      console.log("q3Answer", q3Answer);
      console.log("q4Answer", q4Answer);
      console.log("q5Answer", q5Answer);
      console.log("q6Answer", q6Answer);
    },
    check: function (tag) {
      // すでにtrueのものだった場合はそれおfalseにする
      this.State[tag] = !this.State[tag];
      this.q6 = [];
      for (var key in this.State) {
        var genderVal = this.State[key];
        if (genderVal) {
          this.q6.push(this.selectDic[Number(key)]);
        } else {
          continue;
        }
      }
      this.receivedAnswer["q6"] = this.q6;
      //console.log(this.genderState)
    },

    //辞書型の中でtrueの値を持つkeyのみを抽出する関数
    dicbool: function () {
      if (this.q6.length === 0) {
        this.$swal({
          icon: "info",
          text: "選択してください。",
        });
      } else {
        this.postData();
        this.pathName = "Result";
      }
    },

    postData: function () {
      let q1Answer =
        this.receivedAnswer["receivedAnswer"]["receivedAnswer"][
          "receivedAnswer"
        ]["receivedAnswer"]["q1"];
      let q2Answer =
        this.receivedAnswer["receivedAnswer"]["receivedAnswer"][
          "receivedAnswer"
        ]["receivedAnswer"]["q2"];
      let q3Answer =
        this.receivedAnswer["receivedAnswer"]["receivedAnswer"][
          "receivedAnswer"
        ]["q3"];
      let q4Answer =
        this.receivedAnswer["receivedAnswer"]["receivedAnswer"]["q4"];
      let q5Answer = this.receivedAnswer["receivedAnswer"]["q5"];
      let q6Answer = this.receivedAnswer["q6"];

      var date = new Date();
      //年・月・日・曜日を取得する
      var year = date.getFullYear();
      var month = date.getMonth() + 1;
      var day = date.getDate();
      var hour = date.getHours();
      var minute = date.getMinutes();
      var second = date.getSeconds();

      var time =
        year +
        "年" +
        month +
        "月" +
        day +
        "日 " +
        hour +
        "時" +
        minute +
        "分" +
        second +
        "秒";

      const db = getFirestore();
      console.log("q2Answer", q2Answer);
      console.log("q3Answer", q3Answer);
      console.log("q4Answer", q4Answer);
      console.log("q5Answer", q5Answer);
      console.log("q6Answer", q6Answer);
      addDoc(collection(db, "AnswerData"), {
        q1: q1Answer,
        q2: q2Answer,
        q3: q3Answer,
        q4: q4Answer,
        q5: q5Answer,
        q6: q6Answer,
        date: time,
      });
    },

    //   // firebase.firestore().collection("UserInfo").add({
    //   //   gender: selectedGender,
    //   //   age: selectedAge,
    //   // });
    // },
  },
};
</script>

<style scoped>
@import url(../destyle.css);
#q6 {
  /* width: 500px; */
  display: grid;
  place-content: center;
  gap: 1ch;
}
.head {
  /* float: left; */
}
.header {
  background-color: #ffe100;
  width: 500px;
  top: 0px;
  height: 50px;
  display: flex;
  justify-content: center;
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

.select {
  display: grid;
  justify-items: center;
  align-items: center;
  grid-template-columns: repeat(2, 1fr);
  column-gap: 0px;
  row-gap: 10px;
  padding-bottom: 10px;
  /* background-color: black; */
}

.Button2 {
  width: 140px;
  height: 62px;
  left: 48px;
  top: 201px;

  background: #ffffff;
  border: 3px solid #67421e;
  box-sizing: border-box;
}

.buttoncolor {
  background-color: #67421e;
  color: #fff;
}
</style>
