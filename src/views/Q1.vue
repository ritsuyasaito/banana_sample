<template>
  <div id="q1">
    <div class="header">
      <div class="head" id="cancel">
        <button>
          <router-link to="/">×</router-link>
        </button>
      </div>
      <div class="head" id="number">Q1</div>
      <div class="head"></div>
    </div>
    <div class="body">
      <div class="quetionTitle">あなたについて教えてください。</div>

      <div id="genderTitle">性別</div>
      <div class="gender">
        <button
          class="Button"
          v-bind:class="{ buttoncolor: genderState['男性'] }"
          v-on:click="checkGender('男性')"
        >
          男性
        </button>
        <button
          class="Button"
          v-bind:class="{ buttoncolor: genderState['女性'] }"
          v-on:click="checkGender('女性')"
        >
          女性
        </button>
        <button
          class="Button"
          v-bind:class="{ buttoncolor: genderState['その他'] }"
          v-on:click="checkGender('その他')"
        >
          その他
        </button>
      </div>
      <div id="ageTitle">年代</div>
      <div class="age">
        <div class="ageSection">
          <button
            class="Button"
            v-bind:class="{ buttoncolor: ageState[10] }"
            v-on:click="checkage(10)"
          >
            10代
          </button>
          <button
            class="Button"
            v-bind:class="{ buttoncolor: ageState[20] }"
            v-on:click="checkage(20)"
          >
            20代
          </button>
          <button
            class="Button"
            v-bind:class="{ buttoncolor: ageState[30] }"
            v-on:click="checkage(30)"
          >
            30代
          </button>
        </div>
        <div class="ageSection">
          <button
            class="Button"
            v-bind:class="{ buttoncolor: ageState[40] }"
            v-on:click="checkage(40)"
          >
            40代
          </button>
          <button
            class="Button"
            v-bind:class="{ buttoncolor: ageState[50] }"
            v-on:click="checkage(50)"
          >
            50代
          </button>
          <button
            class="Button"
            v-bind:class="{ buttoncolor: ageState[60] }"
            v-on:click="checkage(60)"
          >
            60代
          </button>
        </div>
        <div class="ageSection">
          <button
            class="Button"
            v-bind:class="{ buttoncolor: ageState[70] }"
            v-on:click="checkage(70)"
          >
            70代
          </button>
          <button
            class="Button"
            v-bind:class="{ buttoncolor: ageState[80] }"
            v-on:click="checkage(80)"
          >
            80代
          </button>
          <button
            class="Button"
            v-bind:class="{ buttoncolor: ageState['その他'] }"
            v-on:click="checkage('その他')"
          >
            その他
          </button>
        </div>
      </div>

      <div class="button_wrapper">
        <button class="btn btn-c btn--green btn--cubic" v-on:click="dicbool">
          <i class="fa fas fa-envelope"></i>><router-link to="/q2"
            >Q2へ</router-link
          >
        </button>
      </div>
    </div>

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
  },
};
</script>

<style scope>
@import url(../destyle.css);
#q1 {
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

/* ここから内容 */
.quetionTitle {
  /* text-align: left; */
  width: 361px;
  height: 41px;
  left: 14px;
  top: 128px;

  font-family: Roboto;
  font-weight: 200;
  font-size: 18px;
  line-height: 21px;
  align-items: center;
}

#genderTitle {
  width: 361px;
  height: 41px;
  left: 20px;
  top: 195px;

  font-family: Roboto;
  font-style: normal;
  font-weight: bold;
  font-size: 14px;
  line-height: 16px;
  display: flex;
  align-items: center;
}

.gender {
  display: flex;
  /* flex-direction: column; */
  align-items: center;
  display: grid;
  grid-template-columns: 100px 100px 100px;
  column-gap: 30px;
}

.Button {
  width: 86px;
  height: 41px;
  left: 271px;
  top: 242px;

  font-family: Roboto;
  font-style: normal;
  font-weight: bold;
  font-size: 14px;
  line-height: 16px;
  align-items: center;
  text-align: center;

  color: #67421e;

  background: #ffffff;
  border: 3px solid #e5e5e5;
  box-sizing: border-box;
  border-radius: 30px;
}

#ageTitle {
  width: 361px;
  height: 41px;
  left: 20px;
  top: 195px;

  font-family: Roboto;
  font-style: normal;
  font-weight: bold;
  font-size: 14px;
  line-height: 16px;
  display: flex;
  align-items: center;
}

.age {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.ageSection {
  align-items: center;
  display: grid;
  grid-template-columns: 100px 100px 100px;
  justify-items: center;
  align-items: center;
  column-gap: 28px;
  padding-bottom: 10px;
}

/* アクションが起こると変更されるもの */
.buttoncolor {
  border: 3px solid #67421e;
}
/*
button {
  padding: 10em;
} */

/* ボタンデザイン */
/* button.btn {
  margin: 20px 0 0 0;
  text-align: center;

  height: 30px;
  font-size: 18px;
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
  font-size: 18px;
  position: relative;
  padding: 1rem 3rem 1.8rem 2rem;
  border-radius: 100vh;
}

button.btn-c i.fa {
  margin-right: 1rem;
}

button.btn-c:before {
  font-family: "Font Awesome 5 Free";
  font-size: 18px;
  line-height: 1;
  position: absolute;
  top: calc(50% - 0.8rem);
  right: 1rem;
  margin: 0;
  padding: 0;
} */
</style>
