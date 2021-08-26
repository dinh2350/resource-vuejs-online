<template>
  <section class="container">
    <div class="row">
      <div class="col-sm-4">
        <img class="img-thumbnail" :src="productDetail.image" alt="" />
      </div>
      <div class="col-sm-8">
        <div class="alert alert-success">
          <b>Name : </b><span>{{ productDetail.name }}</span>
        </div>
        <div class="alert alert-success">
          <b>Mô tả : </b><span>{{ productDetail.description }}</span>
        </div>
        <div class="alert alert-success">
          <b>Giá Bán : </b><span>{{ productDetail.price }} VNĐ </span>
        </div>
        <div class="alert alert-success">
          <b>SỐ lượng tồn kho : </b
          ><span>{{ productDetail.quantityInStock }}</span>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  props: {
    productDetail: {
      type: Object,
    },
  },
};
</script>

<style></style>
