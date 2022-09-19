<template>
  <!-- <div class="mlc-container desktop BETTIME roulette-left"> -->

  <div class="panno relative overflow-hidden h-full w-full">
    <SettingDialog v-if="$store.state.activeTab !== ''" :activeTab="$store.state.activeTab"></SettingDialog>

    <div class="w-full h-full flex md:items-center justify-center relative">

      <div id="mlc-video-div"
        class="nano-video  relative z-0 w-full h-full items-start flex md:items-center justify-center "
        :xclass="(($store.state.roundStatus !== 'started') ? 'origin-top-left -mt-[60%]  scale-[200%] md:scale-100 md:flex md:-mt-[8.5%]' : 'md:-mt-[8.5%]')"
        :class="(($store.state.roundStatus !== 'started') ? 'origin-top-left -mt-[4.5%] md:scale-100 md:flex md:-mt-[8.5%]' : '-mt-[4.5%] md:-mt-[8.5%]')">
      </div>
    </div>
    
      <div class="mlc-header z-50 absolute top-0 sm:block">
        <!---->
        <div class="ng-star-inserted">
          <div class="infotavolo">
            <h1>
              LIVE<i><span class="game">roulette</span> FROM </i><span>MALTA</span></h1>
            <p>DEALER
              <button>{{ $store.state.roundInfo.dealer }}</button>
            </p>
          </div>
        </div>
        <!--      <jackpot-boxes class="ng-star-inserted">&lt;!&ndash;&ndash;&gt;</jackpot-boxes>-->
        <div class="ng-star-inserted">
          <div class="infogioco">
            <!---->
            <!---->
            <div class="mlc-btn ico-exit pevents-on ng-star-inserted" @click="handleLogout()"></div>
            <div class="dati-gioco">
              <p><span class="time">{{ time }}</span><br>
                <!---->
                <!---->
                <button id="eventId" class="ng-star-inserted">{{ $store.state.roundInfo.seqPlay }}</button>
                : EVENT ID
              </p>
            </div>
            <div class="tooltip-datigioco">
              <div class="triangolo"></div>
              <button id="partecipationId"></button>
              : Ticket ADM <br>
              <button id="sessionId"></button>
              : <span>Session ADM</span>
            </div>
          </div>
        </div>
      </div>
      <div class="absolute top-0 w-full h-full  items-center justify-center">
        <img src='/assets/panel.png' alt='banner' class=" z-0 w-full pointer-events-none	" />
      </div>
      <LoginView
        v-if="(gameInfo.live_stream != '') && ($store.state.loginAction !== 'logined') && (!$store.state.loginAction.includes('register'))">
      </LoginView>
      <RegisterView v-if="($store.state.loginAction.includes('register'))"></RegisterView>
      <PannoView v-if="($store.state.loginAction === 'logined' && $store.state.loginAction)"></PannoView>
      <div v-if="($store.state.loginAction != 'logined')"
        class="bg-contain bg-no-repeat fixed h-full w-full bg-center init_bg top-0 left-0 sm:bg-cover">
      </div>
      <div v-if="($store.state.loginAction == 'logined' && !$store.state.selectTable)"
        class="bg-contain bg-no-repeat fixed h-full w-full bg-center table-select top-0 left-0 sm:bg-cover">
        <div class="h-full grid grid-rows-3 grid-cols-3 gap-4">
          <div class="row-start-2 row-span-1 col-span-1" @click="select_table">
            <div class="w-20 h-20 sm:w-24 sm:h-24 rounded-full ml-10 border-2 border-yellow-400 bg-black">
              <div class="h-full pt-0.5 pb-0.5 grid grid-rows-3 text-center">
                <div>table1</div>
                <div>limit</div>
                <div>0.5~200</div>
              </div>
            </div>
          </div>
          <div></div>
        </div>
      </div>
    
  </div>


</template>

<script>

import request from "@/utils/request";
import router from '@/router'
import { mapState } from 'vuex';
import SettingDialog from './SettingDialog'
import PannoView from './PannoView';
import LoginView from './LoginView';
import RegisterView from './RegisterView';
import Vue from 'vue';

