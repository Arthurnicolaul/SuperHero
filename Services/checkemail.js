import axios from "axios";

const checkEmailExists = async (email) => {
  try {
    const response = await axios.get(`192.168.1.127/user?email=${email}`);
    return response.data.length > 0;
  } catch (error) {
    console.log(error);
    return false;
  }
};

export default checkEmailExists;
