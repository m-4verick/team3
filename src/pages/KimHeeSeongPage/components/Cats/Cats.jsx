import { getCat } from "../Api/CatsApi";
import { useState } from "react";

export function Cats() {
  const [catData, SetCatData] = useState("");

  const handleCatsImg = () => {
    getCat().then((data) => {
      SetCatData(data);
    });
  };

  return (
    <>
      <div>
        <button onClick={handleCatsImg}>🐈‍</button>
        {catData && <img src={catData} alt="CatImg" className="w-[420px]" />}
      </div>
    </>
  );
}
