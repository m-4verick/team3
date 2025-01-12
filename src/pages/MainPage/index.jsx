import { BrowserRouter, Route, Routes } from "react-router-dom";
import { NavermapsProvider } from "react-naver-maps";

import Background from "./components/Background.jsx";
import Navbar from "../../shared/components/Navbar.jsx";
import Dock from "./components/Dock.jsx";
<<<<<<< HEAD
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
=======
import Window from "../../shared/components/Window.jsx";

import SafariPage from "../../pages/basic-apps/SafariPage";
import MapPage from "../../pages/basic-apps/MapPage";
import DictionaryPage from "../../pages/basic-apps/DictionaryPage";
import ShinJinHoPage from "../../pages/ShinJinHoPage";
import KimMinHeePage from "../../pages/KimMinHeePage";
import KimSeungWooPage from "../../pages/KimSeungWooPage";
import MinJiYoungPage from "../../pages/MinJiYeongPage";
import KimHeeSeongPage from "../../pages/KimHeeSeongPage";

export default function MainPage() {
  return (
    <BrowserRouter>
      <NavermapsProvider
        ncpClientId="fpjyy01mcj"
        // or finClientId, govClientId
      >
        <Background>
          <Navbar />

          <Window>
            <Routes>
              <Route path="/" element={<ShinJinHoPage />} />
              <Route path="/safari" element={<SafariPage />} />
              <Route path="/maps" element={<MapPage />} />
              <Route path="/dictionary" element={<DictionaryPage />} />
              <Route path="/sjh" element={<ShinJinHoPage />} />
              <Route path="/kmh" element={<KimMinHeePage />} />
              <Route path="/ksw" element={<KimSeungWooPage />} />
              <Route path="/mjy" element={<MinJiYoungPage />} />
              <Route path="/khs" element={<KimHeeSeongPage />} />
            </Routes>
          </Window>

          <Dock />
        </Background>
      </NavermapsProvider>
    </BrowserRouter>
>>>>>>> main
  );
}
