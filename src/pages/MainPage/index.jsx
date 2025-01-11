import Background from "./components/Background.jsx";
import Navbar from "../../shared/components/Navbar.jsx";
import Dock from "./components/Dock.jsx";
import memo from "../../shared/assets/memo.png";
import map from "../../shared/assets/map.png";
import safari from "../../shared/assets/safari.png";
import dictionary from "../../shared/assets/dictionary.png";
import Icon from "./components/Icon.jsx";
import sample from "../../shared/assets/sample-icon.png";
import { NavermapsProvider } from "react-naver-maps";
import maverick from "../../shared/assets/maverick.png";
import KimMinHeePage from "../KimMinHeePage/index.jsx";

export default function MainPage() {
  return (
    <NavermapsProvider
      ncpClientId="fpjyy01mcj"
      // or finClientId, govClientId
    >
      <Background>
        <Navbar />

        <KimMinHeePage />

        <Dock>
          <Icon image={safari} label="사파리" />
          <Icon image={memo} label="메모" />
          <Icon image={map} label="지도" />
          <Icon image={dictionary} label="영어사전" />
          <Icon image={maverick} label="신진호" />
          <Icon image={sample} label="김민희" />
          <Icon image={sample} label="김승우" />
          <Icon image={sample} label="민지영" />
          <Icon image={sample} label="김희성" />
        </Dock>
      </Background>
    </NavermapsProvider>
  );
}
