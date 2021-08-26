<template>
  <table class="table">
    <thead>
      <tr>
        <th scope="col">STT</th>
        <th scope="col">Tên</th>
        <th scope="col">Giá</th>
        <th scope="col">Số Lượng Trong Kho</th>
        <th scope="col">Số Lượng</th>
        <th scope="col">Thành Tiền</th>
        <th scope="col">Hành Động</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="(cart, index) in cartList" :key="cart.id">
        <th scope="row">{{ index + 1 }}</th>
        <td>{{ cart.name }}</td>
        <td>{{ cart.price }}</td>
        <td>{{ cart.quantityInStock }}</td>
        <td>
          <button
            class="btn btn-success"
            @click="handleUpOrDownAmount(cart, true)"
          >
            <i class="fa fa-arrow-up"></i>
          </button>
          <span class="mx-2">{{ cart.amount }}</span>
          <button
            class="btn btn-success"
            @click="handleUpOrDownAmount(cart, false)"
          >
            <i class="fa fa-arrow-down"></i>
          </button>
        </td>
        <td>
          {{ cart.price * cart.amount }}
        </td>
        <td>
          <button class="btn btn-danger" @click="handleRemoveCart(cart)">
            <i class="fa fa-trash"></i>
          </button>
        </td>
      </tr>
    </tbody>
    <tfoot>
      <th scope="row">Tổng Tiền</th>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
      <td>
        {{ totalMonney }}
      </td>
      <td></td>
    </tfoot>
  </table>
</template>

<script>
export default {
  props: {
    cartList: {
      type: Array,
    },
    handleUpOrDownAmount: {
      type: Function,
    },
    handleRemoveCart: {
      type: Function,
    },
  },
  computed: {
    totalMonney() {
      return this.cartList.reduce(
        (total, cart) => (total += cart.price * cart.amount),
        0
      );
    },
  },
};
</script>

<style></style>
