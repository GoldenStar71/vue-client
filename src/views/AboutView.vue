<template>
  <svg class="ring-container" :style="`width: ${size}; height: ${size}`">
    <circle :cx="cx" :cy="cx" :r="r"
            :stroke="backgroundColor"
            :stroke-width="width"
            stroke-linecap="round"
            fill="none"></circle>
    <circle :cx="cx" :cy="cx" :r="r"
            class="ring"
            :stroke-width="width"
            :stroke="color"
            :stroke-dasharray="`${circum}`"
            :stroke-dashoffset="circum"
            stroke-linecap="round"
            fill="none">
      <animate attributeName="stroke-dashoffset"
               :from="2 * circum"
               :to="circum"
               :dur="originCountDown"/>
    </circle>
    <text :x="cx+5" :y="cx+10" text-anchor="end"
          :font-size="fontSize + 5"
          :fill="fontColor">
      {{ countDown }}
    </text>
    <text :x="cx+5" :y="cx+10" text-anchor="start"
          :font-size="fontSize - 5"
          :fill="fontColor">
      s
    </text>
  </svg>
</template>

<script>
import request from '@/utils/request'
export default {
  name: "CircleLoad",
  data(){
    return{
      endCircum:0,
      countDown:this.originCountDown,
    }
  },
  computed: {
    cx() { // 中心点位置
      return this.size / 2
    },
    r() { // 半径
      return this.size / 2 - this.width
    },
    circum() {
      return parseInt(this.r * Math.PI * 2)
    }
  },
  props: {
    fontSize: {
      type: Number,
      default: 26
    },
    size: {
      type: Number,
      default: 100
    },
    width: {
      type: Number,
      default: 5
    },
    backgroundColor: {
      type: String,
      default: '#f0f0f0'
    },
    color: {
      type: String,
      default: '#448732'
    },
    fontColor:{
      type: String,
      default: '#333'
    },
    originCountDown:{
      type: Number,
      default: 15
    }
  },
  mounted(){
    request({
      url: '/api/json/service;jsessionid=1E4E4AA35851A2155CC954D5A7650A25.node01-1?action=rlInitClientPlayerHtml5Controller',
      method: 'post',
      data: {
        "counter": null,
        "token": "bb2610c3-921e-4882-8bc0-122e519a06dd",
        "gameId": "RL_GREEN",
        "seqManager": "1000077",
        "seqHostGroup": "",
        "partecipationId": "d22536fe-5eb4-4365-8938-85357124224b",
        "osvald": "Y",
        "osName": "windows",
        "osVersion": "10",
        "browserName": "chrome",
        "browserVersion": "99.0.4844.84",
        "deviceType": "desktop",
        "deviceModel": "",
        "userAgent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/99.0.4844.84 Safari/537.36",
        "vltRoomId": null,
        "vltTerminalId": null,
        "gameLobbyTemplateId": "RL_GREEN_TEMPLATE"
      }
    }).then(res => {
      console.log(res)
    }).catch(err => {
      console.log(err)
    })
    this.interval = setInterval(() => {
      let diff = '1';
      this.countDown -= diff;
      if (this.countDown <= 0) {
        clearInterval(this.interval)
      }
    }, 1000)
  }
}
</script>

<style lang="scss">
// .ring-container {
//   .ring {
//     transform: rotate(-90deg);
//     transform-origin: 50% 50%;
//   }
// }
</style>
