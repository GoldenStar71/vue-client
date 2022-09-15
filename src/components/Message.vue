<template>
    <div class="relative h-full border-2 cursor-pointer gap-2 rounded-lg border-gray-700 bg-black/80 p-2 flex flex-col w-48 md:w-60">
        <div class="text-center">Chat</div>
        <div class="text-right h-full mt-8 content-end">
            <div v-for="(chat, index) in chats" :key="index">
                {{chat}}
            </div>
        </div>
        <div class="absolute bottom-2 inline-flex">
            <input v-model="chat" type="text" name="" id="" class="bg-transparent border-gray-700 border-2"><span @click="send()"><Icon icon='bx:right-arrow-circle' width="30"></Icon></span>
        </div>
    </div>
</template>
<script>
import { Icon } from "@iconify/vue2";
import request from "@/utils/request";

export default {
    name: "Message",
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