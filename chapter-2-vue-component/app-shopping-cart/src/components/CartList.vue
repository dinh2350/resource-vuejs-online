<template>
  <table class="table">
    <thead>
      <tr>
        <th>STT</th>
        <th>Tên</th>
        <th>Giá</th>
        <th>Số Lượng Trong Kho</th>
        <th>Số Lượng</th>
        <th>Thành Tiền</th>
        <th>Hành Động</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="(cart, index) in cartList" :key="index">
        <td scope="row">{{ index + 1 }}</td>
        <td>{{ cart.name }}</td>
        <td>{{ cart.price }}</td>
        <td>{{ cart.quantityInStock }}</td>
        <td>
          <button
            class="btn btn-success"
            @click="handleUpOrDownAmount(true, cart)"
          >
            <i class="fa fa-arrow-up"></i>
          </button>
          <span class="mx-2">{{ cart.amount }}</span>
          <button
            class="btn btn-success"
            @click="handleUpOrDownAmount(false, cart)"
          >
            <i class="fa fa-arrow-down"></i>
          </button>
        </td>
        <td>{{ cart.amount * cart.price }}</td>
        <td>
          <button class="btn btn-danger" @click="hanldeDelete(cart)">
            <i class="fa fa-trash"></i>
          </button>
        </td>
      </tr>
      <tr>
        <td scope="row">Tổng Tiền</td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td>{{ sumMonney }}</td>
        <td></td>
      </tr>
    </tbody>
  </table>
</template>

<script>
export default {
  props: {
    cartList: {
      type: Array,
    },
  },
  computed: {
    sumMonney() {
      return this.cartList.reduce(
        (sum, cart) => (sum += cart.amount * cart.price),
        0
      );
    },
  },
  methods: {
    hanldeDelete(cart) {
      this.$emit("hanlde-delete-cart", cart);
    },
    handleUpOrDownAmount(status, cart) {
      this.$emit("hanlde-up-or-down-amount-cart", { status, cart });
    },
  },
};
</script>

<style></style>
