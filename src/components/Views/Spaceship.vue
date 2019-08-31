<template>
  <div class="spaceship">
    <h3>
      {{ spaceship['name'] }}
    </h3>
    <ul>
      <li v-for="(value , key) in _spaceship">
        <h4>
          <span class="spaceship__label">{{ key }}: </span>
          {{ value }}
        </h4>
      </li>
    </ul>
  </div>
</template>

<script>

export default {
  name: 'Spaceship',

  props: {
    spaceship: Object,
  },

  data: () => ({
    name: '',
  }),

  computed: {
    _spaceship() {
      const _spaceship = {};
      for (let key in this.spaceship) {
        if (key !== 'name') {
          const _key = (key[0].toUpperCase() + key.slice(1)).split('_').join(' ');
          _spaceship[_key] = this.spaceship[key];
        }
      }
      return _spaceship;
    },
  },
};
</script>

<style lang="scss" scoped>
  @import "@/styles/_stylebase.scss";

  .spaceship {
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
