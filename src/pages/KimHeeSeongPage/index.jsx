import { MyStatus } from "./components/status/mystatus";
import { IntroduceSelf } from "./components/intro/introduceself";
import { MyNav } from "./components/mynav/mynav";
import { Route, Routes } from "react-router-dom";

// IntroduceSelf, MyStatus, Poketmon  라우팅하기
//

export default function KimHeeSeongPage() {
  return (
    <>
      <div>
        <MyNav />
        <Routes>
          <Route path="/Intro" element={<IntroduceSelf />} />
          <Route path="/Status" element={<MyStatus />} />
        </Routes>
        {/* <Poketmon /> */}
      </div>
    </>
  );
}
