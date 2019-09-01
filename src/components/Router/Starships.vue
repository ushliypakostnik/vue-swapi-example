<template>
  <div class="starships">
    <Loading v-if="loading" />
    <div v-if="success">
      <h2>Starships list</h2>
      <ul class="starships__list">
        <li v-for="starship in __starships">
          <Ship
            v-bind:starship="starship"
            :type="false"
          />
        </li>
      </ul>
      <button
        type="button"
        class="bottom-button"
        v-bind:class="{ 'bottom-button--disabled' : !this.prevBnt }"
        @click.prevent="prev"
      >Prev</button>
      <button
        type="button"
        class="bottom-button"
        v-bind:class="{ 'bottom-button--disabled' : !this.nextBnt }"
        @click.prevent="next"
      >Next</button>
    </div>
  </div>
</template>

<script>
import { createNamespacedHelpers } from 'vuex';

import { UTILS } from '@/utils/constants';

import Loading from '@/components/Utils/Loading.vue';
import Ship from '@/components/Views/Ship.vue';

const { mapGetters } = createNamespacedHelpers('starships');

export default {
  name: 'Starships',

  components: {
    Loading,
    Ship,
  },

  data: () => ({
    minValue: 0,
    maxValue: UTILS.pageSize,
    lastPage: false,
  }),

  beforeCreate() {
    this.$store.dispatch('starships/STARSHIPS_REQUEST');
  },

  computed: {
    ...mapGetters({
      loading: 'loading',
      success: 'success',
      starships: 'starships',
      query: 'query',
    }),

    reset() {
      return this.query;
    },

    total() {
      return this._starships.length;
    },

    last() {
      return this.total % UTILS.pageSize;
    },

    prevBnt() {
      if (this.minValue === 0) return false;
      return true;
    },

    nextBnt() {
      if (this.maxValue >= this.total) return false;
      return true;
    },

    _starships() {
      const _starships = this.starships.filter(starship => {
        return starship.name.toLowerCase().includes(this.query.toLowerCase());
      });
      return _starships;
    },

    __starships() {
      const __starships = this._starships.slice(this.minValue, this.maxValue);
      return __starships;
    },
  },

  watch: {
    reset() {
      this.minValue = 0;
      this.maxValue = UTILS.pageSize;
    }
  },

  methods: {
    prev() {
      if (this.lastPage && this.last !== 0) {
        this.maxValue -= this.last;
        this.lastPage = false;
      } else this.maxValue -= UTILS.pageSize;
      this.minValue -= UTILS.pageSize;
    },

    next() {
      this.minValue += UTILS.pageSize;
      if (this.maxValue + UTILS.pageSize < this.total) {
        this.maxValue += UTILS.pageSize;
      } else {
        this.maxValue = this.total;
        this.lastPage = true;
      }
    },
  },
};
</script>

<style lang="scss" scoped>
  @import "@/styles/_stylebase.scss";

  .starships {

    &__list {
      > li {
        margin-bottom: $gutter * 2;

        &:last-child {
          margin-bottom: $gutter;
        }
      }
    }

    h2 {
      color: $color_primary;
      border-bottom: 1px solid $color_dark;
      @include text($font-family_sans, $font-size_normal, $font-weight_sans_regular);
    }
  }
</style>
