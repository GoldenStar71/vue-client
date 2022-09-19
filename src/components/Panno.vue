<template>
  <div class="flex absolute top-0  w-full h-full md:items-center">
    <div class="flex flex-col h-full overflow-y-hidden absolute w-full md:w-1/2 win-numbers top-0">
      <div class="flex flex-col  h-1/2 md:h-2/3 relative">
        <AppToast :showMessage="showToast" :title="toastTitle" :message="toastMessage"></AppToast>
        <CounterDesktop v-if="($store.state.roundStatus === 'started')"></CounterDesktop>
        <!-- <CounterDesktop></CounterDesktop> -->
        <Wheel :num="$store.state.winNumber" v-if="$store.state.roundStatus !== 'started'"
          :wait="$store.state.roundStatus == 'wait'" :numberList="numberList">
        </Wheel>
        <div class="flex flex-col-reverse gap-1 p-3 pt-2 win-numbers-mt">
          <div v-if="number !== ''" v-for="number in $store.state.winNumbers"
            class="text-center rounded-full flex items-center justify-center win-number"
            :class="numberObj[number].color === 'Black' ? 'ml-[1vw] bg-black' : (numberObj[number].color === 'Green' ? 'ml-[2vw] bg-green-700' : 'bg-red-700')">
            {{ number }}
          </div>
        </div>

      </div>
    </div>
    <!-- hot and cool number -->
    <!-- <div v-if="($store.state.roundStatus !== 'started')"
      class="absolute top-0 right-0 h-full w-20 flex flex-col md:hidden items-center justify-center gap-[1px]">
      <h3 class="text-orange-600 font-bold">HOT</h3>
      <div v-if="number !== ''" v-for="number in $store.state.hotCoolNumbers.hot"
        class="text-center rounded-full flex items-center justify-center w-6 h-6 hot-cold-number"
        :class="numberObj[number].color === 'Black' ? ' bg-black ' : (numberObj[number].color === 'Green' ? ' bg-green-700' : 'bg-red-700')">
        {{ number }}
      </div>
      <h3 class="text-sky-600 font-bold mt-2a">COLD</h3>
      <div v-if="number !== ''" v-for="number in $store.state.hotCoolNumbers.cool"
        class="text-center rounded-full flex items-center justify-center w-6 h-6 hot-cold-number"
        :class="numberObj[number].color === 'Black' ? 'bg-black' : (numberObj[number].color === 'Green' ? ' bg-green-700' : 'bg-red-700')">
        {{ number }}
      </div>
    </div> -->
    <div xclass="w-full md:p-12 md:w-3/5 md:ml-[38%] md:mt-[6%]" class="w-full p-12 w-3/5 ml-[38%] md:mt-[6%] panno-box">
      <div _ngcontent-bdp-c0="" class="panno-container relative">
        <PannoPanel v-bind:startedBetting="$store.state.roundStatus == 'started'"></PannoPanel>
        <Ovale v-if="$store.state.roundStatus == 'started' && !$store.state.showGroupBet"></Ovale>
        <OvaleSnap v-if="!$store.state.showGroupBet"></OvaleSnap>
        <PannoSnap></PannoSnap>
      </div>
    </div>
    <!-- balances -->
    <div class="flex justify-between w-full px-2 bottom-2 md:bottom-4  absolute text-xs leading-none">
      <div class="flex gap-0 items-end flex-col ">
        <div class="flex gap-2 items-center"><span class="text-yellow-200">EUR</span>
          <Icon icon="ci:dot-01-xs" width="10"></Icon><span class="text-white">BALANCE</span>
        </div>
        <span class="text-sm text-white  ">{{
        formatNumber($store.state.haveBalance)
        }}</span>
      </div>
      <div class="flex gap-0 items-start flex-col text-xs leading-none">
        <div class="flex gap-2 items-center"><span class="text-white">{{ $store.state.gameStatus }}</span>
          <Icon icon="ci:dot-01-xs" width="10"></Icon><span class="text-yellow-200">EUR</span>
        </div>
        <span class="text-sm text-white  ">{{
        formatNumber($store.state.roundBalance)
        }}</span>
      </div>
    </div>
    <!-- coin tool bar -->
    <div class="coin-toolbar absolute pb-2 md:pr-3  w-full items-end justify-center flex" :class="
      this.$store.state.roundStatus == 'started'
        ? 'coin-toolbar-open'
        : 'coin-toolbar-close hidden'
    ">
      <div class="flex justify-center coin-sub-toolbar items-end relative ">
        <button class="animate-btn btn coin-clear-button md:w-12 md:h-12 btn-circle mb-16" @click="handleClearAll"
          :class="$store.state.betAction == 'remove' ? 'absolute -left-6 flex ' : 'hidden'">
          <Icon icon="ri:brush-line" width="30"></Icon>
        </button>
        <button class="animate-btn btn coin-button md:w-12 md:h-12   btn-circle mr-1 flex" @click="handleRemoveCoin">
          <Icon :icon="$store.state.betAction == 'remove' ? 'bi:check-lg' : 'la:times'" width="40"></Icon>
        </button>

        <button class="animate-btn btn coin-button md:w-12 md:h-12   btn-circle mr-4 flex" @click="handleFetchLast">
          <Icon :icon="(twoxMode ? 'fluent:multiplier-2x-32-filled' : 'bytesize:reload')" width="40"></Icon>
        </button>
      </div>
      <Coin :fillColor="getFillColor(0.5, 500)" v-bind:value="0.5" :filter="`shadow0`"></Coin>
      <Coin :fillColor="getFillColor(1, 500)" v-bind:value="1" :filter="`shadow1`"></Coin>
      <Coin :fillColor="getFillColor(5, 500)" v-bind:value="5" :filter="`shadow2`"></Coin>
      <Coin :fillColor="getFillColor(10, 500)" v-bind:value="10" :filter="`shadow3`"></Coin>
      <Coin :fillColor="getFillColor(20, 500)" v-bind:value="20" :filter="`shadow4`"></Coin>
      <Coin :fillColor="getFillColor(50, 500)" v-bind:value="50" :filter="`shadow5`"></Coin>
      <Coin :fillColor="getFillColor(100, 500)" v-bind:value="100" :filter="`shadow6`"></Coin>
      <Coin :fillColor="getFillColor(200, 500)" v-bind:value="200" :filter="`shadow7`"></Coin>
    </div>
    <!-- mobile toolbar-->
    <!-- <div class="mobile-coin-toolbar flex-col py-6 items-end justify-start flex md:hidden absolute right-4" :class="
      this.$store.state.roundStatus == 'started'
        ? 'mobile-coin-toolbar-open '
        : 'mobile-coin-toolbar-close '
    ">
      <Coin :fillColor="getFillColor(0.5, 400)" v-bind:value="0.5" :filter="`shadow8`"></Coin>
      <Coin :fillColor="getFillColor(1, 400)" v-bind:value="1" :filter="`shadow9`"></Coin>
      <Coin :fillColor="getFillColor(5, 400)" v-bind:value="5" :filter="`shadow10`"></Coin>
      <Coin :fillColor="getFillColor(10, 400)" v-bind:value="10" :filter="`shadow11`"></Coin>
      <Coin :fillColor="getFillColor(20, 400)" v-bind:value="20" :filter="`shadow12`"></Coin>
      <Coin :fillColor="getFillColor(50, 400)" v-bind:value="50" :filter="`shadow13`"></Coin>
      <Coin :fillColor="getFillColor(100, 400)" v-bind:value="100" :filter="`shadow14`"></Coin>
      <Coin :fillColor="getFillColor(200, 400)" v-bind:value="200" :filter="`shadow15`"></Coin>
      <div class="flex items-end mobile-coin-sub-toolbar relative flex-col mt-4 gap-2">
        <button class="animate-btn btn w-10 h-10  btn-circle flex" @click="handleFetchLast">
          <Icon :icon="(twoxMode ? 'fluent:multiplier-2x-32-filled' : 'bytesize:reload')" width="40"></Icon>
        </button>
        <button class="animate-btn btn w-10 h-10    btn-circle  flex" @click="handleRemoveCoin">
          <Icon :icon="$store.state.betAction == 'remove' ? 'bi:check-lg' : 'la:times'" width="40"></Icon>
        </button>
        <button class="animate-btn btn w-6 h-6   btn-circle mr-8  flex absolute" @click="handleClearAll"
          :class="$store.state.betAction == 'remove' ? 'flex -bottom-4' : 'hidden'">
          <Icon icon="ri:brush-line" width="30"></Icon>
        </button>
      </div>
    </div> -->

    <!-- <div class="absolute pb-2 pl-[30%] pr-[30%] bottom-10 w-full items-end justify-center sm:hidden">
      <MarqueeText :repeat="10">
        <span v-for="(bet, index) in this.$store.state.roundBet" :key="index">
          <span class="text-green-500">{{bet.player}}</span> : <span class="text-yellow-400">{{bet.amount}}</span>
        </span>
      </MarqueeText>
    </div> -->
    <!-- buttons -->
    <button class=" flex absolute animate-btn btn bottom-14 md:bottom-14 w-7 h-7 sm:w-10 sm:h-10 btn-circle"
      @click="$store.commit('setShowMenu', !$store.state.showMenu)">
      <Icon icon="entypo:menu" width="40"></Icon>
    </button>
    <button v-if="this.$store.state.roundStatus == 'started'" @click="handleShowGroupBet()" id='btn-show-group-bet'
      class=" right-0 flex absolute animate-btn btn bottom-20 md:bottom-32 w-7 h-7 sm:w-10 sm:h-10 btn-circle">
      <!-- <Icon icon="ph:coins-duotone" width="40"></Icon> -->
      <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" id="Livello_1" x="0px" y="0px" viewBox="0 0 150 150" style="enable-background:new 0 0 150 150;" xml:space="preserve">
        <title>JP</title>
        <g>
          <g id="icone_bottoni">
            <g id="ovale">
              <path style="fill:none;stroke:#FFFFFF;stroke-width:3.5;stroke-miterlimit:10;" d="M50.1,50.75h51.41     c12.9,0,23.35,10.45,23.35,23.35v2.3c0,12.9-10.45,23.35-23.35,23.35H50.1c-12.9,0-23.35-10.45-23.35-23.35v-2.3     C26.75,61.2,37.2,50.75,50.1,50.75z"/>
              <path style="fill:none;stroke:#FFFFFF;stroke-width:3.5;stroke-miterlimit:10;" d="M50.95,62.25h49.71     c6.84,0,12.39,5.55,12.39,12.39v1.22c0,6.84-5.55,12.39-12.39,12.39H50.95c-6.84,0-12.39-5.55-12.39-12.39v-1.22     C38.56,67.8,44.11,62.25,50.95,62.25z"/>
              <line style="fill:none;stroke:#FFFFFF;stroke-width:3.5;stroke-miterlimit:10;" x1="69.05" y1="62.05" x2="82.56" y2="88.45"/>
            </g>
          </g>
        </g>
      </svg>
    </button>

    <!-- light button-->
    <div class="hidden md:flex absolute right-5 grid top-1/4" :class="
      this.$store.state.showLightButton
        ? 'grid-cols-3'
        : 'grid-cols-1'
    ">
      <div class="flex flex-col">
        <div><button class="md:flex float-right btn right-5 top-20 md:top-20 w-7 h-7 sm:w-10 sm:h-10 btn-circle"
            @click="$store.commit('setShowMessage', !$store.state.showMessage)"
            :class="this.$store.state.showMessage ? 'bg-red-700' : ''">
            <!-- <Icon icon="jam:messages-alt" width="20"></Icon> -->
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 150 150">
              <title>chat</title>
              <g id="Livello_2" data-name="Livello 2">
                <g id="icone">
                  <g id="chat">
                    <path
                      d="M85.23,93.37c4,5.49,9.89,11.69,15.84,11.68C98,102.43,96,97.19,94.84,92.73c14.48-2.62,25.26-12.58,25.26-24.47,0-13.89-14.72-25.15-32.88-25.15S54.35,54.37,54.35,68.26C54.35,81.64,68,92.58,85.23,93.37Z"
                      style="fill:none;stroke:#fff;stroke-miterlimit:10;stroke-width:3px" />
                    <path
                      d="M78.6,84.38c0-10.25-10.86-18.55-24.25-18.55S30.1,74.13,30.1,84.38c0,8.77,7.95,16.11,18.64,18.05-.87,3.28-2.32,7.14-4.6,9.08,4.39,0,8.72-4.57,11.68-8.62C68.52,102.32,78.6,94.25,78.6,84.38Z"
                      style="fill:#fff" />
                  </g>
                </g>
              </g>
            </svg>
          </button></div>
        <div><button class="md:flex float-right btn right-5 top-24 md:top-32 w-7 h-7 sm:w-10 sm:h-10 btn-circle"
            @click="$store.commit('setShowGraph', !$store.state.showGraph)"
            :class="this.$store.state.showGraph ? 'bg-red-700' : ''">
            <!-- <Icon icon="bi:graph-up-arrow" width="20"></Icon> -->
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 150 150">
              <title>Risorsa 3</title>
              <g id="Livello_2" data-name="Livello 2">
                <g id="icone_bottoni" data-name="icone bottoni">
                  <g id="Livello_2-2" data-name="Livello 2">
                    <g id="icone">
                      <g id="stats">
                        <path
                          d="M105.47,107H41.7V43a2,2,0,1,0-4-.28v66.17a2.09,2.09,0,0,0,2,2.07h65.74a2,2,0,0,0,2-2h0A2,2,0,0,0,105.47,107Z"
                          style="fill:#fff" />
                        <path
                          d="M52.52,98.11a3.07,3.07,0,0,0,4.16-1.21L71.93,69.2l13.92,7.66a2.87,2.87,0,0,0,2.71.48,3,3,0,0,0,1.86-1.46,2.83,2.83,0,0,0,.17-.4L99.11,60l3.06,1.67c1.59.87,2.82.1,2.76-1.71l-.45-12.45c-.07-1.81-1.39-2.54-3-1.64L90.6,52.19c-1.57.9-1.55,2.34,0,3.21l3.09,1.68-7.2,13.14L72.29,62.4A3.25,3.25,0,0,0,68,63.64L51.31,94A3.07,3.07,0,0,0,52.52,98.11Z"
                          style="fill:#fff" />
                      </g>
                    </g>
                  </g>
                </g>
              </g>
            </svg>
          </button></div>
        <div><button class="md:flex float-right btn right-5 top-28 md:top-44 w-7 h-7 sm:w-10 sm:h-10 btn-circle"
            @click="$store.commit('setShowHistory', !$store.state.showHistory)"
            :class="this.$store.state.showHistory ? 'bg-red-700' : ''">
            <!-- <Icon icon="jam:messages-alt" width="20"></Icon> -->
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 29.35 42.41" style="width:20px;">
              <title>winner-bet</title>
              <g id="Livello_2" data-name="Livello 2">
                <g id="panel_SHOW" data-name="panel SHOW">
                  <g id="ON_SMALL" data-name="ON SMALL">
                    <g id="win_bet_ico" data-name="win/bet ico">
                      <path
                        d="M21.82,24.17C21.15,25.84,6.57,26.08,7,23.41A77.52,77.52,0,0,1,2.5,35.25l7.78-2.78a55.46,55.46,0,0,1,3.63,9.94l5.19-7.33,7.61,1.74S22.81,21.69,21.82,24.17Z"
                        style="fill:#fff" />
                      <path
                        d="M27.17,15.91l2.18-1.23-2.18-1.23,1.9-1.64L26.69,11l1.54-2-2.48-.3,1.13-2.24-2.5.19.67-2.41L22.64,5l.19-2.5L20.59,3.6l-.3-2.48-2,1.54L17.54.28l-1.63,1.9L14.68,0,13.45,2.18,11.81.28,11,2.66l-2-1.54L8.76,3.6,6.52,2.47,6.71,5,4.3,4.3,5,6.71l-2.5-.19L3.6,8.76l-2.48.3,1.54,2-2.38.78,1.9,1.64L0,14.68l2.18,1.23L.28,17.54l2.38.78-1.54,2,2.48.3L2.47,22.83,5,22.64,4.3,25.05l2.41-.67-.19,2.5,2.24-1.13.3,2.48,2-1.54.78,2.38,1.64-1.9,1.23,2.18,1.23-2.18,1.63,1.9.78-2.38,2,1.54.3-2.48,2.24,1.13-.19-2.5,2.41.67-.67-2.41,2.5.19-1.13-2.24,2.48-.3-1.54-2,2.38-.78ZM14.68,25.13A10.46,10.46,0,1,1,25.13,14.68,10.45,10.45,0,0,1,14.68,25.13Z"
                        style="fill:#fff" />
                      <text transform="translate(11.66 20.4)"
                        style="font-size:16.075820922851562px;fill:#fff;font-family:Montserrat-Regular, Montserrat;letter-spacing:-0.050055764110692944em">1</text>
                    </g>
                  </g>
                </g>
              </g>
            </svg>
          </button></div>
        <div><button class="md:flex float-right btn right-5 top-32 md:top-56 w-7 h-7 sm:w-10 sm:h-10 btn-circle"
            @click="$store.commit('setShowChart', !$store.state.showChart)"
            :class="this.$store.state.showChart ? 'bg-red-700' : ''">
            <!-- <Icon icon="ant-design:pie-chart-outlined" width="20"></Icon> -->
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32.58 32.57" style="width:20px;">
              <title>live-stat</title>
              <g id="Livello_2" data-name="Livello 2">
                <g id="panel_SHOW" data-name="panel SHOW">
                  <g id="ON_SMALL" data-name="ON SMALL">
                    <g id="live_ico" data-name="live ico">
                      <path d="M17.69,0V15.35H32.57a1.69,1.69,0,0,0,0-.23A15.12,15.12,0,0,0,17.69,0Z"
                        style="fill:#fff" />
                      <path d="M15.36,17.68V2.33h-.23A15.13,15.13,0,1,0,30.25,17.68Z" style="fill:#fff" />
                    </g>
                  </g>
                </g>
              </g>
            </svg>
          </button></div>
        <div></div>
      </div>
      <div class="col-span-2" v-if="$store.state.showLightButton">
        <Message v-if="$store.state.showMessage"></Message>
        <Graph v-if="$store.state.showGraph"></Graph>
        <RightBet v-if="$store.state.showHistory"></RightBet>
        <RealBet v-if="$store.state.showChart"></RealBet>
      </div>

    </div>
    <div class="absolute bottom-28 md:bottom-40 left-5 md:left-10" v-if="this.showSideMenu" style="z-index:60;">
      <AppMenu></AppMenu>
    </div>
    <div
      class="hidden sm:flex absolute left-20 bottom-20 md:bottom-32 w-22 h-15 p-2 text-yellow-400 bg-gray-400 opacity-70 rounded text-center text-xs">
      table limit:<br> 0.5 ~ 200 EUR</div>
  </div>
