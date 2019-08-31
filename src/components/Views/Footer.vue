<template>
  <footer class="footer" role="contentinfo">
    <address>
      <div class="container-fluid">
        <p>© Levon Gambaryan 2019</p>
      </div>
    </address>
  </footer>
</template>

<script>

export default {
  name: 'Footer',
};
</script>

<style lang="scss" scoped>
  @import "@/styles/_stylebase.scss";

  .footer {
    position: fixed;
    left: 0;
    right: 0;
    bottom: 0;
    width: 100%;
    background: $color_black;
    height: $footer_height;

    @include xs {
      height: $footer_height_mobile;
    }

    address {
      text-align: right;
      font-style: normal;

      p {
        color: $color_dark;
        margin: ($gutter / 4) 0;
        @include text($font-family_sans, $font-size_small, $font-weight_sans_bold);

        @include xs {
          margin: 0;
          @include text($font-family_sans, $font-size_xsmall, $font-weight_sans_bold);
        }
      }
    }
  }
</style>
