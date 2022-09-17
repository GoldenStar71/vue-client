<template>
    <div
        class="relative h-full border-2 cursor-pointer gap-2 rounded-lg border-gray-700 bg-black/50 p-2 flex flex-col w-48 md:w-96">

        <div class="w-full flex gap-1 justify-between pt-4 ">
            <a class="tab-action flex-1" :class="activeTabData === 'statistic' ? 'selected' : ''"
                @click="showStatistic">Statistic</a>
            <a class="tab-action flex-1 " :class="activeTabData === 'wheel' ? 'selected' : ''"
                @click="showWheel">Wheel</a>
            <a class="tab-action flex-1" :class="activeTabData === 'sector' ? 'selected' : ''"
                @click="showSector">Sector</a>
            <!-- <a class="tab-action flex-1" :class="activeTabData === 'chart' ? 'selected' : ''"
                @click="showChart">Chart</a>
            <a class="tab-action flex-1" :class="activeTabData === 'rank' ? 'selected' : ''" @click="showRank">Rank</a> -->
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
                <div class="stats-rosso-nero w-full">
                    <div class="stats-chart-container flex">
                        <div class="red radius-start" style="width: 46%; left: 0px;">
                            <h3 class="label_percentage">46%</h3>
                            <h2 class="stats-label">Red</h2>
                        </div>
                        <div class="green" style="width: 3%; left: 46%;">
                            <h3 class="label_percentage">3%</h3>
                            <h2 class="stats-label">Zero</h2>
                        </div>
                        <div class="black radius-end" style="width: 51%; right: 0px;">
                            <h3 class="label_percentage">51%</h3>
                            <h2 class="stats-label">Black</h2>
                        </div>
                    </div>
                    <div class="stats-chart-container flex">
                        <div class="orange radius-start" style="width: 49%; left: 0px;">
                            <h3 class="label_percentage">49%</h3>
                            <h2 class="stats-label">Even</h2>
                        </div>
                        <div class="green" style="width: 3%; left: 49%;">
                            <h3 class="label_percentage">3%</h3>
                            <h2 class="stats-label">Zero</h2>
                        </div>
                        <div class="white-blue radius-end" style="width: 48%; right: 0px;">
                            <h3 class="label_percentage">48%</h3>
                            <h2 class="stats-label">Odd</h2>
                        </div>
                    </div>
                    <div class="stats-chart-container flex">
                        <div class="yellow radius-start" style="width: 46%; left: 0px;">
                            <h3 class="label_percentage">46%</h3>
                            <h2 class="stats-label">Series 5/8</h2>
                        </div>
                        <div class="blue" style="width: 3%; left: 46%;">
                            <h3 class="label_percentage">3%</h3>
                            <h2 class="stats-label">Orphans</h2>
                        </div>
                        <div class="white-green" style="width: 20%; left: 49%;">
                            <h3 class="label_percentage">20%</h3>
                            <h2 class="stats-label">Series 0/2/3</h2>
                        </div>
                        <div class="green radius-end" style="width: 31%; right: 0px;">
                            <h3 class="label_percentage">31%</h3>
                            <h2 class="stats-label">Zero</h2>
                        </div>
                    </div>
                </div>
            </div>
            <!-- history -->
            <div class="flex flex-col gap-2 p-2 pt-4" v-if="activeTabData === 'wheel'">
                <div class="grid grid-cols-2">
                    <div class="wheel-stats">

                        <h2 class="numberSelected">{{number}}</h2>
                        <h2 class="attrNumSelected"> {{numberObj[number].color}} <br> Pair </h2>
                        <p>{{numberObj[number].text1}}</p>
                        <p>{{numberObj[number].text2}}</p>
                        <p class="highSelected">{{number < 20 ? 'LOW NUMBER' : 'BIG NUMBER' }}</p>
                                <table>
                                    <tbody>
                                        <tr>
                                            <td class="col-40">Last 100</td>
                                            <td class="col-10 txt-center">{{Math.ceil(Math.random()*100)}}</td>
                                            <td class="col-50 ico-equal"></td>
                                        </tr>
                                        <tr>
                                            <td>Last 30</td>
                                            <td class="txt-center">{{Math.ceil(Math.random()*30)}}</td>
                                            <td class="ico-equal"></td>
                                        </tr>
                                        <tr>
                                            <td>Last 10</td>
                                            <td class="txt-center">{{Math.ceil(Math.random()*10)}}</td>
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
                                    class="green section" style="&#10;    color: red;&#10;" @mouseover="hover" /><text
                                    id="SvgjsText42768" font-family="Helvetica, Arial, sans-serif"
                                    transform="matrix(1,0,0,1,0,0)" style="pointer-events: none;" x="7.539714813232422"
                                    fill="#ffffff">
                                    <tspan id="SvgjsTspan42769" dy="20.8" x="7.539714813232422">0</tspan>
                                </text>
                                <polygon id="32" points="0,0 24,0 12,150"
                                    transform="matrix(0.9856151131419448,0.16900546957477847,-0.16900546957477847,0.9856151131419448,25.523439078513434,0.12966739381093362)"
                                    class="red section" @mouseover="hover" /><text id="SvgjsText42771"
                                    font-family="Helvetica, Arial, sans-serif"
                                    transform="matrix(0.9856151131419448,0.16900546957477847,-0.16900546957477847,0.9856151131419448,25.523439078513434,0.12966739381093362)"
                                    style="pointer-events: none;" x="3.0947046279907227" fill="#ffffff">
                                    <tspan id="SvgjsTspan42772" dy="20.8" x="3.0947046279907227">32</tspan>
                                </text>
                                <polygon id="15" points="0,0 24,0 12,150"
                                    transform="matrix(0.9428743025076173,0.33314869003310554,-0.33314869003310554,0.9428743025076173,50.657811874874426,4.57107034346015)"
                                    class="black section" @mouseover="hover" /><text id="SvgjsText42774"
                                    font-family="Helvetica, Arial, sans-serif"
                                    transform="matrix(0.9428743025076173,0.33314869003310554,-0.33314869003310554,0.9428743025076173,50.657811874874426,4.57107034346015)"
                                    style="pointer-events: none;" x="3.0947046279907227" fill="#ffffff">
                                    <tspan id="SvgjsTspan42775" dy="20.8" x="3.0947046279907227">15</tspan>
                                </text>
                                <polygon id="19" points="0,0 24,0 12,150"
                                    transform="matrix(0.8730072115474101,0.4877072980653616,-0.4877072980653616,0.8730072115474101,74.68000817123531,13.196430691104155)"
                                    class="red section" @mouseover="hover" /><text id="SvgjsText42777"
                                    font-family="Helvetica, Arial, sans-serif"
                                    transform="matrix(0.8730072115474101,0.4877072980653616,-0.4877072980653616,0.8730072115474101,74.68000817123531,13.196430691104155)"
                                    style="pointer-events: none;" x="3.0947046279907227" fill="#ffffff">
                                    <tspan id="SvgjsTspan42778" dy="20.8" x="3.0947046279907227">19</tspan>
                                </text>
                                <polygon id="4" points="0,0 24,0 12,150"
                                    transform="matrix(0.7780239006584515,0.6282346774925816,-0.6282346774925816,0.7780239006584515,96.89891481598582,25.757598771321284)"
                                    class="black section" @mouseover="hover" /><text id="SvgjsText42780"
                                    font-family="Helvetica, Arial, sans-serif"
                                    transform="matrix(0.7780239006584515,0.6282346774925816,-0.6282346774925816,0.7780239006584515,96.89891481598582,25.757598771321284)"
                                    style="pointer-events: none;" x="7.539714813232422" fill="#ffffff">
                                    <tspan id="SvgjsTspan42781" dy="20.8" x="7.539714813232422">4</tspan>
                                </text>
                                <polygon id="21" points="0,0 24,0 12,150"
                                    transform="matrix(0.6606570182018237,0.7506878874077263,-0.7506878874077263,0.6606570182018237,116.67529889273706,41.89319262083373)"
                                    class="red section" @mouseover="hover" /><text id="SvgjsText42783"
                                    font-family="Helvetica, Arial, sans-serif"
                                    transform="matrix(0.6606570182018237,0.7506878874077263,-0.7506878874077263,0.6606570182018237,116.67529889273706,41.89319262083373)"
                                    style="pointer-events: none;" x="3.0947036743164062" fill="#ffffff">
                                    <tspan id="SvgjsTspan42784" dy="20.8" x="3.0947036743164062">21</tspan>
                                </text>
                                <polygon id="2" points="0,0 24,0 12,150"
                                    transform="matrix(0.524283182827569,0.8515439766707259,-0.8515439766707259,0.524283182827569,133.44019830667804,61.13899485581594)"
                                    class="black section" @mouseover="hover" /><text id="SvgjsText42786"
                                    font-family="Helvetica, Arial, sans-serif"
                                    transform="matrix(0.524283182827569,0.8515439766707259,-0.8515439766707259,0.524283182827569,133.44019830667804,61.13899485581594)"
                                    style="pointer-events: none;" x="7.539714813232422" fill="#ffffff">
                                    <tspan id="SvgjsTspan42787" dy="20.8" x="7.539714813232422">2</tspan>
                                </text>
                                <polygon id="25" points="0,0 24,0 12,150"
                                    transform="matrix(0.37282583892020327,0.9279013384155919,-0.9279013384155919,0.37282583892020327,146.71129069529633,82.94130810098241)"
                                    class="red section" @mouseover="hover" /><text id="SvgjsText42789"
                                    font-family="Helvetica, Arial, sans-serif"
                                    transform="matrix(0.37282583892020327,0.9279013384155919,-0.9279013384155919,0.37282583892020327,146.71129069529633,82.94130810098241)"
                                    style="pointer-events: none;" x="3.0947046279907227" fill="#ffffff">
                                    <tspan id="SvgjsTspan42790" dy="20.8" x="3.0947046279907227">25</tspan>
                                </text>
                                <polygon id="17" points="0,0 24,0 12,150"
                                    transform="matrix(0.21064237999158403,0.9775631886233652,-0.9775631886233652,0.21064237999158403,156.10676973360577,106.67288473778201)"
                                    class="black section" @mouseover="hover" /><text id="SvgjsText42792"
                                    font-family="Helvetica, Arial, sans-serif"
                                    transform="matrix(0.21064237999158403,0.9775631886233652,-0.9775631886233652,0.21064237999158403,156.10676973360577,106.67288473778201)"
                                    style="pointer-events: none;" x="3.094705581665039" fill="#ffffff">
                                    <tspan id="SvgjsTspan42793" dy="20.8" x="3.094705581665039">17</tspan>
                                </text>
                                <polygon id="34" points="0,0 24,0 12,150"
                                    transform="matrix(0.04239878745558419,0.999100767101245,-0.999100767101245,0.04239878745558419,161.35632961571974,131.65097267644742)"
                                    class="red section" @mouseover="hover" /><text id="SvgjsText42795"
                                    font-family="Helvetica, Arial, sans-serif"
                                    transform="matrix(0.04239878745558419,0.999100767101245,-0.999100767101245,0.04239878745558419,161.35632961571974,131.65097267644742)"
                                    style="pointer-events: none;" x="3.0947046279907227" fill="#ffffff">
                                    <tspan id="SvgjsTspan42796" dy="20.8" x="3.0947046279907227">34</tspan>
                                </text>
                                <polygon id="6" points="0,0 24,0 12,150"
                                    transform="matrix(-0.1270646086013505,0.9918944425900297,-0.9918944425900297,-0.1270646086013505,162.30894169172066,157.1569579791222)"
                                    class="black section" @mouseover="hover" /><text id="SvgjsText42798"
                                    font-family="Helvetica, Arial, sans-serif"
                                    transform="matrix(-0.1270646086013505,0.9918944425900297,-0.9918944425900297,-0.1270646086013505,162.30894169172066,157.1569579791222)"
                                    style="pointer-events: none;" x="7.539714813232422" fill="#ffffff">
                                    <tspan id="SvgjsTspan42799" dy="20.8" x="7.539714813232422">6</tspan>
                                </text>
                                <polygon id="27" points="0,0 24,0 12,150"
                                    transform="matrix(-0.29287238462149817,0.9561515394152317,-0.9561515394152317,-0.29287238462149817,158.93719952774273,182.45703922024194)"
                                    class="red section" @mouseover="hover" /><text id="SvgjsText42801"
                                    font-family="Helvetica, Arial, sans-serif"
                                    transform="matrix(-0.29287238462149817,0.9561515394152317,-0.9561515394152317,-0.29287238462149817,158.93719952774273,182.45703922024194)"
                                    style="pointer-events: none;" x="3.094705581665039" fill="#ffffff">
                                    <tspan id="SvgjsTspan42802" dy="20.8" x="3.094705581665039">27</tspan>
                                </text>
                                <polygon id="13" points="0,0 24,0 12,150"
                                    transform="matrix(-0.45025428840838766,0.8929003728131467,-0.8929003728131467,-0.45025428840838766,151.33810738287266,206.82333878750038)"
                                    class="black section" @mouseover="hover" /><text id="SvgjsText42804"
                                    font-family="Helvetica, Arial, sans-serif"
                                    transform="matrix(-0.45025428840838766,0.8929003728131467,-0.8929003728131467,-0.45025428840838766,151.33810738287266,206.82333878750038)"
                                    style="pointer-events: none;" x="3.0947036743164062" fill="#ffffff">
                                    <tspan id="SvgjsTspan42805" dy="20.8" x="3.0947036743164062">13</tspan>
                                </text>
                                <polygon id="36" points="0,0 24,0 12,150"
                                    transform="matrix(-0.5946824782030595,0.803960664534197,-0.803960664534197,-0.5946824782030595,139.73028941856626,229.55484375604857)"
                                    class="red section" @mouseover="hover" /><text id="SvgjsText42807"
                                    font-family="Helvetica, Arial, sans-serif"
                                    transform="matrix(-0.5946824782030595,0.803960664534197,-0.803960664534197,-0.5946824782030595,139.73028941856626,229.55484375604857)"
                                    style="pointer-events: none;" x="3.0947046279907227" fill="#ffffff">
                                    <tspan id="SvgjsTspan42808" dy="20.8" x="3.0947046279907227">36</tspan>
                                </text>
                                <polygon id="11" points="0,0 24,0 12,150"
                                    transform="matrix(-0.7220017876668933,0.6918911898599449,-0.6918911898599449,-0.7220017876668933,124.44769993099445,249.99757387171465)"
                                    class="black section" @mouseover="hover" /><text id="SvgjsText42810"
                                    font-family="Helvetica, Arial, sans-serif"
                                    transform="matrix(-0.7220017876668933,0.6918911898599449,-0.6918911898599449,-0.7220017876668933,124.44769993099445,249.99757387171465)"
                                    style="pointer-events: none;" x="3.690427780151367" fill="#ffffff">
                                    <tspan id="SvgjsTspan42811" dy="20.8" x="3.690427780151367">11</tspan>
                                </text>
                                <polygon id="30" points="0,0 24,0 12,150"
                                    transform="matrix(-0.8285492690769236,0.5599161622172515,-0.5599161622172515,-0.8285492690769236,105.9300155615108,267.5633964149315)"
                                    class="red section" @mouseover="hover" /><text id="SvgjsText42813"
                                    font-family="Helvetica, Arial, sans-serif"
                                    transform="matrix(-0.8285492690769236,0.5599161622172515,-0.5599161622172515,-0.8285492690769236,105.9300155615108,267.5633964149315)"
                                    style="pointer-events: none;" x="3.0947046279907227" fill="#ffffff">
                                    <tspan id="SvgjsTspan42814" dy="20.8" x="3.0947046279907227">30</tspan>
                                </text>
                                <polygon id="8" points="0,0 24,0 12,150"
                                    transform="matrix(-0.9112595755029622,0.4118324732875749,-0.4118324732875749,-0.9112595755029622,84.70998589917178,281.74694664599343)"
                                    class="black section" @mouseover="hover" /><text id="SvgjsText42816"
                                    font-family="Helvetica, Arial, sans-serif"
                                    transform="matrix(-0.9112595755029622,0.4118324732875749,-0.4118324732875749,-0.9112595755029622,84.70998589917178,281.74694664599343)"
                                    style="pointer-events: none;" x="7.539714813232422" fill="#ffffff">
                                    <tspan id="SvgjsTspan42817" dy="20.8" x="7.539714813232422">8</tspan>
                                </text>
                                <polygon id="23" points="0,0 24,0 12,150"
                                    transform="matrix(-0.9677531501451416,0.25190045729246896,-0.25190045729246896,-0.9677531501451416,61.39810639561204,292.1401670342616)"
                                    class="red section" @mouseover="hover" /><text id="SvgjsText42819"
                                    font-family="Helvetica, Arial, sans-serif"
                                    transform="matrix(-0.9677531501451416,0.25190045729246896,-0.25190045729246896,-0.9677531501451416,61.39810639561204,292.1401670342616)"
                                    style="pointer-events: none;" x="3.094705581665039" fill="#ffffff">
                                    <tspan id="SvgjsTspan42820" dy="20.8" x="3.094705581665039">23</tspan>
                                </text>
                                <polygon id="10" points="0,0 24,0 12,150"
                                    transform="matrix(-0.9964046856445924,0.08472132214207362,-0.08472132214207362,-0.9964046856445924,36.665054549046154,298.444046980984)"
                                    class="black section" @mouseover="hover" /><text id="SvgjsText42822"
                                    font-family="Helvetica, Arial, sans-serif"
                                    transform="matrix(-0.9964046856445924,0.08472132214207362,-0.08472132214207362,-0.9964046856445924,36.665054549046154,298.444046980984)"
                                    style="pointer-events: none;" x="3.0947046279907227" fill="#ffffff">
                                    <tspan id="SvgjsTspan42823" dy="20.8" x="3.0947046279907227">10</tspan>
                                </text>
                                <polygon id="5" points="0,0 24,0 12,150"
                                    transform="matrix(-0.996389883808376,-0.08489522627527935,0.08489522627527935,-0.996389883808376,11.22239466440861,300.47722528655976)"
                                    class="red section" @mouseover="hover" /><text id="SvgjsText42825"
                                    font-family="Helvetica, Arial, sans-serif"
                                    transform="matrix(-0.996389883808376,-0.08489522627527935,0.08489522627527935,-0.996389883808376,11.22239466440861,300.47722528655976)"
                                    style="pointer-events: none;" x="7.539714336395264" fill="#ffffff">
                                    <tspan id="SvgjsTspan42826" dy="20.8" x="7.539714336395264">5</tspan>
                                </text>
                                <polygon id="24" points="0,0 24,0 12,150"
                                    transform="matrix(-0.9677091704819712,-0.25206935824311366,0.25206935824311366,-0.9677091704819712,-14.197893690683397,298.1812078712131)"
                                    class="black section" @mouseover="hover" /><text id="SvgjsText42828"
                                    font-family="Helvetica, Arial, sans-serif"
                                    transform="matrix(-0.9677091704819712,-0.25206935824311366,0.25206935824311366,-0.9677091704819712,-14.197893690683397,298.1812078712131)"
                                    style="pointer-events: none;" x="3.094705581665039" fill="#ffffff">
                                    <tspan id="SvgjsTspan42829" dy="20.8" x="3.094705581665039">24</tspan>
                                </text>
                                <polygon id="16" points="0,0 24,0 12,150"
                                    transform="matrix(-0.9111876832977951,-0.41199151181352883,0.41199151181352883,-0.9111876832977951,-38.864474572455784,291.6220506364316)"
                                    class="red section" @mouseover="hover" /><text id="SvgjsText42831"
                                    font-family="Helvetica, Arial, sans-serif"
                                    transform="matrix(-0.9111876832977951,-0.41199151181352883,0.41199151181352883,-0.9111876832977951,-38.864474572455784,291.6220506364316)"
                                    style="pointer-events: none;" x="3.0947046279907227" fill="#ffffff">
                                    <tspan id="SvgjsTspan42832" dy="20.8" x="3.0947046279907227">16</tspan>
                                </text>
                                <polygon id="33" points="0,0 24,0 12,150"
                                    transform="matrix(-0.8284515326522345,-0.5600607628161105,0.5600607628161105,-0.8284515326522345,-62.06769603058976,280.9884590516285)"
                                    class="black section" @mouseover="hover" /><text id="SvgjsText42834"
                                    font-family="Helvetica, Arial, sans-serif"
                                    transform="matrix(-0.8284515326522345,-0.5600607628161105,0.5600607628161105,-0.8284515326522345,-62.06769603058976,280.9884590516285)"
                                    style="pointer-events: none;" x="3.0947046279907227" fill="#ffffff">
                                    <tspan id="SvgjsTspan42835" dy="20.8" x="3.0947046279907227">33</tspan>
                                </text>
                                <polygon id="1" points="0,0 24,0 12,150"
                                    transform="matrix(-0.7218810188775042,-0.6920171924052005,0.6920171924052005,-0.7218810188775042,-83.14000663425004,266.58635914048807)"
                                    class="red section" @mouseover="hover" /><text id="SvgjsText42837"
                                    font-family="Helvetica, Arial, sans-serif"
                                    transform="matrix(-0.7218810188775042,-0.6920171924052005,0.6920171924052005,-0.7218810188775042,-83.14000663425004,266.58635914048807)"
                                    style="pointer-events: none;" x="7.539714813232422" fill="#ffffff">
                                    <tspan id="SvgjsTspan42838" dy="20.8" x="7.539714813232422">1</tspan>
                                </text>
                                <polygon id="20" points="0,0 24,0 12,150"
                                    transform="matrix(-0.5945421515397129,-0.8040644439611349,0.8040644439611349,-0.5945421515397129,-101.47516077569367,248.83009605849054)"
                                    class="black section" @mouseover="hover" /><text id="SvgjsText42840"
                                    font-family="Helvetica, Arial, sans-serif"
                                    transform="matrix(-0.5945421515397129,-0.8040644439611349,0.8040644439611349,-0.5945421515397129,-101.47516077569367,248.83009605849054)"
                                    style="pointer-events: none;" x="3.094705581665039" fill="#ffffff">
                                    <tspan id="SvgjsTspan42841" dy="20.8" x="3.094705581665039">20</tspan>
                                </text>
                                <polygon id="14" points="0,0 24,0 12,150"
                                    transform="matrix(-0.4500984410374354,-0.8929789434111368,0.8929789434111368,-0.4500984410374354,-116.5456602192213,228.23051347654894)"
                                    class="red section" @mouseover="hover" /><text id="SvgjsText42843"
                                    font-family="Helvetica, Arial, sans-serif"
                                    transform="matrix(-0.4500984410374354,-0.8929789434111368,0.8929789434111368,-0.4500984410374354,-116.5456602192213,228.23051347654894)"
                                    style="pointer-events: none;" x="3.0947036743164062" fill="#ffffff">
                                    <tspan id="SvgjsTspan42844" dy="20.8" x="3.0947036743164062">14</tspan>
                                </text>
                                <polygon id="31" points="0,0 24,0 12,150"
                                    transform="matrix(-0.29270550023653524,-0.9562026407259497,0.9562026407259497,-0.29270550023653524,-127.91793010605403,205.38025672419167)"
                                    class="black section" @mouseover="hover" /><text id="SvgjsText42846"
                                    font-family="Helvetica, Arial, sans-serif"
                                    transform="matrix(-0.29270550023653524,-0.9562026407259497,0.9562026407259497,-0.29270550023653524,-127.91793010605403,205.38025672419167)"
                                    style="pointer-events: none;" x="3.0947046279907227" fill="#ffffff">
                                    <tspan id="SvgjsTspan42847" dy="20.8" x="3.0947046279907227">31</tspan>
                                </text>
                                <polygon id="9" points="0,0 24,0 12,150"
                                    transform="matrix(-0.1268914884283698,-0.9919166044403294,0.9919166044403294,-0.1268914884283698,-135.26479280490895,180.9367225175394)"
                                    class="red section" @mouseover="hover" /><text id="SvgjsText42849"
                                    font-family="Helvetica, Arial, sans-serif"
                                    transform="matrix(-0.1268914884283698,-0.9919166044403294,0.9919166044403294,-0.1268914884283698,-135.26479280490895,180.9367225175394)"
                                    style="pointer-events: none;" x="7.539714813232422" fill="#ffffff">
                                    <tspan id="SvgjsTspan42850" dy="20.8" x="7.539714813232422">9</tspan>
                                </text>
                                <polygon id="22" points="0,0 24,0 12,150"
                                    transform="matrix(0.04257316278837935,-0.9990933518997082,0.9990933518997082,0.04257316278837935,-138.37488073841678,155.6031458045396)"
                                    class="black section" @mouseover="hover" /><text id="SvgjsText42852"
                                    font-family="Helvetica, Arial, sans-serif"
                                    transform="matrix(0.04257316278837935,-0.9990933518997082,0.9990933518997082,0.04257316278837935,-138.37488073841678,155.6031458045396)"
                                    style="pointer-events: none;" x="3.0947046279907227" fill="#ffffff">
                                    <tspan id="SvgjsTspan42853" dy="20.8" x="3.0947046279907227">22</tspan>
                                </text>
                                <polygon id="18" points="0,0 24,0 12,150"
                                    transform="matrix(0.21081299374532858,-0.9775264097036622,0.9775264097036622,0.21081299374532858,-137.15871738049327,130.10836785464465)"
                                    class="red section" @mouseover="hover" /><text id="SvgjsText42855"
                                    font-family="Helvetica, Arial, sans-serif"
                                    transform="matrix(0.21081299374532858,-0.9775264097036622,0.9775264097036622,0.21081299374532858,-137.15871738049327,130.10836785464465)"
                                    style="pointer-events: none;" x="3.094705581665039" fill="#ffffff">
                                    <tspan id="SvgjsTspan42856" dy="20.8" x="3.094705581665039">18</tspan>
                                </text>
                                <polygon id="29" points="0,0 24,0 12,150"
                                    transform="matrix(0.37298778257580895,-0.92783625389892,0.92783625389892,0.37298778257580895,-131.6512914757477,105.1858676604157)"
                                    class="black section" @mouseover="hover" /><text id="SvgjsText42858"
                                    font-family="Helvetica, Arial, sans-serif"
                                    transform="matrix(0.37298778257580895,-0.92783625389892,0.92783625389892,0.37298778257580895,-131.6512914757477,105.1858676604157)"
                                    style="pointer-events: none;" x="3.0947046279907227" fill="#ffffff">
                                    <tspan id="SvgjsTspan42859" dy="20.8" x="3.0947046279907227">29</tspan>
                                </text>
                                <polygon id="7" points="0,0 24,0 12,150"
                                    transform="matrix(0.5244317973027094,-0.8514524590239022,0.8514524590239022,0.5244317973027094,-122.01105042121785,81.55265991288042)"
                                    class="red section" @mouseover="hover" /><text id="SvgjsText42861"
                                    font-family="Helvetica, Arial, sans-serif"
                                    transform="matrix(0.5244317973027094,-0.8514524590239022,0.8514524590239022,0.5244317973027094,-122.01105042121785,81.55265991288042)"
                                    style="pointer-events: none;" x="7.53971529006958" fill="#ffffff">
                                    <tspan id="SvgjsTspan42862" dy="20.8" x="7.53971529006958">7</tspan>
                                </text>
                                <polygon id="28" points="0,0 24,0 12,150"
                                    transform="matrix(0.6607880278916779,-0.750572569572741,0.750572569572741,0.6607880278916779,-108.51534177061129,59.88866665112121)"
                                    class="black section" @mouseover="hover" /><text id="SvgjsText42864"
                                    font-family="Helvetica, Arial, sans-serif"
                                    transform="matrix(0.6607880278916779,-0.750572569572741,0.750572569572741,0.6607880278916779,-108.51534177061129,59.88866665112121)"
                                    style="pointer-events: none;" x="3.0947046279907227" fill="#ffffff">
                                    <tspan id="SvgjsTspan42865" dy="20.8" x="3.0947046279907227">28</tspan>
                                </text>
                                <polygon id="12" points="0,0 24,0 12,150"
                                    transform="matrix(0.7781335364438879,-0.6280988771374525,0.6280988771374525,0.7781335364438879,-91.55243400794453,40.817156059066235)"
                                    class="red section" @mouseover="hover" /><text id="SvgjsText42867"
                                    font-family="Helvetica, Arial, sans-serif"
                                    transform="matrix(0.7781335364438879,-0.6280988771374525,0.6280988771374525,0.7781335364438879,-91.55243400794453,40.817156059066235)"
                                    style="pointer-events: none;" x="3.0947046279907227" fill="#ffffff">
                                    <tspan id="SvgjsTspan42868" dy="20.8" x="3.0947046279907227">12</tspan>
                                </text>
                                <polygon id="35" points="0,0 24,0 12,150"
                                    transform="matrix(0.8730923192316901,-0.4875549221355771,0.4875549221355771,0.8730923192316901,-71.61034615111684,24.886811180873423)"
                                    class="black section" @mouseover="hover" /><text id="SvgjsText42870"
                                    font-family="Helvetica, Arial, sans-serif"
                                    transform="matrix(0.8730923192316901,-0.4875549221355771,0.4875549221355771,0.8730923192316901,-71.61034615111684,24.886811180873423)"
                                    style="pointer-events: none;" x="3.0947046279907227" fill="#ffffff">
                                    <tspan id="SvgjsTspan42871" dy="20.8" x="3.0947046279907227">35</tspan>
                                </text>
                                <polygon id="3" points="0,0 24,0 12,150"
                                    transform="matrix(0.9429324335619232,-0.3329841223496839,0.3329841223496839,0.9429324335619232,-49.26280755519566,12.555944433907712)"
                                    class="red section" @mouseover="hover" /><text id="SvgjsText42873"
                                    font-family="Helvetica, Arial, sans-serif"
                                    transform="matrix(0.9429324335619232,-0.3329841223496839,0.3329841223496839,0.9429324335619232,-49.26280755519566,12.555944433907712)"
                                    style="pointer-events: none;" x="7.539714813232422" fill="#ffffff">
                                    <tspan id="SvgjsTspan42874" dy="20.8" x="7.539714813232422">3</tspan>
                                </text>
                                <polygon id="26" points="0,0 24,0 12,150"
                                    transform="matrix(0.9856445951489979,-0.1688334447127342,0.1688334447127342,0.9856445951489979,-25.152751848698102,4.179312064203117)"
                                    class="black section" @mouseover="hover" /><text id="SvgjsText42876"
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
                <div class="grid grid-cols-2">
                    <div class="wheel-stats">

                        <h2 class="sectorSelected">{{sector}}</h2>
                            <table>
                                <tbody>
                                    <tr>
                                        <td class="col-40">Last 100</td>
                                        <td class="col-10 txt-center">{{Math.ceil(Math.random()*100)}}</td>
                                        <td class="col-50 ico-equal"></td>
                                    </tr>
                                    <tr>
                                        <td>Last 30</td>
                                        <td class="txt-center">{{Math.ceil(Math.random()*30)}}</td>
                                        <td class="ico-equal"></td>
                                    </tr>
                                    <tr>
                                        <td>Last 10</td>
                                        <td class="txt-center">{{Math.ceil(Math.random()*10)}}</td>
                                        <td class="ico-equal"></td>
                                    </tr>
                                </tbody>
                            </table>
                    </div>
                    <div>
                        <svg xmlns:svgjs="http://svgjs.com/svgjs" xmlns:xlink="http://www.w3.org/1999/xlink"
                            xmlns="http://www.w3.org/2000/svg" xml:space="preserve" id="SvgjsSvg1001"
                            style="enable-background:new 0 0 990 989;" version="1.1" viewBox="0 0 990 989" x="0px"
                            y="0px">
                            <g id="CHART">
                                <g id="orphans">
                                    <path
                                        d="M14.99,510.83       c4.13,144.84,72.02,273.7,176.6,359.52l306.16-373.53L14.99,510.83z"
                                        id="orphansSx" @mouseover="sectorHover" style="fill:#528CAD;stroke:#FFFFFF;stroke-width:12;" />
                                    <path
                                        d="M969.39,601.18c7.4-33.61,11.31-68.53,11.31-104.36       c0-48.34-7.11-95.02-20.33-139.06L497.75,497.07L969.39,601.18z"
                                        id="orphansDx" @mouseover="sectorHover" style="fill:#528CAD;stroke:#FFFFFF;stroke-width:12;" />
                                </g>
                                <path
                                    d="M191.59,870.35      c83.33,68.38,189.95,109.43,306.16,109.43c230.78,0,423.75-161.88,471.58-378.28L497.75,496.82L191.59,870.35z"
                                    id="serie58" @mouseover="sectorHover" style="fill:#F4A35B;stroke:#FFFFFF;stroke-width:12;" />
                                <path
                                    d="M960.28,357.44      C900.47,158.66,716.02,13.86,497.75,13.86c-266.73,0-482.96,216.22-482.96,482.96c0,4.69,0.07,9.36,0.21,14.01l482.75-14.01      L960.28,357.44z"
                                    id="neighboursZero" @mouseover="sectorHover" style="fill:#A2B671;stroke:#FFFFFF;stroke-width:12;" />
                                <path
                                    d="M585.77,303.93L698.3,57.34      c-61.08-27.92-129-43.49-200.56-43.49c-128.43,0-245.15,50.14-331.67,131.9L354.2,344.88c37.94-36.48,89.48-58.91,146.27-58.91      C530.84,285.98,559.69,292.4,585.77,303.93z"
                                    id="zero" @mouseover="sectorHover" style="fill:#3B8684;stroke:#FFFFFF;stroke-width:12;" />
                            </g>
                            <g id="GFX_2_" style="pointer-events: none">
                                <path
                                    d="M597.47,779.81l28.09,79.93l56.16-24.93l-40.44-74.45c-6.97,3.78-14.14,7.32-21.52,10.59,C612.39,774.23,604.95,777.17,597.47,779.81z" />
                                <path
                                    d="M562.3,876.1l59.56-15.08l-27.28-80.22c-15.35,5.24-30.87,9.17-46.45,11.82L562.3,876.1z"
                                    style="fill:#CC0000;" />
                                <path
                                    d="M497.19,881.53l61.25-4.79l-13.32-83.64c-15.94,2.54-31.91,3.77-47.79,3.72L497.19,881.53z" />
                                <path
                                    d="M432.09,875.88l61.18,5.63l1.01-84.71c-16.07-0.21-32.03-1.71-47.71-4.46L432.09,875.88z"
                                    style="fill:#CC0000;" />
                                <path
                                    d="M368.89,859.3l59.35,15.89l15.32-83.41c-15.75-2.92-31.22-7.08-46.26-12.45L368.89,859.3z" />
                                <path
                                    d="M350.93,758.23l-41.54,74.06l55.81,25.69l29.23-79.7C379.44,772.76,364.89,766.07,350.93,758.23z"
                                    style="fill:#CC0000;" />
                                <path
                                    d="M255.32,795.61l50.67,34.75l42.3-73.65c-13.81-7.94-27.03-16.98-39.49-27.1L255.32,795.61z" />
                                <path
                                    d="M208.23,750.31l44.07,42.81l54.16-65.46c-12.22-10.13-23.72-21.27-34.32-33.4L208.23,750.31z"
                                    style="fill:#CC0000;" />
                                <path
                                    d="M169.46,697.71l36.2,49.65l64.49-55.41c-10.27-12.01-19.7-24.93-28.11-38.75L169.46,697.71z" />
                                <path
                                    d="M219.32,607.66l-79.17,31.65l27.29,55.05l73.04-43.78c-6.1-10.24-11.67-20.94-16.62-32.11,C222.26,614.89,220.76,611.28,219.32,607.66z"
                                    style="fill:#CC0000;" />
                                <path
                                    d="M204.53,558.98l-83.4,17.82l17.59,58.87l79.48-30.84C212.34,589.72,207.81,574.39,204.53,558.98z" />
                                <path
                                    d="M112.94,511.98l7.39,60.99L203.91,556c-3.2-15.8-5.09-31.68-5.7-47.49L112.94,511.98z"
                                    style="fill:#CC0000;" />
                                <path
                                    d="M115.83,446.7l-3.03,61.37l85.32-2.61c-0.46-16.04,0.37-32.01,2.45-47.76L115.83,446.7z" />
                                <path
                                    d="M129.7,382.85l-13.35,59.97L201,454.69c2.26-15.83,5.76-31.43,10.48-46.64L129.7,382.85z"
                                    style="fill:#CC0000;" />
                                <path
                                    d="M230.56,360.95l-76.39-38.68l-23.3,56.85l81.52,26.03C217.27,389.97,223.34,375.18,230.56,360.95z" />
                                <path
                                    d="M188.53,266.69l-32.57,52.1l75.99,39.46c7.34-14.11,15.8-27.67,25.33-40.51L188.53,266.69z"
                                    style="fill:#CC0000;" />
                                <path
                                    d="M231.79,217.71l-40.91,45.84l68.23,51.73c9.58-12.64,20.2-24.57,31.82-35.65L231.79,217.71z" />
                                <path
                                    d="M282.7,176.76l-48.07,38.27l58.51,62.53c11.54-10.78,24.02-20.74,37.41-29.73L282.7,176.76z"
                                    style="fill:#CC0000;" />
                                <path
                                    d="M339.8,144.99l-53.84,29.6l47.14,71.57c13.13-8.62,27.1-16.32,41.88-22.97L339.8,144.99z" />
                                <path
                                    d="M401.44,123.33l-58.07,20.07l34.38,78.55c14.84-6.5,29.93-11.69,45.13-15.65L401.44,123.33z"
                                    style="fill:#CC0000;" />
                                <path
                                    d="M465.86,112.41l-60.63,9.97l20.6,83.17c15.65-3.9,31.4-6.47,47.14-7.79L465.86,112.41z" />
                                <path
                                    d="M531.2,112.52l-61.44-0.42l6.24,85.41c16.01-1.18,31.99-1.05,47.78,0.32L531.2,112.52z"
                                    style="fill:#339900;" />
                                <path
                                    d="M595.59,123.68l-60.48-10.8l-8.28,85.23c15.92,1.55,31.65,4.37,47.04,8.4L595.59,123.68z"
                                    style="fill:#CC0000;" />
                                <path
                                    d="M621.76,223.48l35.39-77.92l-57.79-20.87l-22.56,82.59C592.2,211.49,607.23,216.91,621.76,223.48z" />
                                <path
                                    d="M714.14,177.53l-53.43-30.33l-36.17,77.54c14.44,6.71,28.36,14.57,41.61,23.52L714.14,177.53z"
                                    style="fill:#CC0000;" />
                                <path
                                    d="M764.9,218.67l-47.54-38.93l-48.7,70.22c13.07,9.02,25.47,19.12,37.06,30.22L764.9,218.67z" />
                                <path
                                    d="M807.98,267.8l-40.27-46.4l-59.78,60.9c11.31,11.07,21.82,23.12,31.39,36.09L807.98,267.8z"
                                    style="fill:#CC0000;" />
                                <path
                                    d="M842.14,323.5l-31.85-52.54l-69.17,49.89c9.22,12.77,17.55,26.41,24.83,40.89L842.14,323.5z" />
                                <path
                                    d="M784.92,408.96l81.47-24.79L843.88,327l-76.59,37.47c1.71,3.48,3.37,6.99,4.96,10.57,C777.21,386.23,781.42,397.55,784.92,408.96z"
                                    style="fill:#CC0000;" />
                                <path
                                    d="M880.04,448.07l-12.53-60.15l-81.7,23.95c4.6,15.51,7.86,31.17,9.87,46.84L880.04,448.07z" />
                                <path
                                    d="M882.69,513.36l-2.18-61.4l-84.44,9.78c1.88,16,2.43,31.99,1.74,47.85L882.69,513.36z"
                                    style="fill:#CC0000;" />
                                <path
                                    d="M874.28,578.16l8.23-60.89l-84.82-4.62c-0.86,16.03-3.03,31.9-6.4,47.46L874.28,578.16z" />
                                <path
                                    d="M776.32,608.8l78.71,31.8l18.4-58.62l-82.79-18.88C787.09,578.7,782.28,593.98,776.32,608.8z"
                                    style="fill:#CC0000;" />
                                <path
                                    d="M825.5,698.89l28.04-54.67l-78.36-32.59c-6.11,14.75-13.41,29.02-21.81,42.66L825.5,698.89z" />
                                <path
                                    d="M786.55,751.35l36.88-49.14l-71.66-45.32c-8.49,13.48-18.08,26.32-28.7,38.38L786.55,751.35z"
                                    style="fill:#CC0000;" />
                                <path
                                    d="M739.29,796.47l44.65-42.2l-62.91-56.72c-10.62,11.8-22.24,22.83-34.82,32.94L739.29,796.47z" />
                                <path
                                    d="M685.09,832.96l51.14-34.05l-52.4-66.52c-12.42,9.77-25.75,18.65-39.93,26.52L685.09,832.96z"
                                    style="fill:#CC0000;" />
                                <circle cx="497.75" cy="496.82" r="385.39"
                                    style="fill:none;stroke:#000000;stroke-width:5;" />
                                <circle cx="498.85" cy="497.07" r="299.19"
                                    style="fill:none;stroke:#000000;stroke-width:5;" />
                            </g>
                            <g id="TESTI" style="pointer-events: none"><text
                                    style="fill:#FFFFFF; font-family:'Montserrat'; font-size:30.72px;"
                                    transform="matrix(-0.4564 0.8898 -0.8898 -0.4564 800.6003 630.0463)">12</text><text
                                    style="fill:#FFFFFF; font-family:'Montserrat'; font-size:30.7212px;"
                                    transform="matrix(-0.6002 0.7999 -0.7999 -0.6002 772.7068 681.3871)">36</text><text
                                    style="fill:#FFFFFF; font-family:'Montserrat'; font-size:30.7188px;"
                                    transform="matrix(-0.7267 0.6869 -0.6869 -0.7267 738.5637 725.1169)">11</text><text
                                    style="fill:#FFFFFF; font-family:'Montserrat'; font-size:30.72px;"
                                    transform="matrix(-0.8324 0.5542 -0.5542 -0.8324 695.9313 761.9443)">30</text><text
                                    style="fill:#FFFFFF; font-family:'Montserrat'; font-size:30.72px;"
                                    transform="matrix(-0.914 0.4057 -0.4057 -0.914 642.4422 793.9941)">8</text><text
                                    style="fill:#FFFFFF; font-family:'Montserrat'; font-size:30.72px;"
                                    transform="matrix(-0.9694 0.2454 -0.2454 -0.9694 596.1021 812.4663)">23</text><text
                                    style="fill:#FFFFFF; font-family:'Montserrat'; font-size:30.7214px;"
                                    transform="matrix(-0.997 0.078 -0.078 -0.997 542.2879 824.9811)">10</text><text
                                    style="fill:#FFFFFF; font-family:'Montserrat'; font-size:30.72px;"
                                    transform="matrix(-0.9958 -0.0916 0.0916 -0.9958 473.5075 826.9056)">5</text><text
                                    style="fill:#FFFFFF; font-family:'Montserrat'; font-size:30.72px;"
                                    transform="matrix(-0.966 -0.2585 0.2585 -0.966 428.0203 822.3022)">24</text><text
                                    style="fill:#FFFFFF; font-family:'Montserrat'; font-size:30.72px;"
                                    transform="matrix(-0.9084 -0.4181 0.4181 -0.9084 375.7703 806.0721)">16</text><text
                                    style="fill:#FFFFFF; font-family:'Montserrat'; font-size:30.72px;"
                                    transform="matrix(-0.8247 -0.5656 0.5656 -0.8247 323.3506 780.3177)">33</text><text
                                    style="fill:#FFFFFF; font-family:'Montserrat'; font-size:30.7186px;"
                                    transform="matrix(-0.7172 -0.6968 0.6968 -0.7172 272.4809 739.5303)">1</text><text
                                    style="fill:#FFFFFF; font-family:'Montserrat'; font-size:30.7185px;"
                                    transform="matrix(-0.5891 -0.808 0.808 -0.5891 240.1402 705.7986)">20</text><text
                                    style="fill:#FFFFFF; font-family:'Montserrat'; font-size:30.72px;"
                                    transform="matrix(-0.4441 -0.896 0.896 -0.4441 209.4742 661.2522)">14</text><text
                                    style="fill:#FFFFFF; font-family:'Montserrat'; font-size:30.7188px;"
                                    transform="matrix(-0.2863 -0.9581 0.9581 -0.2863 184.1051 607.7263)">31</text><text
                                    style="fill:#FFFFFF; font-family:'Montserrat'; font-size:30.7185px;"
                                    transform="matrix(-0.1202 -0.9927 0.9927 -0.1202 170.5553 544.2252)">9</text><text
                                    style="fill:#FFFFFF; font-family:'Montserrat'; font-size:30.72px;"
                                    transform="matrix(0.0493 -0.9988 0.9988 0.0493 166.0707 499.5929)">22</text><text
                                    style="fill:#FFFFFF; font-family:'Montserrat'; font-size:30.72px;"
                                    transform="matrix(0.2174 -0.9761 0.9761 0.2174 170.1569 444.3932)">18</text><text
                                    style="fill:#FFFFFF; font-family:'Montserrat'; font-size:30.72px;"
                                    transform="matrix(0.3792 -0.9253 0.9253 0.3792 184.1822 386.3049)">29</text><text
                                    style="fill:#FFFFFF; font-family:'Montserrat'; font-size:30.72px;"
                                    transform="matrix(0.5301 -0.8479 0.8479 0.5301 212.3771 327.9734)">7</text><text
                                    style="fill:#FFFFFF; font-family:'Montserrat'; font-size:30.72px;"
                                    transform="matrix(0.6658 -0.7461 0.7461 0.6658 237.8374 288.0255)">28</text><text
                                    style="fill:#FFFFFF; font-family:'Montserrat'; font-size:30.72px;"
                                    transform="matrix(0.7823 -0.6229 0.6229 0.7823 275.3612 248.5934)">12</text><text
                                    style="fill:#FFFFFF; font-family:'Montserrat'; font-size:30.719px;"
                                    transform="matrix(0.8763 -0.4817 0.4817 0.8763 321.422 213.9641)">35</text><text
                                    style="fill:#FFFFFF; font-family:'Montserrat'; font-size:30.72px;"
                                    transform="matrix(0.9451 -0.3267 0.3267 0.9451 378.8448 182.0303)">3</text><text
                                    style="fill:#FFFFFF; font-family:'Montserrat'; font-size:30.7213px;"
                                    transform="matrix(0.9868 -0.1622 0.1622 0.9868 424.8514 168.7508)">26</text><text
                                    style="fill:#FFFFFF; font-family:'Montserrat'; font-size:30.72px;"
                                    transform="matrix(1 6.875145e-03 -6.875145e-03 1 489.351 161.9272)">0</text><text
                                    style="fill:#FFFFFF; font-family:'Montserrat'; font-size:30.72px;"
                                    transform="matrix(0.9844 0.1758 -0.1758 0.9844 538.9604 166.5006)">32</text><text
                                    style="fill:#FFFFFF; font-family:'Montserrat'; font-size:30.72px;"
                                    transform="matrix(0.9406 0.3396 -0.3396 0.9406 592.916 176.1757)">15</text><text
                                    style="fill:#FFFFFF; font-family:'Montserrat'; font-size:30.72px;"
                                    transform="matrix(0.8696 0.4937 -0.4937 0.8696 644.4924 197.1282)">19</text><text
                                    style="fill:#FFFFFF; font-family:'Montserrat'; font-size:30.72px;"
                                    transform="matrix(0.7737 0.6336 -0.6336 0.7737 699.9167 233.7028)">4</text><text
                                    style="fill:#FFFFFF; font-family:'Montserrat'; font-size:30.72px;"
                                    transform="matrix(0.6555 0.7552 -0.7552 0.6555 737.9778 267.9848)">21</text><text
                                    style="fill:#FFFFFF; font-family:'Montserrat'; font-size:30.719px;"
                                    transform="matrix(0.5184 0.8551 -0.8551 0.5184 775.5938 316.9339)">2</text><text
                                    style="fill:#FFFFFF; font-family:'Montserrat'; font-size:30.7184px;"
                                    transform="matrix(0.3664 0.9304 -0.9304 0.3664 797.0485 358.3932)">25</text><text
                                    style="fill:#FFFFFF; font-family:'Montserrat'; font-size:30.72px;"
                                    transform="matrix(0.2039 0.979 -0.979 0.2039 817.7174 410.6365)">17</text><text
                                    style="fill:#FFFFFF; font-family:'Montserrat'; font-size:30.72px;"
                                    transform="matrix(0.0355 0.9994 -0.9994 0.0355 828.2911 465.8696)">34</text><text
                                    style="fill:#FFFFFF; font-family:'Montserrat'; font-size:30.72px;"
                                    transform="matrix(-0.1339 0.991 -0.991 -0.1339 828.3637 532.0495)">6</text><text
                                    style="fill:#FFFFFF; font-family:'Montserrat'; font-size:30.72px;"
                                    transform="matrix(-0.2994 0.9541 -0.9541 -0.2994 818.7132 577.5878)">27</text></g>
                        </svg>
                    </div>
                </div>
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
            number: '0',
            sector: 'zero'
        }
    },
    mounted: function () {
        this.chats = this.$store.state.chats;
        const sections = document.getElementsByClassName("section");
    },
    methods: {
        // showSection(elements){
        //     for (const element of elements) {
        //         console.log('1',element.getAttribute('id'));
        //         element.addEventListener(
        //             "mouseover",
        //             () => {
        //                 const _hovers = [];
        //                 console.log('0');
        //                 if (element.getAttribute("id") != null) {
        //                     this.number = element.getAttribute('id') == "w0" ? "0":element.getAttribute('id');
        //                 }
        //             },
        //             false
        //         );
        //     }
        // },
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
        hover(evt) {
            this.number = evt.target.id;
        },

        sectorHover(evt) {
            this.sector = evt.target.id == "zero" ? "zero" : evt.target.id == "neighboursZero" ? "Series 0/2/3" : evt.target.id == "orphansSx" || evt.target.id == "orphansDx" ? "Orphans" : "Series 5/8";
        }
    }

}
</script>
<style scoped>
table {
    font-size: 2.5vh;
}