</template>

<script>
import Vue from 'vue';
import Ovale from "./sections/Ovale";
import OvaleSnap from "./sections/OvaleSnap";
import PannoPanel from "./sections/PannoPanel";
import Coin from "./sections/Coin";
import PannoSnap from "./sections/PannoSnap";
import CounterDesktop from "./CounterDesktop";
import Wheel from "./Wheel";
import AppToast from './AppToast';
import AppMenu from './Menu';
import Message from './Message';
import Graph from './Graph';
import RightBet from './RightBet';
import RealBet from './RealBet';
import { getFillColor } from "../utils/index.js";
import { Icon } from "@iconify/vue2";
import { mapState } from 'vuex';
import request from "@/utils/request";
import MarqueeText from 'vue-marquee-text-component'
export default {
  name: "Panno",
  components: {
    Ovale,
    AppMenu,
    OvaleSnap,
    PannoPanel,
    Coin,
    PannoSnap,
    Icon,
    CounterDesktop,
    Wheel,
    AppToast,
    MarqueeText,
    Message,
    Graph,
    RightBet,
    RealBet
  },
  data() {
    return {
      isOvaleShow: true,
      twoxMode: false,
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
        "26",
      ],
      showToast: false,
      toastTitle: '',
      toastMessage: '',
      showSideMenu: false,
    };
  },
  computed: mapState(['roundStatus', 'showMenu']),
  watch: {
    showMenu(status, old) {
      if (status !== old) {
        this.showSideMenu = status;
      }
    },
    roundStatus(status, old) {
      if (status === 'end') {
        this.endRound();
      }
      if (status === 'result') {
        this.resultRound();
      }
      if (status === 'started') {

        this.startRound();
      }
      if (status === 'wait') {
        // this.uploadBets();
        this.waitRound();
      }
    }
  },
  methods: {
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
    async getLastBet() {
      try {
        const response = await request.post('api/member/getLastBet', {}, { headers: this.getAxoisTokenHeader() });
        // const response = await request.post('/member/getLastBet', {}, { headers: this.getAxoisTokenHeader() });
        const arr = [];
        var valid = true;
        console.log("getlast");
        if (response.data.message === 'success') {
          let userBalance = this.$store.state.haveBalance;
          for (const bet of response.data.result) {
            userBalance -= bet.bet_amount;
            if (userBalance > 0)
              arr.push({ refer: bet.bet_code, value: eval(bet.bet_amount) });
            else {
              valid = false;
              let instance = Vue.$toast.error(`Limit balance, please check your balance!`);
              break;
            }
          }
          if (valid) {
            this.$store.commit('setSelected', arr);
            this.$store.commit('setUpdated', arr);
            this.twoxMode = true;
          }
        }

        // this.$store.commit("setLastBetInfo", response.data.result);
        // console.log(response)
      }
      catch (err) {
        console.log(err)
      }
    },
    handleFetchLast() {
      if (!this.twoxMode)
        this.getLastBet();
      else {
        const _arr = [];
        let userBalance = this.$store.state.haveBalance;
        let backup = this.$store.state.selected.slice(0, this.$store.state.selected.length);
        let current = this.$store.state.selected.slice(0, this.$store.state.selected.length);
        let valid = true;
        console.log("original:", backup);
        Loop1:
        for (const coin of current) {
          // coin.value = coin.value * 2;
          console.log("coinvalue", coin.value);
          userBalance -= coin.value * 2;
          if (userBalance > 0) {
            _arr.push(coin);
            coin.value = coin.value * 2;
          } else {
            valid = false;
            // console.log("backup:",backup);
            let instance = Vue.$toast.error(`Limit balance, please check your balance!`);
            //this.$store.commit('setSelected', backup);
            break Loop1;
          }
        }
        if (valid) {
          this.$store.commit('setSelected', _arr);
          this.$store.commit('setUpdated', _arr);
        }

      }
    },
    initialize() {
      this.$store.commit("setBetAction", "add");

      this.$store.commit("setMaxBet", 200);
    },
    startRound() {
      this.showToast = false;
      for (const e of document.querySelectorAll('.pulseWinBox')) {

        e.classList.remove('otherBox', 'redBox', 'greenBox', 'blackBox', 'pulseWinBox');

        // e.classList.remove('pulseWinBox');
      }
      setTimeout(() => {

        // setTimeout(() => {
        //   const winNumber = Math.floor(Math.random() * 36);
        //   this.$store.commit("setWinNumber", winNumber);
        //   this.$store.commit("setRoundStatus", "result");
        //   // this.endRound();
        // }, 50000);

        console.log("new start round");
        this.handleReset();
        this.showToast = true;
        this.toastTitle = 'Bet Opens';
        this.toastMessage = '';
        // this.toastMessage = '<p>Please Bet within 30S</p>';
        // this.$store.commit("setRoundStatus", "started");

      }, 1000);


    },
    waitRound() {
      console.log("wait result of round");
      this.$store.commit("setShowGroupBet", true);

    },
    resultRound() {
      this.showToast = false;
      console.log("result round");
      const winNumber = this.$store.state.winNumber;
      const winObj = this.numberObj[`${winNumber}`];
      // change the panno pluse
      // if (winObj.type === 'green') {

      // }


      // this.$store.commit("setRoundStatus", "end");
      setTimeout(() => {
        this.showToast = true;
        if (eval(winNumber) === 0) {
          this.toastTitle = `${winObj.type} / ${winObj.color}`;
          this.toastMessage = ``;
        }
        else {
          this.toastTitle = `${winObj.type} / ${winObj.color}`;
          this.toastMessage = `<p class='pr-4'>${winObj.text1}<br/>${winObj.text2}</p>`;
        }


        if (winObj.type === 'Even') {
          for (const e of document.querySelectorAll('#gRR')) {
            e.classList.remove('otherBox');
            e.classList.remove('pulseWinBox');
            e.classList.add('otherBox');
            e.classList.add('pulseWinBox');
          }
        }
        if (winObj.type === 'Odd') {
          for (const e of document.querySelectorAll('#gDS')) {
            e.classList.remove('otherBox');
            e.classList.remove('pulseWinBox');
            e.classList.add('otherBox');
            e.classList.add('pulseWinBox');
          }
        }
        if (winObj.text1 === '1° Dozen') {
          for (const e of document.querySelectorAll('#gD1')) {
            e.classList.remove('otherBox');
            e.classList.remove('pulseWinBox');
            e.classList.add('otherBox');
            e.classList.add('pulseWinBox');
          }
        }
        if (winObj.text1 === '2° Dozen') {
          for (const e of document.querySelectorAll('#gD2')) {
            e.classList.remove('otherBox');
            e.classList.remove('pulseWinBox');
            e.classList.add('otherBox');
            e.classList.add('pulseWinBox');
          }
        }
        if (winObj.text1 === '3° Dozen') {
          for (const e of document.querySelectorAll('#gD3')) {
            e.classList.remove('otherBox');
            e.classList.remove('pulseWinBox');
            e.classList.add('otherBox');
            e.classList.add('pulseWinBox');
          }
        }
        if (winObj.text2 === '1° Column') {
          for (const e of document.querySelectorAll('#gC1')) {
            e.classList.remove('otherBox');
            e.classList.remove('pulseWinBox');
            e.classList.add('otherBox');
            e.classList.add('pulseWinBox');
          }
        }
        if (winObj.text2 === '2° Column') {
          for (const e of document.querySelectorAll('#gC2')) {
            e.classList.remove('otherBox');
            e.classList.remove('pulseWinBox');
            e.classList.add('otherBox');
            e.classList.add('pulseWinBox');
          }
        }
        if (winObj.text2 === '3° Column') {
          for (const e of document.querySelectorAll('#gC3')) {
            e.classList.remove('otherBox');
            e.classList.remove('pulseWinBox');
            e.classList.add('otherBox');
            e.classList.add('pulseWinBox');
          }
        }
        if (winObj.color === 'Green') {
          for (const e of document.querySelectorAll(`#gPL${winNumber}`)) {
            e.classList.remove('greenBox');
            e.classList.remove('pulseWinBox');
            e.classList.add('greenBox');
            e.classList.add('pulseWinBox');
          }
        }

        if (winObj.color === 'Red') {
          for (const e of document.querySelectorAll('#gRO')) {
            e.classList.remove('otherBox');
            e.classList.remove('pulseWinBox');
            e.classList.add('otherBox');
            e.classList.add('pulseWinBox');
          }
          for (const e of document.querySelectorAll(`#gPL${winNumber}`)) {
            e.classList.remove('redBox');
            e.classList.remove('pulseWinBox');
            e.classList.add('redBox');
            e.classList.add('pulseWinBox');
          }
        }

        if (winObj.color === 'Black') {
          for (const e of document.querySelectorAll('#gNO')) {
            e.classList.remove('otherBox');
            e.classList.remove('pulseWinBox');
            e.classList.add('otherBox');
            e.classList.add('pulseWinBox');
          }
          for (const e of document.querySelectorAll(`#gPL${winNumber}`)) {
            e.classList.remove('blackBox');
            e.classList.remove('pulseWinBox');
            e.classList.add('blackBox');
            e.classList.add('pulseWinBox');
          }
        }
        this.$store.commit('setWinNumbers', winNumber);

      }, 1500);

    },
    endRound() {

    },
    getFillColor(value, max) {
      return getFillColor(value, max);
    },
    handleClearAll() {
      console.log("clear all...");
      this.twoxMode = false;
      this.$store.commit("setBetAction", "add");
      this.$store.commit("setHovered", []);
      this.$store.commit("setSelected", []);
      this.$store.commit('setUpdated', []);

    },
    handleReset() {
      console.log("reset...");
      this.twoxMode = false;
      this.$store.commit("setWinCoin", null);
      this.$store.commit("setBetAction", "add");
      this.$store.commit('setShowGroupBet', true);
      this.$store.commit("setHovered", []);
      this.$store.commit("setSelected", []);
      // setTimeout(
      //   () => { document.getElementById('btn-show-group-bet').click(); }
      //   , 300
      // )
    },
    // remove coin button
    handleRemoveCoin() {
      if (this.$store.state.betAction === 'remove') {
        this.$store.commit("setBetAction", "add");
      }
      else {
        this.$store.commit("setBetAction", "remove");
      }

    },
    // change bet way
    handleShowGroupBet() {
      if (this.$store.state.showGroupBet) {
        for (const group of document.querySelectorAll(".group-bet")) {
          group.classList.remove("hidden");
          group.classList.add("hidden");
        }
      } else {
        for (const group of document.querySelectorAll(".group-bet")) {
          group.classList.remove("hidden");
        }
      }

      this.$store.commit("setShowGroupBet", !this.$store.state.showGroupBet);
    },
    formatNumber(value) {
      let val = (value / 1).toFixed(2);
      return val.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    },
  },
  mounted() {
    this.initialize();
    // hide group bet control
    // for (const group of document.getElementsByClassName("group-bet")) {
    //   group.classList.remove("hidden");
    //   group.classList.add("hidden");
    // }

    // setTimeout(() => {
    //   this.$store.commit('setRoundStatus', 'started')
    //   // this.startRound();
    //   // 66S start round
    //   setInterval(() => {
    //     this.$store.commit('setRoundStatus', 'started')
    //     //this.startRound();
    //   }, 60000);
    // }, 3000);

  },
};
</script>

