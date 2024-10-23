import axios from "axios";

export const login = async (phoneNumber) => {
  const response = await axios.post("http://localhost:3002/api/v1/user/login", {
    phoneNumber: phoneNumber
  }, {
    headers: {
      " Content-Type": "application/json",
    },
  });
  return response.data;
};
