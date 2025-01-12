import { BrowserRouter, Route, Routes } from "react-router-dom";
import { NavermapsProvider } from "react-naver-maps";

import Background from "./components/Background.jsx";
import Navbar from "../../shared/components/Navbar.jsx";
import Dock from "./components/Dock.jsx";
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
              <Route path="/" element={<KimMinHeePage />} />
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
  );
}