<style scoped>
.top-half {
  top: 50%;
}

.left {
  left: 2rem;
}

.right {
  right: 2rem;
}

.btn {
  color: white;
  border: 2px solid white;
  justify-content: center;
  align-items: center;
}

.btn-sm {
  height: 4rem;
  width: 4rem;
}

.btn-lg {
  height: 64px;
  width: 64px;
}

.btn-circle {
  border-radius: 50%;
}

.animate-btn {
  background: rgb(0, 17, 0);
  transition: all;
  transition-duration: 0.5s;
}

.animate-btn:hover {
  box-shadow: 1px 1px 15px 1px #777;
}

.coin-toolbar {
  bottom: -25%;
  opacity: 0;
}

.coin-toolbar-open {
  transition: all 1s linear;
  animation-name: slideTop;
  bottom: 1rem;
  opacity: 1;
}

.coin-toolbar-close {
  transition: all 1s linear;
  animation-name: slideBottom;
  bottom: -25%;
}

.mobile-coin-toolbar {
  bottom: -25%;
  opacity: 0;
}

.mobile-coin-toolbar-open {
  transition: all 1s linear;
  animation-name: slideMobileTop;
  bottom: 15%;
  opacity: 1;
}

.mobile-coin-toolbar-close {
  transition: all 1s linear;
  animation-name: slideMobileBottom;
  bottom: -25%;
}

@keyframes slideMobileTop {
  0% {
    bottom: -25%;
  }

  100% {
    bottom: 15%;
  }
}

@keyframes slideMobileBottom {
  0% {
    opacity: 1;
  }

  100% {
    bottom: -25%;
    opacity: 0;
  }
}

@keyframes slideTop {
  from {
    bottom: -25%;
  }

  to {
    bottom: 1rem;
  }
}

@keyframes slideBottom {
  from {
    bottom: 1rem;
  }

  to {
    bottom: -25%;
  }
}
</style>
<style>
.panno-container #fiche,
.panno-container #ovale,
.panno-container #ovalesnap,
.panno-container #panno,
.panno-container #pda,
.panno-container #snap {
  position: absolute;
  width: 100%;
  -webkit-backface-visibility: hidden;
  backface-visibility: hidden;
}

.panno-container #fiche,
.panno-container #ovale,
.panno-container #panno,
.panno-container #pda,
.panno-container #snap {
  pointer-events: none;
}

.panno-container #ovale,
.panno-container #panno {
  opacity: 0.85;
}

.panno-container #ovale text,
.panno-container #panno text {
  text-shadow: #000 0 0 40px;
}

.panno-container #ovale .hover,
.panno-container #panno .hover {
  -webkit-filter: url(#brightness-filter) !important;
  filter: url(#brightness-filter) !important;
}

.BETCLOSE .panno-container #ovale .hover,
.BETCLOSE .panno-container #panno .hover {
  -webkit-filter: none !important;
  filter: none !important;
}

.panno-container .snap-point,
.panno-container .group-snap-point,
.panno-container .ovale-snap-point {
  opacity: 0;
  -webkit-tap-highlight-color: rgba(255, 255, 255, 0);
  pointer-events: visible;
}

.panno-container .group-snap-point:active,
.panno-container .group-snap-point:focus,
.panno-container .ovale-snap-point:active,
.panno-container .ovale-snap-point:focus {
  -webkit-tap-highlight-color: rgba(255, 255, 255, 0);
}

.panno-container .hover-ovale-snap,
.panno-container .group-snap-point:hover,
.panno-container .ovale-snap-point:hover {
  opacity: 0.6 !important;
  fill: #fff !important;
  fill-opacity: 0.6 !important;
}

.BETCLOSE .panno-container.ovaleOn #fiche .fic,
.BETCLOSE .panno-container.ovaleOn #panno #groupOtherBets {
  display: block !important;
}

.BETCLOSE .panno-container.ovaleOn #ovale,
.BETCLOSE .panno-container.ovaleOn #ovalesnap {
  display: none;
}

.mobile.BETTIME .panno-container {
  position: absolute;
  top: 0;
  width: 100%;
  height: 68%;
  pointer-events: visible;
}

@media screen and (orientation: portrait) {
  .mobile.BETTIME .panno-container {
    top: calc(50% - 23vw);
    height: 50vw;
    width: 86vh;
    margin-left: calc(50% - 43vh);
  }

  .tablet .mobile.BETTIME .panno-container {
    top: calc(50% - 25vw);
  }
}

