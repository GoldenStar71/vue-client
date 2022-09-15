<template>
    <div class="relative h-full border-2 cursor-pointer gap-2 rounded-lg border-gray-700 bg-black/80 p-2 flex flex-col w-60 md:w-96">
        <div class="text-center text-yellow-300">Bets: {{this.$store.state.roundBet.length}} players</div>
        <table>
            <tbody>
                <tr v-for="(bet, index) in this.$store.state.roundBet" :key="index">
                    <td class="py-2">
                        {{ index+1 }}
                    </td>
                    <td class="text-yellow-300">
                        {{ bet.player }}
                    </td>
                    <td>
                        {{ bet.amount }} EUR
                    </td>
                </tr>
            </tbody>
            <tfoot>
                <!-- <tr>
                    <td colspan="3" v-if="historyData.length > 0">
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
                </tr> -->
            </tfoot>
        </table>
    </div>
</template>
<script>
import { Icon } from "@iconify/vue2";
import request from "@/utils/request";

export default {
    name: "RightBet",
    components: {
        Icon,
    },
    data() {
        return {
            chats:[],
            chat:""
        }
    },
    mounted: function() {
        this.chats = this.$store.state.chats;
    },
    methods: {
        mute() {
            this.$store.commit('setShowMenu', false)
            const mute = (this.$store.state.gameSetting.mute > 1 ? 0 : 1);
            this.$store.commit('changeGameSetting', { mute });
        },
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
</style>