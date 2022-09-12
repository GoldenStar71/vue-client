<template>
  <div class="relative">
    <div _ngcontent-bdp-c0="" id="panno" class="hidden md:block">
      <svg
        id="drawPanno"
        width="100%"
        height="100%"
        xmlns="http://www.w3.org/2000/svg"
        version="1.1"
        xmlns:xlink="http://www.w3.org/1999/xlink"
        xmlns:svgjs="http://svgjs.com/svgjs"
        viewBox="0 0 1400 580"
        style="transform-origin: 20% center; transform: perspective(50em) rotateX(40deg)"
      >
        <defs id="SvgjsDefs1007">
          <filter id="brightness-filter">
            <feComponentTransfer>
              <feFuncR type="table" tableValues="0.2 0.9"></feFuncR>
              <feFuncG type="table" tableValues="0.2 0.9"></feFuncG>
              <feFuncB type="table" tableValues="0.2 0.9"></feFuncB>
            </feComponentTransfer>
          </filter>
        </defs>
        <g id="groupOtherBets" v-if="$store.state.showGroupBet">
          <rect
            id="gD1"
            width="400"
            height="70"
            class="transparent"
            x="100"
            y="300"
          ></rect>
          <text
            id="gD1T"
            font-family="'Montserrat', sans-serif"
            font-size="30"
            fill="#ffffff"
            family="'Montserrat', sans-serif"
            size="30"
            x="262.39157485961914"
            y="306.9864101409912"
            transform="matrix(1,0,0,1,0,0)"
          >
            <tspan id="SvgjsTspan1144" dy="39" x="262.39157485961914">1st 12</tspan>
          </text>
          <rect
            id="gD2"
            width="400"
            height="70"
            class="transparent "
            x="500"
            y="300"
          ></rect>
          <text
            id="gD2T"
            font-family="'Montserrat', sans-serif"
            font-size="30"
            fill="#ffffff"
            family="'Montserrat', sans-serif"
            size="30"
            x="653.3077583312988"
            y="306.9864101409912"
            transform="matrix(1,0,0,1,0,0)"
          >
            <tspan id="SvgjsTspan1147" dy="39" x="653.3077583312988">2nd 12</tspan>
          </text>
          <rect
            id="gD3"
            width="400"
            height="70"
            class="transparent"
            x="900"
            y="300"
          ></rect>
          <text
            id="gD3T"
            font-family="'Montserrat', sans-serif"
            font-size="30"
            fill="#ffffff"
            family="'Montserrat', sans-serif"
            size="30"
            x="1056.7696228027344"
            y="306.9864101409912"
            transform="matrix(1,0,0,1,0,0)"
          >
            <tspan id="SvgjsTspan1150" dy="39" x="1056.7696228027344">3rd 12</tspan>
          </text>
          <rect
            id="gMA"
            width="200"
            height="70"
            class="transparent "
            x="100"
            y="370"
          ></rect>
          <text
            id="gMAT"
            font-family="'Montserrat', sans-serif"
            font-size="30"
            fill="#ffffff"
            family="'Montserrat', sans-serif"
            size="30"
            x="165.0952606201172"
            y="376.9864101409912"
            transform="matrix(1,0,0,1,0,0)"
          >
            <tspan id="SvgjsTspan1153" dy="39" x="165.0952606201172">1 - 18</tspan>
          </text>
          <rect
            id="gPR"
            width="200"
            height="70"
            class="transparent"
            x="300"
            y="370"
          ></rect>
          <text
            id="gPRT"
            font-family="'Montserrat', sans-serif"
            font-size="30"
            fill="#ffffff"
            family="'Montserrat', sans-serif"
            size="30"
            x="357.6422424316406"
            y="376.9864101409912"
            transform="matrix(1,0,0,1,0,0)"
          >
            <tspan id="SvgjsTspan1156" dy="39" x="357.6422424316406">EVEN</tspan>
          </text>
          <rect
            id="gRO"
            width="200"
            height="70"
            class="transparent"
            x="500"
            y="370"
          ></rect>
          <polygon
            id="gROT"
            points="599.9999975585938,425.000009765625 539.9999975585938,405.000009765625 599.9999975585938,385.000009765625 659.9999975585938,405.000009765625"
            fill="#cc0000"
          ></polygon>
          <rect
            id="gNO"
            width="200"
            height="70"
            class="transparent "
            x="700"
            y="370"
          ></rect>
          <polygon
            id="gNOT"
            points="799.9999975585938,425.000009765625 739.9999975585938,405.000009765625 799.9999975585938,385.000009765625 859.9999975585938,405.000009765625"
            fill="#000000"
          ></polygon>
          <rect
            id="gDS"
            width="200"
            height="70"
            class="transparent"
            x="900"
            y="370"
          ></rect>
          <text
            id="gDST"
            font-family="'Montserrat', sans-serif"
            font-size="30"
            fill="#ffffff"
            family="'Montserrat', sans-serif"
            size="30"
            x="962.6347618103027"
            y="376.9864101409912"
            transform="matrix(1,0,0,1,0,0)"
          >
            <tspan id="SvgjsTspan1163" dy="39" x="962.6347618103027">ODD</tspan>
          </text>
          <rect
            id="gPA"
            width="200"
            height="70"
            class="transparent"
            x="1100"
            y="370"
          ></rect>
          <text
            id="gPAT"
            font-family="'Montserrat', sans-serif"
            font-size="30"
            fill="#ffffff"
            family="'Montserrat', sans-serif"
            size="30"
            x="1153.3378219604492"
            y="376.9864101409912"
            transform="matrix(1,0,0,1,0,0)"
          >
            <tspan id="SvgjsTspan1166" dy="39" x="1153.3378219604492">19 - 36</tspan>
          </text>
        </g>
        <g id="SvgjsG1020">
          <rect
            v-for="red in redPoints"
            :id="red.id"
            :width="red.width"
            :height="red.height"
            :class="
              $store.state.hovered.filter((f) => f.refer == red.id).length > 0
                ? `white-${red.class}`
                : `${red.class}`
            "
            :x="red.x"
            :y="red.y"
          ></rect>
          <rect
            v-for="black in blackPoints"
            :id="black.id"
            :width="black.width"
            :height="black.height"
            :class="
              $store.state.hovered.filter((f) => f.refer == black.id).length > 0
                ? `white-${black.class}`
                : `${black.class}`
            "
            :x="black.x"
            :y="black.y"
          ></rect>
          <text
            v-for="text in textPoints"
            :id="text.id"
            :font-family="text.fontFamily"
            :font-size="text.fontSize"
            :fill="text.fill"
            :family="text.family"
            :size="text.size"
            :x="text.x"
            :y="text.y"
            :transform="text.transform"
          >
            <tspan id="text.tspanId" :dy="text.tspanDy" :x="text.tspanX">
              {{ text.text }}
            </tspan>
          </text>

          <rect
            id="gC3"
            width="70"
            height="100"
            class="transparent"
            x="1300"
            y="0"
          ></rect>
          <text
            id="gC3T"
            font-family="'Montserrat', sans-serif"
            font-size="30"
            fill="#ffffff"
            family="'Montserrat', sans-serif"
            size="30"
            x="1297.9923934936523"
            y="21.98641014099121"
            transform="matrix(-1.8369701987210297e-16,-1,1,-1.8369701987210297e-16,1285.0000362396243,1385.0000400543213)"
          >
            <tspan id="SvgjsTspan1135" dy="39" x="1297.9923934936523">2 to 1</tspan>
          </text>
          <rect
            id="gC2"
            width="70"
            height="100"
            class="transparent"
            x="1300"
            y="100"
          ></rect>
          <text
            id="gC2T"
            font-family="'Montserrat', sans-serif"
            font-size="30"
            fill="#ffffff"
            family="'Montserrat', sans-serif"
            size="30"
            x="1297.9923934936523"
            y="121.98641014099121"
            transform="matrix(-1.8369701987210297e-16,-1,1,-1.8369701987210297e-16,1185.0000247955325,1485.000051498413)"
          >
            <tspan id="SvgjsTspan1138" dy="39" x="1297.9923934936523">2 to 1</tspan>
          </text>
          <rect
            id="gC1"
            width="70"
            height="100"
            class="transparent  "
            x="1300"
            y="200"
          ></rect>
          <text
            id="gC1T"
            font-family="'Montserrat', sans-serif"
            font-size="30"
            fill="#ffffff"
            family="'Montserrat', sans-serif"
            size="30"
            x="1297.9923934936523"
            y="221.9864101409912"
            transform="matrix(-1.8369701987210297e-16,-1,1,-1.8369701987210297e-16,1085.0000400543215,1585.000036239624)"
          >
            <tspan id="SvgjsTspan1141" dy="39" x="1297.9923934936523">2 to 1</tspan>
          </text>
        </g>
      </svg>
    </div>
    <!-- mobile design -->
    <div
      _ngcontent-bdp-c0=""
      id="panno"
      class="mobile-panno md:hidden absolute"
      :class="$store.state.showGroupBet ? 'mobile-panno-zoom' : ''"
    >
      <svg
        id="drawPanno"
        width="50vh"
        height="40vw"
        xmlns="http://www.w3.org/2000/svg"
        version="1.1"
        xmlns:xlink="http://www.w3.org/1999/xlink"
        xmlns:svgjs="http://svgjs.com/svgjs"
        viewBox="0 0 1400 580"
      >
        <defs id="SvgjsDefs1007">
          <filter id="brightness-filter">
            <feComponentTransfer>
              <feFuncR type="table" tableValues="0.2 0.9"></feFuncR>
              <feFuncG type="table" tableValues="0.2 0.9"></feFuncG>
              <feFuncB type="table" tableValues="0.2 0.9"></feFuncB>
            </feComponentTransfer>
          </filter>
        </defs>
        <g id="groupOtherBets" v-if="$store.state.showGroupBet">
          <rect
            id="gD1"
            width="400"
            height="70"
            class="transparent"
            x="100"
            y="300"
          ></rect>
          <text
            id="gD1T"
            font-family="'Montserrat', sans-serif"
            font-size="30"
            fill="#ffffff"
            family="'Montserrat', sans-serif"
            size="30"
            x="262.39157485961914"
            y="306.9864101409912"
            transform="matrix(1,0,0,1,0,0)"
          >
            <tspan id="SvgjsTspan1144" dy="39" x="262.39157485961914">1st 12</tspan>
          </text>
          <rect
            id="gD2"
            width="400"
            height="70"
            class="transparent "
            x="500"
            y="300"
          ></rect>
          <text
            id="gD2T"
            font-family="'Montserrat', sans-serif"
            font-size="30"
            fill="#ffffff"
            family="'Montserrat', sans-serif"
            size="30"
            x="653.3077583312988"
            y="306.9864101409912"
            transform="matrix(1,0,0,1,0,0)"
          >
            <tspan id="SvgjsTspan1147" dy="39" x="653.3077583312988">2nd 12</tspan>
          </text>
          <rect
            id="gD3"
            width="400"
            height="70"
            class="transparent"
            x="900"
            y="300"
          ></rect>
          <text
            id="gD3T"
            font-family="'Montserrat', sans-serif"
            font-size="30"
            fill="#ffffff"
            family="'Montserrat', sans-serif"
            size="30"
            x="1056.7696228027344"
            y="306.9864101409912"
            transform="matrix(1,0,0,1,0,0)"
          >
            <tspan id="SvgjsTspan1150" dy="39" x="1056.7696228027344">3rd 12</tspan>
          </text>
          <rect
            id="gMA"
            width="200"
            height="70"
            class="transparent "
            x="100"
            y="370"
          ></rect>
          <text
            id="gMAT"
            font-family="'Montserrat', sans-serif"
            font-size="30"
            fill="#ffffff"
            family="'Montserrat', sans-serif"
            size="30"
            x="165.0952606201172"
            y="376.9864101409912"
            transform="matrix(1,0,0,1,0,0)"
          >
            <tspan id="SvgjsTspan1153" dy="39" x="165.0952606201172">1 - 18</tspan>
          </text>
          <rect
            id="gPR"
            width="200"
            height="70"
            class="transparent"
            x="300"
            y="370"
          ></rect>
          <text
            id="gPRT"
            font-family="'Montserrat', sans-serif"
            font-size="30"
            fill="#ffffff"
            family="'Montserrat', sans-serif"
            size="30"
            x="357.6422424316406"
            y="376.9864101409912"
            transform="matrix(1,0,0,1,0,0)"
          >
            <tspan id="SvgjsTspan1156" dy="39" x="357.6422424316406">EVEN</tspan>
          </text>
          <rect
            id="gRO"
            width="200"
            height="70"
            class="transparent"
            x="500"
            y="370"
          ></rect>
          <polygon
            id="gROT"
            points="599.9999975585938,425.000009765625 539.9999975585938,405.000009765625 599.9999975585938,385.000009765625 659.9999975585938,405.000009765625"
            fill="#cc0000"
          ></polygon>
          <rect
            id="gNO"
            width="200"
            height="70"
            class="transparent "
            x="700"
            y="370"
          ></rect>
          <polygon
            id="gNOT"
            points="799.9999975585938,425.000009765625 739.9999975585938,405.000009765625 799.9999975585938,385.000009765625 859.9999975585938,405.000009765625"
            fill="#000000"
          ></polygon>
          <rect
            id="gDS"
            width="200"
            height="70"
            class="transparent"
            x="900"
            y="370"
          ></rect>
          <text
            id="gDST"
            font-family="'Montserrat', sans-serif"
            font-size="30"
            fill="#ffffff"
            family="'Montserrat', sans-serif"
            size="30"
            x="962.6347618103027"
            y="376.9864101409912"
            transform="matrix(1,0,0,1,0,0)"
          >
            <tspan id="SvgjsTspan1163" dy="39" x="962.6347618103027">ODD</tspan>
          </text>
          <rect
            id="gPA"
            width="200"
            height="70"
            class="transparent"
            x="1100"
            y="370"
          ></rect>
          <text
            id="gPAT"
            font-family="'Montserrat', sans-serif"
            font-size="30"
            fill="#ffffff"
            family="'Montserrat', sans-serif"
            size="30"
            x="1153.3378219604492"
            y="376.9864101409912"
            transform="matrix(1,0,0,1,0,0)"
          >
            <tspan id="SvgjsTspan1166" dy="39" x="1153.3378219604492">19 - 36</tspan>
          </text>
        </g>
        <g id="SvgjsG1020">
          <rect
            v-for="red in redPoints"
            :id="red.id"
            :width="red.width"
            :height="red.height"
            :class="
              $store.state.hovered.filter((f) => f.refer == red.id).length > 0
                ? `white-${red.class}`
                : `${red.class}`
            "
            :x="red.x"
            :y="red.y"
          ></rect>
          <rect
            v-for="black in blackPoints"
            :id="black.id"
            :width="black.width"
            :height="black.height"
            :class="
              $store.state.hovered.filter((f) => f.refer == black.id).length > 0
                ? `white-${black.class}`
                : `${black.class}`
            "
            :x="black.x"
            :y="black.y"
          ></rect>
          <text
            v-for="text in textPoints"
            :id="text.id"
            :font-family="text.fontFamily"
            :font-size="text.fontSize"
            :fill="text.fill"
            :family="text.family"
            :size="text.size"
            :x="text.x"
            :y="text.y"
            :transform="text.transform"
          >
            <tspan id="text.tspanId" :dy="text.tspanDy" :x="text.tspanX">
              {{ text.text }}
            </tspan>
          </text>

          <rect
            id="gC3"
            width="70"
            height="100"
            class="transparent"
            
            x="1300"
            y="0"
          ></rect>
          <text
            id="gC3T"
            font-family="'Montserrat', sans-serif"
            font-size="30"
            fill="#ffffff"
            family="'Montserrat', sans-serif"
            size="30"
            x="1297.9923934936523"
            y="21.98641014099121"
            transform="matrix(-1.8369701987210297e-16,-1,1,-1.8369701987210297e-16,1285.0000362396243,1385.0000400543213)"
          >
            <tspan id="SvgjsTspan1135" dy="39" x="1297.9923934936523">2 to 1</tspan>
          </text>
          <rect
            id="gC2"
            width="70"
            height="100"
            class="transparent"
            x="1300"
            y="100"
          ></rect>
          <text
            id="gC2T"
            font-family="'Montserrat', sans-serif"
            font-size="30"
            fill="#ffffff"
            family="'Montserrat', sans-serif"
            size="30"
            x="1297.9923934936523"
            y="121.98641014099121"
            transform="matrix(-1.8369701987210297e-16,-1,1,-1.8369701987210297e-16,1185.0000247955325,1485.000051498413)"
          >
            <tspan id="SvgjsTspan1138" dy="39" x="1297.9923934936523">2 to 1</tspan>
          </text>
          <rect
            id="gC1"
            width="70"
            height="100"
            class="transparent"
            x="1300"
            y="200"
          ></rect>
          <text
            id="gC1T"
            font-family="'Montserrat', sans-serif"
            font-size="30"
            fill="#ffffff"
            family="'Montserrat', sans-serif"
            size="30"
            x="1297.9923934936523"
            y="221.9864101409912"
            transform="matrix(-1.8369701987210297e-16,-1,1,-1.8369701987210297e-16,1085.0000400543215,1585.000036239624)"
          >
            <tspan id="SvgjsTspan1141" dy="39" x="1297.9923934936523">2 to 1</tspan>
          </text>
        </g>
      </svg>
    </div>
  </div>
</template>
<script>
import {
  redPoints,
  blackPoints,
  textPoints,
  controlTextPoints,
} from "../../utils/Points.js";

export default {
  name: "PannoPanel",
  props: {
    isShowGroupBet: true,
  },
  data() {
    return {
      isOvaleShow: true,
      blackPoints,
      textPoints,
      controlTextPoints,

      redPoints,
    };
  },
  methods: {
    handleShowGroupBet() {
      this.isShowGroupBet = !this.isShowGroupBet;
    },
  },
};
</script>
<style scoped>
.mobile-panno {
  transform: rotate(90deg) translateY(-100%) translateX(15%);
  transform-origin: left bottom;
}
.mobile-panno-zoom {
  transform: rotate(90deg) translateY(-30%) translateX(-10%) scale(1.5, 1.5);
  transform-origin: left bottom;
}
</style>
