<template>
  <div class="wheel-box">
    <div id="overlay-wheel" xclass="w-20 h-20 md:w-24 md:h-24" style="visibility: visible; display: block;"></div>
    <div
      id="window-wheel"
      xclass="w-20 h-20 md:w-24 md:h-24"
      style="visibility: visible; box-shadow: rgb(0, 0, 0) 0px 0px 20px;"
    >
      <div id="wheel" v-show="!wait">
        <svg
          id="SvgjsSvg1589"
          width="100%"
          height="100%"
          xmlns="http://www.w3.org/2000/svg"
          version="1.1"
          xmlns:xlink="http://www.w3.org/1999/xlink"
          xmlns:svgjs="http://svgjs.com/svgjs"
          viewBox="0 0 300 300"
          style="transition: all 5s ease"
          :style="{ transform: `rotate(-${rotateDeg}deg)` }"
        >
          <defs id="SvgjsDefs1590"></defs>
          <circle id="SvgjsCircle1591" r="150" cx="150" cy="150" ></circle>
          <g id="SvgjsG1592" transform="matrix(1,0,0,1,137.25,0)">
            <polygon
              id="w0"
              points="0,0 25.5,0 12.75,150"
              transform="matrix(1,0,0,1,0,0)"
              class="green section"
            ></polygon>
            <text
              id="SvgjsText1594"
              font-family="Helvetica, Arial, sans-serif"
              transform="matrix(1,0,0,1,0,0)"
              style="pointer-events: none"
              x="7.4513421058654785"
              y="9.998657703399658"
              fill="#ffffff"
            >
              <tspan id="SvgjsTspan1595" dy="20.8" x="7.4513421058654785">0</tspan>
            </text>
            <polygon
              id="w32"
              points="0,0 25.5,0 12.75,150"
              transform="matrix(0.9856151131419448,0.16900546957477847,-0.16900546957477847,0.9856151131419448,25.534227743656977,0.0029132916298522105)"
              class="red section"
            ></polygon>
            <text
              id="SvgjsText1597"
              font-family="Helvetica, Arial, sans-serif"
              transform="matrix(0.9856151131419448,0.16900546957477847,-0.16900546957477847,0.9856151131419448,25.534227743656977,0.0029132916298522105)"
              style="pointer-events: none"
              x="3.7332210540771484"
              y="9.998657703399658"
              fill="#ffffff"
            >
              <tspan id="SvgjsTspan1598" dy="20.8" x="3.7332210540771484">32</tspan>
            </text>
            <polygon
              id="w15"
              points="0,0 25.5,0 12.75,150"
              transform="matrix(0.9428743025076173,0.33314869003310554,-0.33314869003310554,0.9428743025076173,50.70065614799371,4.321208825935315)"
              class="black section"
            ></polygon>
            <text
              id="SvgjsText1600"
              font-family="Helvetica, Arial, sans-serif"
              transform="matrix(0.9428743025076173,0.33314869003310554,-0.33314869003310554,0.9428743025076173,50.70065614799371,4.321208825935315)"
              style="pointer-events: none"
              x="5.333892345428467"
              y="9.998657703399658"
              fill="#ffffff"
            >
              <tspan id="SvgjsTspan1601" dy="20.8" x="5.333892345428467">15</tspan>
            </text>
            <polygon
              id="w19"
              points="0,0 25.5,0 12.75,150"
              transform="matrix(0.8730072115474101,0.4877072980653616,-0.4877072980653616,0.8730072115474101,74.77525276257475,12.830650217555132)"
              class="red section"
            ></polygon>
            <text
              id="SvgjsText1603"
              font-family="Helvetica, Arial, sans-serif"
              transform="matrix(0.8730072115474101,0.4877072980653616,-0.4877072980653616,0.8730072115474101,74.77525276257475,12.830650217555132)"
              style="pointer-events: none"
              x="4.988255023956299"
              y="9.998657703399658"
              fill="#ffffff"
            >
              <tspan id="SvgjsTspan1604" dy="20.8" x="4.988255023956299">19</tspan>
            </text>
            <polygon
              id="w4"
              points="0,0 25.5,0 12.75,150"
              transform="matrix(0.7780239006584515,0.6282346774925816,-0.6282346774925816,0.7780239006584515,97.06539689049198,25.286422763201855)"
              class="black section"
            ></polygon>
            <text
              id="SvgjsText1606"
              font-family="Helvetica, Arial, sans-serif"
              transform="matrix(0.7780239006584515,0.6282346774925816,-0.6282346774925816,0.7780239006584515,97.06539689049198,25.286422763201855)"
              style="pointer-events: none"
              x="7.3808722496032715"
              y="9.998657703399658"
              fill="#ffffff"
            >
              <tspan id="SvgjsTspan1607" dy="20.8" x="7.3808722496032715">4</tspan>
            </text>
            <polygon
              id="w21"
              points="0,0 25.5,0 12.75,150"
              transform="matrix(0.6606570182018237,0.7506878874077263,-0.7506878874077263,0.6606570182018237,116.92980612908569,41.330176705277935)"
              class="red section"
            ></polygon>
            <text
              id="SvgjsText1609"
              font-family="Helvetica, Arial, sans-serif"
              transform="matrix(0.6606570182018237,0.7506878874077263,-0.7506878874077263,0.6606570182018237,116.92980612908569,41.330176705277935)"
              style="pointer-events: none"
              x="5.317113399505615"
              y="9.998659610748291"
              fill="#ffffff"
            >
              <tspan id="SvgjsTspan1610" dy="20.8" x="5.317113399505615">21</tspan>
            </text>
            <polygon
              id="w2"
              points="0,0 25.5,0 12.75,150"
              transform="matrix(0.524283182827569,0.8515439766707259,-0.8515439766707259,0.524283182827569,133.7969859195574,60.50033687331289)"
              class="black section"
            ></polygon>
            <text
              id="SvgjsText1612"
              font-family="Helvetica, Arial, sans-serif"
              transform="matrix(0.524283182827569,0.8515439766707259,-0.8515439766707259,0.524283182827569,133.7969859195574,60.50033687331289)"
              style="pointer-events: none"
              x="8.203020095825195"
              y="9.998657703399658"
              fill="#ffffff"
            >
              <tspan id="SvgjsTspan1613" dy="20.8" x="8.203020095825195">2</tspan>
            </text>
            <polygon
              id="w25"
              points="0,0 25.5,0 12.75,150"
              transform="matrix(0.37282583892020327,0.9279013384155919,-0.9279013384155919,0.37282583892020327,147.1816713161062,82.24538209717072)"
              class="red section"
            ></polygon>
            <text
              id="SvgjsText1615"
              font-family="Helvetica, Arial, sans-serif"
              transform="matrix(0.37282583892020327,0.9279013384155919,-0.9279013384155919,0.37282583892020327,147.1816713161062,82.24538209717072)"
              style="pointer-events: none"
              x="3.676176071166992"
              y="9.998658180236816"
              fill="#ffffff"
            >
              <tspan id="SvgjsTspan1616" dy="20.8" x="3.676176071166992">25</tspan>
            </text>
            <polygon
              id="w17"
              points="0,0 25.5,0 12.75,150"
              transform="matrix(0.21064237999158403,0.9775631886233652,-0.9775631886233652,0.21064237999158403,156.69878794861208,105.93971234631448)"
              class="black section"
            ></polygon>
            <text
              id="SvgjsText1618"
              font-family="Helvetica, Arial, sans-serif"
              transform="matrix(0.21064237999158403,0.9775631886233652,-0.9775631886233652,0.21064237999158403,156.69878794861208,105.93971234631448)"
              style="pointer-events: none"
              x="5.149329662322998"
              y="9.998658180236816"
              fill="#ffffff"
            >
              <tspan id="SvgjsTspan1619" dy="20.8" x="5.149329662322998">17</tspan>
            </text>
            <polygon
              id="w34"
              points="0,0 25.5,0 12.75,150"
              transform="matrix(0.04239878745558419,0.999100767101245,-0.999100767101245,0.04239878745558419,162.07453052512807,130.9016471011215)"
              class="red section"
            ></polygon>
            <text
              id="SvgjsText1621"
              font-family="Helvetica, Arial, sans-serif"
              transform="matrix(0.04239878745558419,0.999100767101245,-0.999100767101245,0.04239878745558419,162.07453052512807,130.9016471011215)"
              style="pointer-events: none"
              x="2.868875503540039"
              y="9.998657703399658"
              fill="#ffffff"
            >
              <tspan id="SvgjsTspan1622" dy="20.8" x="2.868875503540039">34</tspan>
            </text>
            <polygon
              id="w6"
              points="0,0 25.5,0 12.75,150"
              transform="matrix(-0.1270646086013505,0.9918944425900297,-0.9918944425900297,-0.1270646086013505,163.15424014817165,156.4130371471797)"
              class="black section"
            ></polygon>
            <text
              id="SvgjsText1624"
              font-family="Helvetica, Arial, sans-serif"
              transform="matrix(-0.1270646086013505,0.9918944425900297,-0.9918944425900297,-0.1270646086013505,163.15424014817165,156.4130371471797)"
              style="pointer-events: none"
              x="7.877516746520996"
              y="9.998657703399658"
              fill="#ffffff"
            >
              <tspan id="SvgjsTspan1625" dy="20.8" x="7.877516746520996">6</tspan>
            </text>
            <polygon
              id="w27"
              points="0,0 25.5,0 12.75,150"
              transform="matrix(-0.29287238462149817,0.9561515394152317,-0.9561515394152317,-0.29287238462149817,159.90685381620884,181.73992556568052)"
              class="red section"
            ></polygon>
            <text
              id="SvgjsText1627"
              font-family="Helvetica, Arial, sans-serif"
              transform="matrix(-0.29287238462149817,0.9561515394152317,-0.9561515394152317,-0.29287238462149817,159.90685381620884,181.73992556568052)"
              style="pointer-events: none"
              x="3.508390426635742"
              y="9.998658180236816"
              fill="#ffffff"
            >
              <tspan id="SvgjsTspan1628" dy="20.8" x="3.508390426635742">27</tspan>
            </text>
            <polygon
              id="w13"
              points="0,0 25.5,0 12.75,150"
              transform="matrix(-0.45025428840838766,0.8929003728131467,-0.8929003728131467,-0.45025428840838766,152.42579809917896,206.1536635078905)"
              class="black section"
            ></polygon>
            <text
              id="SvgjsText1630"
              font-family="Helvetica, Arial, sans-serif"
              transform="matrix(-0.45025428840838766,0.8929003728131467,-0.8929003728131467,-0.45025428840838766,152.42579809917896,206.1536635078905)"
              style="pointer-events: none"
              x="5.35067081451416"
              y="9.998659610748291"
              fill="#ffffff"
            >
              <tspan id="SvgjsTspan1631" dy="20.8" x="5.35067081451416">13</tspan>
            </text>
            <polygon
              id="w36"
              points="0,0 25.5,0 12.75,150"
              transform="matrix(-0.5946824782030595,0.803960664534197,-0.803960664534197,-0.5946824782030595,140.92630127721856,228.95187325764792)"
              class="red section"
            ></polygon>
            <text
              id="SvgjsText1633"
              font-family="Helvetica, Arial, sans-serif"
              transform="matrix(-0.5946824782030595,0.803960664534197,-0.803960664534197,-0.5946824782030595,140.92630127721856,228.95187325764792)"
              style="pointer-events: none"
              x="3.364093780517578"
              y="9.998657703399658"
              fill="#ffffff"
            >
              <tspan id="SvgjsTspan1634" dy="20.8" x="3.364093780517578">36</tspan>
            </text>
            <polygon
              id="w11"
              points="0,0 25.5,0 12.75,150"
              transform="matrix(-0.7220017876668933,0.6918911898599449,-0.6918911898599449,-0.7220017876668933,125.73920127174462,249.47865547931968)"
              class="black section"
            ></polygon>
            <text
              id="SvgjsText1636"
              font-family="Helvetica, Arial, sans-serif"
              transform="matrix(-0.7220017876668933,0.6918911898599449,-0.6918911898599449,-0.7220017876668933,125.73920127174462,249.47865547931968)"
              style="pointer-events: none"
              x="6.9714765548706055"
              y="9.998657703399658"
              fill="#ffffff"
            >
              <tspan id="SvgjsTspan1637" dy="20.8" x="6.9714765548706055">11</tspan>
            </text>
            <polygon
              id="w30"
              points="0,0 25.5,0 12.75,150"
              transform="matrix(-0.8285492690769236,0.5599161622172515,-0.5599161622172515,-0.8285492690769236,107.3014275133185,267.1434592932686)"
              class="red section"
            ></polygon>
            <text
              id="SvgjsText1639"
              font-family="Helvetica, Arial, sans-serif"
              transform="matrix(-0.8285492690769236,0.5599161622172515,-0.5599161622172515,-0.8285492690769236,107.3014275133185,267.1434592932686)"
              style="pointer-events: none"
              x="2.9412755966186523"
              y="9.998657703399658"
              fill="#ffffff"
            >
              <tspan id="SvgjsTspan1640" dy="20.8" x="2.9412755966186523">30</tspan>
            </text>
            <polygon
              id="w8"
              points="0,0 25.5,0 12.75,150"
              transform="matrix(-0.9112595755029622,0.4118324732875749,-0.4118324732875749,-0.9112595755029622,86.143430580799,281.43807229102777)"
              class="black section"
            ></polygon>
            <text
              id="SvgjsText1642"
              font-family="Helvetica, Arial, sans-serif"
              transform="matrix(-0.9112595755029622,0.4118324732875749,-0.4118324732875749,-0.9112595755029622,86.143430580799,281.43807229102777)"
              style="pointer-events: none"
              x="7.645973205566406"
              y="9.998657703399658"
              fill="#ffffff"
            >
              <tspan id="SvgjsTspan1643" dy="20.8" x="7.645973205566406">8</tspan>
            </text>
            <polygon
              id="w23"
              points="0,0 25.5,0 12.75,150"
              transform="matrix(-0.9677531501451416,0.25190045729246896,-0.25190045729246896,-0.9677531501451416,62.873921258220896,291.95124169129224)"
              class="red section"
            ></polygon>
            <text
              id="SvgjsText1645"
              font-family="Helvetica, Arial, sans-serif"
              transform="matrix(-0.9677531501451416,0.25190045729246896,-0.25190045729246896,-0.9677531501451416,62.873921258220896,291.95124169129224)"
              style="pointer-events: none"
              x="3.6929540634155273"
              y="9.998658180236816"
              fill="#ffffff"
            >
              <tspan id="SvgjsTspan1646" dy="20.8" x="3.6929540634155273">23</tspan>
            </text>
            <polygon
              id="w10"
              points="0,0 25.5,0 12.75,150"
              transform="matrix(-0.9964046856445924,0.08472132214207362,-0.08472132214207362,-0.9964046856445924,38.1623580632796,298.3805059893774)"
              class="black section"
            ></polygon>
            <text
              id="SvgjsText1648"
              font-family="Helvetica, Arial, sans-serif"
              transform="matrix(-0.9964046856445924,0.08472132214207362,-0.08472132214207362,-0.9964046856445924,38.1623580632796,298.3805059893774)"
              style="pointer-events: none"
              x="4.565436363220215"
              y="9.998657703399658"
              fill="#ffffff"
            >
              <tspan id="SvgjsTspan1649" dy="20.8" x="4.565436363220215">10</tspan>
            </text>
            <polygon
              id="w5"
              points="0,0 25.5,0 12.75,150"
              transform="matrix(-0.996389883808376,-0.08489522627527935,0.08489522627527935,-0.996389883808376,12.719687077264892,300.5408967062662)"
              class="red section"
            ></polygon>
            <text
              id="SvgjsText1651"
              font-family="Helvetica, Arial, sans-serif"
              transform="matrix(-0.996389883808376,-0.08489522627527935,0.08489522627527935,-0.996389883808376,12.719687077264892,300.5408967062662)"
              style="pointer-events: none"
              x="8.223154067993164"
              y="9.998659610748291"
              fill="#ffffff"
            >
              <tspan id="SvgjsTspan1652" dy="20.8" x="8.223154067993164">5</tspan>
            </text>
            <polygon
              id="w24"
              points="0,0 25.5,0 12.75,150"
              transform="matrix(-0.9677091704819712,-0.25206935824311366,0.25206935824311366,-0.9677091704819712,-12.722111812821918,298.3702598898954)"
              class="black section"
            ></polygon>
            <text
              id="SvgjsText1654"
              font-family="Helvetica, Arial, sans-serif"
              transform="matrix(-0.9677091704819712,-0.25206935824311366,0.25206935824311366,-0.9677091704819712,-12.722111812821918,298.3702598898954)"
              style="pointer-events: none"
              x="3.017946243286133"
              y="9.998658180236816"
              fill="#ffffff"
            >
              <tspan id="SvgjsTspan1655" dy="20.8" x="3.017946243286133">24</tspan>
            </text>
            <polygon
              id="w16"
              points="0,0 25.5,0 12.75,150"
              transform="matrix(-0.9111876832977951,-0.41199151181352883,0.41199151181352883,-0.9111876832977951,-37.43108380998244,291.93104427029175)"
              class="red section"
            ></polygon>
            <text
              id="SvgjsText1657"
              font-family="Helvetica, Arial, sans-serif"
              transform="matrix(-0.9111876832977951,-0.41199151181352883,0.41199151181352883,-0.9111876832977951,-37.43108380998244,291.93104427029175)"
              style="pointer-events: none"
              x="4.988255023956299"
              y="9.998657703399658"
              fill="#ffffff"
            >
              <tspan id="SvgjsTspan1658" dy="20.8" x="4.988255023956299">16</tspan>
            </text>
            <polygon
              id="w33"
              points="0,0 25.5,0 12.75,150"
              transform="matrix(-0.8284515326522345,-0.5600607628161105,0.5600607628161105,-0.8284515326522345,-60.69635738110058,281.40850462374055)"
              class="black section"
            ></polygon>
            <text
              id="SvgjsText1660"
              font-family="Helvetica, Arial, sans-serif"
              transform="matrix(-0.8284515326522345,-0.5600607628161105,0.5600607628161105,-0.8284515326522345,-60.69635738110058,281.40850462374055)"
              style="pointer-events: none"
              x="3.7634239196777344"
              y="9.998658180236816"
              fill="#ffffff"
            >
              <tspan id="SvgjsTspan1661" dy="20.8" x="3.7634239196777344">33</tspan>
            </text>
            <polygon
              id="w1"
              points="0,0 25.5,0 12.75,150"
              transform="matrix(-0.7218810188775042,-0.6920171924052005,0.6920171924052005,-0.7218810188775042,-81.84859587009191,267.1053720347919)"
              class="red section"
            ></polygon>
            <text
              id="SvgjsText1663"
              font-family="Helvetica, Arial, sans-serif"
              transform="matrix(-0.7218810188775042,-0.6920171924052005,0.6920171924052005,-0.7218810188775042,-81.84859587009191,267.1053720347919)"
              style="pointer-events: none"
              x="9.860738277435303"
              y="9.998657703399658"
              fill="#ffffff"
            >
              <tspan id="SvgjsTspan1664" dy="20.8" x="9.860738277435303">1</tspan>
            </text>
            <polygon
              id="w20"
              points="0,0 25.5,0 12.75,150"
              transform="matrix(-0.5945421515397129,-0.8040644439611349,0.8040644439611349,-0.5945421515397129,-100.27925416203888,249.4331443914614)"
              class="black section"
            ></polygon>
            <text
              id="SvgjsText1666"
              font-family="Helvetica, Arial, sans-serif"
              transform="matrix(-0.5945421515397129,-0.8040644439611349,0.8040644439611349,-0.5945421515397129,-100.27925416203888,249.4331443914614)"
              style="pointer-events: none"
              x="2.924497604370117"
              y="9.998658180236816"
              fill="#ffffff"
            >
              <tspan id="SvgjsTspan1667" dy="20.8" x="2.924497604370117">20</tspan>
            </text>
            <polygon
              id="w14"
              points="0,0 25.5,0 12.75,150"
              transform="matrix(-0.4500984410374354,-0.8929789434111368,0.8929789434111368,-0.4500984410374354,-115.45808638844323,228.90024768410728)"
              class="red section"
            ></polygon>
            <text
              id="SvgjsText1669"
              font-family="Helvetica, Arial, sans-serif"
              transform="matrix(-0.4500984410374354,-0.8929789434111368,0.8929789434111368,-0.4500984410374354,-115.45808638844323,228.90024768410728)"
              style="pointer-events: none"
              x="4.493648529052734"
              y="9.998659610748291"
              fill="#ffffff"
            >
              <tspan id="SvgjsTspan1670" dy="20.8" x="4.493648529052734">14</tspan>
            </text>
            <polygon
              id="w31"
              points="0,0 25.5,0 12.75,150"
              transform="matrix(-0.29270550023653524,-0.9562026407259497,0.9562026407259497,-0.29270550023653524,-126.94840098087664,206.09740870473615)"
              class="black section"
            ></polygon>
            <text
              id="SvgjsText1672"
              font-family="Helvetica, Arial, sans-serif"
              transform="matrix(-0.29270550023653524,-0.9562026407259497,0.9562026407259497,-0.29270550023653524,-126.94840098087664,206.09740870473615)"
              style="pointer-events: none"
              x="5.347316265106201"
              y="9.998658180236816"
              fill="#ffffff"
            >
              <tspan id="SvgjsTspan1673" dy="20.8" x="5.347316265106201">31</tspan>
            </text>
            <polygon
              id="w9"
              points="0,0 25.5,0 12.75,150"
              transform="matrix(-0.1268914884283698,-0.9919166044403294,0.9919166044403294,-0.1268914884283698,-134.41962418858768,181.68065997086967)"
              class="red section"
            ></polygon>
            <text
              id="SvgjsText1675"
              font-family="Helvetica, Arial, sans-serif"
              transform="matrix(-0.1268914884283698,-0.9919166044403294,0.9919166044403294,-0.1268914884283698,-134.41962418858768,181.68065997086967)"
              style="pointer-events: none"
              x="7.877516746520996"
              y="9.998657703399658"
              fill="#ffffff"
            >
              <tspan id="SvgjsTspan1676" dy="20.8" x="7.877516746520996">9</tspan>
            </text>
            <polygon
              id="w22"
              points="0,0 25.5,0 12.75,150"
              transform="matrix(0.04257316278837935,-0.9990933518997082,0.9990933518997082,0.04257316278837935,-137.65681061050807,156.35246581846437)"
              class="black section"
            ></polygon>
            <text
              id="SvgjsText1678"
              font-family="Helvetica, Arial, sans-serif"
              transform="matrix(0.04257316278837935,-0.9990933518997082,0.9990933518997082,0.04257316278837935,-137.65681061050807,156.35246581846437)"
              style="pointer-events: none"
              x="3.659396171569824"
              y="9.998657703399658"
              fill="#ffffff"
            >
              <tspan id="SvgjsTspan1679" dy="20.8" x="3.659396171569824">22</tspan>
            </text>
            <polygon
              id="w18"
              points="0,0 25.5,0 12.75,150"
              transform="matrix(0.21081299374532858,-0.9775264097036622,0.9775264097036622,0.21081299374532858,-136.56682712580226,130.8415126619224)"
              class="red section"
            ></polygon>
            <text
              id="SvgjsText1681"
              font-family="Helvetica, Arial, sans-serif"
              transform="matrix(0.21081299374532858,-0.9775264097036622,0.9775264097036622,0.21081299374532858,-136.56682712580226,130.8415126619224)"
              style="pointer-events: none"
              x="4.756712436676025"
              y="9.998658180236816"
              fill="#ffffff"
            >
              <tspan id="SvgjsTspan1682" dy="20.8" x="4.756712436676025">18</tspan>
            </text>
            <polygon
              id="w29"
              points="0,0 25.5,0 12.75,150"
              transform="matrix(0.37298778257580895,-0.92783625389892,0.92783625389892,0.37298778257580895,-131.18103231267955,105.88174485083988)"
              class="black section"
            ></polygon>
            <text
              id="SvgjsText1684"
              font-family="Helvetica, Arial, sans-serif"
              transform="matrix(0.37298778257580895,-0.92783625389892,0.92783625389892,0.37298778257580895,-131.18103231267955,105.88174485083988)"
              style="pointer-events: none"
              x="3.333892822265625"
              y="9.998657703399658"
              fill="#ffffff"
            >
              <tspan id="SvgjsTspan1685" dy="20.8" x="3.333892822265625">29</tspan>
            </text>
            <polygon
              id="w7"
              points="0,0 25.5,0 12.75,150"
              transform="matrix(0.5244317973027094,-0.8514524590239022,0.8514524590239022,0.5244317973027094,-121.65437426919488,82.19124925714834)"
              class="red section"
            ></polygon>
            <text
              id="SvgjsText1687"
              font-family="Helvetica, Arial, sans-serif"
              transform="matrix(0.5244317973027094,-0.8514524590239022,0.8514524590239022,0.5244317973027094,-121.65437426919488,82.19124925714834)"
              style="pointer-events: none"
              x="8.035235404968262"
              y="9.998658180236816"
              fill="#ffffff"
            >
              <tspan id="SvgjsTspan1688" dy="20.8" x="8.035235404968262">7</tspan>
            </text>
            <polygon
              id="w28"
              points="0,0 25.5,0 12.75,150"
              transform="matrix(0.6607880278916779,-0.750572569572741,0.750572569572741,0.6607880278916779,-108.26093279153005,60.45159607830077)"
              class="black section"
            ></polygon>
            <text
              id="SvgjsText1690"
              font-family="Helvetica, Arial, sans-serif"
              transform="matrix(0.6607880278916779,-0.750572569572741,0.750572569572741,0.6607880278916779,-108.26093279153005,60.45159607830077)"
              style="pointer-events: none"
              x="3.0989933013916016"
              y="9.998657703399658"
              fill="#ffffff"
            >
              <tspan id="SvgjsTspan1691" dy="20.8" x="3.0989933013916016">28</tspan>
            </text>
            <polygon
              id="w12"
              points="0,0 25.5,0 12.75,150"
              transform="matrix(0.7781335364438879,-0.6280988771374525,0.6280988771374525,0.7781335364438879,-91.38603416027745,41.28823021691932)"
              class="red section"
            ></polygon>
            <text
              id="SvgjsText1693"
              font-family="Helvetica, Arial, sans-serif"
              transform="matrix(0.7781335364438879,-0.6280988771374525,0.6280988771374525,0.7781335364438879,-91.38603416027745,41.28823021691932)"
              style="pointer-events: none"
              x="5.317113876342773"
              y="9.998657703399658"
              fill="#ffffff"
            >
              <tspan id="SvgjsTspan1694" dy="20.8" x="5.317113876342773">12</tspan>
            </text>
            <polygon
              id="w35"
              points="0,0 25.5,0 12.75,150"
              transform="matrix(0.8730923192316901,-0.4875549221355771,0.4875549221355771,0.8730923192316901,-71.5151653905406,25.2524773724751)"
              class="black section"
            ></polygon>
            <text
              id="SvgjsText1696"
              font-family="Helvetica, Arial, sans-serif"
              transform="matrix(0.8730923192316901,-0.4875549221355771,0.4875549221355771,0.8730923192316901,-71.5151653905406,25.2524773724751)"
              style="pointer-events: none"
              x="3.7869129180908203"
              y="9.998657703399658"
              fill="#ffffff"
            >
              <tspan id="SvgjsTspan1697" dy="20.8" x="3.7869129180908203">35</tspan>
            </text>
            <polygon
              id="w3"
              points="0,0 25.5,0 12.75,150"
              transform="matrix(0.9429324335619232,-0.3329841223496839,0.3329841223496839,0.9429324335619232,-49.2200068803671,12.805682525669994)"
              class="red section"
            ></polygon>
            <text
              id="SvgjsText1699"
              font-family="Helvetica, Arial, sans-serif"
              transform="matrix(0.9429324335619232,-0.3329841223496839,0.3329841223496839,0.9429324335619232,-49.2200068803671,12.805682525669994)"
              style="pointer-events: none"
              x="8.236577033996582"
              y="9.998657703399658"
              fill="#ffffff"
            >
              <tspan id="SvgjsTspan1700" dy="20.8" x="8.236577033996582">3</tspan>
            </text>
            <polygon
              id="w26"
              points="0,0 25.5,0 12.75,150"
              transform="matrix(0.9856445951489979,-0.1688334447127342,0.1688334447127342,0.9856445951489979,-25.141985295059854,4.305937147737666)"
              class="black section"
            ></polygon>
            <text
              id="SvgjsText1702"
              font-family="Helvetica, Arial, sans-serif"
              transform="matrix(0.9856445951489979,-0.1688334447127342,0.1688334447127342,0.9856445951489979,-25.141985295059854,4.305937147737666)"
              style="pointer-events: none"
              x="3.35067081451416"
              y="9.998657703399658"
              fill="#ffffff"
            >
              <tspan id="SvgjsTspan1703" dy="20.8" x="3.35067081451416">26</tspan>
            </text>
          </g>
        </svg>
      </div>
      <h3 v-show="wait && !nobet" class="-top-[20%] items-center leading-4" style="font-size: 1vh;">
        NO MORE
        BETS
      </h3>
     
    </div>
  </div>
