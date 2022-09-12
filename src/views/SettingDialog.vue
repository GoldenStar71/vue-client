<template>
    <div class=" w-full  h-full absolute">
        <div
            class='w-full p-2 pr-4 sm:pr-0 sm:w-2/3 md:w-1/2 flex-col h-full flex container justify-center items-center text-white/90  relative'>
            <div class="absolute cursor-pointer rounded-full p-0 z-50 -right-2 top-14 sm:-right-4 close-btn bg-white "
                @click="$store.commit('setActiveTab', '')">
                <Icon icon='fa:times-circle' width="40" color="#000000cc"></Icon>
            </div>
            <div
                class="w-full flex flex-col border overflow-x-hidden gap-2 rounded-lg border-gray-900 bg-black/80 p-2 setting-window h-4/5 relative">

                <div class="w-full flex gap-1 justify-between pt-4 ">
                    <a class="tab-action flex-1" :class="activeTabData === 'help' ? 'selected' : ''"
                        @click="showHelp">Help</a>
                    <a class="tab-action flex-1 " :class="activeTabData === 'limit' ? 'selected' : ''"
                        @click="showLimit">Limit</a>
                    <a class="tab-action flex-1" :class="activeTabData === 'setting' ? 'selected' : ''"
                        @click="showSetting">Setting</a>
                    <a class="tab-action flex-1" :class="activeTabData === 'history' ? 'selected' : ''"
                        @click="showHistory">History</a>
                </div>
                <div class="  overflow-y-auto h-full w-full">
                    <!-- help -->
                    <Help v-if="activeTabData === 'help'" />
                    <!-- setting -->
                    <div class="flex flex-col w-full h-full items-center pt-4 " v-if="activeTabData === 'setting'">
                        <div class="flex flex-col gap-2 p-2 pt-4">
                            <h6>Tooltip Setting</h6>
                            <div class="flex gap-2 ml-2 items-center mb-2">
                                <VueToggle size="sm" :value="enabled" color='orange' :disabled="!enabled" />
                                <small>Enable Win Number Voice</small>
                            </div>
                            <h6>Audio Settings</h6>
                            <small class="ml-2">Voice</small>
                            <div class="flex gap-2 ml-2 items-center">

                                <VueToggle size="sm" color='orange' :value="enabled" :disabled="!enabled" />
                                <small>Enable Win Number Voice</small>
                            </div>

                            <small class="ml-2">Streaming</small>
                            <div class="flex gap-2 ml-2 items-center mb-10">
                                <div @click="handleSwitchMute">
                                    <VueToggle theme="bulma" size="sm" color='yellow' v-model="toggleStreamAudio" />
                                </div>
                                <small>Enable Streaming Audio</small>
                            </div>
                        </div>

                    </div>
                    <!-- history -->
                    <div class="flex flex-col gap-2 p-2 pt-4" v-if="activeTabData === 'history'">
                        <table>
                            <thead>
                                <tr>
                                    <th>
                                        GAME
                                    </th>
                                    <th>
                                        DATE
                                    </th>
                                    <th>
                                        RESULT
                                    </th>
                                    <th>
                                        BET
                                    </th>
                                    <th>
                                        WIN
                                    </th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr v-if="(historyData.length === 0)">
                                    <td colspan="5" class="py-4 "> No yet today's history</td>
                                </tr>
                                <tr v-for="row in filteredHistoryData">
                                    <td class="py-2">
                                        {{ row.game }}
                                    </td>
                                    <td>
                                        {{ row.date }}
                                    </td>
                                    <td>
                                        {{ row.result }}
                                    </td>
                                    <td>
                                        {{ row.bet }}
                                    </td>
                                    <td>
                                        {{ row.win }}
                                    </td>
                                </tr>
                            </tbody>
                            <tfoot>
                                <tr>
                                    <td colspan="5" v-if="historyData.length > 0">
                                        <div class="flex w-full justify-end gap-2 items-center py-2">
                                            <label>Items Per page 10 {{ this.page }} of
                                                {{ Math.floor($store.state.historyData.length / 10) + 1 }} </label>

                                            <a class="rounded-full navigate-item" @click="handlePrev">
                                                <Icon icon='eva:arrow-ios-back-outline' width="30"></Icon>
                                            </a>
                                            <a class="rounded-full navigate-item" @click="handleNext">
                                                <Icon icon='eva:arrow-ios-forward-outline' width="30"></Icon>
                                            </a>
                                        </div>
                                    </td>
                                </tr>
                            </tfoot>
                        </table>
                    </div>
                    <!-- limit -->
                    <div class="flex flex-col gap-2 p-2 pt-4" v-if="activeTabData === 'limit'">
                        <table>
                            <thead>
                                <tr>
                                    <th>
                                        BET
                                    </th>
                                    <th>
                                        MIN
                                    </th>
                                    <th>
                                        MAX
                                    </th>
                                    <th>
                                        WIN
                                    </th>
                                </tr>
                            </thead>
                            <tbody>

                                <tr v-for="row in TableLimitData">
                                    <td class="py-2">
                                        {{ row.bet }}
                                    </td>
                                    <td>
                                        {{ row.min }}
                                    </td>
                                    <td>
                                        {{ row.max }}
                                    </td>
                                    <td>
                                        {{ row.win }}
                                    </td>

                                </tr>
                            </tbody>
                            <tfoot>
                                <tr>
                                    <td colspan="5">
                                        <div class="flex w-full justify-end gap-2 items-center py-2">

                                        </div>
                                    </td>
                                </tr>
                            </tfoot>
                        </table>
                    </div>
                </div>

            </div>
        </div>

    </div>

