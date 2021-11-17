<template>
  <div id="q1">
    <h2>私の性別は {{ gender }} です。</h2>
    <div>購入した理由を教えてください。</div>
    <div>
      <div class="select">
        <div>
          <button
            v-bind:class="{ buttoncolor: State[1] }"
            v-on:click="check(1)"
          >
            バナナが好きだった
          </button>
          <button
            v-bind:class="{ buttoncolor: State[2] }"
            v-on:click="check(2)"
          >
            たまたま通りかかった
          </button>
        </div>
        <div>
          <button
            v-bind:class="{ buttoncolor: State[3] }"
            v-on:click="check(3)"
          >
            小腹が空いていた
          </button>
          <button
            v-bind:class="{ buttoncolor: State[4] }"
            v-on:click="check(4)"
          >
            冷たいものを口にしたかった
          </button>
        </div>
        <div>
          <button
            v-bind:class="{ buttoncolor: State[5] }"
            v-on:click="check(5)"
          >
            キッチンカーに目をひかれた
          </button>
          <button
            v-bind:class="{ buttoncolor: State[6] }"
            v-on:click="check(6)"
          >
            元々来ることを知っていた
          </button>
        </div>
        <div>
          <button
            v-bind:class="{ buttoncolor: State[7] }"
            v-on:click="check(7)"
          >
            美味しそうだった
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
    <button v-on:click="dicbool">
      <router-link to="/q3">Q3へ</router-link>
    </button>
    <!-- <button><router-link to="/q2">Q2へ</router-link></button> -->
  </div>
</template>

<script>
//import firebase from "firebase/app";
//import { firebase } from "firebase/app";

export default {
  data: function () {
    return {
      gender: "OO",
      age_category: "",
      selectDic: {
        1: "バナナが好きだった",
        2: "たまたま通りかかった",
        3: "小腹が空いていた",
        4: "冷たいものを口にしたかった",
        5: "キッチンカーに目をひかれた",
        6: "元々来ることを知っていた",
        7: "美味しそうだった",
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
      selected: [],
    };
  },
  methods: {
    check: function (tag) {
      // すでにtrueのものだった場合はそれおfalseにする
      if (this.State[tag]) {
        this.State[tag] = !this.State[tag];
      } else {
        this.State = {
          1: false,
          2: false,
          3: false,
          4: false,
          5: false,
          6: false,
          7: false,
          8: false,
        };
        this.gender = this.State[tag];
        this.State[tag] = !this.State[tag];
      }

      //console.log(this.genderState)
    },

    //辞書型の中でtrueの値を持つkeyのみを抽出する関数
    dicbool: function () {
      this.selected = [];
      for (var key in this.State) {
        var genderVal = this.State[key];
        if (genderVal) {
          this.selected.push(this.selectDic[Number(key)]);
          console.log(this.selected);
        } else {
          continue;
        }
      }
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
