<template>
  <div id="q5">
    <div class="header">
      <div class="head" id="cancel">
        <button>
          <router-link to="/">×</router-link>
        </button>
      </div>
      <div class="head" id="number">Q5</div>
      <div class="head"></div>
    </div>
    <div class="body">
      <div class="quetionTitle">興味のあるものは？</div>
      <div>
        <div class="select">
          <button
            class="Button2"
            v-bind:class="{ buttoncolor: State[1] }"
            v-on:click="check(1)"
          >
            バナナパフェ
          </button>
          <button
            class="Button2"
            v-bind:class="{ buttoncolor: State[2] }"
            v-on:click="check(2)"
          >
            ソフトクリーム
          </button>

          <button
            class="Button2"
            v-bind:class="{ buttoncolor: State[3] }"
            v-on:click="check(3)"
          >
            ドライバナナ
          </button>
          <button
            class="Button2"
            v-bind:class="{ buttoncolor: State[4] }"
            v-on:click="check(4)"
          >
            バナナチップ
          </button>

          <button
            class="Button2"
            v-bind:class="{ buttoncolor: State[5] }"
            v-on:click="check(5)"
          >
            バナナマフィン
          </button>
          <button
            class="Button2"
            v-bind:class="{ buttoncolor: State[6] }"
            v-on:click="check(6)"
          >
            なまずの天ぷら
          </button>

          <button
            class="Button2"
            v-bind:class="{ buttoncolor: State[7] }"
            v-on:click="check(7)"
          >
            うな重
          </button>
          <button
            class="Button2"
            v-bind:class="{ buttoncolor: State[8] }"
            v-on:click="check(8)"
          >
            うなぎの骨チップス
          </button>
        </div>
      </div>
      <div class="button_wrapper">
        <router-link
          :to="{
            name: pathName,
            params: { receivedAnswer: { receivedAnswer } },
          }"
        >
          <button class="btn btn-c btn--green btn--cubic" v-on:click="dicbool">
            <i class="fa fas fa-envelope"></i>>Q6へ
          </button>
        </router-link>
      </div>
    </div>
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
        1: "バナナパフェ",
        2: "ソフトクリーム",
        3: "ドライバナナ",
        4: "バナナチップ",
        5: "バナナマフィン",
        6: "なまずの天ぷら",
        7: "うな重",
        8: "うなぎの骨チップス",
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
      pathName: "Q5",
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
      if (this.q5.length === 0) {
        this.$swal({
          icon: "info",
          text: "選択してください。",
        });
      } else {
        this.pathName = "Q6";
      }
    },
  },
};
</script>

<style scoped>
@import url(../destyle.css);
#q5 {
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
