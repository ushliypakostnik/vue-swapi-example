<template>
  <div class="search">
    <input type="text" placeholder="Starship name" />
    <button type="button">Search</button>
  </div>
</template>

<script>

export default {
  name: 'Search',
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
