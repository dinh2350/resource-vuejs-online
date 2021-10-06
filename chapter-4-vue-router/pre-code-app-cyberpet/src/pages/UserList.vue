<template>
  <h1 class="text-center text-primary">UserList</h1>
  <div class="user-list">
    <div v-for="(user, index) in userList" :key="index" class="mb-2">
      <user-item :user="user"></user-item>
    </div>
  </div>
</template>

<script>
import UserItem from "../components/UserItem.vue";
import { createNamespacedHelpers } from "vuex";
const { mapState } = createNamespacedHelpers("users");
export default {
  components: {
    UserItem,
  },
  computed: {
    ...mapState({
      userList: (state) => state.userList,
    }),
  },
};
</script>

<style>
.user-list {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
</style>