.mobile.BETCLOSE .panno-container {
  position: absolute;
  width: 100%;
  height: 50%;
  margin-top: 14%;
}

.mobile.BETCLOSE .panno-container.ovaleOn #fiche,
.mobile.BETCLOSE .panno-container.ovaleOn #panno,
.mobile.BETCLOSE .panno-container.ovaleOn #pda,
.mobile.BETCLOSE .panno-container.ovaleOn #snap {
  transform: scale3D(1, 1, 1) translate(0, 0);
}

.mobile .panno-container {
  z-index: 2;
  transition: transform 0.2s ease-in;
}

.mobile .panno-container #fiche,
.mobile .panno-container #ovale,
.mobile .panno-container #ovalesnap,
.mobile .panno-container #panno,
.mobile .panno-container #pda,
.mobile .panno-container #snap {
  position: absolute;
  height: 100%;
  width: 100%;
}

.mobile .panno-container #fiche svg,
.mobile .panno-container #ovale svg,
.mobile .panno-container #ovalesnap svg,
.mobile .panno-container #panno svg,
.mobile .panno-container #pda svg,
.mobile .panno-container #snap svg {
  position: absolute;
  top: 0;
  left: 0;
}

.mobile .panno-container.ovaleOn #fiche,
.mobile .panno-container.ovaleOn #panno,
.mobile .panno-container.ovaleOn #pda,
.mobile .panno-container.ovaleOn #snap {
  transform: scale3D(0.5, 0.5, 0.5) translate(0, -48%);
}

@media screen and (orientation: portrait) {
  .mobile.BETCLOSE .panno-container {
    top: calc(50% - 20vw);
    height: 40vw;
    width: 66vh;
    margin-left: calc(50% - 33vh);
    opacity: 0.7;
  }

  .tablet .mobile.BETCLOSE .panno-container {
    top: calc(50% - 25vw);
  }

  .mobile .panno-container {
    z-index: 2;
    transform: rotate(90deg);
  }

  .mobile .panno-container.ovaleOn #fiche,
  .mobile .panno-container.ovaleOn #panno,
  .mobile .panno-container.ovaleOn #pda,
  .mobile .panno-container.ovaleOn #snap {
    transform: scale3D(0.5, 0.5, 0.5) translate(0, -60%);
  }
}

.mobile .panno-container.ovaleOn #ovale,
.mobile .panno-container.ovaleOn #ovalesnap {
  transform: scale3D(0.8, 0.8, 0.8) translate(0, 30%);
}

.mobile #mlc-video-div.videoRL-zoom,
.mobile #mlc-video-tag.videoRL-zoom {
  position: absolute;
  width: 250% !important;
  height: 250% !important;
  left: -13% !important;
  top: -140% !important;
}

.RL_OLY01 .mobile #mlc-video-div.videoRL-zoom,
.RL_OLY01 .mobile #mlc-video-tag.videoRL-zoom {
  width: 100% !important;
  height: 100% !important;
  left: 0 !important;
  top: 0 !important;
}

@media screen and (orientation: portrait) {

  .mobile .panno-container.ovaleOn #ovale,
  .mobile .panno-container.ovaleOn #ovalesnap {
    transform: scale3D(1, 1, 1) translate(0, 20%);
  }

  .mobile .panno-container.ovaleOn #ovale .txtOvalePortrait,
  .mobile .panno-container.ovaleOn #ovalesnap .txtOvalePortrait {
    display: block !important;
  }

  .mobile .panno-container.ovaleOn #ovale .txtOvaleLandscape,
  .mobile .panno-container.ovaleOn #ovalesnap .txtOvaleLandscape {
    display: none;
  }

  .mobile #mlc-video-div.videoRL-zoom,
  .mobile #mlc-video-tag.videoRL-zoom {
    width: 300% !important;
    height: 300% !important;
    left: -30% !important;
    top: -156% !important;
  }

  .RL_OLY01 .mobile #mlc-video-div.videoRL-zoom,
  .RL_OLY01 .mobile #mlc-video-tag.videoRL-zoom {
    width: 100% !important;
    height: 100% !important;
    left: 4% !important;
    top: -34% !important;
  }
}

.SRMR01 .mobile #mlc-video-div.videoRL-zoom,
.SRMR01 .mobile #mlc-video-tag.videoRL-zoom,
.SRMR02 .mobile #mlc-video-div.videoRL-zoom,
.SRMR02 .mobile #mlc-video-tag.videoRL-zoom {
  width: 100% !important;
  height: 100% !important;
  left: 0 !important;
  top: 0 !important;
}

@media screen and (orientation: portrait) {

  .SRMR01 .mobile #mlc-video-div.videoRL-zoom,
  .SRMR01 .mobile #mlc-video-tag.videoRL-zoom,
  .SRMR02 .mobile #mlc-video-div.videoRL-zoom,
  .SRMR02 .mobile #mlc-video-tag.videoRL-zoom {
    width: 112% !important;
    height: 112% !important;
    left: 0 !important;
    top: -40% !important;
  }
}

.HITR01 .mobile #mlc-video-div.videoRL-zoom,
.HITR01 .mobile #mlc-video-tag.videoRL-zoom {
  width: 100% !important;
  height: 50% !important;
  left: 0 !important;
  top: 0 !important;
}

@media screen and (orientation: portrait) {

  .HITR01 .mobile #mlc-video-div.videoRL-zoom,
  .HITR01 .mobile #mlc-video-tag.videoRL-zoom {
    width: 100% !important;
    height: 24% !important;
    left: 0 !important;
    top: 0 !important;
  }
}

.RL_AUTO1 .mobile #mlc-video-div.videoRL-zoom,
.RL_AUTO1 .mobile #mlc-video-tag.videoRL-zoom {
  width: 94% !important;
  height: 100% !important;
  left: 0 !important;
  top: -20% !important;
}

@media screen and (orientation: portrait) {

  .RL_AUTO1 .mobile #mlc-video-div.videoRL-zoom,
  .RL_AUTO1 .mobile #mlc-video-tag.videoRL-zoom {
    width: 100% !important;
    height: 100% !important;
    left: 0 !important;
    top: -36% !important;
  }
}

.RL_GREEN .mobile #mlc-video-div.videoRL-zoom,
.RL_GREEN .mobile #mlc-video-tag.videoRL-zoom {
  width: 250% !important;
  height: 250% !important;
  left: -16% !important;
  top: -140% !important;
}

.mobile #mlc-video-div.videoRL-santino,
.mobile #mlc-video-tag.videoRL-santino {
  position: absolute;
  width: 37% !important;
  height: 37% !important;
  left: 0 !important;
  top: -11% !important;
}

@media screen and (orientation: portrait) {

  .RL_GREEN .mobile #mlc-video-div.videoRL-zoom,
  .RL_GREEN .mobile #mlc-video-tag.videoRL-zoom {
    width: 250% !important;
    height: 250% !important;
    left: -14% !important;
    top: -128% !important;
  }

  .mobile #mlc-video-div.videoRL-santino,
  .mobile #mlc-video-tag.videoRL-santino {
    width: 120% !important;
    height: 34% !important;
    left: -16% !important;
    top: -6% !important;
  }
}

.RL_AUTO1 .mobile #mlc-video-div.videoRL-santino,
.RL_AUTO1 .mobile #mlc-video-tag.videoRL-santino {
  width: 25% !important;
  height: 48% !important;
  left: 0 !important;
  top: -12% !important;
}

@media screen and (orientation: portrait) {

  .RL_AUTO1 .mobile #mlc-video-div.videoRL-santino,
  .RL_AUTO1 .mobile #mlc-video-tag.videoRL-santino {
    width: 100% !important;
    height: 100% !important;
    left: 0 !important;
    top: -36% !important;
  }

  .RL_OLY01 .mobile #mlc-video-div.videoRL-santino,
  .RL_OLY01 .mobile #mlc-video-tag.videoRL-santino {
    width: 100% !important;
    height: 100% !important;
    left: 3% !important;
    top: -41% !important;
  }

  .HITR01 .mobile #mlc-video-div.videoRL-santino,
  .HITR01 .mobile #mlc-video-tag.videoRL-santino {
    width: 100% !important;
    height: 100% !important;
    left: 0 !important;
    top: -51% !important;
  }

  .SRMR01 .mobile #mlc-video-div.videoRL-santino,
  .SRMR01 .mobile #mlc-video-tag.videoRL-santino,
  .SRMR02 .mobile #mlc-video-div.videoRL-santino,
  .SRMR02 .mobile #mlc-video-tag.videoRL-santino {
    width: 100% !important;
    height: 100% !important;
    left: 0 !important;
    top: -42% !important;
  }

  .RL_GREEN .mobile #mlc-video-div.videoRL-santino,
  .RL_GREEN .mobile #mlc-video-tag.videoRL-santino {
    width: 120% !important;
    height: 120% !important;
    left: -5% !important;
    top: -52% !important;
  }
}

.panno-container .fiche1-color {
  fill: #317323;
}

.panno-container .fiche1-color3D {
  fill: #275c1b;
}

.panno-container .fiche2-color {
  fill: #78a441;
}

.panno-container .fiche2-color3D {
  fill: #658b36;
}

.panno-container .fiche3-color {
  fill: #e5c900;
}

.panno-container .fiche3-color3D {
  fill: #bfab00;
}

.panno-container .fiche4-color {
  fill: #ff6d2d;
}

.panno-container .fiche4-color3D {
  fill: #e65e2c;
}

.panno-container .fiche5-color {
  fill: #c71f21;
}

.panno-container .fiche5-color3D {
  fill: #a3191b;
}

.panno-container .fiche6-color {
  fill: #7720c8;
}

.panno-container .fiche6-color3D {
  fill: #631aa8;
}

.panno-container .fiche7-color {
  fill: #3560b0;
}

.panno-container .fiche7-color3D {
  fill: #274988;
}

.panno-container .fiche-color-pda1 {
  fill: #999;
}

.panno-container .fiche-color-pda2 {
  fill: #666;
}

.panno-container .fiche-color-pda3 {
  fill: #333;
}

.panno-container .fiches-text {
  fill: #fff;
}

.panno-container .red {
  fill: #c00;
  stroke: #fff;
  stroke-width: 2;
}

.panno-container .black {
  fill: #000;
  stroke: #fff;
  stroke-width: 2;
}

.panno-container .green {
  fill: #390;
  stroke: #fff;
  stroke-width: 2;
}

.panno-container .gold {
  stroke: #c90;
  stroke-width: 10px;
}

.panno-container .silver {
  stroke: #666;
  stroke-width: 10px;
}

.panno-container .bronze {
  stroke: #630;
  stroke-width: 10px;
}

.panno-container .transparent {
  fill: #333;
  stroke: #fff;
  stroke-width: 2;
}

.panno-container .red {
  fill: #c00;
  stroke: #fff;
  stroke-width: 2;
}

.panno-container .black {
  fill: #000;
  stroke: #fff;
  stroke-width: 2;
}

.panno-container .green {
  fill: #390;
  stroke: #fff;
  stroke-width: 2;
}

.panno-container .white-red {
  fill: rgb(245, 147, 147);
  stroke: #fff;
  stroke-width: 2;
}

.panno-container .white-black {
  fill: rgb(182, 180, 180);
  stroke: #fff;
  stroke-width: 2;
}

.panno-container .white-green {
  fill: rgb(185, 235, 160);
  stroke: #fff;
  stroke-width: 2;
}

