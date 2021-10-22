<template>
  <tbody>
    <user-item
      v-for="(user, index) in userListBySearchName"
      :key="index"
      :user="user"
    ></user-item>
  </tbody>
</template>

<script>
import UserItem from "./UserItem.vue";
import { createNamespacedHelpers } from "vuex";
const { mapState, mapGetters, mapActions } = createNamespacedHelpers("user");
export default {
  components: {
    UserItem,
  },
  props: {},
  data: function () {
    return {};
  },
  watch: {},
  // computed: mapState(["userList"]),
  computed: {
    loading() {
      return false;
    },
    ...mapState({
      userList: (state) => state.userList,
      // users: "userList",
    }),
    ...mapGetters({
      userListFilterBoy: "userListByBoy",
      userListBySearchName: "userListBySearchName",
    }),
  },
  methods: {
    ...mapActions({
      getAllUser: "getAllUserAction",
    }),
  },
  created() {
    this.getAllUser();
  },
};
</script>

<style></style>
