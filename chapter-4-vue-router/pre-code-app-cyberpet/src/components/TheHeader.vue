<template>
  <nav class="p-3 mb-2 bg-dark text-white">
    <ul class="d-flex justify-content-center align-items-center">
      <li>
        <router-link class="mx-3" to="/users">Users</router-link>
      </li>
      <li>
        <router-link class="mx-3" to="/pets">Pets</router-link>
      </li>
    </ul>
  </nav>
</template>

<script>
export default {};
</script>

<style>
ul {
  list-style: none;
}
a,
a:hover {
  color: yellow;
  text-decoration: none;
  display: block;
  padding: 10px 20px;
}
.active{
  color: yellow;
  border-bottom: 2px solid yellow;

}
</style>