.panno-container .fondo-ovale {
  fill: #333;
  fill-opacity: 0.6;
  stroke: #fff;
  stroke-width: 2;
}

.panno-container .transparent {
  fill: #333;
  stroke: #fff;
  stroke-width: 2;
}

.panno-container .gold {
  stroke: #c90;
  stroke-width: 10px;
}

.panno-container .silver {
  stroke: #666;
  stroke-width: 10px;
}

.panno-container .bronze {
  stroke: #630;
  stroke-width: 10px;
}

@-webkit-keyframes pulseWin-redbox {

  0%,
  100% {
    fill: #c90;
  }

  50% {
    fill: #c00;
  }
}

@keyframes pulseWin-redbox {

  0%,
  100% {
    fill: #c90;
  }

  50% {
    fill: #c00;
  }
}

@-webkit-keyframes pulseWin-blackbox {

  0%,
  100% {
    fill: #c90;
  }

  50% {
    fill: #000;
  }
}

@keyframes pulseWin-blackbox {

  0%,
  100% {
    fill: #c90;
  }

  50% {
    fill: #000;
  }
}

@-webkit-keyframes pulseWin-greenbox {

  0%,
  100% {
    fill: #c90;
  }

  50% {
    fill: #390;
  }
}

@keyframes pulseWin-greenbox {

  0%,
  100% {
    fill: #c90;
  }

  50% {
    fill: #390;
  }
}

@-webkit-keyframes pulseWin-otherbox {

  0%,
  100% {
    fill: #666;
  }

  50% {
    fill: #333;
  }
}

@keyframes pulseWin-otherbox {

  0%,
  100% {
    fill: #666;
  }

  50% {
    fill: #333;
  }
}

@-webkit-keyframes jpGold {

  0%,
  100% {
    fill: #fff;
    font-weight: 700;
    text-shadow: 0 0 50px #000;
  }

  50% {
    fill: #c90;
    font-weight: 500;
    text-shadow: 0 0 50px #000;
  }
}

@keyframes jpGold {

  0%,
  100% {
    fill: #fff;
    font-weight: 700;
    text-shadow: 0 0 50px #000;
  }

  50% {
    fill: #c90;
    font-weight: 500;
    text-shadow: 0 0 50px #000;
  }
}

@-webkit-keyframes jpSilver {

  0%,
  100% {
    fill: #fff;
    font-weight: 700;
    text-shadow: 0 0 50px #000;
  }

  50% {
    fill: #666;
    font-weight: 500;
    text-shadow: 0 0 50px #000;
  }
}

@keyframes jpSilver {

  0%,
  100% {
    fill: #fff;
    font-weight: 700;
    text-shadow: 0 0 50px #000;
  }

  50% {
    fill: #666;
    font-weight: 500;
    text-shadow: 0 0 50px #000;
  }
}

@-webkit-keyframes jpBronze {

  0%,
  100% {
    fill: #fff;
    font-weight: 700;
    text-shadow: 0 0 50px #000;
  }

  50% {
    fill: #630;
    font-weight: 500;
    text-shadow: 0 0 50px #000;
  }
}

@keyframes jpBronze {

  0%,
  100% {
    fill: #fff;
    font-weight: 700;
    text-shadow: 0 0 50px #000;
  }

  50% {
    fill: #630;
    font-weight: 500;
    text-shadow: 0 0 50px #000;
  }
}

.pulseWinBox {
  -webkit-animation-duration: 2s;
  animation-duration: 2s;
  -webkit-animation-fill-mode: both;
  animation-fill-mode: both;
  -webkit-animation-iteration-count: infinite;
  animation-iteration-count: infinite;
}

.pulseWinBox.redBox {
  -webkit-animation-name: pulseWin-redbox;
  animation-name: pulseWin-redbox;
}

.pulseWinBox.blackBox {
  -webkit-animation-name: pulseWin-blackbox;
  animation-name: pulseWin-blackbox;
}

.pulseWinBox.greenBox {
  -webkit-animation-name: pulseWin-greenbox;
  animation-name: pulseWin-greenbox;
}

.pulseWinBox.otherBox {
  -webkit-animation-name: pulseWin-otherbox;
  animation-name: pulseWin-otherbox;
}

.pulseWinNum {
  -webkit-animation-duration: 2s;
  animation-duration: 2s;
  -webkit-animation-fill-mode: both;
  animation-fill-mode: both;
  -webkit-animation-iteration-count: infinite;
  animation-iteration-count: infinite;
}

.pulseWinNum.jpGold {
  -webkit-animation-name: jpGold;
  animation-name: jpGold;
}

.pulseWinNum.jpSilver {
  -webkit-animation-name: jpSilver;
  animation-name: jpSilver;
}

.pulseWinNum.jpBronze {
  -webkit-animation-name: jpBronze;
  animation-name: jpBronze;
}

.btn-ovale {
  /*background-image: url(/roulette-module/html5/roulette_new/assets/img/ico/ovale.svg);*/
  pointer-events: visible;
  position: absolute;
  z-index: 13;
}

.desktop .btn-ovale {
  width: 3.5vh;
  height: 3.5vh;
  border-width: 0.2vh;
  bottom: 18%;
  margin-top: 0;
  transform: perspective(100em) rotateX(25deg);
}

@media (min-height: 56.25vw) and (max-width: 177.8vh) {
  .desktop .btn-ovale {
    border-width: 0.1vw;
    width: 2vw;
    height: 2vw;
  }
}

.desktop.roulette-left .btn-ovale {
  right: 0.8%;
  margin-right: 0;
}

.desktop.roulette-right .btn-ovale {
  left: 5%;
  margin-left: 0;
}

.mobile .btn-ovale {
  width: 10vh;
  height: 10vh;
  right: 0;
  bottom: 11%;
  margin-top: 0;
  margin-right: 1.75vw;
}

@media (min-height: 56.25vw) and (max-width: 177.8vh) {
  .mobile .btn-ovale {
    width: 6vw;
    height: 6vw;
  }
}

@media screen and (orientation: portrait) {
  .mobile .btn-ovale {
    bottom: 8%;
    width: 10vw;
    height: 10vw;
  }
}

.btn-pda {
  width: 3.5vh;
  height: 3.5vh;
  position: absolute;
  bottom: 18%;
  right: 56.5%;
  margin-right: 0;
  margin-top: 0;
  /*background-image: url(/roulette-module/html5/roulette_new/assets/img/ico/pda.svg);*/
  background-size: 70%;
  border-width: 0.2vh;
  pointer-events: visible;
  z-index: 13;
}

.btn-pda.active {
  background-color: #c90;
  box-shadow: 0 0 12px #c90;
}

@media (min-height: 56.25vw) and (max-width: 177.8vh) {
  .desktop.roulette-left .btn-pda {
    margin-right: 0;
    right: 56.5%;
  }

  .desktop.roulette-right .btn-pda {
    margin-left: 0;
    left: 56.5%;
  }

  .desktop .btn-pda {
    width: 2vw;
    height: 2vw;
    border-width: 0.1vw;
    margin-right: 0;
    transform: perspective(100em) rotateX(25deg);
  }
}

#tooltip {
  position: absolute;
  color: #fff;
  background-color: rgba(0, 0, 0, 0.8);
  font-size: 2vh;
  border-radius: 1vh;
  z-index: 99999999;
  box-sizing: border-box;
  box-shadow: 0 1px 8px rgba(0, 0, 0, 0.5);
  pointer-events: none;
  display: none;
}

#tooltip i {
  position: absolute;
  top: 100%;
  left: 50%;
  margin-left: -12px;
  width: 24px;
  height: 12px;
  overflow: hidden;
}

#tooltip i::after {
  content: "";
  position: absolute;
  width: 12px;
  height: 12px;
  left: 50%;
  transform: translate(-50%, -50%) rotate(45deg);
  background-color: rgba(0, 0, 0, 0.5);
  box-shadow: 0 1px 8px rgba(0, 0, 0, 0.5);
}

#tooltip .tooltip-title {
  border-radius: 1vh 1vh 0 0;
  padding: 0.8vh;
}

#tooltip .tooltip-title h3 {
  margin: 0;
}

#tooltip .tooltip-title.red {
  background: #c00;
}

#tooltip .tooltip-title.black {
  background: #000;
}

#tooltip .tooltip-title.zero {
  background: #390;
}

#tooltip .tooltip-body {
  padding: 1vh;
}

#tooltip .tooltip-body p {
  margin: 1vh 0;
}

#tooltip .tooltip-body .tooltip-numplayers {
  font-style: italic;
  font-weight: 100;
  font-size: 1.5vh;
}

#tooltip .tooltip-body .tooltip-betammount {
  font-weight: 800;
}

.BETCLOSE #tooltip {
  display: none !important;
}

@media (min-height: 56.25vw) and (max-width: 177.8vh) {
  #tooltip {
    font-size: 1.14vw;
    border-radius: 0.57vw;
  }

  #tooltip .tooltip-title {
    border-radius: 0.57vw 0.57vw 0 0;
    padding: 0.46vw;
  }

  #tooltip .tooltip-body {
    padding: 0.57vw;
  }

  #tooltip .tooltip-body p {
    margin: 0.57vw 0;
  }

  #tooltip .tooltip-body .tooltip-numplayers {
    font-size: 0.85vw;
  }
}

.desktop.roulette-left .panno-container #fiche,
.desktop.roulette-left .panno-container #panno,
.desktop.roulette-left .panno-container #pda,
.desktop.roulette-left .panno-container #snap {
  left: 40%;
  width: 58%;
  height: auto;
  bottom: 12%;
}

.RL_GREEN .desktop.roulette-left .panno-container #fiche,
.RL_GREEN .desktop.roulette-left .panno-container #panno,
.RL_GREEN .desktop.roulette-left .panno-container #pda,
.RL_GREEN .desktop.roulette-left .panno-container #snap {
  left: 42%;
  width: 55%;
  height: auto;
  bottom: 12%;
}

.desktop.roulette-left .panno-container #ovale,
.desktop.roulette-left .panno-container #ovalesnap {
  width: 34%;
  left: 53%;
  height: auto;
  bottom: 11%;
}

.desktop.roulette-left .panno-container #ovale #drawOvale,
.desktop.roulette-left .panno-container #ovale #drawOvalesnap,
.desktop.roulette-left .panno-container #ovalesnap #drawOvale,
.desktop.roulette-left .panno-container #ovalesnap #drawOvalesnap {
  transform-origin: -10% center !important;
  transform: perspective(100em) rotateX(43deg) !important;
}

.desktop.roulette-right .panno-container #fiche,
.desktop.roulette-right .panno-container #panno,
.desktop.roulette-right .panno-container #pda,
.desktop.roulette-right .panno-container #snap {
  right: 41%;
  width: 50%;
  height: auto;
  bottom: 9.7%;
}

.desktop .panno-container {
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center bottom;
  width: 100%;
  height: 100%;
}

.RL_GREEN .desktop #mlc-video-div,
.RL_GREEN .desktop #mlc-video-tag,
.RL_TRAIN01 .desktop #mlc-video-div,
.RL_TRAIN01 .desktop #mlc-video-tag {
  position: absolute;
  top: -7%;
}

.jackpot-result {
  width: 60%;
  height: 35%;
  position: absolute;
  margin-left: 20%;
}

.jackpot-result .jackpot-box {
  position: relative;
  font-size: 4vh;
  font-weight: 600;
  text-align: center;
  text-transform: uppercase;
}

.jackpot-result .jackpot-box .gold {
  width: 40%;
  margin-left: 30%;
  background-color: #c90;
  border: 3px solid #ffbf00;
  border-radius: 4em;
}

