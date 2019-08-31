<template>
  <div class="home">
    <Page v-if="!isProfileLoaded" />
    <Loading v-else="loading" />
  </div>
</template>

<script>
import { createNamespacedHelpers } from 'vuex';

import Loading from '@/components/Utils/Loading.vue';
import Page from '@/components/Views/Page.vue';
import Header from '@/components/Views/Header.vue';

const { mapGetters } = createNamespacedHelpers('user');

export default {
  name: 'Starships',

  components: {
    Loading,
    Page,
  },

  computed: {
    ...mapGetters({
      getProfile: 'getProfile',
      isProfileLoaded: 'isProfileLoaded',
    }),
  },
};
</script>

<style scoped>
  .home,
  .home > div {
    min-height: 100vh;
  }
</style>
