<template>
  <div id="q6">
    <div>Q6</div>
    <button v-on:click="test">a</button>
    <div v-if="receivedAnswer != undefined">
      {{ receivedAnswer }}
    </div>
    <div>バナナの印象を教えてください。</div>
    <div>＊複数選択可能</div>
    <div>
      <div class="select">
        <div>
          <button
            v-bind:class="{ buttoncolor: State[1] }"
            v-on:click="check(1)"
          >
            安価
          </button>
          <button
            v-bind:class="{ buttoncolor: State[2] }"
            v-on:click="check(2)"
          >
            健康に良い
          </button>
        </div>
        <div>
          <button
            v-bind:class="{ buttoncolor: State[3] }"
            v-on:click="check(3)"
          >
            美味しい
          </button>
          <button
            v-bind:class="{ buttoncolor: State[4] }"
            v-on:click="check(4)"
          >
            栄養価が高い
          </button>
        </div>
        <div>
          <button
            v-bind:class="{ buttoncolor: State[5] }"
            v-on:click="check(5)"
          >
            食べやすい
          </button>
          <button
            v-bind:class="{ buttoncolor: State[6] }"
            v-on:click="check(6)"
          >
            家にいつもある
          </button>
        </div>
        <div>
          <button
            v-bind:class="{ buttoncolor: State[7] }"
            v-on:click="check(7)"
          >
            小腹の補給用
          </button>
          <button
            v-bind:class="{ buttoncolor: State[8] }"
            v-on:click="check(8)"
          >
            腹持ちが良い
          </button>
        </div>
      </div>
    </div>
    <button v-on:click="postData">
      <router-link :to="{ name: 'Result' }">結果を見る</router-link>
    </button>
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
        1: "安価",
        2: "健康に良い",
        3: "美味しい",
        4: "栄養価が高い",
        5: "たべやすい",
        6: "家にいつもある",
        7: "小腹の補給要",
        8: "腹持ちが良い",
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
      received: [],
    };
  },
  methods: {
    test: function () {
      let q2Answer =
        this.receivedAnswer["receivedAnswer"]["receivedAnswer"][
          "receivedAnswer"
        ]["q2"];
      let q3Answer =
        this.receivedAnswer["receivedAnswer"]["receivedAnswer"][
          "receivedAnswer"
        ]["q3"];
      let q4Answer =
        this.receivedAnswer["receivedAnswer"]["receivedAnswer"]["q4"];
      let q5Answer = this.receivedAnswer["receivedAnswer"]["q5"];
      let q6Answer = this.receivedAnswer["q6"];
      console.log(q2Answer);
      console.log(q3Answer);
      console.log(q4Answer);
      console.log(q5Answer);
      console.log(q6Answer);
    },
    check: function (tag) {
      // すでにtrueのものだった場合はそれおfalseにする
      this.State[tag] = !this.State[tag];
      this.dicbool();
      this.receivedAnswer["q6"] = this.q6;
      //console.log(this.genderState)
    },

    //辞書型の中でtrueの値を持つkeyのみを抽出する関数
    dicbool: function () {
      this.q6 = [];
      for (var key in this.State) {
        var genderVal = this.State[key];
        if (genderVal) {
          this.q6.push(this.selectDic[Number(key)]);
        } else {
          continue;
        }
      }
    },

    postData: function () {
      let q2Answer =
        this.receivedAnswer["receivedAnswer"]["receivedAnswer"][
          "receivedAnswer"
        ]["q2"];
      let q3Answer =
        this.receivedAnswer["receivedAnswer"]["receivedAnswer"][
          "receivedAnswer"
        ]["q3"];
      let q4Answer =
        this.receivedAnswer["receivedAnswer"]["receivedAnswer"]["q4"];
      let q5Answer = this.receivedAnswer["receivedAnswer"]["q5"];
      let q6Answer = this.receivedAnswer["q6"];
      const db = getFirestore();
      addDoc(collection(db, "AnswerData"), {
        q2: q2Answer,
        q3: q3Answer,
        q4: q4Answer,
        q5: q5Answer,
        q6: q6Answer,
      });
    },

    // postData: function () {
    //   const db = getFirestore();
    //   addDoc(collection(db, "UserInfo"), {
    //     gender: selectedGender,
    //     age: selectedAge,
    //   });
    //   // firebase.firestore().collection("UserInfo").add({
    //   //   gender: selectedGender,
    //   //   age: selectedAge,
    //   // });
    // },
  },
};
</script>

<style></style>