.jackpot-result .jackpot-box .silver {
  width: 40%;
  margin-left: 30%;
  background-color: #666;
  border: 3px solid grey;
  border-radius: 4em;
}

.jackpot-result .jackpot-box .bronze {
  margin-left: 30%;
  width: 40%;
  background-color: #630;
  border: 3px solid #994d00;
  border-radius: 4em;
}

.jackpot-result .jackpot-box .jackpot-result-logo {
  position: relative;
  width: 100%;
  height: 10vh;
  /*background-image: url(/roulette-module/html5/roulette_new/assets/img/ico/jpTitleTot.svg);*/
  background-repeat: no-repeat;
  background-position: center center;
}

.jackpot-result .jackpot-box .jackpot-result-win {
  position: relative;
  width: 100%;
  margin-top: -2%;
  font-size: 7vh;
  font-weight: 100;
  text-shadow: #000 0 0 1em;
}

@media (min-height: 56.25vw) and (max-width: 177.8vh) {
  .jackpot-result .jackpot-box {
    font-size: 2.28vw;
  }

  .jackpot-result .jackpot-box .jackpot-result-logo {
    height: 5.7vw;
  }

  .jackpot-result .jackpot-box .jackpot-result-win {
    font-size: 4vw;
  }
}

.roulette-left #sidepanel {
  right: 0;
}

.roulette-left #sidepanel .sidepanel-menu {
  left: 0;
}

.roulette-left #sidepanel .sidepanel-content {
  right: 0;
  background-color: rgba(0, 0, 0, 0.5);
  border-radius: 4vh 0 0 4vh;
}

@media (min-height: 56.25vw) and (max-width: 177.8vh) {
  .roulette-left #sidepanel .sidepanel-content {
    border-radius: 2.3vw 0 0 2.3vw;
  }
}

.roulette-right #sidepanel {
  left: 0;
}

.roulette-right #sidepanel .sidepanel-menu {
  right: 0;
}

.roulette-right #sidepanel .sidepanel-content {
  left: 0;
  background-color: rgba(0, 0, 0, 0.5);
  border-radius: 0 4vh 4vh 0;
}

#sidepanel {
  position: absolute;
  top: 0;
  height: 50%;
  width: 48%;
}

#sidepanel .sidepanel-menu {
  width: 15%;
  height: 100%;
  position: absolute;
  top: 0;
  margin-top: 1vh;
  margin-left: 1vh;
  z-index: 1;
}

#sidepanel .sidepanel-menu .mlc-btn {
  height: 6vh;
  width: 6vh;
  margin: 0.5vh;
}

@media (min-height: 56.25vw) and (max-width: 177.8vh) {
  .roulette-right #sidepanel .sidepanel-content {
    border-radius: 0 2.3vw 2.3vw 0;
  }

  #sidepanel .sidepanel-menu {
    margin-top: 0.6vw;
    margin-left: 0.6vw;
  }

  #sidepanel .sidepanel-menu .mlc-btn {
    height: 3.4vw;
    width: 3.4vw;
    margin: 0.3vw;
  }
}

/*#sidepanel .sidepanel-menu .mlc-btn.btn-chat {*/
/*  background-image: url(/roulette-module/html5/roulette_new/assets/img/ico/chat.svg)*/
/*}*/

/*#sidepanel .sidepanel-menu .mlc-btn.btn-statistic {*/
/*  background-image: url(/roulette-module/html5/roulette_new/assets/img/ico/stat.svg)*/
/*}*/

/*#sidepanel .sidepanel-menu .mlc-btn.btn-winner-bet {*/
/*  background-image: url(/roulette-module/html5/roulette_new/assets/img/ico/winner-bet.svg);*/
/*  background-size: 50%*/
/*}*/

/*#sidepanel .sidepanel-menu .mlc-btn.btn-live-stat {*/
/*  background-image: url(/roulette-module/html5/roulette_new/assets/img/ico/live-stat.svg);*/
/*  background-size: 55%*/
/*}*/

/*#sidepanel .sidepanel-menu .mlc-btn.btn-jackpot {*/
/*  background-image: url(/roulette-module/html5/roulette_new/assets/img/ico/JP.svg)*/
/*}*/

#sidepanel .sidepanel-menu .mlc-btn.active {
  background-color: #c90;
  box-shadow: 0 0 12px #c90;
}

#sidepanel .sidepanel-menu .mlc-btn.privata {
  background-color: #c80000;
}

#sidepanel .sidepanel-content {
  height: 100%;
  width: 86%;
  position: absolute;
  top: 0;
}

@-webkit-keyframes InRight {
  from {
    transform: translate3d(86%, 0, 0);
  }

  to {
    transform: translate3d(0, 0, 0);
  }
}

@keyframes InRight {
  from {
    transform: translate3d(86%, 0, 0);
  }

  to {
    transform: translate3d(0, 0, 0);
  }
}

.InRight {
  -webkit-animation-name: InRight;
  animation-name: InRight;
}

@-webkit-keyframes InLeft {
  from {
    transform: translate3d(86%, 0, 0);
  }

  to {
    transform: translate3d(0, 0, 0);
  }
}

@keyframes InLeft {
  from {
    transform: translate3d(-86%, 0, 0);
  }

  to {
    transform: translate3d(0, 0, 0);
  }
}

.InLeft {
  -webkit-animation-name: InLeft;
  animation-name: InLeft;
}

@-webkit-keyframes OutRight {
  from {
    transform: translate3d(0, 0, 0);
  }

  to {
    transform: translate3d(86%, 0, 0);
  }
}

@keyframes OutRight {
  from {
    transform: translate3d(0, 0, 0);
  }

  to {
    transform: translate3d(86%, 0, 0);
  }
}

.OutRight {
  -webkit-animation-name: OutRight;
  animation-name: OutRight;
}

@-webkit-keyframes OutLeft {
  from {
    transform: translate3d(0, 0, 0);
  }

  to {
    transform: translate3d(86%, 0, 0);
  }
}

@keyframes OutLeft {
  from {
    transform: translate3d(0, 0, 0);
  }

  to {
    transform: translate3d(-86%, 0, 0);
  }
}

.OutLeft {
  -webkit-animation-name: OutLeft;
  animation-name: OutLeft;
}

.new-msg {
  border-color: #ffc800;
  box-shadow: 0 0 20px 3px #ffc800;
  -webkit-animation: 1s infinite newmsg;
  animation: 1s infinite newmsg;
}

.limits-list {
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  background: bottom right/cover no-repeat #000;
  display: block;
  pointer-events: visible;
}

.limits-list .logo {
  /*background-image: url(/roulette-module/html5/roulette_new/assets/img/general/logo.svg);*/
  background-repeat: no-repeat;
  background-size: contain;
  width: 8%;
  height: 7%;
  position: absolute;
  right: 4vw;
  left: 54%;
  bottom: 0;
}

.limits-list h2 {
  font-size: 1.5em;
  color: #fff;
  line-height: 1.2;
  padding-left: 2%;
}

.limits-list h2 i {
  color: #c00;
}

.limits-list h2 span {
  border-left: 2px solid #666;
  font-size: 1.4em;
  padding-left: 0.3em;
  margin-left: 0.2em;
}

.limits-list .limits {
  height: 70%;
  display: grid;
  grid-template-columns: 25% 25% 25% 25%;
  padding-right: 10%;
  padding-left: 2%;
  margin-top: 5%;
}

@media screen and (orientation: portrait) {
  .mobile .limits-list .logo {
    width: 20%;
    height: 5%;
    left: unset;
    right: 5%;
  }

  .mobile .limits-list h2 {
    font-size: 1em;
  }

  .mobile .limits-list .limits {
    height: 80%;
    grid-template-columns: 50% 50%;
  }
}

.limits-list .limits .limit-element {
  width: 26vh;
  height: 26vh;
  margin: 5px;
  border: 0.6vh solid #c90;
  border-radius: 50%;
  transition: 0.6s;
  align-self: center;
  justify-self: left;
  text-transform: uppercase;
  position: relative;
  cursor: pointer;
}

@media screen and (orientation: portrait) {
  .mobile .limits-list .limits .limit-element {
    width: 25vw;
    height: 25vw;
    border: 0.6vw solid #c90;
  }

  .mobile .limits-list .limits .limit-element .ico-roulette {
    width: 14vw;
    height: 8vw;
  }
}

.limits-list .limits .limit-element:focus,
.limits-list .limits .limit-element:hover {
  background: rgba(204, 153, 0, 0.1);
  -o-box-shadow: 0 0 1.5em 0 #c90;
  box-shadow: 0 0 1.5em 0 #c90;
}

.limits-list .limits .limit-element:active {
  transform: scale(0.9);
  -o-box-shadow: 0 0 1.5em 0 #c90;
  box-shadow: 0 0 1.5em 0 #c90;
  opacity: 0.8;
}

.limits-list .limits .limit-element .ico-roulette {
  width: 13vh;
  height: 8vh;
  position: absolute;
  top: 10%;
  right: -30%;
  display: block;
  /*background-image: url(/roulette-module/html5/roulette_new/assets/img/general/ico_roulette.png);*/
  background-repeat: no-repeat;
  background-size: contain;
}

@media (min-height: 56.25vw) and (max-width: 177.8vh) {
  .limits-list .limits .limit-element {
    width: 14.3vw;
    height: 14.3vw;
    border: 0.3vw solid #c90;
  }

  .limits-list .limits .limit-element .ico-roulette {
    width: 7.7vw;
    height: 4.4vw;
  }
}

.limits-list .limits .limit-element .currency {
  width: 5vh;
  height: 5vh;
  background: #333;
  color: #fff;
  font-size: 1.6vh;
  font-weight: 100;
  text-align: center;
  border-radius: 50%;
  position: absolute;
  line-height: 3.1;
  right: -13%;
  top: 34%;
}

@media (min-height: 56.25vw) and (max-width: 177.8vh) {
  .limits-list .limits .limit-element .currency {
    width: 3.4vw;
    height: 3.4vw;
    font-size: 1.2vw;
  }
}

.limits-list .limits .limit-element .table {
  font-weight: 100;
  margin-bottom: 0.3vh;
  margin-top: 4vh;
  width: 65%;
  text-align: right;
  font-size: 2.5vh;
}

.limits-list .limits .limit-element .table span {
  font-size: 4.2vh;
  font-weight: 300;
}

@media (min-height: 56.25vw) and (max-width: 177.8vh) {
  .limits-list .limits .limit-element .table {
    font-size: 1.37vw;
    margin-top: 2.4vw;
    margin-bottom: 0.15vw;
  }

  .limits-list .limits .limit-element .table span {
    font-size: 2.3vw;
  }
}

.limits-list .limits .limit-element .subtitle {
  font-weight: 100;
  font-size: 2.5vh;
  width: 65%;
  text-align: right;
  margin: 0 0 0.6vh;
  color: rgba(255, 255, 255, 0.6);
}

@media (min-height: 56.25vw) and (max-width: 177.8vh) {
  .limits-list .limits .limit-element .subtitle {
    font-size: 1.37vw;
  }
}

.limits-list .limits .limit-element .values {
  font-size: 4.4vh;
  margin: 1.8vh 0;
  text-align: center;
}

@media (min-height: 56.25vw) and (max-width: 177.8vh) {
  .limits-list .limits .limit-element .values {
    font-size: 2vw;
    margin: 1vw 0;
  }
}

