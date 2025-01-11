import Background from "./components/Background.jsx";
import Navbar from "../../shared/components/Navbar.jsx";
import Dock from "./components/Dock.jsx";
import { NavermapsProvider } from "react-naver-maps";

// import ShinJinHoPage from "../ShinJinHoPage/index.jsx";
import Window from "../../shared/components/Window.jsx";

export default function MainPage() {
  return (
    <NavermapsProvider
      ncpClientId="fpjyy01mcj"
      // or finClientId, govClientId
    >
      <Background>
        <Navbar />

        <Window></Window>

        <Dock />
      </Background>
    </NavermapsProvider>
  );
}
