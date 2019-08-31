<template>
  <div class="ship">
    <h3>
      <router-link
        :to="path"
        exact
      >
      {{ starship['name'] }}
      </router-link>
    </h3>
    <ul>
      <li v-for="(value , key) in _starship">
        <h4>
          <span class="label">{{ key }}: </span>
          {{ value }}
        </h4>
      </li>
    </ul>
  </div>
</template>

<script>

export default {
  name: 'Ship',

  props: {
    starship: Object,
  },

  data: () => ({
    name: '',
  }),

  computed: {
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

    path() {
      const arr = this.starship.url.split('/');
      const id = arr[arr.length - 2];
      const path = `/starship/${id}`;
      return path;
    }
  },
};
</script>

<style lang="scss" scoped>
  @import "@/styles/_stylebase.scss";

  .ship {
    margin-bottom: $gutter * 2;

    &__label {
      color: $color_primary;
    }

    h3 {
      margin-bottom: $gutter / 2;
      line-height: round($line-height_small * 1.25);
    }

    h4 {
      margin: 0;
    }
  }
</style>
