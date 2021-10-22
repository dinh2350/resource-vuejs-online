<template>
  <div class="card text-left">
    <div class="card-body text-center">
      <h4 class="card-title">Reactivity</h4>
      <p class="card-text">{{ user.name }}</p>
      <p class="card-text">{{ user.age }}</p>
      <input type="text" v-model="user.age">
      <p>{{user.age}}</p>
    </div>
  </div>
</template>

<script>
import { ref, reactive, isReactive, isRef } from "vue";
export default {
  setup() {
    let userName = ref("Nguyễn Phong Hào");
    let userAge = ref(23);

    let user = reactive({
      name: "Nguyễn Phong Hào",
      age: 23,
    });

    setTimeout(() => {
      userName.value = "Lê Huỳnh Như";
      userAge.value = 22;
      user.name = "Lê Huỳnh Như";
      user.age = 22;
    }, 2000);

    console.log(isRef(userName));
    console.log(isReactive(user));

    return {
      userName,
      userAge,
      user,
    };
  },
};
</script>

<style></style>
