<template>
  <div class="starship">
    <Loading v-if="loading" />
    <div v-if="success">
      <h1>{{ starship['name'] }}</h1>
      <ul>
        <li v-for="(value , key) in _starship">
          <h4>
            <span class="label">{{ key }}: </span>
            {{ value }}
          </h4>
        </li>
      </ul>
      <router-link
        class="bottom-button"
        to="/starships"
        tag="button"
        exact
      >Back to list</router-link>
    </div>
  </div>
</template>

<script>
import { createNamespacedHelpers } from 'vuex';

import Loading from '@/components/Utils/Loading.vue';

const { mapGetters } = createNamespacedHelpers('starship');

export default {
  name: 'Starship',

  components: {
    Loading,
  },

  beforeCreate() {
    const id = this.$route.params.id;
    this.$store.dispatch('starship/STARSHIP_REQUEST', id );
  },

  computed: {
    ...mapGetters({
      loading: 'loading',
      success: 'success',
      starship: 'starship',
    }),

    _starship() {
      const _starship = {};
      for (let key in this.starship) {
        if (key !== 'name') {
          const _key = (key[0].toUpperCase() + key.slice(1)).split('_').join(' ');
          _starship[_key] = this.starship[key];
        }
      }
      return _starship;
    },
  },
};
</script>

<style lang="scss" scoped>
  @import "@/styles/_stylebase.scss";

  .starship {
    h1 {
      border-bottom: 1px solid $color_dark;
    }

    h4 {
      margin: ($gutter / 2) 0;
      @include text($font-family_sans, round($font-size_small * 1.25), $font-weight_sans_regular);
    }
  }
</style>
