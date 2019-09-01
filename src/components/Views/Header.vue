<template>
  <header class="header" role="banner">
    <div class="container-fluid">
      <h1><router-link
        to="/starships"
        exact
      >
      <span>SWAPI</span> Test Example
      </router-link></h1>
      <Search />
    </div>
  </header>
</template>

<script>
import Search from '@/components/Utils/Search.vue';

export default {
  name: 'Header',

  components: {
    Search,
  },
};
</script>

<style lang="scss" scoped>
  @import "@/styles/_stylebase.scss";

  .header {
    position: fixed;
    left: 0;
    right: 0;
    top: 0;
    width: 100%;
    background: $color_dark;
    height: $header_height;

    h1 {
      display: inline-block;
      margin-bottom: 0;

      a {
        @include link-color($color_text, $color_text);

        span {
          color: $color_primary;
        }
      }
    }

    @include xs {
      height: $header_height_mobile;

      h1 {
        display: block;
      }
    }
  }
</style>
