<template>
  <div class="page">
    <div class="back"></div>
    <Header />
    <main role="main">
      <div class="container">
        <router-view/>
      </div>
    </main>
    <Footer />
  </div>
</template>

<script>
import Header from '@/components/Views/Header.vue';
import Footer from '@/components/Views/Footer.vue';

export default {
  name: 'Page',

  components: {
    Header,
    Footer,
  },
};
</script>

<style lang="scss" scoped>
  @import "@/styles/_stylebase.scss";

  .page {
    padding-top: $header_height + $gutter;
    padding-bottom: $footer_height + $gutter;

    @include xs {
      padding-top: $header_height_mobile + ($gutter / 2);
      padding-bottom: $footer_height_mobile + ($gutter / 2);
    }

    .back {
      position: fixed;
      z-index: -1;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      background: url("#{$image-path}back.jpg") 50% 50% no-repeat;
      background-size: cover;
    }
  }
</style>
