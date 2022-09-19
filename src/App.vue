<template>
  <div id="app" class = "container mx-auto md:absolute md:top-0 md:left-0 md:rigth-0 md:bottom-0">
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

@media screen and (min-width: 768px) {
  #app {
    height:56.25vw;
    max-height:100vh; 
    max-width:177.78vh; 
    margin:auto
  }
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
