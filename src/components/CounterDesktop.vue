<template>
  <div id="counter" xclass="w-20 h-20 md:w-24 md:h-24">
    <svg
      id="SvgjsSvg1704"
      width="100%"
      height="100%"
      xmlns="http://www.w3.org/2000/svg"
      version="1.1"
      xmlns:xlink="http://www.w3.org/1999/xlink"
      xmlns:svgjs="http://svgjs.com/svgjs"
      viewBox="0 0 300 300"
    >
      <!--      <defs id="SvgjsDefs1705"></defs>-->
      <defs>
        <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="0%">
          <!-- 进度结束颜色 -->
          <stop :offset="0" :style="{ 'stop-color': '#3385D0' }" />
          <!-- 进度开始颜色 -->
          <stop offset="100%" :style="{ 'stop-color': '#5AB7F1' }" />
        </linearGradient>
      </defs>

      <circle
        id="SvgjsCircle1706"
        :r="r"
        :cx="cx"
        :cy="cy"
        fill="#000000"
        fill-opacity="0.8"
        transform="matrix(-1.8369701987210297e-16,-1,1,-1.8369701987210297e-16,2.842170943040401e-14,300)"
      ></circle>
      <circle
        id="SvgjsCircle1707"
        :r="r"
        :cx="cx"
        :cy="cy"
        fill="transparent"
        :stroke="colorList[strokeColorIndex]"
        stroke-width="20"
        stroke-alignment="stroke-dashoffset"
        :stroke-dasharray="circum"
        :stroke-dashoffset="circum"
        transform="matrix(-1.8369701987210297e-16,-1,1,-1.8369701987210297e-16,2.842170943040401e-14,300)"
      >
        <animate
          attributeName="stroke-dashoffset"
          :from="startCircum"
          :to="endCircum"
          :dur="originCountDown"
        />
      </circle>

      <text
        id="SvgjsText1707"
        font-family="Montserrat"
        font-size="120"
        font-weight="100"
        fill="#ffffff"
        text-anchor="middle"
        family="Montserrat"
        size="120"
        weight="100"
        anchor="middle"
        x="150"
        y="35"
      >
        <tspan id="SvgjsTspan1836" dy="156" x="150">{{ seconds }}</tspan>
      </text>
    </svg>
  </div>
</template>

<script>
import { gradient, appDown } from "@/utils";
export default {
  name: "CounterDesktop",
  data() {
    return {
      seconds: 30,
      tid: 0,
      endCircum: 0,
      startCircum: 0,
      originCountDown: 30,
      r: 133,
      colorList: [],
      cx: 150,
      cy: 150,
      stroke: "#66cb32",
      strokeColorIndex: 0,
      strokeColorStep: 300,
      strokeColorid: 0,
      strokeColorSetStepTime: 500,
    };
  },
  computed: {
   
    circum() {
      let c = parseInt(this.r * Math.PI * 2);
      this.startCircum = 2 * c;
      this.endCircum = c;
    
      return c;
    },
  },
  created() {
    const vm = this;
    var startColor = "#66cb32";
    var endColor = "#cc0000";
    this.strokeColorStep = (this.originCountDown * 1000) / this.strokeColorSetStepTime;
    this.colorList = gradient(startColor, endColor, this.strokeColorStep);

    vm.tid = setInterval(() => {
      vm.seconds--;
      if (vm.seconds <= 0) {
        clearInterval(vm.tid);

        setTimeout(() => {
          this.$emit("counterDesktopStop");
          /// counter === 0 ? show zoom and no more bet
          this.$store.commit("setRoundStatus", 'wait');
          //this.$store.commit("setShowGroupBet", true);
          
        }, 500);
      }
    }, 1000);
    //算出30秒有多少个 500ms    (30 * 1000 / 500)
    vm.strokeColorid = setInterval(() => {
      vm.strokeColorIndex++;
      //console.log(vm.colorList[vm.strokeColorIndex, vm.strokeColorIndex])
      if (vm.strokeColorIndex >= vm.strokeColorStep - 1) {
        // vm.strokeColorIndex = vm.strokeColorIndex - 1
        clearInterval(vm.strokeColorid);
        // vm.strokeColorIndex = 0
      }
    }, this.strokeColorSetStepTime);
  },

  methods: {},
  destroyed() {
    const vm = this;
    clearInterval(vm.tid);
    clearInterval(vm.strokeColorid);
  },
};
</script>

<style scoped lang="scss">
#counter {
  
  position: absolute;

  z-index: 60;
}

.roulette-right #counter {
  margin-left: 26% !important;
}

@media screen and (orientation: portrait) {
  #counter {
    height:calc(10vw/1.7778 * 1.5); width:calc(10vw/1.7778 * 1.5);
    margin-top: 5vw;
  }
}

@media screen and (orientation: landscape) {
  #counter {
    height:15vh;width:15vh;
    margin-top:6vh;
  }
}


</style>
