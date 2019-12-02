<template>
  <div id="app">
    <Home v-on:isShowFooter="isShowFooter" />
    <GlobalFooter v-if="footer_show" />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import Home from './views/Home.vue';
import GlobalFooter from './components/GlobalFooter/GlobalFooter.vue';

@Component({
  components: {
    Home,
    GlobalFooter
  },
})
export default class App extends Vue {
  header_show:boolean = true
  footer_show:boolean = true
      
  //是否显示底部
  isShowFooter(isShowFooter:boolean):void {
    this.footer_show = isShowFooter;
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