</template>

<script>
import Vue from "vue";

export default Vue.extend({
  // eslint-disable-next-line vue/multi-word-component-names
  name: "Wheel",
  props: {
    msg: String,
    num: Number,
    numberList: Array,
    wait: {
      type: Boolean,
      default: false,
    },
    nobet: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      rotateDeg: 0,
      // numberList: [
      //   "0",
      //   "32",
      //   "15",
      //   "19",
      //   "4",
      //   "21",
      //   "2",
      //   "25",
      //   "17",
      //   "34",
      //   "6",
      //   "27",
      //   "13",
      //   "36",
      //   "11",
      //   "30",
      //   "8",
      //   "23",
      //   "10",
      //   "5",
      //   "24",
      //   "16",
      //   "33",
      //   "1",
      //   "20",
      //   "14",
      //   "31",
      //   "9",
      //   "22",
      //   "18",
      //   "29",
      //   "7",
      //   "28",
      //   "12",
      //   "35",
      //   "3",
      //   "26"
      // ]
    };
  },
  mounted(){
  },
  updated: function () {
    // this.$nextTick(() => {
    //   this.$emit('rotateStop')
    // })
  },
  watch: {
    num(val){
      // if(!this.wait){
       
      let current = this.numberList.indexOf(`${val}`);
      
      let rotateDeg =
        this.rotateDeg +
        (current < this.numberList.length / 2 ? 360 : 0) +
        (360 / 37) * current;

      setTimeout(() => {
        this.rotateDeg = rotateDeg;
      }, 100);

      
      // }
    },
  },
});
</script>

