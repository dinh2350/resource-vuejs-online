<template>
  <nav class="navbar navbar-dark bg-dark  navbar-expand-lg">
    <!-- Navbar content -->

    <a class="navbar-brand header__logo" href="#">TurnCart</a>
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
      <div class="ml-2 ">
        <button type="button" class="btn btn-danger" @click="handleOpenModal">
          <i class="fa fa-shopping-cart"></i>
          <span class="badge badge-light ml-2">{{ sumAmountCart }}</span>
          <span class="sr-only">unread messages</span>
        </button>
      </div>
    </div>
  </nav>
  <app-modal :isOpen="isOpenModal" :onClose="handleCloseModal">
    <cart-list
      :cartList="cartList"
      :handleUpOrDownAmount="handleUpOrDownAmount"
      :handleRemoveCart="handleRemoveCart"
    ></cart-list>
  </app-modal>
</template>

<script>
import CartList from "./CartList.vue";
export default {
  components: { CartList },
  props: {
    cartList: {
      type: Array,
    },
    sumAmountCart: {
      type: Number,
    },
    handleUpOrDownAmount: {
      type: Function,
    },
    handleRemoveCart: {
      type: Function,
    },
  },
  data() {
    return {
      isOpenModal: false,
    };
  },
  methods: {
    handleOpenModal() {
      this.isOpenModal = true;
    },
    handleCloseModal() {
      this.isOpenModal = false;
    },
  },
};
</script>

<style scoped>
.header__logo {
  font-size: 30px;
  background: -webkit-linear-gradient(#41b883, #35495e);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}
</style>
