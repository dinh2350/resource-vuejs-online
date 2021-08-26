<template>
  <div class="row">
    <div class="col-12 grid-margin">
      <div class="card">
        <div class="card-body">
          <h4 class="card-title">Dev Management</h4>
          <div class="card-bar-controll">
            <div class="form-group">
              <div class="input-group">
                <input
                  type="text"
                  class="form-control"
                  placeholder="Recipient's username"
                  aria-label="Recipient's username"
                  aria-describedby="basic-addon2"
                />
                <div class="input-group-append">
                  <button class="btn btn-sm btn-gradient-primary" type="button">
                    Search
                  </button>
                </div>
              </div>
            </div>
            <div>
              <button
                type="button"
                class="mr-2 btn btn-gradient-primary btn-icon-text"
                @click="handleOpenModalCartList"
              >
                <i class="mdi mdi-account-plus btn-icon-prepend"></i> ADD
              </button>
            </div>
          </div>
          <div class="table-responsive">
            <table class="table">
              <thead>
                <tr>
                  <th>User</th>
                  <th>Age</th>
                  <th>Programming Language</th>
                  <th>Gender</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>
                    <img
                      src="assets/images/faces/face1.jpg"
                      class="mr-2"
                      alt="image"
                    />
                    Nguyễn Phong Hào
                  </td>
                  <td>23</td>
                  <td>
                    <label class="badge badge-gradient-primary mr-2"
                      >Java</label
                    >
                    <label class="badge badge-gradient-primary mr-2"
                      >Java</label
                    >
                    <label class="badge badge-gradient-primary mr-2"
                      >Java</label
                    >
                  </td>
                  <td>Nam</td>
                  <td>
                    <button
                      type="button"
                      class="mr-2 btn btn-gradient-danger btn-icon-text"
                    >
                      <i class="mdi mdi-delete btn-icon-prepend"></i> Remove
                    </button>
                    <button
                      type="button"
                      class="btn btn-gradient-info btn-icon-text"
                    >
                      <i class="mdi mdi-border-color btn-icon-prepend"></i> Edit
                    </button>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
    <teleport to="#app">
      <app-modal
        :isOpen="isOpenModalCartList"
        :handelCloseModal="handleCloseModalCartList"
      >
        <form-add-user></form-add-user>
      </app-modal>
    </teleport>
  </div>
</template>

<script>
import FormAddUser from "./FormAddUser.vue";
export default {
  components: {
    FormAddUser,
  },
  data() {
    return {
      isOpenModalCartList: false, // đóng modal
    };
  },
  methods: {
    handleOpenModalCartList() {
      this.isOpenModalCartList = true; // mở modal
    },
    handleCloseModalCartList() {
      this.isOpenModalCartList = false; // đóng modal
    },
  },
};
</script>

<style>
.card-bar-controll {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
</style>
