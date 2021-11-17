<template>
  <div id="q1">
    <h2>私の性別は {{ gender }} です。</h2>
    <div>あなたについて教えてください。</div>
    <div>
      <div>性別</div>
      <div class="gender">
        <button
          v-bind:class="{ buttoncolor: genderState['男性'] }"
          v-on:click="checkGender('男性')"
        >
          男性
        </button>
        <button
          v-bind:class="{ buttoncolor: genderState['女性'] }"
          v-on:click="checkGender('女性')"
        >
          女性
        </button>
        <button
          v-bind:class="{ buttoncolor: genderState['その他'] }"
          v-on:click="checkGender('その他')"
        >
          その他
        </button>
      </div>
      <div>年代</div>
      <div class="age">
        <div>
          <button
            v-bind:class="{ buttoncolor: ageState[10] }"
            v-on:click="checkage(10)"
          >
            10代
          </button>
          <button
            v-bind:class="{ buttoncolor: ageState[20] }"
            v-on:click="checkage(20)"
          >
            20代
          </button>
          <button
            v-bind:class="{ buttoncolor: ageState[30] }"
            v-on:click="checkage(30)"
          >
            30代
          </button>
        </div>
        <div>
          <button
            v-bind:class="{ buttoncolor: ageState[40] }"
            v-on:click="checkage(40)"
          >
            40代
          </button>
          <button
            v-bind:class="{ buttoncolor: ageState[50] }"
            v-on:click="checkage(50)"
          >
            50代
          </button>
          <button
            v-bind:class="{ buttoncolor: ageState[60] }"
            v-on:click="checkage(60)"
          >
            60代
          </button>
        </div>
        <div>
          <button
            v-bind:class="{ buttoncolor: ageState[70] }"
            v-on:click="checkage(70)"
          >
            70代
          </button>
          <button
            v-bind:class="{ buttoncolor: ageState[80] }"
            v-on:click="checkage(80)"
          >
            80代
          </button>
          <button
            v-bind:class="{ buttoncolor: ageState['その他'] }"
            v-on:click="checkage('その他')"
          >
            90代
          </button>
        </div>
      </div>
    </div>
    <button v-on:click="dicbool">
      <router-link to="/q2">Q2へ</router-link>
    </button>
    <!-- <button><router-link to="/q2">Q2へ</router-link></button> -->
  </div>
</template>

<script>
//import firebase from "firebase/app";
//import { firebase } from "firebase/app";
import { collection, addDoc, getFirestore } from "firebase/firestore";

export default {
  data: function () {
    return {
      gender: "OO",
      age_category: "",
      genderState: { 男性: false, 女性: false, その他: false },
      ageState: {
        10: false,
        20: false,
        30: false,
        40: false,
        50: false,
        60: false,
        70: false,
        80: false,
        その他: false,
      },
      selectedGender: "",
      selectedAge: "",
    };
  },
  methods: {
    checkGender: function (text) {
      // すでにtrueのものだった場合はそれおfalseにする
      if (this.genderState[text]) {
        this.genderState[text] = !this.genderState[text];
      } else {
        this.genderState = { 男性: false, 女性: false, その他: false };
        this.gender = text;
        this.genderState[text] = !this.genderState[text];
      }

      //console.log(this.genderState)
    },

    checkage: function (text) {
      if (this.ageState[text]) {
        this.ageState[text] = !this.ageState[text];
      } else {
        this.ageState = {
          10: false,
          20: false,
          30: false,
          40: false,
          50: false,
          60: false,
          70: false,
          80: false,
          その他: false,
        };
        this.ageState[text] = !this.ageState[text];
      }

      //console.log(this.genderState)
    },

    postData: function (selectedGender, selectedAge) {
      const db = getFirestore();
      addDoc(collection(db, "UserInfo"), {
        gender: selectedGender,
        age: selectedAge,
      });
      // firebase.firestore().collection("UserInfo").add({
      //   gender: selectedGender,
      //   age: selectedAge,
      // });
    },

    //辞書型の中でtrueの値を持つkeyのみを抽出する関数
    dicbool: function () {
      for (var genderKey in this.genderState) {
        var genderVal = this.genderState[genderKey];
        if (genderVal) {
          this.selectedGender = genderKey;
          console.log(this.selectedGender);
        } else {
          continue;
        }
      }

      for (var key in this.ageState) {
        var ageVal = this.ageState[key];
        if (ageVal) {
          this.selectedAge = key;
          console.log(this.selectedAge);
        } else {
          continue;
        }
      }

      // eslint-disable-next-line no-undef
      this.postData(this.selectedGender, this.selectedAge);
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

.buttoncolor {
  background-color: green;
}
/* 
button {
  padding: 10em;
} */
</style>
