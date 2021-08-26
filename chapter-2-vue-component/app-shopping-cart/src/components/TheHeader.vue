<template>
  <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
    <a class="navbar-brand logo" href="#">TurnCart</a>
    <button
      class="navbar-toggler"
      type="button"
      data-toggle="collapse"
      data-target="#navbarSupportedContent"
      aria-controls="navbarSupportedContent"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <span class="navbar-toggler-icon"></span>
    </button>

    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav mr-auto">
        <li class="nav-item active">
          <a class="nav-link" href="#"
            >Home <span class="sr-only">(current)</span></a
          >
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Link</a>
        </li>
        <li class="nav-item dropdown">
          <a
            class="nav-link dropdown-toggle"
            href="#"
            id="navbarDropdown"
            role="button"
            data-toggle="dropdown"
            aria-haspopup="true"
            aria-expanded="false"
          >
            Dropdown
          </a>
          <div class="dropdown-menu" aria-labelledby="navbarDropdown">
            <a class="dropdown-item" href="#">Action</a>
            <a class="dropdown-item" href="#">Another action</a>
            <div class="dropdown-divider"></div>
            <a class="dropdown-item" href="#">Something else here</a>
          </div>
        </li>
        <li class="nav-item">
          <a class="nav-link disabled" href="#">Disabled</a>
        </li>
      </ul>
      <form class="form-inline my-2 my-lg-0">
        <input
          class="form-control mr-sm-2"
          type="search"
          placeholder="Search"
          aria-label="Search"
        />
        <button class="btn btn-outline-success my-2 my-sm-0" type="submit">
          Search
        </button>
      </form>
      <div class="ml-2">
        <button class="btn btn-danger" @click="handleOpenModalCartList">
          <i class="fa fa-shopping-cart"></i>
          <span class="badge badge-light ml-2">{{ sumAmountCart }}</span>
        </button>
      </div>
    </div>
  </nav>
  <teleport to="#app">
    <app-modal
      :isOpen="isOpenModalCartList"
      :handelCloseModal="handleCloseModalCartList"
    >
      <section>
        <cart-list
          :cartList="cartList"
          @hanlde-delete-cart="handleDelete"
          @hanlde-up-or-down-amount-cart="handleUpOrDownAmount"
        />
      </section>
    </app-modal>
  </teleport>
</template>

<script>
import CartList from "./CartList.vue";
export default {
  props: {
    cartList: {
      type: Array,
    },
  },
  computed: {
    sumAmountCart() {
      return this.cartList.reduce((sum, cart) => (sum += cart.amount), 0);
    },
  },
  components: {
    CartList,
  },
  data() {
    return {
      isOpenModalCartList: false, // đóng modal
    };
  },
  methods: {
    handleOpenModalCartList() {
      this.isOpenModalCartList = true; // mở modal
    },
    handleCloseModalCartList() {
      this.isOpenModalCartList = false; // đóng modal
    },
    handleDelete(cart) {
      this.$emit("hanlde-delete-cart", cart);
    },
    handleUpOrDownAmount(params) {
      console.log(params);
      this.$emit("hanlde-up-or-down-amount-cart", params);
    },
  },
};
</script>

<style>
.logo {
  font-size: 30px;
  background: -webkit-linear-gradient(#41b883, yellow, red);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}
</style>
