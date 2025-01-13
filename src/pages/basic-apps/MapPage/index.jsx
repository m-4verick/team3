import { Container as MapDiv } from "react-naver-maps";
import { MyMap } from "./components/Map.jsx";
import SearchHeader from "../../../shared/components/SearchHeader.jsx";

export default function MapPage() {
  return (
      <>
          <SearchHeader title="현피 지도"/>
      <MapDiv
        style={{
          width: "100%",
          height: "550px",
        }}
      >
        <MyMap />
      </MapDiv>
      </>
  );
}
