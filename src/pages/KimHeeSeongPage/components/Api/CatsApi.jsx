import axios from "axios";

const BASE_URL = "https://cataas.com";

export const getCat = async () => {
  try {
    const res = await axios.get(`${BASE_URL}/cat`);
    const { _id } = res.data; // API 응답에서 _id 추출
    return `${BASE_URL}/cat/${_id}`; // 이미지 URL 반환
  } catch {
    console.error("불러오기 실패", error);
    console.log("불러오기에 실패 했습니다.");
  }
};
