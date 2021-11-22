<template>
  <div class="scss-wrapper">
    <h1 class="scss-title">Color SCSS</h1>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss">
$bg: red;
.scss-wrapper {
  .scss-title {
    background: $bg;
    color: yellow;
  }
}
</style>
