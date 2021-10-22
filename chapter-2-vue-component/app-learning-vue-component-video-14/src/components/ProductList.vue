<template>
  <section class="container">
    <div class="row">
      <div
        v-for="(productItem, index) in proList"
        class="col-sm-3"
        :key="index"
      >
        <ProductItem
          :proItem="productItem"
          :multipleType="'Nguyễn Phong Hào'"
          @custom-handle-select="hanldeSelect"
        />
      </div>
    </div>
    <div>
      <teleport to="body">
        <base-modal />
      </teleport>
    </div>
  </section>
</template>

<script>
import ProductItem from "./ProductItem.vue";
import BaseModal from "./BaseModal.vue";
export default {
  methods: {
    hanldeSelect(proItem) {
      console.log("work", proItem);
    },
  },
  data() {
    return {
      proList: [
        {
          urlImage:
            "https://salt.tikicdn.com/cache/200x200/ts/product/90/c1/c8/5dd3cb13601f8a2d1ede1c6af5a18862.jpg.webp",
          nameProduct: "Macbook Pro M1",
        },
        {
          urlImage:
            "https://salt.tikicdn.com/cache/200x200/ts/product/86/2d/db/b4e04d264833d9ee485885a5c9af3c44.jpg.webp",
          nameProduct: "Acer Nitro 5",
        },
        {
          urlImage:
            "https://salt.tikicdn.com/cache/200x200/ts/product/90/c1/c8/5dd3cb13601f8a2d1ede1c6af5a18862.jpg.webp",
          nameProduct: "Macbook Air M1",
        },
        {
          urlImage:
            "https://salt.tikicdn.com/cache/200x200/ts/product/96/14/33/958230ee926098173c8725b3942ca6ad.jpg.webp",
          nameProduct: "Asus Zenbook",
        },
      ],
    };
  },
  components: {
    ProductItem,
    BaseModal,
  },
};
</script>

<style></style>
