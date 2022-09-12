<template>
    <div class="border-2 cursor-pointer gap-2 rounded-lg border-gray-700 bg-black/80 p-2 flex flex-col w-48 md:w-60">
        <div class="flex gap-2 items-center menu-item" @click="mute()">
            <Icon :icon="($store.state.gameSetting.mute >= 1) ? 'bx:volume-mute' : 'charm:sound-up'" width="40"></Icon>
            <h3 v-if="$store.state.gameSetting.mute === 2">Unmute</h3>
            <h3 v-if="($store.state.gameSetting.mute <= 1)">Mute</h3>
        </div>
        <!--         
        <div class="flex gap-2 items-center  menu-item" @click="fullScreen()">
            <Icon
                :icon="($store.state.gameSetting.fullscreen <= 1) ? 'ant-design:fullscreen-outlined' : 'ant-design:fullscreen-exit-outlined'"
                width="40"></Icon>
            <h3 v-if="($store.state.gameSetting.fullscreen <= 1)">Fullscreen</h3>
            <h3 v-if="($store.state.menuAction === 2)">Back</h3>

        </div> -->
        <div class="flex gap-2 items-center  menu-item" @click="$store.commit('setShowMenu', false);
        $store.commit('setActiveTab', 'help')">
            <Icon icon="ion:help-sharp" width="40"></Icon>
            <h3>Help</h3>
        </div>
        <div class="flex gap-2 items-center  menu-item"
            @click="$store.commit('setShowMenu', false); $store.commit('setActiveTab', 'history')">
            <Icon icon="bx:history" width="40"></Icon>
            <h3>History</h3>
        </div>
        <div class="flex gap-2 items-center  menu-item"
            @click="$store.commit('setShowMenu', false); $store.commit('setActiveTab', 'limit')">
            <Icon icon="bxs:sort-alt" width="40"></Icon>
            <h3>Table Limits</h3>
        </div>
        <div class="flex gap-2 items-center  menu-item"
            @click="$store.commit('setShowMenu', false); $store.commit('setActiveTab', 'setting')">
            <Icon icon="ep:setting" width="40"></Icon>
            <h3>Setting</h3>
        </div>
        <div class="sm:hidden gap-2 items-center flex menu-item" @click="handleLogout()">
            <Icon icon="fa:power-off" width="40" height ="30"></Icon>
            <h3>Logout</h3>

        </div>
    </div>
</template>
<script>
import { Icon } from "@iconify/vue2";
import request from "@/utils/request";

export default {
    name: "AppMenu",
    components: {
        Icon,
    },
    methods: {
        mute() {
            this.$store.commit('setShowMenu', false)
            const mute = (this.$store.state.gameSetting.mute > 1 ? 0 : 1);
            this.$store.commit('changeGameSetting', { mute });
        },
        fullScreen() {
            this.$store.commit('setShowMenu', false)
            const fullscreen = (this.$store.state.gameSetting.fullscreen > 1 ? 0 : 1);
            this.$store.commit('changeGameSetting', { fullscreen });
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
                        this.$store.commit('setLoginAction','logout');
                    }
                    console.log(response);
                }
                catch (err) {

                }
            }

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