export default {
  name: "Index",
  components: {
    PannoView,
    SettingDialog,
    LoginView,
    RegisterView,
  },
  computed: mapState(['gameSetting', 'loginAction']),

  data() {
    return {
      router,
      play: false,
      gameInfo: { name: '', live_stream: '' },
      isShowCounterDesktop: true,
      isShowWheel: true,
      isShowInfoPanel: false,
      isShowInfoPanel2: false,
      time: '',
      fadeLeft: "", // fadeOutLeft
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
      numberObj: {
        "0": {
          color: "Green",
          type: "Zero",
          text1: "1° Dozen",
          text2: "2° Column"
        },
        "32": {
          color: "Red",
          type: "Even",
          text1: "3° Dozen",
          text2: "2° Column"
        },
        "15": {
          color: "Black",
          type: "Odd",
          text1: "2° Dozen",
          text2: "3° Column"
        },
        "19": {
          color: "Red",
          type: "Odd",
          text1: "2° Dozen",
          text2: "1° Column"
        },
        "4": {
          color: "Black",
          type: "Even",
          text1: "1° Dozen",
          text2: "1° Column"
        },
        "21": {
          color: "Red",
          type: "Odd",
          text1: "2° Dozen",
          text2: "3° Column"
        },
        "2": {
          color: "Black",
          type: "Even",
          text1: "1° Dozen",
          text2: "2° Column"
        },
        "25": {
          color: "Red",
          type: "Odd",
          text1: "3° Dozen",
          text2: "1° Column"
        },
        "17": {
          color: "Black",
          type: "Odd",
          text1: "2° Dozen",
          text2: "2° Column"
        },
        "34": {
          color: "Red",
          type: "Even",
          text1: "3° Dozen",
          text2: "1° Column"
        },
        "6": {
          color: "Black",
          type: "Even",
          text1: "1° Dozen",
          text2: "3° Column"
        },
        "27": {
          color: "Red",
          type: "Odd",
          text1: "3° Dozen",
          text2: "3° Column"
        },
        "13": {
          color: "Black",
          type: "Odd",
          text1: "2° Dozen",
          text2: "1° Column"
        },
        "36": {
          color: "Red",
          type: "Even",
          text1: "3° Dozen",
          text2: "3° Column"
        },
        "11": {
          color: "Black",
          type: "Odd",
          text1: "1° Dozen",
          text2: "2° Column"
        },
        "30": {
          color: "Red",
          type: "Even",
          text1: "3° Dozen",
          text2: "3° Column"
        },
        "8": {
          color: "Black",
          type: "Even",
          text1: "1° Dozen",
          text2: "2° Column"
        },
        "23": {
          color: "Red",
          type: "Odd",
          text1: "2° Dozen",
          text2: "2° Column"
        },
        "10": {
          color: "Black",
          type: "Even",
          text1: "1° Dozen",
          text2: "1° Column"
        },
        "5": {
          color: "Red",
          type: "Odd",
          text1: "1° Dozen",
          text2: "2° Column"
        },
        "24": {
          color: "Black",
          type: "Even",
          text1: "2° Dozen",
          text2: "3° Column"
        },
        "16": {
          color: "Red",
          type: "Even",
          text1: "2° Dozen",
          text2: "1° Column"
        },
        "33": {
          color: "Black",
          type: "Odd",
          text1: "3° Dozen",
          text2: "3° Column"
        },
        "1": {
          color: "Red",
          type: "Odd",
          text1: "1° Dozen",
          text2: "1° Column"
        },
        "20": {
          color: "Black",
          type: "Even",
          text1: "2° Dozen",
          text2: "2° Column"
        },
        "14": {
          color: "Red",
          type: "Even",
          text1: "2° Dozen",
          text2: "2° Column"
        },
        "31": {
          color: "Black",
          type: "Odd",
          text1: "3° Dozen",
          text2: "2° Column"
        },
        "9": {
          color: "Red",
          type: "Odd",
          text1: "1° Dozen",
          text2: "3° Column"
        },
        "22": {
          color: "Black",
          type: "Even",
          text1: "2° Dozen",
          text2: "1° Column"
        },
        "18": {
          color: "Red",
          type: "Even",
          text1: "2° Dozen",
          text2: "3° Column"
        },
        "29": {
          color: "Black",
          type: "Odd",
          text1: "3° Dozen",
          text2: "2° Column"
        },
        "7": {
          color: "Red",
          type: "Odd",
          text1: "1° Dozen",
          text2: "1° Column"
        },
        "28": {
          color: "Black",
          type: "Even",
          text1: "3° Dozen",
          text2: "1° Column"
        },
        "12": {
          color: "Red",
          type: "Even",
          text1: "3° Dozen",
          text2: "1° Column"
        },
        "35": {
          color: "Black",
          type: "Odd",
          text1: "3° Dozen",
          text2: "2° Column"
        },
        "3": {
          color: "Red",
          type: "Odd",
          text1: "1° Dozen",
          text2: "3° Column"
        },
        "26": {
          color: "Black",
          type: "Even",
          text1: "3° Dozen",
          text2: "2° Column"
        }
      },
      num: "",
      wait: true,
      isUpdataNum: false,
      inputNum: "",
      nobet: true,
      DEFAULT_DEMO_PAGE_H5LIVE_SERVER_WSS: "wss://bintu-h5live.nanocosmos.de:443/h5live/stream",
      DEFAULT_DEMO_PAGE_H5LIVE_SERVER_HLS: "https://bintu-h5live.nanocosmos.de:443/h5live/http/playlist.m3u8",
      DEFAULT_DEMO_PAGE_H5LIVE_SERVER_PROGRESSIVE: "https://bintu-h5live.nanocosmos.de:443/h5live/http/stream.mp4",
      playerVersion: "4.13.2",
      player: null,
      _HTTPParams: undefined,
      playing: false,
      bintu: undefined, bintuQ: undefined,
      metaDataTimeout: 0,
      forceAutoplay: null,
      forceMuted: null,
      searchRefreshInterval: 0,
      config: null,
      logCount: 0,
      ws: '',
      isLogin: '',
      t: '',


    };
  },
  mounted() {
    // this.num = this.numberList[Math.floor((Math.random()*this.numberList.length))]
    // setTimeout(() => {
    //   this.fadeLeft = 'fadeInLeft'
    // }, 5000)
    // this.rotateStop()
    const vm = this;
    // setInterval(() => {
    //   vm.myrefresh()
    // }, 30000); //指定1秒刷新一次
    this.config = {
      source: {},
      playback: {
        "autoplay": true,
        "automute": true,
        "muted": false
        //videoId: 'video'
      },
      events: {
        onReady: function (e) {
          vm.log("ready");
        },
        onPlay: function (e) {
          vm.log("playing");
          vm.playing = true;
        },
        onPause: function (e) {
          vm.log("pause - " + e.data.reason);
          vm.playing = false;
        },
        onLoading: function (e) {
          vm.log("loading");
        },
        onStartBuffering: function (e) {
          vm.log("buffering");
        },
        onStopBuffering: function (e) {
          vm.log("resume playing");
        },
        onMute: function (e) {
          vm.$store.commit('changeGameSetting', { mute: 2 });
        },
        onUnmute: function (e) {
          vm.$store.commit('changeGameSetting', { mute: 0 });
        },
        onFullscreenChange: function (e) {
          if (e.data) {
            vm.$store.commit('changeGameSetting', e.data.entered ? { fullscreen: 2 } : { fullscreen: 0 });
          }

        },
        onError: function (e) {

          try {
            var err = JSON.stringify(e);
            if (err === "{}") {
              err = e.message;
            }
            e = err;
          } catch (err) {
          }
          vm.log("Error: " + e);
        },
        onMetaData: function (e) {
          var metadata = JSON.stringify(e.data);
          vm.log("onMetaData");
          vm.log(metadata);
        },
        onStreamInfo: function (e) {
          vm.isShowWheel = true;

          var streamInfo = JSON.stringify(e.data.streamInfo);
          vm.log("onStreamInfo: " + streamInfo);
        }
      },
      style: {
        width: "100%",
        height: "100%",
        "view": false,
        "controls": false
      }
    };

    var cap = window.NanoPlayer.capabilities;
    !cap.length ? console.log("no supported player tech") : cap.forEach(function (c) {
      console.log("supported player tech: " + c);
    });
    this.player = new window.NanoPlayer("mlc-video-div");
    this.getGameConfig();



    this.$nextTick(async () => {

      if (!this.ws) {
        // this.login();

      }

      // request.post("https://api.asian888.club/member/login", {
      //   username: "bba222",
      //   password: "123456"
      // }, function(text, status) {
      //
      //   this.t = text["result"]["token"];
      //   console.log(t);
      // });
    })

    setInterval(() => {
      const date = new Date(Date.now());
      this.time = `${date.toLocaleTimeString('en-US', { hour12: false })} ${date.toLocaleDateString()}`    // 5/12/2020

    }, [1000]);
  },

  methods: {
    async select_table(){
      this.$store.commit('setTable', true);
    },
    async login() {
      try {
        //await this.handleLogout();
        console.log("login.........")
        const res = await request.post('api/member/login', {
          username: document.getElementById('username').value,
          password: document.getElementById('password').value,
        });
        if (res && res.data && res.data["result"] && res.data["result"]["token"]) {
          this.t = res.data["result"]["token"];
          this.$store.commit('setUserToken', this.t);
          localStorage.setItem('userToken', this.t);
          this.$store.commit('setLoginAction', "logined");
          this.$store.commit('setShowMessage', false);
          this.$store.commit('setShowGraph', false);
          this.$store.commit('setShowHistory', false);
          this.$store.commit('setShowChart', false);
          this.$store.commit('setChats', []);
          return true;
        }
        else if (res.data["status"] == 0) {
          let instance = Vue.$toast.error(`Same user already loged in!`);
          this.$store.commit('setLoginAction', "");
        }
        else {
          let instance = Vue.$toast.error(`Authentication Failed!`);
          this.$store.commit('setLoginAction', "");

          return false;
        }
      }
      catch (err) {
        let instance = Vue.$toast.error(`Authentication Failed!`);
        this.$store.commit('setLoginAction', "");

        console.log(err);
        return false;
      }

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
    async playGame() {
      if (await this.login())
        this.play = true;
    },
    async handleLogout() {
      this.$store.commit('setUserToken', '');
      this.$store.commit('setTable', false);
      if (this.getUserToken() !== '') {
        try {

          const response = await request.post('api/member/loginOut', {}, { headers: this.getAxoisTokenHeader() });
          if (response.data.status === 0) {
            this.play = false;
            this.ws = null;
            this.$store.commit('setUserToken', '');
            localStorage.setItem('userToken', '');
            this.$store.commit('setLoginAction', 'logout');

          }
          console.log(response);
        }
        catch (err) {

        }
      }

    },
    getGameConfig() {
      try {
        const vm = this;
        const result = request.post('api/game/config').then(res => {
          const { name, live_stream } = res.data.result;
          vm.gameInfo = { name, live_stream }
          this.init();
        }).catch(err => {
          console.log(err)
        });



      }
      catch (err) {
        console.log(err)
      }

    },

    init() {




      const vm = this;
      let tweaksQ = this.getHTTPParam("tweaks") || this.getHTTPParam("tweaks.buffer");

      if (tweaksQ) {
        var tweaks;
        try {
          tweaks = JSON.parse(tweaksQ);
          vm.config.tweaks = tweaks;

        } catch (e) {
          if (tweaksQ.length) {
            vm.config.tweaks = {}, vm.config.tweaks.buffer = {};
            tweaks = tweaksQ.replace(/\s/g, "").replace(/;|:/g, ",").split(",");
            let typed = ["min", "start", "target", "limit", "max"];
            for (var i = 0, len = Math.min(tweaks.length, typed.length); i < len; i += 1) {
              if (!isNaN(tweaks[i])) vm.config.tweaks.buffer[typed[i]] = parseFloat(tweaks[i]);
            }
          }
        }
      }
      else {
        tweaksQ = { buffer: {} };
        var min = vm.getHTTPParam("tweaks.buffer.min");
        var start = vm.getHTTPParam("tweaks.buffer.start");
        var target = vm.getHTTPParam("tweaks.buffer.target");
        var limit = vm.getHTTPParam("tweaks.buffer.limit");
        var max = vm.getHTTPParam("tweaks.buffer.max");
        if (min && start && target && limit && max) {
          vm.config.tweaks = { buffer: {} };
          vm.config.tweaks.buffer.min = parseFloat(min);
          vm.config.tweaks.buffer.start = parseFloat(start);
          vm.config.tweaks.buffer.max = parseFloat(max);
          vm.config.tweaks.buffer.target = parseFloat(target);
          vm.config.tweaks.buffer.limit = parseFloat(limit);
        }
      }

      var rawcontrols = vm.getHTTPParam("rawcontrols");
      if (rawcontrols) {
        video.controls = true;
      }
      var tweaksDQ = vm.getHTTPParam("bufferDynamic") || vm.getHTTPParam("tweaks.bufferDynamic");
      if (tweaksDQ) {
        vm.config.tweaks = vm.config.tweaks || {}, vm.config.tweaks.bufferDynamic = {};
        tweaks = tweaksDQ.replace(/\s/g, "").replace(/;|:/g, ",").split(",");
        var typed = ["offsetThreshold", "offsetStep", "cooldownTime"];
        for (var i = 0, len = Math.min(tweaks.length, typed.length); i < len; i += 1) {
          if (!isNaN(tweaks[i])) vm.config.tweaks.bufferDynamic[typed[i]] = parseFloat(tweaks[i]);
        }
      }

      var reconnect = vm.getHTTPParam("reconnect") || vm.getHTTPParam("playback.reconnect");
      // reconnect start
      if (reconnect) {
        var reconnect;
        try {
          reconnect = JSON.parse(reconnect);
          vm.config.playback.reconnect = reconnect;
        } catch (e) {
          if (reconnect.length) {
            vm.config.playback.reconnect = {};
            reconnect = reconnect.replace(/\s/g, "").replace(/;|:/g, ",").split(",");
            var typed = ["minDelay", "maxDelay", "delaySteps", "maxRetries"];
            for (var i = 0, len = Math.min(reconnect.length, typed.length); i < len; i += 1) {
              if (!isNaN(reconnect[i])) vm.config.playback.reconnect[typed[i]] = parseFloat(reconnect[i]);
            }
          }
        }
      }
      // no reconnect
      else {
        var minDelay = vm.getHTTPParam("playback.reconnect.minDelay");
        var maxDelay = vm.getHTTPParam("playback.reconnect.maxDelay");
        var delaySteps = vm.getHTTPParam("playback.reconnect.delaySteps");
        var maxRetries = vm.getHTTPParam("playback.reconnect.maxRetries");
        if (minDelay && delaySteps && maxRetries && maxDelay) {
          vm.config.playback.reconnect = {};
          vm.config.playback.reconnect.minDelay = parseFloat(minDelay);
          vm.config.playback.reconnect.maxDelay = parseFloat(maxDelay);
          vm.config.playback.reconnect.delaySteps = parseFloat(delaySteps);
          vm.config.playback.reconnect.maxRetries = parseFloat(maxRetries);
        }
      }
      // end reconnect
      // TODO fix forcing in playerfactory
      var force = vm.getHTTPParam("force") || vm.getHTTPParam("playback.forceTech");
      //force
      if (force) {
        vm.config.playback.forceTech = force;
      }
      var muted = vm.getHTTPParam("muted") || vm.getHTTPParam("playback.muted");
      // muted
      if (muted) {
        vm.forceMuted = (muted === "true" || muted === "1");
      }
      // var autoplay = vm.getHTTPParam('autoplay') || vm.getHTTPParam('playback.autoplay');
      var autoplay = "1";
      if (autoplay) {
        vm.forceAutoplay = (autoplay === "true" || autoplay === "1");
      }
      var metadata = vm.getHTTPParam("metadata") || vm.getHTTPParam("playback.metadata");
      if (metadata) {
        vm.config.playback.metadata = true;
      }
      var keepConnection = vm.getHTTPParam("keepConnection") || vm.getHTTPParam("playback.keepConnection");
      if (keepConnection) {
        vm.config.playback.keepConnection = (keepConnection === "true" || keepConnection === "1");
      }
      var scaling = vm.getHTTPParam("scaling") || vm.getHTTPParam("style.scaling");
      if (scaling) {
        vm.config.style = vm.config.style || {};
        vm.config.style.scaling = scaling;
      }
      var keepFrame = vm.getHTTPParam("keepFrame") || vm.getHTTPParam("style.keepFrame");
      if (keepFrame) {
        vm.config.style = config.style || {};
        vm.config.style.keepFrame = (keepFrame === "true" || keepFrame === "1");
      }
      var displayAudioOnly = vm.getHTTPParam("displayAudioOnly") || vm.getHTTPParam("style.displayAudioOnly");
      if (displayAudioOnly) {
        vm.config.style = vm.config.style || {};
        vm.config.style.displayAudioOnly = (displayAudioOnly === "true" || displayAudioOnly === "1");
      }
      var audioPlayer = vm.getHTTPParam("audioPlayer") || vm.getHTTPParam("style.audioPlayer");
      if (audioPlayer) {
        vm.config.style = config.style || {};
        vm.config.style.audioPlayer = (audioPlayer === "true" || audioPlayer === "1");
      }
      //var controls = getHTTPParam('controls') || getHTTPParam('style.controls');
      var controls = 0;
      if (controls) {
        vm.config.style = vm.config.style || {};
        vm.config.style.controls = (controls === "true" || controls === "1");
      }
      var width = vm.getHTTPParam("width") || vm.getHTTPParam("style.width");
      if (width) {
        vm.config.style = vm.config.style || {};
        vm.config.style.width = isNaN(width) ? width : width + "px";
      }
      var height = vm.getHTTPParam("height") || vm.getHTTPParam("style.height");
      if (controls) {
        vm.config.style = vm.config.style || {};
        vm.config.style.height = isNaN(height) ? height : height + "px";
      }
      // get BintuQ
      var bintuQ = vm.getHTTPParam("bintu");

      if (bintuQ) {
        bintuQ = JSON.parse(bintuQ);
      }
      // no bint Q
      else {
        bintuQ = {};
        bintuQ.apiurl = vm.getHTTPParam("bintu.apiurl") || "https://bintu.nanocosmos.de";
        bintuQ.streamid = vm.getHTTPParam("bintu.streamid");
        // bintuQ.streamname =vm. getHTTPParam('bintu.streamname');
        //bintuQ.streamname = "4w1yK-cJ3Kq";
        bintuQ.streamname = vm.gameInfo.live_stream;
      }
      // bintuQ stream ID
      if (bintuQ.streamid) {
        vm.config.source.bintu = {};
        if (bintuQ.apiurl)
          vm.config.source.bintu.apiurl = bintuQ.apiurl;
        vm.config.source.bintu.streamid = bintuQ.streamid;
        vm.checkH5Live();
        vm.checkSecurity();
        vm.startPlayer(vm.config);
      }
      // bintuQ stream name
      else if (bintuQ.streamname) {
        vm.config.source.h5live = vm.config.source.h5live || {};
        vm.config.source.h5live.rtmp = {
          url: "rtmp://bintu-play.nanocosmos.de:80/play",
          streamname: bintuQ.streamname
        };
        vm.config.source.h5live.server = {
          websocket: "wss://bintu-h5live.nanocosmos.de:443/h5live/stream/stream.mp4",
          hls: "https://bintu-h5live.nanocosmos.de:443/h5live/http/playlist.m3u8",
          progressive: "https://bintu-h5live.nanocosmos.de:443/h5live/stream/stream.mp4"
        };
        vm.checkH5Live();
        vm.checkSecurity();
        vm.startPlayer(vm.config);
      }
      // no have anythings(bintQ id or name)

      else {

        vm.checkH5Live();
        var h5liveQ = {};
        h5liveQ.rtmp = {};
        h5liveQ.rtmp.url = vm.getHTTPParam("h5live.rtmp.url");
        h5liveQ.rtmp.streamname = vm.getHTTPParam("h5live.rtmp.streamname");
        if (h5liveQ.rtmp.url && h5liveQ.rtmp.streamname) {
          vm.config.source.h5live = vm.config.source.h5live || {};
          vm.config.source.h5live.rtmp = h5liveQ.rtmp;
        }
        var hls = vm.getHTTPParam("hls");
        if (hls) {
          vm.config.source.hls = hls;
        }
        var dash = vm.getHTTPParam("dash");
        if (dash) {
          vm.config.source.dash = dash;
        }
        vm.checkSecurity();
        vm.startPlayer(vm.config);
      }
    },
    getHTTPParam(paramKey) {
      const vm = this;
      // if params dont exist, create/read them
      if (!vm._HTTPParams) {
        vm._HTTPParams = new Array();
        var strGET = document.location.search.substr(1, document.location.search.length);
        if (strGET === "" && document.location.href.indexOf("?") !== -1) {
          var pos = document.location.href.indexOf("?") + 1;
          strGET = document.location.href.slice(pos);
        }

        if (strGET !== "") {
          var gArr = strGET.split("&");
          for (var i = 0; i < gArr.length; ++i) {
            var v = "";
            var vArr = gArr[i].split("=");
            var k = vArr[0];
            if (vArr.length > 1) {
              v = vArr[1];
            }
            vm._HTTPParams[decodeURIComponent(k)] = decodeURIComponent(v);
          }
        }
      }
      // return requested param, if exists
      try {
        return vm._HTTPParams[paramKey];
      } catch (e) {
        return undefined;
      }
    },
    // resetPlayer() {
    //   const vm = this;
    //   var select = document.getElementById("stream-select");
    //   if (!select.options[select.selectedIndex]) {
    //     return;
    //   }
    //   var selectedValue = select.options[select.selectedIndex].value;
    //
    //   if (!!streamObj) {
    //     if (streamObj.streamname === selectedValue) {
    //       console.log("already playing this stream");
    //       return;
    //     }
    //   }
    //
    //   var i, len = streamObjs.length;
    //   for (i = 0; i < len; i += 1) {
    //     if (streamObjs[i].streamname === selectedValue)
    //       streamObj = streamObjs[i];
    //   }
    //
    //   var h5liveQ = {};
    //   h5liveQ.rtmp = {};
    //   h5liveQ.rtmp.url = streamObj.url;
    //   h5liveQ.rtmp.streamname = streamObj.streamname;
    //
    //   if (h5liveQ.rtmp.url && h5liveQ.rtmp.streamname) {
    //     vm.config.source.h5live = vm.config.source.h5live || {};
    //     vm.config.source.h5live.rtmp = h5liveQ.rtmp;
    //   }
    //   vm.checkSecurity();
    //   vm.startPlayer(vm.config);
    // },
    checkH5Live() {
      const vm = this;
      var h5liveQ = {};
      h5liveQ.server = vm.getHTTPParam("h5live.server");

      if (h5liveQ.server) {
        vm.config.source.h5live = vm.config.source.h5live || {};
        vm.config.source.h5live.server = {};
        if (h5liveQ.server.indexOf("wss://") !== -1) {
          vm.warning("The query param \"h5live.server\" is deprecated. With this config iOS is not supported. To use h5live on all supported platforms use the query params \"h5live.server.websocket\" and \"h5live.server.hls\"!");
          try {
            var servers = JSON.parse(h5liveQ.server); // parse server object (new since 1.0.2)
            vm.config.source.h5live.server = servers;
          } catch (e) {
            vm.config.source.h5live.server.websocket = h5liveQ.server; // fallback for versions < 1.0.2
          }
        } else {
          var routes = {
            secured: {
              websocket: ["wss://", "/h5live/stream"],
              hls: ["https://", "/h5live/http/playlist.m3u8"],
              progressive: ["https://", "/h5live/http/stream.mp4"]
            },
            unsecured: {
              websocket: ["ws://", ":8181"],
              hls: ["http://", ":8180/playlist.m3u8"],
              progressive: ["http://", ":8180/stream.mp4"]
            }
          };
          var route = (document.location.protocol.indexOf("https") === 0) ? routes.secured : routes.unsecured;
          vm.config.source.h5live.server.websocket = route.websocket[0] + h5liveQ.server + route.websocket[1];
          vm.config.source.h5live.server.hls = route.hls[0] + h5liveQ.server + route.hls[1];
          vm.config.source.h5live.server.progressive = route.progressive[0] + h5liveQ.server + route.progressive[1];
        }
      }

      else { // try parse seperately
        h5liveQ.server = {};
        h5liveQ.server.websocket = vm.getHTTPParam("h5live.server.websocket");
        h5liveQ.server.progressive = vm.getHTTPParam("h5live.server.progressive");
        h5liveQ.server.hls = vm.getHTTPParam("h5live.server.hls");
        if (h5liveQ.server.websocket || h5liveQ.server.progressive || h5liveQ.server.hls) {
          vm.config.source.h5live = vm.config.source.h5live || {};
          vm.config.source.h5live.server = {};
          var sourceConut = 0;
          if (h5liveQ.server.websocket) {
            vm.config.source.h5live.server.websocket = h5liveQ.server.websocket;
          }
          if (h5liveQ.server.progressive) {
            vm.config.source.h5live.server.progressive = h5liveQ.server.progressive;
          }
          if (h5liveQ.server.hls) {
            vm.config.source.h5live.server.hls = h5liveQ.server.hls;
          }
          if (!vm.config.source.h5live.server.websocket && vm.config.source.h5live.server.hls && vm.config.playback.metadata) {
            vm.warning("To use h5live on iOS with metadata please also pass a websocket url over the query param \"h5live.server.websocket\"!");
          } else if (!vm.config.source.h5live.server.websocket && vm.config.source.h5live.server.hls) {
            vm.warning("To use h5live on platforms other then iOS please also pass a websocket url over the query param \"h5live.server.websocket\"!");
          } else if (vm.config.source.h5live.server.websocket && !vm.config.source.h5live.server.hls) {
            vm.warning("To use h5live on iOS please also pass a hls url over the query param \"h5live.server.hls\"!");
          }
        } else if (!vm.config.source.bintu && !vm.config.source.h5live) {
          vm.config.source.h5live = {};
          vm.config.source.h5live.server = {};

          // USE DEFAULT DEMO PAGE H5LIVE SERVER
          // to change the page defaults see line 94
          vm.config.source.h5live.server.websocket = vm.DEFAULT_DEMO_PAGE_H5LIVE_SERVER_WSS;
          vm.config.source.h5live.server.hls = vm.DEFAULT_DEMO_PAGE_H5LIVE_SERVER_HLS;
          vm.config.source.h5live.server.progressive = vm.DEFAULT_DEMO_PAGE_H5LIVE_SERVER_PROGRESSIVE;
        }
      }
      h5liveQ.token = vm.getHTTPParam("h5live.token");
      if (h5liveQ.token) {
        vm.config.source.h5live = vm.config.source.h5live || {};
        vm.config.source.h5live.token = h5liveQ.token;
      } else {
        h5liveQ.token = {};
        h5liveQ.token.key = vm.getHTTPParam("h5live.token.key");
        h5liveQ.token.type = vm.getHTTPParam("h5live.token.type");
        if (h5liveQ.token.key) {
          vm.config.source.h5live = vm.config.source.h5live || {};
          vm.config.source.h5live.token = "{\"type\":\"" + (h5liveQ.token.type ? h5liveQ.token.type : "token1") + "\",\"key\":\"" + h5liveQ.token.key + "\"}";
        }
      }
    },
    checkSecurity() {
      const vm = this;
      var security = {};
      security.token = vm.getHTTPParam("h5live.security.token");
      if (security.token) {
        vm.config.source.h5live = vm.config.source.h5live || {};
        vm.config.source.h5live.security = vm.config.source.h5live.security || {};
        vm.config.source.h5live.security.token = security.token;
      }
      security.expires = vm.getHTTPParam("h5live.security.expires");
      if (security.expires) {
        vm.config.source.h5live = vm.config.source.h5live || {};
        vm.config.source.h5live.security = vm.config.source.h5live.security || {};
        vm.config.source.h5live.security.expires = security.expires;
      }
      security.options = vm.getHTTPParam("h5live.security.options");
      if (security.options) {
        vm.config.source.h5live = vm.config.source.h5live || {};
        vm.config.source.h5live.security = vm.config.source.h5live.security || {};
        vm.config.source.h5live.security.options = security.options;
      }
      security.tag = vm.getHTTPParam("h5live.security.tag");
      if (security.tag) {
        vm.config.source.h5live = vm.config.source.h5live || {};
        vm.config.source.h5live.security = vm.config.source.h5live.security || {};
        vm.config.source.h5live.security.tag = security.tag;
      }
    },
    startPlayer(config) {
      const vm = this;
      config = config || vm.config;
      if (vm.forceAutoplay !== null) {
        config.playback.autoplay = vm.forceAutoplay;
      }
      if (vm.forceMuted !== null) {
        config.playback.muted = vm.forceMuted;
        var buttonMute = document.getElementById("buttonMute");
        buttonMute.dataset.muted = vm.forceMuted;
        buttonMute.innerText = vm.forceMuted ? "unmute" : "mute";
      }
      if (vm.player) {
        vm.player.destroy();
      }
      vm.player.setup(config).then(function (conf) {
        try {
          conf = JSON.stringify(conf);
        } catch (err) {
        }
        vm.log("setup vm.player ok: ");

      }, function (error) {
        if (error.message) {
          error = error.message;
        } else {
          try {
            var err = JSON.stringify(error);
            if (err === "{}") {
              err = error.message;
            }
            error = err;
          } catch (err) {
          }
        }
        vm.log("Setup Error: " + error);
      });
    },
    log(e) {
      if (typeof e === "object") {
        try {
          e = JSON.stringify(e);
        } catch (err) {
        }
      }
      e = new Date().toTimeString().split(" ")[0] + ": " + e;
      console.log(e);
    },
    warning(message) {
      const vm = this;
      vm.log("Warning: " + message);
    },
    mute(isMute) {
      if (isMute === 1) {
        this.player.mute();
        console.log('muted');
      }
      else {
        this.player.unmute();

        console.log('unmuted');
      }
    },
    fullscreen(isFullscreen) {
      if (isFullscreen === 1) {
        this.player.requestFullscreen().then(() => {

        }).catch((err) => {

        })
      }
      else {
        this.player.exitFullscreen().then(() => {

        }).catch((err) => {

        })
      }
    },
    async register() {
      try {

        const res = await request.post('api/member/register', {
          username: document.getElementById('username').value,
          mobile: document.getElementById('mobile').value,
          password: document.getElementById('password').value,
        });

        if (res.data.status === 0 && res.data.message === 'success') {

          this.t = res.data.result.token;
          this.$store.commit('setUserToken', this.t);
          localStorage.setItem('userToken', this.t);
          this.$store.commit('setLoginAction', "");
          this.play = true;
        }
        else {
          let instance = Vue.$toast.error(`Register is Failed, please check your network status!`);
        }

      }
      catch (err) {
        console.log(err)
      }
    }
  },
  watch: {
    loginAction(current, old) {
      console.log(current, old)
      if (current === "login-action") {
        this.playGame();
      }
      if (current === "register-action") {
        this.register();
      }
      if (current === "logout") {
        this.handleLogout();
      }
    },
    gameSetting(current, old) {

      if (current.mute !== old.mute && current.mute !== 2) {
        console.log("mute chagned ")
        this.mute(current.mute);
      }
      if (current.fullscreen !== old.fullscreen && current.fullscreen !== 2) {
        console.log("full screen chagned")
        this.fullscreen(current.fullscreen);
      }
    }
  }
};
</script>

<style scoped>
.desktop .infotavolo h1 .game {
  font-size: 1.4vh;
}

.mlc-container {
  position: absolute;
  width: 100vw;
  height: 56.25vw;
  background: #000;
  max-height: 100vh;
  max-width: 177.78vh;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  margin: auto;
  overflow: hidden;
}

.mlc-footer,
.mlc-header {
  width: 100%;
  position: absolute;
  pointer-events: none;
}

.mlc-header {
  width: 100%;
  position: absolute;
  pointer-events: none;
}

.infotavolo {
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 30%;
  margin-top: 3px;
  text-shadow: #000 0 0 1em;
  pointer-events: none;
}

.infotavolo h1 {
  color: #c00;
  margin: 0 0 0 2px;
  font-size: 3vh;
  font-weight: 500;
  position: relative;
}


.infotavolo h1>i {
  color: #fff;
  font-size: .3em;
  font-style: normal;
}

.infotavolo h1 .game {
  color: #c00;
  text-transform: uppercase;
  position: absolute;
  top: 6%;
  text-shadow: #000 0 0 0.4em;
}

.infotavolo h1>span {
  color: #fff;
  font-size: .4em;
  text-transform: uppercase;
}

.infotavolo p {
  position: relative;
  font-size: 1vh;
  margin: 0 0 0 2px;
  color: #ccc;
}

.infogioco {
  position: absolute;
  top: 0;
  right: 0;
  height: 100%;
  width: 30%;
  text-shadow: #000 0 0 1em;
}


.pevents-on {
  pointer-events: visible;
}

.mlc-btn {
  cursor: pointer;
  background-color: rgba(0, 0, 0, .6);
  background-repeat: no-repeat;
  background-position-x: 50%;
  background-position-y: 50%;
  background-size: 100%;
  z-index: 1;
  display: inline-block;
  border-radius: 50%;
  transition: .2s;
  box-shadow: -2px -4px 12px rgb(0 0 0 / 50%);
  -webkit-tap-highlight-color: rgba(255, 255, 255, 0);
  border: 0.3vh solid #fff;
}

.infogioco .mlc-btn {
  height: 4vh;
  width: 4vh;
  margin-top: 1%;
  float: right;
}

.infogioco .mlc-btn.ico-exit {
  background-image: url('../assets/svg/exit.svg');
}

.infogioco .dati-gioco {
  font-weight: 300;
  text-align: right;
  color: #ccc;
  float: right;
  margin-right: 1vh;
}

.infogioco .dati-gioco p {
  font-size: 1.5vh;
}

.infogioco .dati-gioco p span {
  font-weight: 500;
  font-size: 1.5vh;
  line-height: 1.2;
  width: 100%;
}

.infogioco .dati-gioco p span {
  font-weight: 500;
  font-size: 1.5vh;
  line-height: 1.2;
  width: 100%;
}

button {
  cursor: pointer;
  padding: 0;
  align-items: flex-start;
  text-align: center;

  background-color: transparent;
  box-sizing: border-box;
  border-radius: 4px;
  font-size: 1.5em;
  transition: .5s;
  color: #f5f5f5;
  font-weight: 100;
  pointer-events: visible;
  border: 0 solid transparent;
}

.infogioco .dati-gioco #eventId {
  font-size: 1.5vh;
}

