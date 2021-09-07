<template>
  <tr>
    <td>
      <img :src="user.avatar" class="mr-2" alt="image" />
      {{ user.name }}
    </td>
    <td>{{ user.age }}</td>
    <td>
      <label
        class="badge badge-gradient-primary mr-2"
        v-for="(programming, index) in user.programmingLanguage"
        :key="index"
        >{{ programming }}</label
      >
    </td>
    <td>{{ user.gender }}</td>
    <td>
      <button
        type="button"
        class="mr-2 btn btn-gradient-danger btn-icon-text"
        @click="removeUserByid(user.id)"
      >
        <i class="mdi mdi-delete btn-icon-prepend"></i> Remove
      </button>
      <button
        type="button"
        class="btn btn-gradient-info btn-icon-text"
        @click="handleOpenModalEdit"
      >
        <i class="mdi mdi-border-color btn-icon-prepend"></i> Edit
      </button>
    </td>
  </tr>
  <teleport to="#app">
    <app-modal
      :isOpen="isOpenModalEdit"
      :handelCloseModal="handleCloseModalEdit"
    >
      <form-edit-user :userEdit="user" />
    </app-modal>
  </teleport>
</template>

<script>
import { createNamespacedHelpers } from "vuex";
import FormEditUser from "./FormEditUser.vue";
const { mapActions } = createNamespacedHelpers("user");
export default {
  components: {
    FormEditUser,
  },
  data() {
    return {
      isOpenModalEdit: false, // đóng modal
    };
  },
  props: {
    user: {
      type: Object,
    },
  },
  methods: {
    handleOpenModalEdit() {
      this.isOpenModalEdit = true; // mở modal
    },
    handleCloseModalEdit() {
      this.isOpenModalEdit = false; // đóng modal
    },
    ...mapActions({
      removeUserByid: "removeUserByid",
    }),
  },
};
</script>

<style></style>
