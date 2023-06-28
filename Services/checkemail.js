import axios from "axios";

const checkEmailExists = async (email) => {
  try {
    const response = await axios.get(`10.0.10.241:3000/user?email=${email}`);
    return response.data.length > 0;
  } catch (error) {
    console.log(error);
    return false;
  }
};

export default checkEmailExists;