.red {
    fill: red;
}

.black {
    fill: black;
}

.green {
    fill: green;
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
    background: rgba(0, 0, 0, .5);
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
    font-size: 7vh;
}

.sectorSelected {
    text-align: left;
    padding: 0 3% 0 15%;
    margin: 1vh 0;
    display: inline-block;
    font-size: 5vh;
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
    /* font-size: 1.22vh; */
}

.wheel-stats p {
    color: #999;
    margin: 0;
    /* font-size: 1vh; */
    text-shadow: #000 0 0 1.5em;
    padding-left: 15%;
}

.highSelected {
    /* font-size: 1.4vh; */
    margin: 0.35vw;
}

.stats-chart-container {
    margin-top: 5.5vh;
    padding-top: 1.5vh;
    max-height: 30px !important;
}



.stats-rosso-nero .stats-chart-container .black,
.stats-rosso-nero .stats-chart-container .green,
.stats-rosso-nero .stats-chart-container .red {
    height: 3.5vh;
    display: inline-block;
    padding: 0.5vh 0;
    transition: width .4s ease-in-out;
}

.stats-rosso-nero .radius-start {
    border-radius: 6px 0 0 6px;
}

.stats-rosso-nero .radius-end {
    border-radius: 0 6px 6px 0;
}

.stats-rosso-nero .red {
    background-color: #a50202;
}

.stats-rosso-nero .green {
    background-color: green;
}

.stats-rosso-nero .black {
    background-color: black;
}

.stats-rosso-nero .orange {
    background-color: orange;
}

.stats-rosso-nero .white-blue {
    background-color: #6498e7;
}

.stats-rosso-nero .blue {
    background-color: blue;
}

.stats-rosso-nero .white-green {
    background-color: #85e951d6;
}

.stats-rosso-nero .yellow {
    background-color: yellow;
}

.label_percentage {
    font-size: 2.5vh;
    font-weight: 300;
    text-align: center;
    margin: 0;
    text-shadow: #000 0 0 6px;
}

.stats-label {
    font-size: 2.5vh !important;
    font-weight: 400;
    position: relative;
    margin-top: -1.5vh !important;
    bottom: 200%;
    margin: 0;
    text-align: center;
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