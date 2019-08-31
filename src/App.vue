<template>
  <div id="app">
    <Page />
  </div>
</template>

<script>
import Page from '@/components/Router/Page.vue';

export default {
  name: 'App',

  components: {
    Page
  },
};
</script>

<style src="./styles/_stylebase.scss" lang="scss">
  #app {
    min-height: 100%;
  }
</style>
