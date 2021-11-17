<template>
  <div id="q5">
    <div>Q5</div>
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
    <button v-on:click="dicbool">
      <router-link
        :to="{ name: 'Q6', params: { receivedAnswer: { receivedAnswer } } }"
        >Q6へ</router-link
      >
    </button>
  </div>
</template>

<script>
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
      q5: [],
      received: [],
    };
  },
  methods: {
    test: function () {
      console.log(this.receivedAnswer);
    },
    check: function (tag) {
      // すでにtrueのものだった場合はそれおfalseにする
      this.State[tag] = !this.State[tag];
      this.dicbool();
      this.receivedAnswer["q5"] = this.q5;
      //this.receivedAnswer = this.receivedAnswer["receivedAnswer"];
      //console.log(this.genderState)
    },

    //辞書型の中でtrueの値を持つkeyのみを抽出する関数
    dicbool: function () {
      this.q5 = [];
      for (var key in this.State) {
        var genderVal = this.State[key];
        if (genderVal) {
          this.q5.push(this.selectDic[Number(key)]);
        } else {
          continue;
        }
      }
    },
  },
};
</script>

<style></style>
