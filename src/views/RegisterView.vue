<template>
    <div class="flex w-full h-full justify-center items-center absolute top-0" style="z-index: 1001">
        <div class="flex flex-col w-72 h-150 rounded-lg bg-black/80 gap-2 p-4 justify-center items-center">
            <div class="h-16 w-16 rounded-full border-2 overflow-hidden  border-red-700">
                <img src="/assets/login-avatar.png" alt="login-avatar" />
            </div>
            <input id="username" class="border w-full border-sky-600 hover:border-sky-400 h-10 rounded-md bg-black/40"
                placeholder="username" />
            <input id="mobile" class="border w-full border-sky-600 hover:border-sky-400 h-10 rounded-md bg-black/40"
                placeholder="mobile" />
            <input id="password" class="border  w-full border-sky-600 hover:border-sky-400 h-10 rounded-md"
                placeholder="password" type="password" />
            <input id="re-password" class="border mb-2  w-full border-sky-600 hover:border-sky-400 h-10 rounded-md"
                placeholder="confirm password" type="password" />
            <div class="flex gap-1 w-full">
                <button id="register-button" class="rounded-md h-10 w-full border  border-red-600  "
                    @click="handleRegister">Register
                </button>
                <button id="register-button" class="rounded-md h-10 w-full border  border-sky-600  "
                    @click="handleLogin">Login
                </button>
            </div>

        </div>
    </div>
</template>

<script>
export default {
    methods: {
        handleRegister() {
            console.log('register action')
            this.$store.commit('setLoginAction', "register-action");
        },
        handleLogin(){
            console.log('login')
            this.$store.commit('setLoginAction', "login");
        }
    }
}
</script>
<style scoped>
input {
    background-color: #00000080;
    padding: 6px;
    -webkit-user-select: text;
}

input:hover,
input:active,
input:focus {
    outline: none;
}
</style>