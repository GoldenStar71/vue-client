<template>
  <div class="home" style="position: relative">
    <div class="main">
      <div class="left pevents-off">
        <wheel v-if="isShowWheel" :numberList="numberList" :num="num" :wait="wait" :nobet="nobet"></wheel>
        <counter-desktop v-if="isShowCounterDesktop" @counterDesktopStop="counterDesktopStop"></counter-desktop>
        <div id="info-panel" class="animated" :class="fadeLeft">
          <!----><!---->
          <h2 v-if="isShowCounterDesktop"> BETS OPEN </h2>
          <h3 v-if="isShowWheel">{{numberObj[num].color}} / {{numberObj[num].type}}</h3>
          <p v-if="isShowWheel">{{numberObj[num].text1}}</p>
          <p v-if="isShowWheel">{{numberObj[num].text2}}</p>
        </div>
<!--        <div v-if="isShowInfoPanel2" id="info-panel" class="animated fadeInLeft" :class="fadeLeft">-->
<!--          &lt;!&ndash;&ndash;&gt;&lt;!&ndash;&ndash;&gt;-->
<!--          <h3>BETS OPEN</h3>-->
<!--&lt;!&ndash;          <p>2° Dozen</p>&ndash;&gt;-->
<!--&lt;!&ndash;          <p>1° Column</p>&ndash;&gt;-->
<!--        </div>-->
      </div>
      <div v-show="isUpdataNum">
        <input type="text" v-model="inputNum">
        <button style="border: 1px solid #000000;padding: 5px;color: #666666" @click="updataNum" >改变数值</button>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import wheel from "@/components/Wheel.vue";
import CounterDesktop from "@/components/CounterDesktop.vue";

