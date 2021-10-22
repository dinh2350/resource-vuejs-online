import axios from "axios";

// promise , callback function , async/await
export const getAllUserApi = async () => {
  const res = await axios({
    method: "GET", // GET , POST , PUT , DELETE
    url: "https://6149c16307549f001755a57f.mockapi.io/users",
  });
  return res.data;
};

export const createUserApi = async (user) => {
  const res = await axios({
    method: "POST",
    url: "https://6149c16307549f001755a57f.mockapi.io/users",
    data: user,
  });
  return res.data;
};

export const removeUserApi = async (id) => {
  const res = await axios({
    method: "DELETE",
    url: `https://6149c16307549f001755a57f.mockapi.io/users/${id}`,
  });
  return res;
};

export const updateUserApi = async (user) => {
  const res = await axios({
    method: "PUT",
    url: `https://6149c16307549f001755a57f.mockapi.io/users/${user.id}`,
    data: user,
  });
  return res;
};
