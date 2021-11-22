import axiosAPI from ".";

export const signUpAPI = (userRegister) => {
  return axiosAPI.post("/api/auth/register", userRegister);
};

export const signInAPI = (userLogin) => {
  return axiosAPI.post("/api/auth/login", userLogin);
};
