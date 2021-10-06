const state = function() {
  return {
    userList: [
      {
        name: "Nguyễn Phong Hào",
        typePets: ["Chó", "Mèo"],
      },
      {
        name: "Vương Mộng Hùng",
        typePets: ["Chuột", "Cá"],
      },
    ],
  };
};

export default {
  namespaced: true,
  state,
};