<style scoped lang="scss">
//.wheel-box {
//  width: 16%;
//  height: 85%;
//  position: absolute;
//  top: 0;
//  margin-top: 2px;
//  z-index: 1;
//}
#overlay-wheel {
 
  position: absolute;
  border-radius: 50%;
  z-index: 59;
  background: linear-gradient(to left, #000 -2%, rgba(0, 0, 0, 0) 35%),
    linear-gradient(to right, #000 -2%, rgba(0, 0, 0, 0) 35%),
    linear-gradient(to top, #000 -20%, rgba(0, 0, 0, 0) 40%),
    linear-gradient(to bottom, #000 -20%, #00000000 40%);
}
#window-wheel {
 
  box-shadow: 0 0 20px #000;
  position: absolute;
  overflow: hidden;
  border-radius: 50%;

  z-index: 58;
}
.desktop.roulette-right #window-wheel {
  margin-left: unset;
  margin-right: 18%;
  right: 0;
}

#window-wheel.gold {
  border-color: #c90;
}

#window-wheel.silver {
  border-color: #666;
}

#window-wheel.bronze {
  border-color: #630;
}
#window-wheel h3 {
  height: 100%;
  width: 100%; 
  font-weight: 800;
  color: #fff;
  text-shadow: #fff 0 0 3em;
  position: absolute;
  text-align: center;
  padding-top:50%;
  padding-bottom:100%;
  background: rgba(0, 0, 0, 0.8);
}
.lang-ru #window-wheel h3 {
  font-size: 1.5vh;
}
#window-wheel #wheel {
  width: 580%;
  height: 580%;
  position: absolute;
  top: -3%;
  left: -240%;
  z-index: 57;
}
#window-wheel #wheel .black {
  fill: #000;
  stroke-width: 0;
}

#window-wheel #wheel .red {
  fill: #c00;
  stroke-width: 0;
}

#window-wheel #wheel .green {
  fill: #390;
  stroke-width: 0;
}

#window-wheel #wheel svg text {
  font-family: Montserrat, sans-serif !important;
}

@media screen and (orientation: portrait) {
  #overlay-wheel, #window-wheel {
    height:calc(10vw/1.7778 * 1.5); width:calc(10vw/1.7778 * 1.5);
    margin-top: 5vw;
  }
}

@media screen and (orientation: landscape) {
  #overlay-wheel, #window-wheel {
    height:15vh;width:15vh;
    margin-top:6vh;
  }
}

</style>
