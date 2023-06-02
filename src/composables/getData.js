import axios from "axios";
import { ref } from "vue";

export const useGetData = () => {
  const data = ref(null);

  const getdata = async (url) => {
    try {
      const { data } = await axios.get(url);
      data.value = res.data;
    } catch (error) {
      console.log(error);
    }
  };

  return {
    getdata,
    data,
  };
};
