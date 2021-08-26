<template>
  <h1>Demo Slots</h1>
  <header>
    <slot name="header"></slot>
  </header>
  <main>
    <slot></slot>
    <section class="one"></section>
    <section class="tow"></section>
  </main>

  <footer>
    <slot name="footer"></slot>
  </footer>
</template>

<script>
export default {};
</script>

<style></style>