</template>
<script>
import VueToggle from "vue-switches";
import Help from './Help.vue';
import { Icon } from "@iconify/vue2";
import { TableLimitData } from '@/utils/index.js';

export default {
    name: 'SettingDialog',
    props: {
        activeTab: { type: String, default: '' }
    },
    data() {
        return {
            toggleStreamAudio: true,
            enabled: false,
            TableLimitData,
            page: 1,
            activeTabData:this.activeTab,
            historyData: this.$store.state.historyData,
        }
    },
    components: {
        VueToggle,
        Icon,
        Help
    },
    computed: {
        filteredHistoryData() {
            return this.historyData.slice((this.page - 1) * 10, Math.min(this.historyData.length, (this.page) * 10))
        },
    },
    methods: {
        
        setActiveTab(tab) {
             
            (this.activeTabData)  = tab;
        },
        handleNext() {
            console.log("next",this.page)
            if (this.page <= Math.floor(this.historyData.length / 10)) {
                this.page++;
            }

        },

        handlePrev() {
            console.log("prev",this.page)
            if (this.page > 1)
                this.page--;
        },
        handleSwitchMute() {
            const mute = (this.$store.state.gameSetting.mute > 1 ? 0 : 1);
            this.$store.commit('changeGameSetting', { mute });
        },
        showSetting(evt) {
            this.setActiveTab('setting');
            this.changeActive(evt.target)
        },
        showHelp(evt) {
            this.setActiveTab('help');
            this.changeActive(evt.target)
        },
        showLimit(evt) {
            this.setActiveTab('limit');
            this.changeActive(evt.target)
        },
        showHistory(evt) {
            this.setActiveTab('history');
            this.changeActive(evt.target)
        },
        changeActive(component) {
            const components = document.querySelectorAll('.tab-action');

            for (const c of components) {
                c.classList.remove('selected');
                if (c == component) {
                    c.classList.add('selected')
                }
            }
        }
    }
}
</script>
<style scoped lang="scss">
.setting-window {
    z-index: 999;
}

.close-btn {
    z-index: 1000;
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

table>tbody>tr>td {
    border-bottom: 1px solid #222;
}

table {
    font-size: 12px;
}

table>thead>tr>th {
    font-size: 12px;
    font-weight: bolder;
    border-bottom: 1px solid #222;
}

thead>tr:hover {
    background-color: transparent !important;
}

tfoot>tr:hover {
    background-color: transparent !important;
}
</style>