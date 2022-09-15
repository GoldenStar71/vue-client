<template>
    <div
        class="relative h-full border-2 cursor-pointer gap-2 rounded-lg border-gray-700 bg-black/80 p-2 flex flex-col w-48 md:w-96">

        <div class="w-full flex gap-1 justify-between pt-4 ">
            <a class="tab-action flex-1" :class="activeTabData === 'statistic' ? 'selected' : ''"
                @click="showStatistic">Statistic</a>
            <a class="tab-action flex-1 " :class="activeTabData === 'wheel' ? 'selected' : ''"
                @click="showWheel">Wheel</a>
            <a class="tab-action flex-1" :class="activeTabData === 'sector' ? 'selected' : ''"
                @click="showSector">Sector</a>
            <a class="tab-action flex-1" :class="activeTabData === 'chart' ? 'selected' : ''"
                @click="showChart">Chart</a>
            <a class="tab-action flex-1" :class="activeTabData === 'rank' ? 'selected' : ''" @click="showRank">Rank</a>
        </div>
        <div class="  overflow-y-auto h-full w-full">
            <!-- help -->
            <!-- setting -->
            <div class="flex flex-col w-full h-full items-center pt-4 " v-if="activeTabData === 'statistic'">
                <div class="grid grid-cols-2">
                    <div>hot number</div>
                    <div class="flex flex-row">
                        <div v-if="number !== ''" v-for="number in $store.state.hotCoolNumbers.hot"
                            class="text-center rounded-full flex items-center justify-center w-6 h-6 hot-cold-number mr-0.5"
                            :class="numberObj[number].color === 'Black' ? 'bg-black' : (numberObj[number].color === 'Green' ? ' bg-green-700' : 'bg-red-700')">
                            {{ number }}
                        </div>
                    </div>
                    <div>cool number</div>
                    <div class="flex flex-row">
                        <div v-if="number !== ''" v-for="number in $store.state.hotCoolNumbers.cool"
                            class="text-center rounded-full flex items-center justify-center w-6 h-6 hot-cold-number mr-0.5"
                            :class="numberObj[number].color === 'Black' ? 'bg-black' : (numberObj[number].color === 'Green' ? ' bg-green-700' : 'bg-red-700')">
                            {{ number }}
                        </div>
                    </div>
                </div>
            </div>
            <!-- history -->
            <div class="flex flex-col gap-2 p-2 pt-4" v-if="activeTabData === 'wheel'">
                <div class="grid grid-cols-2">
                    <div class="wheel-stats">
                
                        <h2 class="numberSelected">8</h2>
                        <h2 class="attrNumSelected"> Black <br> Pair </h2>
                        <p>1° Dozen</p>
                        <p>2° Column</p>
                        <p class="highSelected">LOW NUMBER</p>
                        <table>
                            <tbody>
                                <tr>
                                    <td class="col-40">Last 100</td>
                                    <td class="col-10 txt-center">2</td>
                                    <td class="col-50 ico-equal"></td>
                                </tr>
                                <tr>
                                    <td>Last 30</td>
                                    <td class="txt-center">1</td>
                                    <td class="ico-equal"></td>
                                </tr>
                                <tr>
                                    <td>Last 10</td>
                                    <td class="txt-center">1</td>
                                    <td class="ico-equal"></td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    <div>
                        <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"
                            xmlns:svgjs="http://svgjs.com/svgjs" id="SvgjsSvg42764" width="100%" height="100%"
                            version="1.1" viewBox="0 0 300 300">
                            <defs id="SvgjsDefs42765" />
                            <g id="SvgjsG42766" transform="matrix(1,0,0,1,138,0)">
                                <polygon id="0" points="0,0 24,0 12,150" transform="matrix(1,0,0,1,0,0)"
                                    class="green section" style="&#10;    color: red;&#10;" /><text
                                    id="SvgjsText42768" font-family="Helvetica, Arial, sans-serif"
                                    transform="matrix(1,0,0,1,0,0)" style="pointer-events: none;" x="7.539714813232422"
                                    fill="#ffffff">
                                    <tspan id="SvgjsTspan42769" dy="20.8" x="7.539714813232422">0</tspan>
                                </text>
                                <polygon id="32" points="0,0 24,0 12,150"
                                    transform="matrix(0.9856151131419448,0.16900546957477847,-0.16900546957477847,0.9856151131419448,25.523439078513434,0.12966739381093362)"
                                    class="red section" /><text id="SvgjsText42771"
                                    font-family="Helvetica, Arial, sans-serif"
                                    transform="matrix(0.9856151131419448,0.16900546957477847,-0.16900546957477847,0.9856151131419448,25.523439078513434,0.12966739381093362)"
                                    style="pointer-events: none;" x="3.0947046279907227" fill="#ffffff">
                                    <tspan id="SvgjsTspan42772" dy="20.8" x="3.0947046279907227">32</tspan>
                                </text>
                                <polygon id="15" points="0,0 24,0 12,150"
                                    transform="matrix(0.9428743025076173,0.33314869003310554,-0.33314869003310554,0.9428743025076173,50.657811874874426,4.57107034346015)"
                                    class="black section" /><text id="SvgjsText42774"
                                    font-family="Helvetica, Arial, sans-serif"
                                    transform="matrix(0.9428743025076173,0.33314869003310554,-0.33314869003310554,0.9428743025076173,50.657811874874426,4.57107034346015)"
                                    style="pointer-events: none;" x="3.0947046279907227" fill="#ffffff">
                                    <tspan id="SvgjsTspan42775" dy="20.8" x="3.0947046279907227">15</tspan>
                                </text>
                                <polygon id="19" points="0,0 24,0 12,150"
                                    transform="matrix(0.8730072115474101,0.4877072980653616,-0.4877072980653616,0.8730072115474101,74.68000817123531,13.196430691104155)"
                                    class="red section" /><text id="SvgjsText42777"
                                    font-family="Helvetica, Arial, sans-serif"
                                    transform="matrix(0.8730072115474101,0.4877072980653616,-0.4877072980653616,0.8730072115474101,74.68000817123531,13.196430691104155)"
                                    style="pointer-events: none;" x="3.0947046279907227" fill="#ffffff">
                                    <tspan id="SvgjsTspan42778" dy="20.8" x="3.0947046279907227">19</tspan>
                                </text>
                                <polygon id="4" points="0,0 24,0 12,150"
                                    transform="matrix(0.7780239006584515,0.6282346774925816,-0.6282346774925816,0.7780239006584515,96.89891481598582,25.757598771321284)"
                                    class="black section" /><text id="SvgjsText42780"
                                    font-family="Helvetica, Arial, sans-serif"
                                    transform="matrix(0.7780239006584515,0.6282346774925816,-0.6282346774925816,0.7780239006584515,96.89891481598582,25.757598771321284)"
                                    style="pointer-events: none;" x="7.539714813232422" fill="#ffffff">
                                    <tspan id="SvgjsTspan42781" dy="20.8" x="7.539714813232422">4</tspan>
                                </text>
                                <polygon id="21" points="0,0 24,0 12,150"
                                    transform="matrix(0.6606570182018237,0.7506878874077263,-0.7506878874077263,0.6606570182018237,116.67529889273706,41.89319262083373)"
                                    class="red section" /><text id="SvgjsText42783"
                                    font-family="Helvetica, Arial, sans-serif"
                                    transform="matrix(0.6606570182018237,0.7506878874077263,-0.7506878874077263,0.6606570182018237,116.67529889273706,41.89319262083373)"
                                    style="pointer-events: none;" x="3.0947036743164062" fill="#ffffff">
                                    <tspan id="SvgjsTspan42784" dy="20.8" x="3.0947036743164062">21</tspan>
                                </text>
                                <polygon id="2" points="0,0 24,0 12,150"
                                    transform="matrix(0.524283182827569,0.8515439766707259,-0.8515439766707259,0.524283182827569,133.44019830667804,61.13899485581594)"
                                    class="black section" /><text id="SvgjsText42786"
                                    font-family="Helvetica, Arial, sans-serif"
                                    transform="matrix(0.524283182827569,0.8515439766707259,-0.8515439766707259,0.524283182827569,133.44019830667804,61.13899485581594)"
                                    style="pointer-events: none;" x="7.539714813232422" fill="#ffffff">
                                    <tspan id="SvgjsTspan42787" dy="20.8" x="7.539714813232422">2</tspan>
                                </text>
                                <polygon id="25" points="0,0 24,0 12,150"
                                    transform="matrix(0.37282583892020327,0.9279013384155919,-0.9279013384155919,0.37282583892020327,146.71129069529633,82.94130810098241)"
                                    class="red section" /><text id="SvgjsText42789"
                                    font-family="Helvetica, Arial, sans-serif"
                                    transform="matrix(0.37282583892020327,0.9279013384155919,-0.9279013384155919,0.37282583892020327,146.71129069529633,82.94130810098241)"
                                    style="pointer-events: none;" x="3.0947046279907227" fill="#ffffff">
                                    <tspan id="SvgjsTspan42790" dy="20.8" x="3.0947046279907227">25</tspan>
                                </text>
                                <polygon id="17" points="0,0 24,0 12,150"
                                    transform="matrix(0.21064237999158403,0.9775631886233652,-0.9775631886233652,0.21064237999158403,156.10676973360577,106.67288473778201)"
                                    class="black section" /><text id="SvgjsText42792"
                                    font-family="Helvetica, Arial, sans-serif"
                                    transform="matrix(0.21064237999158403,0.9775631886233652,-0.9775631886233652,0.21064237999158403,156.10676973360577,106.67288473778201)"
                                    style="pointer-events: none;" x="3.094705581665039" fill="#ffffff">
                                    <tspan id="SvgjsTspan42793" dy="20.8" x="3.094705581665039">17</tspan>
                                </text>
                                <polygon id="34" points="0,0 24,0 12,150"
                                    transform="matrix(0.04239878745558419,0.999100767101245,-0.999100767101245,0.04239878745558419,161.35632961571974,131.65097267644742)"
                                    class="red section" /><text id="SvgjsText42795"
                                    font-family="Helvetica, Arial, sans-serif"
                                    transform="matrix(0.04239878745558419,0.999100767101245,-0.999100767101245,0.04239878745558419,161.35632961571974,131.65097267644742)"
                                    style="pointer-events: none;" x="3.0947046279907227" fill="#ffffff">
                                    <tspan id="SvgjsTspan42796" dy="20.8" x="3.0947046279907227">34</tspan>
                                </text>
                                <polygon id="6" points="0,0 24,0 12,150"
                                    transform="matrix(-0.1270646086013505,0.9918944425900297,-0.9918944425900297,-0.1270646086013505,162.30894169172066,157.1569579791222)"
                                    class="black section" /><text id="SvgjsText42798"
                                    font-family="Helvetica, Arial, sans-serif"
                                    transform="matrix(-0.1270646086013505,0.9918944425900297,-0.9918944425900297,-0.1270646086013505,162.30894169172066,157.1569579791222)"
                                    style="pointer-events: none;" x="7.539714813232422" fill="#ffffff">
                                    <tspan id="SvgjsTspan42799" dy="20.8" x="7.539714813232422">6</tspan>
                                </text>
                                <polygon id="27" points="0,0 24,0 12,150"
                                    transform="matrix(-0.29287238462149817,0.9561515394152317,-0.9561515394152317,-0.29287238462149817,158.93719952774273,182.45703922024194)"
                                    class="red section" /><text id="SvgjsText42801"
                                    font-family="Helvetica, Arial, sans-serif"
                                    transform="matrix(-0.29287238462149817,0.9561515394152317,-0.9561515394152317,-0.29287238462149817,158.93719952774273,182.45703922024194)"
                                    style="pointer-events: none;" x="3.094705581665039" fill="#ffffff">
                                    <tspan id="SvgjsTspan42802" dy="20.8" x="3.094705581665039">27</tspan>
                                </text>
                                <polygon id="13" points="0,0 24,0 12,150"
                                    transform="matrix(-0.45025428840838766,0.8929003728131467,-0.8929003728131467,-0.45025428840838766,151.33810738287266,206.82333878750038)"
                                    class="black section" /><text id="SvgjsText42804"
                                    font-family="Helvetica, Arial, sans-serif"
                                    transform="matrix(-0.45025428840838766,0.8929003728131467,-0.8929003728131467,-0.45025428840838766,151.33810738287266,206.82333878750038)"
                                    style="pointer-events: none;" x="3.0947036743164062" fill="#ffffff">
                                    <tspan id="SvgjsTspan42805" dy="20.8" x="3.0947036743164062">13</tspan>
                                </text>
                                <polygon id="36" points="0,0 24,0 12,150"
                                    transform="matrix(-0.5946824782030595,0.803960664534197,-0.803960664534197,-0.5946824782030595,139.73028941856626,229.55484375604857)"
                                    class="red section" /><text id="SvgjsText42807"
                                    font-family="Helvetica, Arial, sans-serif"
                                    transform="matrix(-0.5946824782030595,0.803960664534197,-0.803960664534197,-0.5946824782030595,139.73028941856626,229.55484375604857)"
                                    style="pointer-events: none;" x="3.0947046279907227" fill="#ffffff">
                                    <tspan id="SvgjsTspan42808" dy="20.8" x="3.0947046279907227">36</tspan>
                                </text>
                                <polygon id="11" points="0,0 24,0 12,150"
                                    transform="matrix(-0.7220017876668933,0.6918911898599449,-0.6918911898599449,-0.7220017876668933,124.44769993099445,249.99757387171465)"
                                    class="black section" /><text id="SvgjsText42810"
                                    font-family="Helvetica, Arial, sans-serif"
                                    transform="matrix(-0.7220017876668933,0.6918911898599449,-0.6918911898599449,-0.7220017876668933,124.44769993099445,249.99757387171465)"
                                    style="pointer-events: none;" x="3.690427780151367" fill="#ffffff">
                                    <tspan id="SvgjsTspan42811" dy="20.8" x="3.690427780151367">11</tspan>
                                </text>
                                <polygon id="30" points="0,0 24,0 12,150"
                                    transform="matrix(-0.8285492690769236,0.5599161622172515,-0.5599161622172515,-0.8285492690769236,105.9300155615108,267.5633964149315)"
                                    class="red section" /><text id="SvgjsText42813"
                                    font-family="Helvetica, Arial, sans-serif"
                                    transform="matrix(-0.8285492690769236,0.5599161622172515,-0.5599161622172515,-0.8285492690769236,105.9300155615108,267.5633964149315)"
                                    style="pointer-events: none;" x="3.0947046279907227" fill="#ffffff">
                                    <tspan id="SvgjsTspan42814" dy="20.8" x="3.0947046279907227">30</tspan>
                                </text>
                                <polygon id="8" points="0,0 24,0 12,150"
                                    transform="matrix(-0.9112595755029622,0.4118324732875749,-0.4118324732875749,-0.9112595755029622,84.70998589917178,281.74694664599343)"
                                    class="black section" /><text id="SvgjsText42816"
                                    font-family="Helvetica, Arial, sans-serif"
                                    transform="matrix(-0.9112595755029622,0.4118324732875749,-0.4118324732875749,-0.9112595755029622,84.70998589917178,281.74694664599343)"
                                    style="pointer-events: none;" x="7.539714813232422" fill="#ffffff">
                                    <tspan id="SvgjsTspan42817" dy="20.8" x="7.539714813232422">8</tspan>
                                </text>
                                <polygon id="23" points="0,0 24,0 12,150"
                                    transform="matrix(-0.9677531501451416,0.25190045729246896,-0.25190045729246896,-0.9677531501451416,61.39810639561204,292.1401670342616)"
                                    class="red section" /><text id="SvgjsText42819"
                                    font-family="Helvetica, Arial, sans-serif"
                                    transform="matrix(-0.9677531501451416,0.25190045729246896,-0.25190045729246896,-0.9677531501451416,61.39810639561204,292.1401670342616)"
                                    style="pointer-events: none;" x="3.094705581665039" fill="#ffffff">
                                    <tspan id="SvgjsTspan42820" dy="20.8" x="3.094705581665039">23</tspan>
                                </text>
                                <polygon id="10" points="0,0 24,0 12,150"
                                    transform="matrix(-0.9964046856445924,0.08472132214207362,-0.08472132214207362,-0.9964046856445924,36.665054549046154,298.444046980984)"
                                    class="black section" /><text id="SvgjsText42822"
                                    font-family="Helvetica, Arial, sans-serif"
                                    transform="matrix(-0.9964046856445924,0.08472132214207362,-0.08472132214207362,-0.9964046856445924,36.665054549046154,298.444046980984)"
                                    style="pointer-events: none;" x="3.0947046279907227" fill="#ffffff">
                                    <tspan id="SvgjsTspan42823" dy="20.8" x="3.0947046279907227">10</tspan>
                                </text>
                                <polygon id="5" points="0,0 24,0 12,150"
                                    transform="matrix(-0.996389883808376,-0.08489522627527935,0.08489522627527935,-0.996389883808376,11.22239466440861,300.47722528655976)"
                                    class="red section" /><text id="SvgjsText42825"
                                    font-family="Helvetica, Arial, sans-serif"
                                    transform="matrix(-0.996389883808376,-0.08489522627527935,0.08489522627527935,-0.996389883808376,11.22239466440861,300.47722528655976)"
                                    style="pointer-events: none;" x="7.539714336395264" fill="#ffffff">
                                    <tspan id="SvgjsTspan42826" dy="20.8" x="7.539714336395264">5</tspan>
                                </text>
                                <polygon id="24" points="0,0 24,0 12,150"
                                    transform="matrix(-0.9677091704819712,-0.25206935824311366,0.25206935824311366,-0.9677091704819712,-14.197893690683397,298.1812078712131)"
                                    class="black section" /><text id="SvgjsText42828"
                                    font-family="Helvetica, Arial, sans-serif"
                                    transform="matrix(-0.9677091704819712,-0.25206935824311366,0.25206935824311366,-0.9677091704819712,-14.197893690683397,298.1812078712131)"
                                    style="pointer-events: none;" x="3.094705581665039" fill="#ffffff">
                                    <tspan id="SvgjsTspan42829" dy="20.8" x="3.094705581665039">24</tspan>
                                </text>
                                <polygon id="16" points="0,0 24,0 12,150"
                                    transform="matrix(-0.9111876832977951,-0.41199151181352883,0.41199151181352883,-0.9111876832977951,-38.864474572455784,291.6220506364316)"
                                    class="red section" /><text id="SvgjsText42831"
                                    font-family="Helvetica, Arial, sans-serif"
                                    transform="matrix(-0.9111876832977951,-0.41199151181352883,0.41199151181352883,-0.9111876832977951,-38.864474572455784,291.6220506364316)"
                                    style="pointer-events: none;" x="3.0947046279907227" fill="#ffffff">
                                    <tspan id="SvgjsTspan42832" dy="20.8" x="3.0947046279907227">16</tspan>
                                </text>
                                <polygon id="33" points="0,0 24,0 12,150"
                                    transform="matrix(-0.8284515326522345,-0.5600607628161105,0.5600607628161105,-0.8284515326522345,-62.06769603058976,280.9884590516285)"
                                    class="black section" /><text id="SvgjsText42834"
                                    font-family="Helvetica, Arial, sans-serif"
                                    transform="matrix(-0.8284515326522345,-0.5600607628161105,0.5600607628161105,-0.8284515326522345,-62.06769603058976,280.9884590516285)"
                                    style="pointer-events: none;" x="3.0947046279907227" fill="#ffffff">
                                    <tspan id="SvgjsTspan42835" dy="20.8" x="3.0947046279907227">33</tspan>
                                </text>
                                <polygon id="1" points="0,0 24,0 12,150"
                                    transform="matrix(-0.7218810188775042,-0.6920171924052005,0.6920171924052005,-0.7218810188775042,-83.14000663425004,266.58635914048807)"
                                    class="red section" /><text id="SvgjsText42837"
                                    font-family="Helvetica, Arial, sans-serif"
                                    transform="matrix(-0.7218810188775042,-0.6920171924052005,0.6920171924052005,-0.7218810188775042,-83.14000663425004,266.58635914048807)"
                                    style="pointer-events: none;" x="7.539714813232422" fill="#ffffff">
                                    <tspan id="SvgjsTspan42838" dy="20.8" x="7.539714813232422">1</tspan>
                                </text>
                                <polygon id="20" points="0,0 24,0 12,150"
                                    transform="matrix(-0.5945421515397129,-0.8040644439611349,0.8040644439611349,-0.5945421515397129,-101.47516077569367,248.83009605849054)"
                                    class="black section" /><text id="SvgjsText42840"
                                    font-family="Helvetica, Arial, sans-serif"
                                    transform="matrix(-0.5945421515397129,-0.8040644439611349,0.8040644439611349,-0.5945421515397129,-101.47516077569367,248.83009605849054)"
                                    style="pointer-events: none;" x="3.094705581665039" fill="#ffffff">
                                    <tspan id="SvgjsTspan42841" dy="20.8" x="3.094705581665039">20</tspan>
                                </text>
                                <polygon id="14" points="0,0 24,0 12,150"
                                    transform="matrix(-0.4500984410374354,-0.8929789434111368,0.8929789434111368,-0.4500984410374354,-116.5456602192213,228.23051347654894)"
                                    class="red section" /><text id="SvgjsText42843"
                                    font-family="Helvetica, Arial, sans-serif"
                                    transform="matrix(-0.4500984410374354,-0.8929789434111368,0.8929789434111368,-0.4500984410374354,-116.5456602192213,228.23051347654894)"
                                    style="pointer-events: none;" x="3.0947036743164062" fill="#ffffff">
                                    <tspan id="SvgjsTspan42844" dy="20.8" x="3.0947036743164062">14</tspan>
                                </text>
                                <polygon id="31" points="0,0 24,0 12,150"
                                    transform="matrix(-0.29270550023653524,-0.9562026407259497,0.9562026407259497,-0.29270550023653524,-127.91793010605403,205.38025672419167)"
                                    class="black section" /><text id="SvgjsText42846"
                                    font-family="Helvetica, Arial, sans-serif"
                                    transform="matrix(-0.29270550023653524,-0.9562026407259497,0.9562026407259497,-0.29270550023653524,-127.91793010605403,205.38025672419167)"
                                    style="pointer-events: none;" x="3.0947046279907227" fill="#ffffff">
                                    <tspan id="SvgjsTspan42847" dy="20.8" x="3.0947046279907227">31</tspan>
                                </text>
                                <polygon id="9" points="0,0 24,0 12,150"
                                    transform="matrix(-0.1268914884283698,-0.9919166044403294,0.9919166044403294,-0.1268914884283698,-135.26479280490895,180.9367225175394)"
                                    class="red section" /><text id="SvgjsText42849"
                                    font-family="Helvetica, Arial, sans-serif"
                                    transform="matrix(-0.1268914884283698,-0.9919166044403294,0.9919166044403294,-0.1268914884283698,-135.26479280490895,180.9367225175394)"
                                    style="pointer-events: none;" x="7.539714813232422" fill="#ffffff">
                                    <tspan id="SvgjsTspan42850" dy="20.8" x="7.539714813232422">9</tspan>
                                </text>
                                <polygon id="22" points="0,0 24,0 12,150"
                                    transform="matrix(0.04257316278837935,-0.9990933518997082,0.9990933518997082,0.04257316278837935,-138.37488073841678,155.6031458045396)"
                                    class="black section" /><text id="SvgjsText42852"
                                    font-family="Helvetica, Arial, sans-serif"
                                    transform="matrix(0.04257316278837935,-0.9990933518997082,0.9990933518997082,0.04257316278837935,-138.37488073841678,155.6031458045396)"
                                    style="pointer-events: none;" x="3.0947046279907227" fill="#ffffff">
                                    <tspan id="SvgjsTspan42853" dy="20.8" x="3.0947046279907227">22</tspan>
                                </text>
                                <polygon id="18" points="0,0 24,0 12,150"
                                    transform="matrix(0.21081299374532858,-0.9775264097036622,0.9775264097036622,0.21081299374532858,-137.15871738049327,130.10836785464465)"
                                    class="red section" /><text id="SvgjsText42855"
                                    font-family="Helvetica, Arial, sans-serif"
                                    transform="matrix(0.21081299374532858,-0.9775264097036622,0.9775264097036622,0.21081299374532858,-137.15871738049327,130.10836785464465)"
                                    style="pointer-events: none;" x="3.094705581665039" fill="#ffffff">
                                    <tspan id="SvgjsTspan42856" dy="20.8" x="3.094705581665039">18</tspan>
                                </text>
                                <polygon id="29" points="0,0 24,0 12,150"
                                    transform="matrix(0.37298778257580895,-0.92783625389892,0.92783625389892,0.37298778257580895,-131.6512914757477,105.1858676604157)"
                                    class="black section" /><text id="SvgjsText42858"
                                    font-family="Helvetica, Arial, sans-serif"
                                    transform="matrix(0.37298778257580895,-0.92783625389892,0.92783625389892,0.37298778257580895,-131.6512914757477,105.1858676604157)"
                                    style="pointer-events: none;" x="3.0947046279907227" fill="#ffffff">
                                    <tspan id="SvgjsTspan42859" dy="20.8" x="3.0947046279907227">29</tspan>
                                </text>
                                <polygon id="7" points="0,0 24,0 12,150"
                                    transform="matrix(0.5244317973027094,-0.8514524590239022,0.8514524590239022,0.5244317973027094,-122.01105042121785,81.55265991288042)"
                                    class="red section" /><text id="SvgjsText42861"
                                    font-family="Helvetica, Arial, sans-serif"
                                    transform="matrix(0.5244317973027094,-0.8514524590239022,0.8514524590239022,0.5244317973027094,-122.01105042121785,81.55265991288042)"
                                    style="pointer-events: none;" x="7.53971529006958" fill="#ffffff">
                                    <tspan id="SvgjsTspan42862" dy="20.8" x="7.53971529006958">7</tspan>
                                </text>
                                <polygon id="28" points="0,0 24,0 12,150"
                                    transform="matrix(0.6607880278916779,-0.750572569572741,0.750572569572741,0.6607880278916779,-108.51534177061129,59.88866665112121)"
                                    class="black section" /><text id="SvgjsText42864"
                                    font-family="Helvetica, Arial, sans-serif"
                                    transform="matrix(0.6607880278916779,-0.750572569572741,0.750572569572741,0.6607880278916779,-108.51534177061129,59.88866665112121)"
                                    style="pointer-events: none;" x="3.0947046279907227" fill="#ffffff">
                                    <tspan id="SvgjsTspan42865" dy="20.8" x="3.0947046279907227">28</tspan>
                                </text>
                                <polygon id="12" points="0,0 24,0 12,150"
                                    transform="matrix(0.7781335364438879,-0.6280988771374525,0.6280988771374525,0.7781335364438879,-91.55243400794453,40.817156059066235)"
                                    class="red section" /><text id="SvgjsText42867"
                                    font-family="Helvetica, Arial, sans-serif"
                                    transform="matrix(0.7781335364438879,-0.6280988771374525,0.6280988771374525,0.7781335364438879,-91.55243400794453,40.817156059066235)"
                                    style="pointer-events: none;" x="3.0947046279907227" fill="#ffffff">
                                    <tspan id="SvgjsTspan42868" dy="20.8" x="3.0947046279907227">12</tspan>
                                </text>
                                <polygon id="35" points="0,0 24,0 12,150"
                                    transform="matrix(0.8730923192316901,-0.4875549221355771,0.4875549221355771,0.8730923192316901,-71.61034615111684,24.886811180873423)"
                                    class="black section" /><text id="SvgjsText42870"
                                    font-family="Helvetica, Arial, sans-serif"
                                    transform="matrix(0.8730923192316901,-0.4875549221355771,0.4875549221355771,0.8730923192316901,-71.61034615111684,24.886811180873423)"
                                    style="pointer-events: none;" x="3.0947046279907227" fill="#ffffff">
                                    <tspan id="SvgjsTspan42871" dy="20.8" x="3.0947046279907227">35</tspan>
                                </text>
                                <polygon id="3" points="0,0 24,0 12,150"
                                    transform="matrix(0.9429324335619232,-0.3329841223496839,0.3329841223496839,0.9429324335619232,-49.26280755519566,12.555944433907712)"
                                    class="red section" /><text id="SvgjsText42873"
                                    font-family="Helvetica, Arial, sans-serif"
                                    transform="matrix(0.9429324335619232,-0.3329841223496839,0.3329841223496839,0.9429324335619232,-49.26280755519566,12.555944433907712)"
                                    style="pointer-events: none;" x="7.539714813232422" fill="#ffffff">
                                    <tspan id="SvgjsTspan42874" dy="20.8" x="7.539714813232422">3</tspan>
                                </text>
                                <polygon id="26" points="0,0 24,0 12,150"
                                    transform="matrix(0.9856445951489979,-0.1688334447127342,0.1688334447127342,0.9856445951489979,-25.152751848698102,4.179312064203117)"
                                    class="black section" /><text id="SvgjsText42876"
                                    font-family="Helvetica, Arial, sans-serif"
                                    transform="matrix(0.9856445951489979,-0.1688334447127342,0.1688334447127342,0.9856445951489979,-25.152751848698102,4.179312064203117)"
                                    style="pointer-events: none;" x="3.0947046279907227" fill="#ffffff">
                                    <tspan id="SvgjsTspan42877" dy="20.8" x="3.0947046279907227">26</tspan>
                                </text>
                            </g>
                            <circle id="SvgjsCircle42878" r="120" cx="150" cy="150" fill="rgba(255,255,255,0.5)"
                                stroke="#ffffff" stroke-width="3" style="pointer-events: none;" />
                            <circle id="SvgjsCircle42879" r="150" cx="150" cy="150" fill="none" stroke="#666666"
                                stroke-width="1" style="pointer-events: none;" />
                            <g id="SvgjsG42880" transform="matrix(1,0,0,1,138,0)">
                                <polygon id="SvgjsPolygon43251"
                                    points="0,103.57142857142861 24,103.57142857142861 12,253.5714285714286" class="red"
                                    transform="matrix(-0.4064563230609594,0.10579819206283694,-0.10579819206283694,-0.4064563230609594,43.70487457837945,251.7961321857035)"
                                    style="pointer-events: none;" />
                                <polygon id="SvgjsPolygon43252"
                                    points="0,192.8571428571429 24,192.8571428571429 12,342.8571428571429" class="black"
                                    transform="matrix(-0.2789933119804858,0.02372197019978061,-0.02372197019978061,-0.2789933119804858,23.4811666694049,245.37018617948354)"
                                    style="pointer-events: none;" />
                                <polygon id="SvgjsPolygon43253"
                                    points="0,460.7142857142858 24,460.7142857142858 12,610.7142857142858" class="red"
                                    transform="matrix(-0.13949458373317264,-0.011885331678539108,0.011885331678539108,-0.13949458373317264,6.415393158261687,235.33395904575863)"
                                    style="pointer-events: none;" />
                                <polygon id="SvgjsPolygon43254"
                                    points="0,32.142857142857146 24,32.142857142857146 12,182.14285714285714"
                                    class="black"
                                    transform="matrix(-0.6773964193373798,-0.17644855077017954,0.17644855077017954,-0.6773964193373798,-12.010086143948433,275.5003018456935)"
                                    style="pointer-events: none;" />
                                <polygon id="SvgjsPolygon43255"
                                    points="0,32.142857142857146 24,32.142857142857146 12,182.14285714285714"
                                    class="red"
                                    transform="matrix(-0.6378313783084565,-0.2883940582694702,0.2883940582694702,-0.6378313783084565,-32.87494121652345,269.6371583197025)"
                                    style="pointer-events: none;" />
                                <polygon id="SvgjsPolygon43256"
                                    points="0,32.142857142857146 24,32.142857142857146 12,182.14285714285714"
                                    class="black"
                                    transform="matrix(-0.5799160728565642,-0.39204253397127736,0.39204253397127736,-0.5799160728565642,-52.44875438477531,260.33208082081524)"
                                    style="pointer-events: none;" />
                                <polygon id="SvgjsPolygon43257"
                                    points="0,58.928571428571445 24,58.928571428571445 12,208.92857142857144"
                                    class="red"
                                    transform="matrix(-0.4042533705714023,-0.38752962774691224,0.38752962774691224,-0.4042533705714023,-64.11497106455164,239.11043474163097)"
                                    style="pointer-events: none;" />
                                <polygon id="SvgjsPolygon43258"
                                    points="0,460.7142857142858 24,460.7142857142858 12,610.7142857142858" class="black"
                                    transform="matrix(-0.0832359012155598,-0.11256902215455887,0.11256902215455887,-0.0832359012155598,-55.74867914409031,202.18418222250017)"
                                    style="pointer-events: none;" />
                                <polygon id="SvgjsPolygon43259"
                                    points="0,103.57142857142861 24,103.57142857142861 12,253.5714285714286" class="red"
                                    transform="matrix(-0.18904134523572283,-0.3750511562326774,0.3750511562326774,-0.18904134523572283,-80.83376133045739,202.436097845279)"
                                    style="pointer-events: none;" />
                                <polygon id="SvgjsPolygon43260"
                                    points="0,58.928571428571445 24,58.928571428571445 12,208.92857142857144"
                                    class="black"
                                    transform="matrix(-0.16391508013245973,-0.5354734788065318,0.5354734788065318,-0.16391508013245973,-97.9087280033466,190.67222527335298)"
                                    style="pointer-events: none;" />
                                <polygon id="SvgjsPolygon43261"
                                    points="0,58.928571428571445 24,58.928571428571445 12,208.92857142857144"
                                    class="red"
                                    transform="matrix(-0.07105923351988709,-0.5554732984865843,0.5554732984865843,-0.07105923351988709,-103.20153191727988,171.51198372795827)"
                                    style="pointer-events: none;" />
                                <polygon id="SvgjsPolygon43262"
                                    points="0,32.142857142857146 24,32.142857142857146 12,182.14285714285714"
                                    class="black"
                                    transform="matrix(0.029801213951865545,-0.6993653463297956,0.6993653463297956,0.029801213951865545,-115.74201693463517,152.96430590043917)"
                                    style="pointer-events: none;" />
                                <polygon id="SvgjsPolygon43263"
                                    points="0,103.57142857142861 24,103.57142857142861 12,253.5714285714286" class="red"
                                    transform="matrix(0.088541457373038,-0.4105610920755381,0.4105610920755381,0.088541457373038,-93.16906012191647,132.47514927102895)"
                                    style="pointer-events: none;" />
                                <polygon id="SvgjsPolygon43264"
                                    points="0,192.8571428571429 24,192.8571428571429 12,342.8571428571429" class="black"
                                    transform="matrix(0.10443657912122649,-0.25979415109169757,0.25979415109169757,0.10443657912122649,-78.32551932375105,117.3107026858227)"
                                    style="pointer-events: none;" />
                                <polygon id="SvgjsPolygon43265"
                                    points="0,460.7142857142858 24,460.7142857142858 12,610.7142857142858" class="red"
                                    transform="matrix(0.07342045162237931,-0.11920334426334629,0.11920334426334629,0.07342045162237931,-61.68023066601219,106.5915214617785)"
                                    style="pointer-events: none;" />
                                <polygon id="SvgjsPolygon43266"
                                    points="0,103.57142857142861 24,103.57142857142861 12,253.5714285714286"
                                    class="black"
                                    transform="matrix(0.2775309717145047,-0.31524047922055115,0.31524047922055115,0.2775309717145047,-71.26635032007097,83.40896078018292)"
                                    style="pointer-events: none;" />
                                <polygon id="SvgjsPolygon43267"
                                    points="0,103.57142857142861 24,103.57142857142861 12,253.5714285714286" class="red"
                                    transform="matrix(0.32681608530643286,-0.26380152839773,0.26380152839773,0.32681608530643286,-58.814323438815876,70.2943967094987)"
                                    style="pointer-events: none;" />
                                <polygon id="SvgjsPolygon43268"
                                    points="0,103.57142857142861 24,103.57142857142861 12,253.5714285714286"
                                    class="black"
                                    transform="matrix(0.3666987740773098,-0.20477306729694236,0.20477306729694236,0.3666987740773098,-44.32498449636668,59.47294480938832)"
                                    style="pointer-events: none;" />
                                <polygon id="SvgjsPolygon43269"
                                    points="0,192.8571428571429 24,192.8571428571429 12,342.8571428571429" class="red"
                                    transform="matrix(0.2640210813973385,-0.09323555425791148,0.09323555425791148,0.2640210813973385,-23.134728722337712,60.59731302915029)"
                                    style="pointer-events: none;" />
                                <polygon id="SvgjsPolygon43270"
                                    points="0,103.57142857142861 24,103.57142857142861 12,253.5714285714286"
                                    class="black"
                                    transform="matrix(0.4139707299625791,-0.07091004677934837,0.07091004677934837,0.4139707299625791,-10.948410621457136,45.8797711779839)"
                                    style="pointer-events: none;" />
                                <polygon id="SvgjsPolygon43271" points="0,3.4e+38 24,3.4e+38 12,3.4e+38" class="green"
                                    transform="matrix(0,0,0,0,12,75)" style="pointer-events: none;" />
                                <polygon id="SvgjsPolygon43272"
                                    points="0,460.7142857142858 24,460.7142857142858 12,610.7142857142858" class="red"
                                    transform="matrix(0.13798611583987228,0.02366076574046898,-0.02366076574046898,0.13798611583987228,24.79413425856509,65.4459786374781)"
                                    style="pointer-events: none;" />
                                <polygon id="SvgjsPolygon43273"
                                    points="0,58.928571428571445 24,58.928571428571445 12,208.92857142857144"
                                    class="black"
                                    transform="matrix(0.5280096094042657,0.1865632664185391,-0.1865632664185391,0.5280096094042657,44.64228142102216,37.44494740958632)"
                                    style="pointer-events: none;" />
                                <polygon id="SvgjsPolygon43274"
                                    points="0,460.7142857142858 24,460.7142857142858 12,610.7142857142858" class="red"
                                    transform="matrix(0.1222210096166374,0.06827902172915062,-0.06827902172915062,0.1222210096166374,52.232321869188766,74.53853515194663)"
                                    style="pointer-events: none;" />
                                <polygon id="SvgjsPolygon43275"
                                    points="0,103.57142857142861 24,103.57142857142861 12,253.5714285714286"
                                    class="black"
                                    transform="matrix(0.3267700382765496,0.2638585645468842,-0.2638585645468842,0.3267700382765496,74.98575269364134,63.974151805312296)"
                                    style="pointer-events: none;" />
                                <polygon id="SvgjsPolygon43276"
                                    points="0,192.8571428571429 24,192.8571428571429 12,342.8571428571429" class="red"
                                    transform="matrix(0.18498396509651063,0.21019260847416338,-0.21019260847416338,0.18498396509651063,81.84622960998361,84.05461495093496)"
                                    style="pointer-events: none;" />
                                <polygon id="SvgjsPolygon43277"
                                    points="0,460.7142857142858 24,460.7142857142858 12,610.7142857142858" class="black"
                                    transform="matrix(0.07339964559585965,0.11921615673390161,-0.11921615673390161,0.07339964559585965,83.92621425819672,103.74319398743604)"
                                    style="pointer-events: none;" />
                                <polygon id="SvgjsPolygon43278"
                                    points="0,460.7142857142858 24,460.7142857142858 12,610.7142857142858" class="red"
                                    transform="matrix(0.05219561744882845,0.12990618737818285,-0.12990618737818285,0.05219561744882845,90.70921702514715,116.56451652378443)"
                                    style="pointer-events: none;" />
                                <polygon id="SvgjsPolygon43279"
                                    points="0,58.928571428571445 24,58.928571428571445 12,208.92857142857144"
                                    class="black"
                                    transform="matrix(0.11795973279528704,0.5474353856290844,-0.5474353856290844,0.11795973279528704,124.95937627539028,118.78561691343565)"
                                    style="pointer-events: none;" />
                                <polygon id="SvgjsPolygon43280"
                                    points="0,103.57142857142861 24,103.57142857142861 12,253.5714285714286" class="red"
                                    transform="matrix(0.017807490731345358,0.4196223221825229,-0.4196223221825229,0.017807490731345358,118.19054180750645,140.44906126978998)"
                                    style="pointer-events: none;" />
                                <polygon id="SvgjsPolygon43281"
                                    points="0,58.928571428571445 24,58.928571428571445 12,208.92857142857144"
                                    class="black"
                                    transform="matrix(-0.07115618081675627,0.5554608878504166,-0.5554608878504166,-0.07115618081675627,128.90552395283456,158.20102855215302)"
                                    style="pointer-events: none;" />
                                <polygon id="SvgjsPolygon43282"
                                    points="0,460.7142857142858 24,460.7142857142858 12,610.7142857142858" class="red"
                                    transform="matrix(-0.04100213384700974,0.13386121551813243,-0.13386121551813243,-0.04100213384700974,94.24298222616643,173.4342542989205)"
                                    style="pointer-events: none;" />
                                <polygon id="SvgjsPolygon43283"
                                    points="0,58.928571428571445 24,58.928571428571445 12,208.92857142857144"
                                    class="black"
                                    transform="matrix(-0.2521424015086971,0.5000242087753622,-0.5000242087753622,-0.2521424015086971,119.49505243724253,196.67946123847702)"
                                    style="pointer-events: none;" />
                                <polygon id="SvgjsPolygon43284" points="0,3.4e+38 24,3.4e+38 12,3.4e+38" class="red"
                                    transform="matrix(0,0,0,0,72.29704984006477,194.60118586522947)"
                                    style="pointer-events: none;" />
                                <polygon id="SvgjsPolygon43285"
                                    points="0,103.57142857142861 24,103.57142857142861 12,253.5714285714286"
                                    class="black"
                                    transform="matrix(-0.3032407508200951,0.2905942997411768,-0.2905942997411768,-0.3032407508200951,89.32530072992526,223.40605878962998)"
                                    style="pointer-events: none;" />
                                <polygon id="SvgjsPolygon43286"
                                    points="0,32.142857142857146 24,32.142857142857146 12,182.14285714285714"
                                    class="red"
                                    transform="matrix(-0.5799844883538465,0.39194131355207606,-0.39194131355207606,-0.5799844883538465,90.34912454294572,250.93673604468282)"
                                    style="pointer-events: none;" />
                                <polygon id="SvgjsPolygon43287"
                                    points="0,460.7142857142858 24,460.7142857142858 12,610.7142857142858" class="black"
                                    transform="matrix(-0.1275763405704147,0.057656546260260476,-0.057656546260260476,-0.1275763405704147,48.74259255293263,227.22081515038013)"
                                    style="pointer-events: none;" />
                            </g>
                        </svg>
                    </div>
                </div>
            </div>
            <!-- limit -->
            <div class="flex flex-col gap-2 p-2 pt-4" v-if="activeTabData === 'sector'">
                sector
            </div>
            <div class="flex flex-col gap-2 p-2 pt-4" v-if="activeTabData === 'chart'">
                chart
            </div>
            <div class="flex flex-col gap-2 p-2 pt-4" v-if="activeTabData === 'rank'">
                rank
            </div>
        </div>
        <!-- <div class="text-center">Hot and Cold Numbers</div>
        <div class="grid grid-cols-2">
            <div v-for="(hot, index) in hots" :key="index">
                {{hot}}
            </div>
            <div v-for="(cold, index) in colds" :key="index">
                {{cold}}
            </div>
        </div> -->
    </div>