@media screen and (orientation: portrait) {
  .mobile .limits-list .limits .limit-element .currency {
    width: 6vw;
    height: 6vw;
    font-size: 2vw;
  }

  .mobile .limits-list .limits .limit-element .table {
    font-size: 2vw;
    margin-top: 3vw;
    margin-bottom: 0.3vw;
  }

  .mobile .limits-list .limits .limit-element .table span {
    font-size: 4.5vw;
  }

  .mobile .limits-list .limits .limit-element .subtitle {
    font-size: 2vw;
  }

  .mobile .limits-list .limits .limit-element .values {
    font-size: 4vw;
    margin: 2vw 0;
  }
}

.limits-list .limits .limit-element .values i {
  color: rgba(255, 255, 255, 0.5);
  font-weight: 100;
}

.swipeToPlay {
  width: 100%;
  height: 110%;
  background-color: rgba(0, 0, 0, 0.8);
  z-index: 999;
  position: absolute;
  top: 0;
  left: 0;
  text-align: center;
  pointer-events: visible;
}

.swipeToPlay.no-ios {
  background-image: url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAxMTkuNjQgOTIuNTYiPjx0aXRsZT50YXA8L3RpdGxlPjxnIGlkPSJMaXZlbGxvXzIiIGRhdGEtbmFtZT0iTGl2ZWxsbyAyIj48ZyBpZD0iTGl2ZWxsb18xLTIiIGRhdGEtbmFtZT0iTGl2ZWxsbyAxIj48ZyBpZD0iTGl2ZWxsb18xLTMiIGRhdGEtbmFtZT0iTGl2ZWxsbyAxIj48ZyBpZD0idGFwIj48cGF0aCBkPSJNMTA4LjUxLDQ3LjI2LDgzLDIyYTQuMTcsNC4xNywwLDAsMC01LjcsMCw0LjIzLDQuMjMsMCwwLDAtLjMsNS45bDcuNCw3LjQuMi4yYTIuMTIsMi4xMiwwLDEsMS0zLjEsMi45TDcxLjExLDI4YTQuMTcsNC4xNywwLDAsMC01LjksNS45bDEwLjUsMTAuNWEyLjEyLDIuMTIsMCwwLDEtMywzbC0xMy40LTEzLjVhNC4xNyw0LjE3LDAsMCwwLTUuOSw1LjlsMTMuNCwxMy40YTIuMTIsMi4xMiwwLDAsMS0zLDNMMzUuNTEsMjhhNC4xNyw0LjE3LDAsMCwwLTUuOSw1LjlsMzcuMiwzNy4zYTIuMTgsMi4xOCwwLDAsMSwuNS44LDIuMDUsMi4wNSwwLDAsMS0xLjMsMi42bC0xNS41LDUuMmE3LjIxLDcuMjEsMCwwLDAtMy4zLDIuMSwzLjg2LDMuODYsMCwwLDAtMS4xLDIuNyw0LDQsMCwwLDAsMy45LDMuOWwzOC41LjFhMjguNTUsMjguNTUsMCwwLDAsMjAuMS04LjNBMjMuNDUsMjMuNDUsMCwwLDAsMTA4LjUxLDQ3LjI2WiIgc3R5bGU9ImZpbGw6bm9uZSIvPjxwYXRoIGQ9Ik0xMTEuNjEsNDQuMTZsLTI1LjMtMjUuM2E4LjgyLDguODIsMCwwLDAtMTIuMS4xLDguMjUsOC4yNSwwLDAsMC0yLjMsNC4zLDguMjgsOC4yOCwwLDAsMC0xMS4yLDMuOSw0LjY5LDQuNjksMCwwLDAtLjYsMi4xLDguMjgsOC4yOCwwLDAsMC0xMS4yLDMuOWMtLjIuNS0uNCwxLS42LDEuNEwzOC43MSwyNWE4LjQyLDguNDIsMCwxLDAtMTIuMywxMS41bC40LjQsMzQuOCwzNC44LTEyLjMsNC4xYTEzLDEzLDAsMCwwLTQuOSwzLDguMDUsOC4wNSwwLDAsMCw1LjcsMTMuOGgzOC41YTMyLjc4LDMyLjc4LDAsMCwwLDIzLjEtOS41QTI3LjY3LDI3LjY3LDAsMCwwLDExMS42MSw0NC4xNlptLTMuMSwzNS45YTI4LjU1LDI4LjU1LDAsMCwxLTIwLjEsOC4zbC0zOC41LS4xYTQsNCwwLDAsMS0zLjktMy45LDMuODYsMy44NiwwLDAsMSwxLjEtMi43LDEwLjMyLDEwLjMyLDAsMCwxLDMuMy0yLjFsMTUuNS01LjJhMiwyLDAsMCwwLDEuMy0yLjYsMi4xOCwyLjE4LDAsMCwwLS41LS44bC0zNy4xLTM3LjFhNC4xNyw0LjE3LDAsMCwxLDUuOS01LjlsMjguMywyOC4yYTIuMTIsMi4xMiwwLDAsMCwzLTNsLTEzLjUtMTMuNGE0LjE3LDQuMTcsMCwwLDEsNS45LTUuOWwxMy40LDEzLjRhMi4xMiwyLjEyLDAsMCwwLDMtM2wtMTAuNC0xMC40YTQuMTcsNC4xNywwLDAsMSw1LjktNS45bDEwLjUsMTAuNWEyLjEyLDIuMTIsMCwxLDAsMy4xLTIuOWwtLjItLjJMNzcuMTEsMjhhNC4yMSw0LjIxLDAsMCwxLDYtNS45bDI1LjUsMjUuMkEyMy4yMSwyMy4yMSwwLDAsMSwxMDguNTEsODAuMDZaIiBzdHlsZT0iZmlsbDojZmZmIi8+PHBhdGggZD0iTTU4LDE3YTMwLjYzLDMwLjYzLDAsMCwwLTU0LjUtLjc4aDBsLS40Ljc3aDBBMzAuNjQsMzAuNjQsMCwwLDAsMzEsNjEuMTZjNi42NywwLDQuOTEtNi41OSwxLTYuMjZBMjQuNDksMjQuNDksMCwwLDEsNi4yMywzMS43NmEyNC4xMSwyNC4xMSwwLDAsMSw0LTE0Ljc4aDBhMjQuMDYsMjQuMDYsMCwwLDEsMTAuMy04LjYzQTI0LjQ5LDI0LjQ5LDAsMCwxLDUyLjkyLDIwLjgxQzU0LjM5LDI0LjQsNjEsMjMsNTgsMTdaIiBzdHlsZT0iZmlsbDojZmZmIi8+PC9nPjwvZz48L2c+PC9nPjwvc3ZnPg==);
  background-position: center;
  background-repeat: no-repeat;
  background-size: 20%;
}

.swipeToPlay.ios {
  background-image: url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAxMjIuMTIgOTguOTciPjx0aXRsZT5zd2lwZXVwPC90aXRsZT48ZyBpZD0iTGl2ZWxsb18yIiBkYXRhLW5hbWU9IkxpdmVsbG8gMiI+PGcgaWQ9IkxpdmVsbG9fMS0yIiBkYXRhLW5hbWU9IkxpdmVsbG8gMSI+PGcgaWQ9InN3aXBlX3VwIiBkYXRhLW5hbWU9InN3aXBlIHVwIj48cGF0aCBkPSJNNzYuNzMsMjUuNDNhOC42MSw4LjYxLDAsMCwwLTIuMzMsNC4zMiw4LjQsOC40LDAsMCwwLTExLjI0LDMuODgsNi43Niw2Ljc2LDAsMCwwLS42NCwyLjA2LDguNCw4LjQsMCwwLDAtMTEuMjQsMy44OGMtLjIxLjUtLjQzLDEtLjU3LDEuNDJMNDEuMSwzMS4zN0E4LjQxLDguNDEsMCwwLDAsMjguNzksNDIuODNsLjQzLjQyTDY0LDc4LDUxLjcsODIuMTRhMTIuNTQsMTIuNTQsMCwwLDAtNC44OCwzLDguMDgsOC4wOCwwLDAsMCwwLDExLjQ2QTguMjMsOC4yMywwLDAsMCw1Mi41NSw5OUg5MWEzMi43MSwzMi43MSwwLDAsMCwyMy4xMi05LjU0LDI3LjUsMjcuNSwwLDAsMCwwLTM4Ljc1TDg4LjgzLDI1LjM2YTguODcsOC44NywwLDAsMC0xMi4xLjA3Wk0xMTEsNTMuNzlhMjMuMjIsMjMuMjIsMCwwLDEsMCwzMi44MUEyOC41NywyOC41NywwLDAsMSw5MSw5NC45NGwtMzguNTQtLjA3QTMuOTMsMy45MywwLDAsMSw0OC41Miw5MWEzLjg2LDMuODYsMCwwLDEsMS4xMy0yLjY5QTguNTYsOC41NiwwLDAsMSw1Myw4Ni4yNGwxNS40OS01LjE2YTIuMTEsMi4xMSwwLDAsMCwxLjM0LTIuNjEsMi43OSwyLjc5LDAsMCwwLS40OS0uNzhMMzIsNDAuNDJBNC4yLDQuMiwwLDAsMSwzOCwzNC40OEw2Ni4yNyw2Mi43N2EyLDIsMCwwLDAsMywwaDBhMiwyLDAsMCwwLDAtM2gwTDU1LjgsNDYuMzZhNC4yLDQuMiwwLDEsMSw1Ljk0LTUuOTRoMEw3NS4xOCw1My44NmEyLDIsMCwwLDAsMywwaDBhMiwyLDAsMCwwLDAtM0w2Ny42OCw0MC40MmE0LjIsNC4yLDAsMCwxLDUuOTQtNS45NGgwTDg0LjA5LDQ1YTIuMSwyLjEsMCwxLDAsMy4xMS0yLjgzTDg3LDQxLjkxbC03LjQzLTcuNDNhNC4yNCw0LjI0LDAsMCwxLC4yOC01Ljk0LDQuMTYsNC4xNiwwLDAsMSw1LjY2LDBMMTExLDUzLjc5WiIgc3R5bGU9ImZpbGw6I2ZmZiIvPjxyZWN0IHg9IjcuMDciIHk9IjEyLjUyIiB3aWR0aD0iNy44OSIgaGVpZ2h0PSI1MS42NyIgcng9IjMuOTUiIHJ5PSIzLjk1IiBzdHlsZT0iZmlsbDojZmZmIi8+PHBhdGggZD0iTTIuNTcsMTguODksMTkuNDYsMTljMi4zMywwLDMuMjQtMS42MSwyLTMuNkwxMy4xMSwxLjQ5Yy0xLjIxLTItMy4xNy0yLTQuMzcsMEwuNTQsMTUuMTlDLS42OCwxNy4yNS4yNCwxOC44OCwyLjU3LDE4Ljg5WiIgc3R5bGU9ImZpbGw6I2ZmZiIvPjwvZz48L2c+PC9nPjwvc3ZnPg==);
  background-position: center;
  background-repeat: no-repeat;
  background-size: 20%;
}

.mat-menu-panel {
  min-width: 112px;
  max-width: 280px;
  overflow: auto;
  -webkit-overflow-scrolling: touch;
  max-height: calc(100vh - 48px);
  border-radius: 4px;
  outline: 0;
}

.mat-menu-panel.ng-animating {
  pointer-events: none;
}

@media (-ms-high-contrast: active) {
  .mat-menu-panel {
    outline: solid 1px;
  }
}

.mat-menu-content:not(:empty) {
  padding-top: 8px;
  padding-bottom: 8px;
}

