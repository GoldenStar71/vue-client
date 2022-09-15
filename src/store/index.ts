import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    selectTable: false,
    hovered:[],   
    selected:[],
    updated:[],
    coin:0.5,
    roundStatus:'end',
    showGroupBet:true,
    gameStatus:"BET",
    balance:0,
    haveBalance:0,
    roundBalance:0,
    maxBet:5,
    betAction:'add',
    winNumber:20,
    winCoin:null,
    winNumbers:[""],
    token:'',
    seqPlay:0,
    roundInfo:{dealer:'', seqPlay:'', },
    hotCoolNumbers:{hot:[],cool:[]},  // {hot:[], cool:[]},
    menuAction:"",
    gameSetting:
      {
        mute:0,
        fullscreen:0,
      }
    ,
    activeTab:'',
    showMenu:false,
    showMessage:false,
    showGraph:false,
    showHistory:false,
    showChart:false,
    loginAction:"",
    historyData:[],
    lastBetInfo:null, // array [{bet_code:'PL1',bet_amount:'100.00'}]
    roundBet:"",
    showLightButton:false,
    chats:[]
  },

  getters: {},
  
  mutations: {
    setTable(state, status){
      state.selectTable = status;
    },
    setLoginAction(state,action){
      state.loginAction = action;
    },
    setActiveTab(state,action){
      state.activeTab = action;

    },
    setHistoryData(state,action){
      state.historyData = action;
    },
    setShowMenu(state,action){
      state.showMenu = action;
    },
    setShowMessage(state, action){
      state.showMessage = action;
      state.showLightButton = action;
      state.showChart = false;
      state.showHistory = false;
      state.showGraph = false;
    },
    setShowGraph(state,action){
      state.showGraph =action;
      state.showLightButton = action;
      state.showChart = false;
      state.showHistory = false;
      state.showMessage = false;
    },
    setShowHistory(state, action){
      state.showHistory = action;
      state.showLightButton = action;
      state.showChart = false;
      state.showMessage = false;
      state.showGraph = false;
    },
    setShowChart(state, action){
      state.showChart = action;
      state.showLightButton = action;
      state.showMessage = false;
      state.showHistory = false;
      state.showGraph = false;
    },  
    setChats(state, value){
      state.chats = value;
    },
    changeGameSetting(state,action){
      state.gameSetting = {
        ...state.gameSetting,
        ...action,
      }
    },
    setMenuAction(state, action){
      state.menuAction = action;
    },
    setRoundInfo(state,info){
      state.roundInfo = info;
    },
    setWinCoin(state,coin){
      state.winCoin = coin;
    },
    setUpdated(state,updated){
      state.updated = updated;
    },
    setGameStatus(state,status){
      state.gameStatus = status;
    },
    setSeqPlay(state,seqPlay){
      state.seqPlay = seqPlay;
    },
    setLastBetInfo(state,info){
      state.lastBetInfo = info;
    },
    setHotCoolNumbers(state,numbers){
      state.hotCoolNumbers = numbers;
    },
    setUserToken(state,token){
      state.token = token;
    },
    setWinNumber(state,value){
      state.winNumber = value; 
      
    },
    setLoadedWinNumbers(state,value){
      if(value.length>14){
        state.winNumbers = value.slice(0,9).reverse();
        state.winNumbers=state.winNumbers.slice(Math.max(0,state.winNumbers.length-9),state.winNumbers.length);
      }
      else{
        state.winNumbers = value.reverse();
        state.winNumbers=state.winNumbers.slice(Math.max(0,state.winNumbers.length-9),state.winNumbers.length);
      }
      
    },
    setWinNumbers(state,value){
      state.winNumbers.push(`${value}`);
      state.winNumbers=state.winNumbers.slice(Math.max(0,state.winNumbers.length-9),state.winNumbers.length);
    },
    setBetAction(state,action){
      state.betAction = action;
    },
    setMaxBet(state,max){
      state.maxBet = max;
    },
    setHovered(state, hovers){
      state.hovered = hovers;
    },
    setShowGroupBet(state,show){
      state.showGroupBet = show;
    },
    setBalance(state,balance){
      state.balance = balance;
      state.haveBalance = balance;
      
    },
    setSelectedCoin(state,coin){
      state.coin = coin;
    },
    setRoundBalance(state,balance){
      state.roundBalance = balance;
    },
    setSelected(state,selected){
      state.selected = selected;
      const _betted = selected.reduce((prev:Number,current:any)=>(prev+current.value),0);
      if(state.gameStatus!=='WIN'){
        state.roundBalance = _betted;
        state.haveBalance = state.balance-_betted;
      }
    },
    setRoundStatus(state,status){
      state.roundStatus = status;
    },
    setBets(state,bets){
      state.roundBet = bets;
    }
  },
  actions: {},
  modules: {},
});
