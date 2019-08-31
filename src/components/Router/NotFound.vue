<template>
  <div class="page404">
    <h1>404</h1>
    <h3>Page Not Found!</h3>
  </div>
</template>

<script>

export default {
  name: 'NotFound',
};
</script>

<style lang="scss" scoped>
  @import "@/styles/_stylebase.scss";

  .page404 {
    height: calc(100vh - 145px);
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    h1 {
      color: $color_primary;
      @include text($font-family_mono, round($font-size_large * 4), $font-weight_sans_regular);
      line-height: 120px;
      margin-bottom: 0;
    }

    h3 {
      margin-top: $gutter;
      margin-bottom: $gutter;
    }

    @include xs {
      height: calc(100vh - 59px);

      h1 {
        @include text($font-family_mono, round($font-size_large * 3), $font-weight_sans_regular);
        line-height: 120px;
      }
    }
  }
</style>