.mat-menu-item {
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  cursor: pointer;
  outline: 0;
  border: none;
  -webkit-tap-highlight-color: transparent;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  display: block;
  line-height: 48px;
  height: 48px;
  padding: 0 16px;
  text-align: left;
  text-decoration: none;
  max-width: 100%;
  position: relative;
}

.mat-menu-item::-moz-focus-inner {
  border: 0;
}

.mat-menu-item[disabled] {
  cursor: default;
}

[dir="rtl"] .mat-menu-item {
  text-align: right;
}

.mat-menu-item .mat-icon {
  margin-right: 16px;
  vertical-align: middle;
}

.mat-menu-item .mat-icon svg {
  vertical-align: top;
}

[dir="rtl"] .mat-menu-item .mat-icon {
  margin-left: 16px;
  margin-right: 0;
}

@media (-ms-high-contrast: active) {

  .mat-menu-item-highlighted,
  .mat-menu-item.cdk-keyboard-focused,
  .mat-menu-item.cdk-program-focused {
    outline: dotted 1px;
  }
}

.mat-menu-item-submenu-trigger {
  padding-right: 32px;
}

.mat-menu-item-submenu-trigger::after {
  width: 0;
  height: 0;
  border-style: solid;
  border-width: 5px 0 5px 5px;
  border-color: transparent transparent transparent currentColor;
  content: "";
  display: inline-block;
  position: absolute;
  top: 50%;
  right: 16px;
  transform: translateY(-50%);
}

[dir="rtl"] .mat-menu-item-submenu-trigger {
  padding-right: 16px;
  padding-left: 32px;
}

[dir="rtl"] .mat-menu-item-submenu-trigger::after {
  right: auto;
  left: 16px;
  transform: rotateY(180deg) translateY(-50%);
}

button.mat-menu-item {
  width: 100%;
}

.mat-menu-item .mat-menu-ripple {
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: absolute;
  pointer-events: none;
}

#fiche1 .color {
  fill: #317323;
}

#fiche2 .color {
  fill: #78a441;
}

#fiche3 .color {
  fill: #e5c900;
}

#fiche4 .color {
  fill: #ff6d2d;
}

#fiche5 .color {
  fill: #c71f21;
}

#fiche6 .color {
  fill: #7720c8;
}

#fiche7 .color {
  fill: #3560b0;
}

.mat-dialog-container {
  display: block;
  padding: 24px;
  border-radius: 4px;
  box-sizing: border-box;
  overflow: auto;
  outline: 0;
  width: 100%;
  height: 100%;
  min-height: inherit;
  max-height: inherit;
}

@media (-ms-high-contrast: active) {
  .mat-dialog-container {
    outline: solid 1px;
  }
}

.mat-dialog-content {
  display: block;
  margin: 0 -24px;
  padding: 0 24px;
  max-height: 65vh;
  overflow: auto;
  -webkit-overflow-scrolling: touch;
}

.mat-dialog-title {
  margin: 0 0 20px;
  display: block;
}

.mat-dialog-actions {
  padding: 8px 0;
  display: flex;
  flex-wrap: wrap;
  min-height: 52px;
  align-items: center;
  margin-bottom: -24px;
}

.mat-dialog-actions[align="end"] {
  justify-content: flex-end;
}

.mat-dialog-actions[align="center"] {
  justify-content: center;
}

.mat-dialog-actions .mat-button+.mat-button,
.mat-dialog-actions .mat-button+.mat-raised-button,
.mat-dialog-actions .mat-raised-button+.mat-button,
.mat-dialog-actions .mat-raised-button+.mat-raised-button {
  margin-left: 8px;
}

[dir="rtl"] .mat-dialog-actions .mat-button+.mat-button,
[dir="rtl"] .mat-dialog-actions .mat-button+.mat-raised-button,
[dir="rtl"] .mat-dialog-actions .mat-raised-button+.mat-button,
[dir="rtl"] .mat-dialog-actions .mat-raised-button+.mat-raised-button {
  margin-left: 0;
  margin-right: 8px;
}

.message-dialog .mat-dialog-container {
  position: absolute;
  width: 60%;
  margin-left: 20%;
  height: auto;
  color: #fff;
  left: 0;
  margin-top: -49vh;
  font-family: Montserrat, sans-serif;
  background-color: rgba(0, 0, 0, 0.9);
  border-radius: 10px;
  box-shadow: 0 0 20px 2px rgba(0, 0, 0, 0.3);
  padding: 1.5%;
  overflow: hidden;
  vertical-align: middle;
  z-index: 99;
}

.message-dialog .mat-dialog-container .ico-message-dialog {
  width: 2em;
  height: 2em;
  display: inline-block;
  background-repeat: no-repeat;
  background-size: contain;
  background-position: center center;
  vertical-align: middle;
}

.message-dialog .mat-dialog-container p {
  width: 70%;
  display: inline-block;
  vertical-align: middle;
  padding: 0 0 0 3vh;
  margin: 0;
  font-size: 1em;
}

.message-dialog.dialog-error .mat-dialog-container {
  border: 2px solid #c80000;
}

/* .message-dialog.dialog-error .mat-dialog-container .ico-message-dialog {
  background-image: url(/roulette-module/html5/roulette_new/assets/img/ico/dialog-alert.svg)
} */

.message-dialog.dialog-info .mat-dialog-container {
  border: 2px solid #00aeef;
}

/* .message-dialog.dialog-info .mat-dialog-container .ico-message-dialog {
  background-image: url(/roulette-module/html5/roulette_new/assets/img/ico/dialog-info.svg)
} */

.message-dialog.dialog-info .mat-dialog-container .mat-dialog-actions {
  margin-right: 0.5em;
  float: right;
}

.message-dialog.dialog-info .mat-dialog-container .mat-dialog-actions button {
  background-color: transparent;
  font-size: 0.8em;
  padding: 0.7em 2em !important;
  color: #fff;
  font-weight: 700;
  border-radius: 4px;
  border: 2px solid #fff;
  cursor: pointer;
  transition: 0.5s;
  margin-bottom: 5px;
  outline: 0;
}

.message-dialog.dialog-info .mat-dialog-container .mat-dialog-actions button:active,
.message-dialog.dialog-info .mat-dialog-container .mat-dialog-actions button:focus,
.message-dialog.dialog-info .mat-dialog-container .mat-dialog-actions button:hover {
  border-color: #1dafec;
  color: #d7a024;
  background-color: #222;
}

.message-dialog.dialog-warning .mat-dialog-container {
  border: 2px solid #ff9000;
}

/* 
.message-dialog.dialog-warning .mat-dialog-container .ico-message-dialog {
  /*background-image: url(/roulette-module/html5/roulette_new/assets/img/ico/dialog-warn.svg)
} */

.message-dialog.dialog-exit .mat-dialog-container {
  width: 100%;
  height: 100%;
  margin-top: 0;
  margin-left: 0;
  top: 0;
}

.message-dialog.dialog-exit .mat-dialog-container .mat-dialog-content {
  margin-top: 35vh;
}

.message-dialog.dialog-exit .mat-dialog-container .mat-dialog-content p {
  width: 50%;
  font-size: 1.4em;
  font-weight: 700;
  text-align: left;
  margin-left: 38%;
  padding: 0;
}

@media screen and (orientation: portrait) {
  .mobile .message-dialog.dialog-exit .mat-dialog-container .mat-dialog-content p {
    width: 100%;
    text-align: center;
    margin-left: 0;
  }

  .mobile .message-dialog.dialog-exit .mat-dialog-container .mat-dialog-content .dealer-picture {
    width: 30%;
    padding-bottom: 30%;
    left: 35%;
    top: 20%;
  }
}

.message-dialog.dialog-exit .mat-dialog-container .mat-dialog-content .dealer-picture {
  display: block !important;
  width: 10%;
  height: auto;
  padding-bottom: 10%;
  background: #111;
  border: 5px solid #222;
  position: absolute;
  left: 25%;
  border-radius: 50%;
  top: 36%;
  overflow: hidden;
}

@media screen and (orientation: landscape) {
  .mobile .message-dialog.dialog-exit .mat-dialog-container .mat-dialog-content p {
    margin-left: 35%;
  }

  .mobile .message-dialog.dialog-exit .mat-dialog-container .mat-dialog-content .dealer-picture {
    width: 15%;
    padding-bottom: 15%;
    left: 20%;
  }
}

.message-dialog.dialog-exit .mat-dialog-container .mat-dialog-content .dealer-picture img {
  width: 100%;
  height: 100%;
  position: absolute;
}

.message-dialog.dialog-exit .mat-dialog-container .mat-dialog-actions {
  margin-right: 0.5em;
  display: inline-block;
}

.message-dialog.dialog-exit .mat-dialog-container .mat-dialog-actions:first-of-type {
  margin-left: 40%;
}

.win-number {
  box-shadow: rgba(255, 255, 255, 0.15) 0px 2px 4px 0px, rgba(255, 255, 255, 0.56) 0px 2px 16px 0px;
  font-family: Montserrat, sans-serif;
  font-weight: bold;
  width: 1.8rem;
  height: 1.8rem;
}

.hot-cold-number {
  text-shadow: white 1px 0 2px;
  font-size: 13px;
  box-shadow: rgba(255, 255, 255, 0.15) 0px 2px 4px 0px, rgba(255, 255, 255, 0.16) 0px 2px 16px 0px;
}

.message-dialog.dialog-exit .mat-dialog-container .mat-dialog-actions button {
  background-color: transparent;
  font-size: 0.8em;
  padding: 0.7em 2em;
  color: #fff;
  font-weight: 700;
  border-radius: 4px;
  border-width: 2px;
  border-style: solid;
  border-color: #fff !important;
  cursor: pointer;
  transition: 0.5s;
  margin-bottom: 5px;
  outline: 0;
}

.message-dialog.dialog-exit .mat-dialog-container .mat-dialog-actions button:active,
.message-dialog.dialog-exit .mat-dialog-container .mat-dialog-actions button:focus,
.message-dialog.dialog-exit .mat-dialog-container .mat-dialog-actions button:hover {
  border: 2px solid #fff !important;
  color: #d7a024;
  background-color: #222;
}

.message-dialog.dialog-exit .mat-dialog-container .mat-dialog-actions button.closeDisabled {
  pointer-events: none;
  opacity: 0.5;
}

@media (min-height: 56.25vw) and (max-width: 177.8vh) {
  .message-dialog .mat-dialog-container {
    margin-top: -28vw;
  }

  .message-dialog .mat-dialog-container p {
    padding: 0 2vw;
  }
}

@media screen and (orientation: portrait) {
  .message-dialog .mat-dialog-container {
    margin-top: -45vh;
  }

  .message-dialog .mat-dialog-container p {
    font-size: -0.5em;
  }
}

@media screen and (orientation: portrait) {
  .win-numbers-mt {
    margin-top:calc(15vw/1.7778 * 1.5);
  }
  .win-number {
    height: calc(10vw/1.7778 * 0.5);
    width: calc(10vw/1.7778 * 0.5);
    font-size: calc(10vw/1.7778 * 0.3);
  }
}

@media screen and (orientation: landscape) {
  .win-numbers-mt {
    margin-top:20vh;
  }
  .win-number {
    height: calc(10vw/1.7778 * 0.5);
    width: calc(10vw/1.7778 * 0.5);
    font-size:calc(10vw/1.7778 * 0.3)
  }
}
.panno-box {
  margin-top:25%;
}

@media (max-width: 767px) {
  .coin-button {
    height: 5vw;
    width: 5vw;
  }

  @media (max-width: 767px) {
  .coin {
    height: 3vw;
    width: 3vw;
  }
}
}

</style>
