<template>
  <div class="search">
    <input
      v-model="input"
      type="text"
      placeholder="Starship name"
      v-on:keyup.enter="search"
    />
    <button
      type="button"
      @click.prevent="search"
    >Search</button>
  </div>
</template>

<script>
import { createNamespacedHelpers } from 'vuex';

// eslint-disable-next-line no-unused-vars
import { STARSHIPS_SEARCH } from '@/store/actions/starships';

const { mapGetters } = createNamespacedHelpers('starships');

export default {
  name: 'Search',

  data: () => ({
    input: '',
  }),

  mounted() {
    this.setInput();
  },

  computed: {
    ...mapGetters({
      query: 'query',
    }),
  },

  watch: {
    '$route' (to, from) {
      // обрабатываем изменение параметров маршрута...
      this.setInput();
    }
  },

  methods: {
    search() {
      if (this.input !== this.query) {
        this.$store.dispatch('starships/STARSHIPS_SEARCH', this.input);
        this.$router.push({ path: '/starships', query: { search: this.input } });
      }
    },

    setInput() {
      const filter = this.$route.query.search;
      if (filter !== 'undefined') {
        this.input = this.$route.query.search;
      }
    },
  },
};
</script>

<style lang="scss" scoped>
  @import "@/styles/_stylebase.scss";

  .search {
    max-width: 40vw;
    float: right;
    padding-top: 12px;
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;

    input {
      flex-grow: 1;
      min-width: 100px;
      border-radius: $border-radius_large 0 0 $border-radius_large;
    }

    button {
      width: 130px;
      border-radius: 0 $border-radius_large  $border-radius_large 0;
    }

    @include xs {
      padding-top: 5px;
      max-width: 100%;
      min-width: 100%;

      input {
        @include text($font-family_sans, $font-size_small, $font-weight_sans_regular);
      }

      button {
        width: 100px;
        padding-left: 0;
        padding-right: 0;
      }
    }
  }
</style>
