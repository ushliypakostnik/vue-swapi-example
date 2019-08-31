<template>
  <div class="starships">
    <Loading v-if="loading" />
    <div v-if="success" class="container-fluid">
      <ul class="starships__list">
        <li v-for="starship in starships">
          <Spaceship v-bind:spaceship="starship" />
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import { createNamespacedHelpers } from 'vuex';

import Loading from '@/components/Utils/Loading.vue';
import Spaceship from '@/components/Views/Spaceship.vue';

const { mapGetters } = createNamespacedHelpers('starships');

export default {
  name: 'Starships',

  components: {
    Loading,
    Spaceship,
  },

  beforeCreate() {
    this.$store.dispatch('starships/STARSHIPS_REQUEST');
  },

  computed: {
    ...mapGetters({
      loading: 'loading',
      success: 'success',
      starships: 'starships',
    }),
  },
};
</script>

<style scoped>
</style>