.infogioco {
  position: absolute;
  top: 0;
  right: 0;
  height: 100%;
  width: 30%;
  text-shadow: #000 0 0 1em;
}

.infogioco .tooltip-datigioco {
  border: 2px solid #00aeef;
  position: absolute;
  top: 50%;
  right: 2%;
  padding: 1vh 2vw;
  font-size: 1.5vh;
  background-color: rgba(0, 0, 0, .8);
  border-radius: 5px;
  box-shadow: 0 0 10px #000;
  display: none;
  width: auto;
}

.infogioco .tooltip-datigioco .triangolo {
  position: absolute;
  top: -1.1vh;
  left: 60%;
  width: 0;
  height: 0;
  line-height: 0;
  border-bottom: 1vh solid #00aeef;
  border-left: 0.8vh solid transparent;
  border-right: 0.8vh solid transparent;
}

.mlc-main .mlc-left,
.mlc-main .mlc-right {
  width: 16%;
  height: 85%;
  position: absolute;
  top: 0;
  margin-top: 2px;
  z-index: 1;
}

.mlc-main {
  position: absolute;
  top: 15%;
  width: 100%;
  height: 85%;
  text-align: center;
}

.pevents-off {
  pointer-events: none;
}

.mlc-main .mlc-left,
.mlc-main .mlc-right {
  width: 16%;
  height: 85%;
  position: absolute;
  top: 0;
  margin-top: 2px;
  z-index: 1;
}

