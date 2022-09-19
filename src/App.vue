<template>
  <div id="app" class = "container mx-auto absolute overflow-hiden left-0 top-0 right-0 bottom-0" style="height:56.25vw;max-height:100vh; max-width:177.78vh; margin:auto">
<!--    <nav>-->
<!--      <router-link to="/">Wheel</router-link> |-->
<!--      <router-link to="/about">About</router-link> |-->
<!--      <router-link to="/panno">Panno</router-link>-->
<!--    </nav>-->
    <router-view />
  </div>
</template>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  background-color: rgb(0, 0, 0);

  color: #fff;
  overflow: hidden;
  height: 101%;
}

//nav {
//  padding: 30px;
//
//  a {
//    font-weight: bold;
//    color: #2c3e50;
//
//    &.router-link-exact-active {
//      color: #42b983;
//    }
//  }
//}
</style>
