import axios from "axios";
export const getStocks = async () => {
  try {
    const response = await axios.get(
      "https://api.npoint.io/7b825fc033de0f07e280"
    );
    const data = response.data;

    return data;
  } catch (error) {
    console.log(error);
  }
};
