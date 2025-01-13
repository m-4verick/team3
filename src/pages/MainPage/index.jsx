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
import { useState } from "react";
import PokemonPage from "../basic-apps/pokemon/PokemonPage.jsx";
import Photos from "../basic-apps/PhotosPage/Photos.jsx";

export default function MainPage() {
  const [isOpenWindow, setIsOpenWindow] = useState(false);

  return (
    <BrowserRouter>
      <NavermapsProvider
        ncpClientId="fpjyy01mcj"
        // or finClientId, govClientId
      >
        <Background>
          <Navbar />
          <Window isOpenWindow={isOpenWindow} setIsOpenWindow={setIsOpenWindow}>
            <Routes>
              <Route path="/" element={<></>} />
              <Route path="/safari" element={<SafariPage />} />
              <Route path="/maps" element={<MapPage />} />
              <Route path="/dictionary" element={<DictionaryPage />} />
              <Route path="/photos" element={<Photos />} />
              <Route path="/sjh" element={<ShinJinHoPage />} />
              <Route path="/kmh" element={<KimMinHeePage />} />
              <Route path="/ksw" element={<KimSeungWooPage />} />
              <Route path="/mjy" element={<MinJiYoungPage />} />
              <Route path="/khs/*" element={<KimHeeSeongPage />} />
              <Route path="/pokemon" element={<PokemonPage />} />
            </Routes>
          </Window>

          <Dock isOpenWindow={isOpenWindow} setIsOpenWindow={setIsOpenWindow} />
        </Background>
      </NavermapsProvider>
    </BrowserRouter>
  );
}
