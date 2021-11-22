import axiosAPI from ".";

export const signInAPI = (userLogin) => {
  return axiosAPI.post("/api/auth/login", userLogin);
};
