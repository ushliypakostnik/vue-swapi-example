<template>
  <div class="starships">
    <Loading v-if="loading" />
    <div v-if="success">
      <h2>Starships list</h2>
      <ul class="starships__list">
        <li v-for="starship in starships">
          <Ship
            v-bind:starship="starship"
            :type="false"
          />
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import { createNamespacedHelpers } from 'vuex';

import Loading from '@/components/Utils/Loading.vue';
import Ship from '@/components/Views/Ship.vue';

const { mapGetters } = createNamespacedHelpers('starships');

export default {
  name: 'Starships',

  components: {
    Loading,
    Ship,
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

<style lang="scss" scoped>
  @import "@/styles/_stylebase.scss";

  h2 {
    color: $color_primary;
    border-bottom: 1px solid $color_dark;
    @include text($font-family_sans, $font-size_normal, $font-weight_sans_regular);
  }
</style>
