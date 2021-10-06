<template>
  <div class="user-item">
    <h3>{{ user.name }}</h3>
    <div class="type-pet">
      <span
        v-for="(type, index) in user.typePets"
        :key="index"
        class="badge badge-secondary ml-2"
        >{{ type }}</span
      >
    </div>
    <div>
      <button class="btn btn-info" @click="handleClickDetail">
        go to detail
      </button>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    user: {
      type: Object,
    },
  },
  methods: {
    handleClickDetail() {
      this.$router.replace({ path: `/users-detail` });
    },
  },
};
</script>

<style>
.user-item {
  max-width: 500px;
  padding: 20px;
  border: 1px solid black;
  border-radius: 22px;
}
</style>
