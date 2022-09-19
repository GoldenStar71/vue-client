<template>
    <div class="app-toast w-1/3 flex-col items-between"
        :class="message == '' ? 'justify-center' : 'justify-between'" v-if="showMessage">
        <div class="pr-8 w-full text-right">
            <h3 class="text-[20px] md:text-xl font-bold">{{ title }}</h3>
        </div>

        <div class="pr-4 flex " v-if="message !== ''">
            <div class="w-1/3 md:flex-0">
            </div>
            <div v-if="message !== ''" v-html="message" class="w-2/3 md:flex-1 justify-end flex text-sm md:text-base">

            </div>
        </div>
    </div>
</template>
<script>

export default {
    name: "AppToast",
    mounted() {

    },
    props: {
        showMessage: {
            type: Boolean,
            default: false,
        },
        message: {
            type: String,
            default: '<p></p>',
        },
        title: {
            type: String,
            default: '',
        },
    },


}
</script>
<style scoped>
.app-toast {
    background: rgba(0, 0, 0, 0.5);
    background: linear-gradient(90deg,
            rgba(0, 0, 0, 0) 0,
            rgba(0, 0, 0, 0.5) 15%,
            rgba(0, 0, 0, 0.5) 100%);
    height: 72px;
    position: absolute;
    top: 12px;
    color: #fff;
    border-radius: 0 3vh 7vh 0;
    z-index: 50;
    opacity: 0;
    /* width: 280px; */
    width:30%;
    animation: 7s ease 0s normal forwards 1 toast;
}

@media screen and (orientation: portrait) {
  .app-toast
 {
    height:calc(10vw/1.7778 * 1.5);
    margin-top: 4vw;
  }
}

@media screen and (orientation: landscape) {
  .app-toast
 {
    height:15vh;
    margin-top:6vh;
  }
}

@keyframes toast {
    0% {
        left: -33%;
        opacity: 0
    }

    25% {
        left: 0px;
        opacity: 1
    }

    75% {
        left: 0px;
        opacity: 1
    }

    100% {
        left: -33%;
        opacity: 0
    }
}
</style>