.mlc-main .mlc-left {
  left: 0;
}


#info-panel {
  /*visibility: hidden;*/
  opacity: 0;
  background: rgba(0, 0, 0, 0.5);
  background: linear-gradient(90deg,
      rgba(0, 0, 0, 0) 0,
      rgba(0, 0, 0, 0.5) 15%,
      rgba(0, 0, 0, 0.5) 100%);
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

.mlc-footer {
  height: 10%;
  bottom: 0;
}




.nano-video {
  transition: all 1s linear;

}

@media (min-height: 56.25vw) and (max-width: 177.8vh) {

  .infotavolo h1 {
    font-size: 2.6vw;
  }

  .desktop .infotavolo h1 .game {
    font-size: 0.8vw;
  }

  .infotavolo p {
    font-size: 0.6vw;
  }

  .mlc-btn {
    border-width: 0.17vw;
  }

  .infogioco .mlc-btn {
    height: 2vw;
    width: 2vw;
  }

  .infogioco .dati-gioco {
    margin-right: 0.6vw;
  }

  .infogioco .dati-gioco p {
    /* font-size: 1.85vw; */
  }

  .infogioco .dati-gioco p span {
    font-size: 0.8vw;
  }

  .infogioco .dati-gioco p span.time {
    margin-right: 0.6vw;
  }

  .infogioco .dati-gioco p span {
    font-size: 0.8vw;
  }

  .infogioco .dati-gioco #eventId {
    /* font-size: 1.85vw; */
  }

  .infogioco .tooltip-datigioco {
    font-size: .85vw;
    padding: 1vw 1.5vh;
  }

  .infogioco .tooltip-datigioco .triangolo {
    top: -0.8vw;
    border-bottom: 0.8vw solid #00aeef;
    border-left: 0.6vw solid transparent;
    border-right: 0.6vw solid transparent;
  }




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
</style>

<style>
video {
  width: 100%;
  height: 100%;
}

.init_bg {
  background-image: url('../assets/bg.jpg');
  z-index: 100;
  background-color: black;
}

.table-select {
  background-image: url('../assets/bg_limiti.jpeg');
  z-index: 100;
  background-color: black;
}
.ico-equal {
  background-image: url('../assets/equal.svg');
  background-repeat: no-repeat;
}
</style>
