<template>
  <div class="card" style="width: 18rem;">
    <img class="card-img-top" :src="productItem.image" alt="Card image cap" />
    <div class="card-body">
      <h5 class="card-title">{{ productItem.name }}</h5>
      <div class="card-text text-danger">
        <h4 class="">{{ productItem.price }} VNĐ</h4>
      </div>
      <button class="btn btn-danger" @click="handleAddCart(productItem)">
        Mua
      </button>
      <button class="btn btn-info ml-2" @click="handleOpenModal">
        Chi Tiết
      </button>
    </div>
    <app-modal :isOpen="isOpenModal" :onClose="handleCloseModal">
      <detail-product :productItem="productItem"></detail-product>
    </app-modal>
  </div>
</template>

<script>
import DetailProduct from "./DetailProduct.vue";
export default {
  components: {
    DetailProduct,
  },
  props: {
    productItem: {
      type: Object,
    },
    handleAddCart: {
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

<style></style>