export default Vue.extend({
  name: "HomeView",
  components: {
    wheel,
    CounterDesktop,
  },
  data(){
    return {
      isShowCounterDesktop: false,
      isShowWheel: true,
      isShowInfoPanel: false,
      isShowInfoPanel2: false,
      fadeLeft: '', // fadeOutLeft
      numberList: [
        "0",
        "32",
        "15",
        "19",
        "4",
        "21",
        "2",
        "25",
        "17",
        "34",
        "6",
        "27",
        "13",
        "36",
        "11",
        "30",
        "8",
        "23",
        "10",
        "5",
        "24",
        "16",
        "33",
        "1",
        "20",
        "14",
        "31",
        "9",
        "22",
        "18",
        "29",
        "7",
        "28",
        "12",
        "35",
        "3",
        "26"
      ],
      numberObj:{
        "0": {
          color: 'Green',
          type: 'Zero',
          text1: '1° Dozen',
          text2: '2° Column'
        },
        "32": {
          color: 'Red',
          type: 'Even',
          text1: '3° Dozen',
          text2: '2° Column'
        },
        "15": {
          color: 'Black',
          type: 'Odd',
          text1: '2° Dozen',
          text2: '3° Column'
        },
        "19": {
          color: 'Red',
          type: 'Odd',
          text1: '2° Dozen',
          text2: '1° Column'
        },
        "4": {
          color: 'Black',
          type: 'Even',
          text1: '1° Dozen',
          text2: '1° Column'
        },
        "21": {
          color: 'Red',
          type: 'Odd',
          text1: '2° Dozen',
          text2: '3° Column'
        },
        "2": {
          color: 'Black',
          type: 'Even',
          text1: '1° Dozen',
          text2: '2° Column'
        },
        "25": {
          color: 'Red',
          type: 'Odd',
          text1: '3° Dozen',
          text2: '1° Column'
        },
        "17": {
          color: 'Black',
          type: 'Odd',
          text1: '2° Dozen',
          text2: '2° Column'
        },
        "34": {
          color: 'Red',
          type: 'Even',
          text1: '3° Dozen',
          text2: '1° Column'
        },
        "6": {
          color: 'Black',
          type: 'Even',
          text1: '1° Dozen',
          text2: '3° Column'
        },
        "27": {
          color: 'Red',
          type: 'Odd',
          text1: '3° Dozen',
          text2: '3° Column'
        },
        "13": {
          color: 'Black',
          type: 'Odd',
          text1: '2° Dozen',
          text2: '1° Column'
        },
        "36": {
          color: 'Red',
          type: 'Even',
          text1: '3° Dozen',
          text2: '3° Column'
        },
        "11": {
          color: 'Black',
          type: 'Odd',
          text1: '1° Dozen',
          text2: '2° Column'
        },
        "30": {
          color: 'Red',
          type: 'Even',
          text1: '3° Dozen',
          text2: '3° Column'
        },
        "8": {
          color: 'Black',
          type: 'Even',
          text1: '1° Dozen',
          text2: '2° Column'
        },
        "23": {
          color: 'Red',
          type: 'Odd',
          text1: '2° Dozen',
          text2: '2° Column'
        },
        "10": {
          color: 'Black',
          type: 'Even',
          text1: '1° Dozen',
          text2: '1° Column'
        },
        "5": {
          color: 'Red',
          type: 'Odd',
          text1: '1° Dozen',
          text2: '2° Column'
        },
        "24": {
          color: 'Black',
          type: 'Even',
          text1: '2° Dozen',
          text2: '3° Column'
        },
        "16": {
          color: 'Red',
          type: 'Even',
          text1: '2° Dozen',
          text2: '1° Column'
        },
        "33": {
          color: 'Black',
          type: 'Odd',
          text1: '3° Dozen',
          text2: '3° Column'
        },
        "1": {
          color: 'Red',
          type: 'Odd',
          text1: '1° Dozen',
          text2: '1° Column'
        },
        "20": {
          color: 'Black',
          type: 'Even',
          text1: '2° Dozen',
          text2: '2° Column'
        },
        "14": {
          color: 'Red',
          type: 'Even',
          text1: '2° Dozen',
          text2: '2° Column'
        },
        "31": {
          color: 'Black',
          type: 'Odd',
          text1: '3° Dozen',
          text2: '2° Column'
        },
        "9": {
          color: 'Red',
          type: 'Odd',
          text1: '1° Dozen',
          text2: '3° Column'
        },
        "22": {
          color: 'Black',
          type: 'Even',
          text1: '2° Dozen',
          text2: '1° Column'
        },
        "18": {
          color: 'Red',
          type: 'Even',
          text1: '2° Dozen',
          text2: '3° Column'
        },
        "29": {
          color: 'Black',
          type: 'Odd',
          text1: '3° Dozen',
          text2: '2° Column'
        },
        "7": {
          color: 'Red',
          type: 'Odd',
          text1: '1° Dozen',
          text2: '1° Column'
        },
        "28": {
          color: 'Black',
          type: 'Even',
          text1: '3° Dozen',
          text2: '1° Column'
        },
        "12": {
          color: 'Red',
          type: 'Even',
          text1: '3° Dozen',
          text2: '1° Column'
        },
        "35": {
          color: 'Black',
          type: 'Odd',
          text1: '3° Dozen',
          text2: '2° Column'
        },
        "3": {
          color: 'Red',
          type: 'Odd',
          text1: '1° Dozen',
          text2: '3° Column'
        },
        "26": {
          color: 'Black',
          type: 'Even',
          text1: '3° Dozen',
          text2: '2° Column'
        }
      },
      num: '0',
      wait: false,
      isUpdataNum: false,
      inputNum: '',
      nobet: false
    }
  },
  mounted() {
    // this.numberObj = this.numberList.map((item, index) => {
    //   let obj = {
    //
    //   }
    //   if(item == 0){
    //     obj = {
    //       color: 'Green',
    //       type: 'Zero',
    //       text1: '1° Dozen',
    //       text2: '2° Column'
    //     }
    //   } else {
    //
    //   }
    // })
    this.num = this.numberList[Math.floor((Math.random()*this.numberList.length))]
    setTimeout(() => {
      this.fadeLeft = 'fadeInLeft'
    }, 5000)
    this.rotateStop()
  },

  methods:{
    updataNum(){
      console.log(this.inputNum)
      if(this.numberList.indexOf(this.inputNum) === -1){
        this.nobet = true
        return
      }
      this.nobet = false
      this.wait = false
      this.num = this.inputNum
      setTimeout(() => {
        this.fadeLeft = 'fadeInLeft'
      }, 5000)
      this.isUpdataNum = false
      this.rotateStop()
    },
    rotateStop(){
      console.log('停止')
      setTimeout(() => {
        this.fadeLeft = 'fadeOutLeft'
        setTimeout(() => {
          this.isShowWheel = false
          this.isShowCounterDesktop = true
          setTimeout(() => {
            this.fadeLeft = 'fadeInLeft'
            setTimeout(() => {
              this.fadeLeft = 'fadeOutLeft'
            }, 4000)
          }, 2000)
        }, 500)
        // 5s + 5s
      }, 10000)
    },
    counterDesktopStop(){
      console.log('倒计时')
      this.wait = true
      this.isShowWheel = true
      this.isShowCounterDesktop = false
      this.isUpdataNum = true
    }
  }
});
</script>
<style scoped lang="scss">
.home {
  background: #ffffff;
  position: absolute;
  width: 100vw;
  height: 56.25vw;
  //background: #000;
  max-height: 100vh;
  max-width: 177.78vh;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  margin: auto;
  overflow: hidden;
  .main {
    position: absolute;
    top: 15%;
    width: 100%;
    height: 85%;
    text-align: center;
    .left {
      left: 0;
      width: 16%;
      height: 85%;
      position: absolute;
      top: 0;
      margin-top: 2px;
      z-index: 1;
      background: #ffffff;
    }
  }

  #info-panel {
    //visibility: hidden;
    opacity: 0;
    background: rgba(0, 0, 0, 0.5);
    background: linear-gradient(
      90deg,
      rgba(0, 0, 0, 0) 0,
      rgba(0, 0, 0, 0.5) 15%,
      rgba(0, 0, 0, 0.5) 100%
    );
    width: 26vh;
    height: 7.87vh;
    position: absolute;
    top: 3%;
    left: 53%;
    color: #fff;
    border-radius: 0 3vh 7vh 0;
    padding: 2vh 1vh;
    z-index: 0;
  }

  #info-panel h1,
  #info-panel h2,
  #info-panel h3,
  #info-panel p {
    width: 83%;
    font-weight: 800;
    float: right;
  }

  #info-panel h1 {
    font-size: 3.5vh;
    line-height: 0.8;
    color: #390;
  }

  #info-panel h2 {
    font-size: 2.5vh;
    line-height: 1;
    margin: 1vh 0 0;
  }

  #info-panel h3 {
    font-size: 2.5vh;
    margin-top: 0;
    margin-bottom: 1vh;
  }

  #info-panel p {
    font-size: 1.7vh;
    margin: 0.5%;
    font-weight: 400;
  }

  @media (min-height: 56.25vw) and (max-width: 177.8vh) {
    #info-panel {
      width: 14.82vw;
      height: 4.5vw;
      font-size: 1vw;
      border-radius: 0 1.71vw 3.99vw 0;
      padding: 1.14vw 0.57vw;
    }
    #info-panel h1 {
      font-size: 2vw;
    }
    #info-panel h2 {
      font-size: 1.4vw;
      margin: 0.6vw 0 0;
    }
    #info-panel h3 {
      font-size: 1.4vw;
      margin-bottom: 0.6vw;
    }
    #info-panel p {
      font-size: 1vw;
    }
  }

  .roulette-right #info-panel {
    left: unset;
    right: 53%;
    border-radius: 3vh 0 0 7vh;
  }

  .roulette-right #info-panel h1,
  .roulette-right #info-panel h2,
  .roulette-right #info-panel h3,
  .roulette-right #info-panel p {
    float: left;
  }
}
</style>
