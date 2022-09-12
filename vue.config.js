 
const { defineConfig } = require("@vue/cli-service");
module.exports = defineConfig({
  transpileDependencies: true,

  // devServer:{
  //   static:'./public',
  //   // overlay:{
  //   //   warnings: true,
  //   //   error: false
  //   // }
  // }
  devServer:{
    proxy:{
      '/api': {
        // target: 'http://localhost:5600',
        target: 'https://macao-roulette.herokuapp.com/',
        changeOrigin: true,
        ws: true, 
      }
    }
  },
  lintOnSave: false,
  publicPath: './'
});