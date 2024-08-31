import axios from "axios";

const MY_API = import.meta.env.VITE_MY_API;  // Ensure this environment variable is set properly
const BASE_URL = "https://youtube138.p.rapidapi.com";

const options = {
  headers: {
    'x-rapidapi-key': MY_API,
    'x-rapidapi-host': 'youtube138.p.rapidapi.com'
  }
};

export const fetchData = async (url) => {
  try {
    const { data } = await axios.get(`${BASE_URL}/${url}`, options);
    return data;
  } catch (error) {
    console.error("Error while fetching api data: ", error);
    throw error;
  }
};
