<template>
    <div class="relative h-full border-2 cursor-pointer gap-2 rounded-lg border-gray-700 bg-black/80 p-2 flex flex-col w-48 md:w-96">

            <div class="w-full flex gap-1 justify-between pt-4 ">
                <a class="tab-action flex-1" :class="activeTabData === 'statistic' ? 'selected' : ''"
                    @click="showStatistic">Statistic</a>
                <a class="tab-action flex-1 " :class="activeTabData === 'wheel' ? 'selected' : ''"
                    @click="showWheel">Wheel</a>
                <a class="tab-action flex-1" :class="activeTabData === 'sector' ? 'selected' : ''"
                    @click="showSector">Sector</a>
                <a class="tab-action flex-1" :class="activeTabData === 'chart' ? 'selected' : ''"
                    @click="showChart">Chart</a>
                <a class="tab-action flex-1" :class="activeTabData === 'rank' ? 'selected' : ''"
                    @click="showRank">Rank</a>
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
                    wheel
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
            hots:[23,25,30,1,8,9],
            colds:[4,7,11,14,32,33],
            activeTabData:"statistic",
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
    mounted: function() {
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
             
            (this.activeTabData)  = tab;
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
    .menu-item {
        color: #aaa;
        transition: all 0.5s ease-in-out;
    }

    .menu-item:hover {
        color: #ffffff;
        text-shadow: white 4px 0 10px;
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