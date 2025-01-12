import SearchHeader from "../../../../shared/components/SearchHeader";
import { getPokemonData } from "../Api/poketmonApi";
import { useState, useEffect } from "react";

export function Poketmon(id) {
  const [favoriteNum, setFavoriteNum] = useState();
  const [poketmonData, setPoketmonData] = useState([]);

  const handlePoketSearch = (favoriteNum) => {
    getPokemonData((id = favoriteNum)).then((data) => {
      setPoketmonData(data);
    });
  };

  return (
    <>
      <SearchHeader
        title="당신의 최애 숫자를 넣어주세요!"
        value={favoriteNum}
        onChange={(e) => setFavoriteNum(e.target.value)}
        onClick={handlePoketSearch}
      />
      <div>
        <img src={poketmonData.url} alt={poketmonData.name} />
        <p>{poketmonData.name}</p>
      </div>
    </>
  );
}
