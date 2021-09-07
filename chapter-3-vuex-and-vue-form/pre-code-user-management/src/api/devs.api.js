export const getAllDevsAPIs = async () => {
  try {
    const response = await fetch(
      "https://5fb26e6787ed490016ea8e2b.mockapi.io/devs"
    );
    const data = await response.json();
    return data;
  } catch (error) {
    throw new Error(error);
  }
};

export const createDevAPIs = async (dev) => {
  try {
    const response = await fetch(
      "https://5fb26e6787ed490016ea8e2b.mockapi.io/devs",
      {
        method: "POST", // *GET, POST, PUT, DELETE, etc.
        mode: "cors", // no-cors, *cors, same-origin
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(dev), // body data type must match "Content-Type" header
      }
    );
    const data = await response.json();
    return data;
  } catch (error) {
    throw new Error(error);
  }
};

export const removeDevAPIs = async (id) => {
  try {
    const response = await fetch(
      `https://5fb26e6787ed490016ea8e2b.mockapi.io/devs/${id}`,
      {
        method: "DELETE", // *GET, POST, PUT, DELETE, etc.
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    const data = await response.json();
    return data;
  } catch (error) {
    throw new Error(error);
  }
};

export const updateDevAPIs = async (id, dev) => {
  try {
    const response = await fetch(
      `https://5fb26e6787ed490016ea8e2b.mockapi.io/devs/${id}`,
      {
        method: "PUT", // *GET, POST, PUT, DELETE, etc.
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(dev), // body data type must match "Content-Type" header
      }
    );
    const data = await response.json();
    return data;
  } catch (error) {
    throw new Error(error);
  }
};

export const getDetailDevAPIs = async (id) => {
  try {
    const response = await fetch(
      `https://5fb26e6787ed490016ea8e2b.mockapi.io/devs/${id}`,
      {
        method: "GET", // *GET, POST, PUT, DELETE, etc.
      }
    );
    const data = await response.json();
    return data;
  } catch (error) {
    throw new Error(error);
  }
};