</template>
<script>
import { Icon } from "@iconify/vue2";
import request from "@/utils/request";
import VueToggle from "vue-switches";
import { TableLimitData } from '@/utils/index.js';

export default {
    name: "Graph",
    components: {
        Icon,
    },
    data() {
        return {
            hots: [23, 25, 30, 1, 8, 9],
            colds: [4, 7, 11, 14, 32, 33],
            activeTabData: "statistic",
            numberObj: {
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
        }
    },
    mounted: function () {
        this.chats = this.$store.state.chats;
    },
    methods: {
        send() {
            this.chats.push(this.chat);
            this.chat = "";
            this.$store.commit('setChats', this.chats);
        },
        getAxoisTokenHeader() {
            const headers = {
                'Content-Type': 'application/json',
                'token': this.getUserToken()
            }
            return headers;
        },
        getUserToken() {
            let token = this.$store.state.token;
            if (token == '')
                token = localStorage.getItem('userToken');
            // console.log(token)
            return token;
        },
        setActiveTab(tab) {

            (this.activeTabData) = tab;
        },
        changeActive(component) {
            const components = document.querySelectorAll('.tab-action');

            for (const c of components) {
                c.classList.remove('selected');
                if (c == component) {
                    c.classList.add('selected')
                }
            }
        },
        showStatistic(evt) {
            this.setActiveTab('statistic');
            this.changeActive(evt.target)
        },
        showWheel(evt) {
            this.setActiveTab('wheel');
            this.changeActive(evt.target)
        },
        showChart(evt) {
            this.setActiveTab('chart');
            this.changeActive(evt.target)
        },
        showSector(evt) {
            this.setActiveTab('sector');
            this.changeActive(evt.target)
        },
        showRank(evt) {
            this.setActiveTab('rank');
            this.changeActive(evt.target)
        },
    }

}
</script>
<style scoped>
    .red {
        fill:red;
    }   
    .black {
        fill:black;
    } 

    .green {
        fill:green;
    }

    .section:hover {
        opacity: .7;
        fill: #c90;
        stroke: #fff;
        stroke-width: 2;
    }

    .wheel-stats {        
        width: 90%;
        border-radius: 3vh 5vh 10vh 3vh;
        background: rgba(0,0,0,.5);
    }
    .menu-item {
        color: #aaa;
        transition: all 0.5s ease-in-out;
    }

    .menu-item:hover {
        color: #ffffff;
        text-shadow: white 4px 0 10px;
    }

    .numberSelected {
        text-align: left;
        padding: 0 3% 0 15%;
        margin: 1vh 0;
        display: inline-block;
        font-size:7vh;
    }
    .attrNumSelected {
        text-align: left;
        font-weight: 100;
        margin: 1vh 0;
        display: inline-block;
        font-size: 3vh;
    }

    .wheel-stats p {
        margin: 0;
        font-size: 1.22vh;
    }

    .wheel-stats p {
        color: #999;
        margin: 0;
        font-size: 1vh;
        text-shadow: #000 0 0 1.5em;
        padding-left: 15%;
    }
    .highSelected {
        font-size: 1.4vh;
        margin: 0.35vw;
    }
    .tab-action {
        text-align: center;
        text-shadow: #fff 1px 0 6px;
        font-weight: 600;
        cursor: pointer;
    }

    .tab-action:hover,
    .tab-action:active,
    .tab-action:focus {
        border: none;
        color: #d2ab1e;
        text-decoration: none;
        outline: none;
        text-shadow: #d2ab1e 3px 0 6px;
        border-bottom: 1px solid #d2ab1e;
    }

    .navigate-item {
        border: none;
        outline: none;
        text-decoration: none;
        cursor: pointer;
    }

    .navigate-item:hover,
    .navigate-item:focus,
    .navigate-item:active {
        border: none;
        outline: none;
        transition: all 0.4s ease-in-out;

        background-color: #222;
    }

    .tab-action.selected {
        color: #d2ab1e;
        text-shadow: #d2ab1e 3px 0 6px;
        border-bottom: 1px solid #d2ab1e;
    }
</style>