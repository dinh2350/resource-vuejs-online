<template>
  <h1>Hello World !</h1>
  <FirstComponent></FirstComponent>
  <FirstComponent />
  <first-component></first-component>
  <first-component />
  <SecondComponent />
  <ProductList />
  <GobalComponent />
  <hr />
  <DemoSlots>
    <template #header>
      <h1>Header</h1>
    </template>
    <template #footer>
      <h1>footer</h1>
    </template>
    <template #default>
      <h1>Default</h1>
    </template>
  </DemoSlots>
  <hr />
  <DemoDynamicComponent />
  <br />
  <br />
  <br />
  <br />
  <br />
  <br />
</template>

<script>
import FirstComponent from "./components/FirstComponent.vue";
import SecondComponent from "./components/SecondComponent.vue";
import ProductList from "./components/ProductList.vue";
import DemoSlots from "./components/DemoSlots.vue";
import DemoDynamicComponent from "./components/DemoDynamicComponent.vue";
export default {
  name: "App",
  components: {
    FirstComponent, // FirstComponent : FirstComponent
    SecondComponent,
    ProductList,
    DemoSlots,
    DemoDynamicComponent,
  },
  provide() {
    return {
      user: "Nguyễn Phong Hào",
    };
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
