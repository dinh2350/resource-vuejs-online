<template>
  <header>
    <the-header
      :cartList="cartList"
      @hanlde-delete-cart="handleDelete"
      @hanlde-up-or-down-amount-cart="handleUpOrDownAmount"
    />
  </header>
  <main class="container">
    <product-list @hanlde-buy="hanldeBuy" />
  </main>
</template>

<script>
import TheHeader from "./components/TheHeader.vue";
import ProductList from "./components/ProductList.vue";
export default {
  name: "App",
  components: { TheHeader, ProductList },
  data() {
    return {
      cartList: [],
    };
  },
  methods: {
    hanldeBuy(productItem) {
      const index = this.cartList.findIndex(
        (cart) => cart.id === productItem.id
      );
      if (index !== -1) {
        // tìm thấy productItem trong cartList
        this.cartList[index].amount += 1;
      } else {
        // ko tìm thấy productItem trong cartList
        const newProductItem = { ...productItem, amount: 1 };
        this.cartList = [...this.cartList, newProductItem];
      }
      // this.cartList.push(productItem);
    },
    handleDelete(cart) {
      this.cartList = this.cartList.filter(
        (cartItem) => cartItem.id !== cart.id
      );
    },
    handleUpOrDownAmount(params) {
      const { status, cart } = params;
      console.log(status, cart);
      const index = this.cartList.findIndex(
        (cartItem) => cartItem.id === cart.id
      );
      if (index !== -1) {
        if (status) {
          // tăng
          if (
            this.cartList[index].amount < this.cartList[index].quantityInStock
          ) {
            this.cartList[index].amount += 1;
          } else {
            alert("Không được tăng nữa");
          }
        } else {
          // giảm
          if (this.cartList[index].amount > 1) {
            this.cartList[index].amount -= 1;
          } else {
            alert("Không được giảm nữa");
          }
        }
      }
    },
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
}
</style>
