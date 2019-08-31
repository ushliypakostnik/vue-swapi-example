<template>
  <header class="header" role="banner">
    <div class="container-fluid">
      <h1><span>SWAPI</span> Test Example</h1>
    </div>
  </header>
</template>

<script>

export default {
  name: 'Header',
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

    @include xs {
      height: $header_height_mobile;
    }

    h1 {
      margin-bottom: 0;

      span {
        color: $color_primary;
      }
    }
  }
</style>
