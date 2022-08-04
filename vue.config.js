const path =require('path')
const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: [
    'vuetify'
  ],
  lintOnSave:false,
  outputDir:path.resolve(__dirname,'C:/Users/Trearthor/Desktop/vue-build'),
  // assetsDir:"./public"
})
