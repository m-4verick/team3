import axios from "axios";

const BASE_URL = "https://poreapi.co/api/v2/pokemo/";

export const getPokemonData = async () => {
  try {
    const res = await axios.get(`${BASE_URL}?limit-100&offset=0`);
    console.log(res.data);
    return res.data;
  } catch {
    console.error("불러오기 실패", error);
    console.log("불러오기에 실패 했습니다.");
  }
};
