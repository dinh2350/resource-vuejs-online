<template>
  <section class="container">
    <h1>Demo Form</h1>
    <form @submit.prevent="handleSubmit">
      <div class="form-group">
        <label for="taiKhoan">Tài Khoản</label>
        <input
          type="text"
          class="form-control"
          id="taiKhoan"
          v-model.trim="taiKhoan"
        />
      </div>
      <div class="form-group">
        <label for="baiLam">Bài Làm</label>
        <textarea
          class="form-control"
          id="baiLam"
          rows="20"
          v-model="vanMau"
        ></textarea>
      </div>
      <div class="form-check">
        <input
          type="checkbox"
          class="form-check-input"
          id="isSave"
          v-model="isSave"
        />
        <label class="form-check-label" for="isSave"
          >Có Muốn Lưu Tài Khoản Không ?</label
        >
      </div>
      <div>
        <h1>Bạn muốn sông ở đâu ?</h1>
        <div class="form-check">
          <input
            type="checkbox"
            class="form-check-input"
            value="Thành Phố Hồ Chí Minh"
            v-model="noiMuonSong"
          />
          <label class="form-check-label">Thành Phố Hồ Chí Minh</label>
        </div>
        <div class="form-check">
          <input
            type="checkbox"
            class="form-check-input"
            value="Thành Phố Đà Nẵng"
            v-model="noiMuonSong"
          />
          <label class="form-check-label">Thành Phố Đà Nẵng</label>
        </div>
        <div class="form-check">
          <input
            type="checkbox"
            class="form-check-input"
            value="Thủ Đô Hà Nội"
            v-model="noiMuonSong"
          />
          <label class="form-check-label">Thủ Đô Hà Nội</label>
        </div>
      </div>

      <div>
        <h1>Loại Người Dân</h1>
        <div class="form-check">
          <input
            class="form-check-input"
            type="radio"
            value="BT"
            v-model="loaiND"
          />
          <label class="form-check-label">
            Bình Thường
          </label>
        </div>
        <div class="form-check">
          <input
            class="form-check-input"
            type="radio"
            value="N"
            v-model="loaiND"
          />
          <label class="form-check-label">
            Nghèo
          </label>
        </div>
        <div class="form-check">
          <input
            class="form-check-input"
            type="radio"
            value="CN"
            v-model="loaiND"
          />
          <label class="form-check-label">
            Cận Nghèo
          </label>
        </div>
      </div>

      <div>
        <label>Chọn Lớp</label>
        <select class="custom-select mr-sm-2" v-model="lop">
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
          <option value="5">5</option>
          <option value="6">6</option>
          <option value="7">7</option>
          <option value="8">8</option>
          <option value="9">9</option>
          <option value="10">10</option>
          <option value="11">11</option>
          <option value="12">12</option>
        </select>
      </div>

      <div class="form-group">
        <label for="age">Age</label>
        <input type="text" class="form-control" id="age" v-model.number="age" />
      </div>

      <button type="submit" class="btn btn-success">
        Submit
      </button>
    </form>
  </section>
</template>

<script>
export default {
  data() {
    return {
      taiKhoan: "",
      vanMau: "đề bài : viết cảm nghĩ của bạn về js",
      isSave: false,
      noiMuonSong: [],
      loaiND: "",
      lop: 1,
      age: "1",
    };
  },
  methods: {
    handleSubmit() {
      console.log(this.taiKhoan);
      console.log(this.vanMau);
      console.log(this.isSave);
      console.log(this.noiMuonSong);
      console.log(this.loaiND);
      console.log(this.lop);
      console.log(typeof this.age);
    },
  },
};
</script>

<style></style>
