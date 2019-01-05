<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<style lang="less">
@font-face
{
  font-family: ZCOOLXiaoWei;
  src: url('assets/font/ZCOOLXiaoWei-Regular.ttf');
  src:
    url('assets/font/ZCOOLXiaoWei-Regular.ttf?#font-spider') format('embedded-opentype'),
    url('assets/font/ZCOOLXiaoWei-Regular.ttf') format('truetype');
  font-weight: normal;
  font-style: normal;
}
@font-face
{
  font-family: Inconsolata;
  src: url('assets/font/Inconsolata-Regular.ttf');
}
html,body {
  height: 100%;
  margin: 0;
}
#app {
  font-family: ZCOOLXiaoWei,Inconsolata,'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  height: 100%;
}
</style>
