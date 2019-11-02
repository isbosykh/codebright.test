<template>
  <div id="app">
    <Header/>
    <transition name="fade" mode="out-in">
      <router-view/>
    </transition>
    <Footer/>
  </div>
</template>

<script>
  import Header from "@/components/Header";
  import Footer from "@/components/Footer";

  export default {
    name: 'app',
    components: {
      Footer,
      Header,
    }
  }
</script>

<style lang="scss">
  @import url('https://rsms.me/inter/inter.css');
  html { font-family: 'Inter', sans-serif; }
  @supports (font-variation-settings: normal) {
    html { font-family: 'Inter var', sans-serif; }
  }

  html {
    height: 100%;

    body {
      margin: 0;
      height: 100%;

      * {
        box-sizing: border-box;
      }

      #app {
        display: flex;
        flex-direction: column;
        height: 100%;
        font-family: 'Inter', sans-serif;
        font-feature-settings: 'tnum' 1, 'case' 1, 'ss03' 1, 'cv02' 1, 'cv03' 1, 'cv04' 1, 'cv05' 1, 'cv07' 1, 'cv08' 1, 'cv09' 1, 'cv10' 1, 'cv11' 1;
        text-align: center;
        padding-top: 50px;

        .fade {
          &-enter-active {
            transition: all 0.1s ease;
          }
          &-leave-active {
            transition: all 0.1s ease;
          }
          &-enter, &-leave-to
            /* .slide-fade-leave-active до версии 2.1.8 */ {
            transform: translateX(10px);
            opacity: 0;
          }
        }
      }
    }
  }
</style>
