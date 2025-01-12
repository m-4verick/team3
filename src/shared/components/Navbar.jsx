import appleLogo from "../assets/appleLogo.png";
import wifi from "../assets/wifi.png";
import search from "../assets/search.png";
import profile from "../assets/profile.png";
import controlpanel from "../assets/controlpanel.png";
import useTimer from "../../pages/MainPage/hooks/useTimer.js";
import { useState } from "react";
import Overview from "../../pages/MainPage/components/Overview.jsx";

export default function Navbar({ isLock = false }) {
  const time = useTimer();
  const [isOpenOverview, setIsOpenOverview] = useState(false);

  //Overview 관련
  const handleOpenOverview = () => {
    setIsOpenOverview(() => true);
  };

  const handleCloseOverview = () => {
    setIsOpenOverview(() => false);
  };

  if (isLock)
    return (
      <div className="w-full h-7 flex items-center px-5 justify-between">
        <div className="flex items-center justify-end w-screen gap-3 cursor-pointer">
          <img src={wifi} />
          <img src={profile} />
          <img src={controlpanel} />
        </div>
      </div>
    );

  return (
    <>
      <div className="w-full h-7 flex items-center px-5 justify-between bg-white bg-opacity-50">
        <div className="flex items-center w-full gap-1 cursor-pointer">
          <button className="pt-1 pb-1 pl-1 pr-1" onClick={handleOpenOverview}>
            <img src={appleLogo} />
          </button>

          <div className="relative group">
            <button className="pt-1 pb-1 pl-1 pr-1">
              <p>View</p>
            </button>
            <div className="bg-white min-w-[100px] w-auto h-auto pr-1 pl-1 pb-1 pt-1 z-10 bg-white rounded-md shadow-xl border border-black border-opacity-10 absolute z-50 bg-opacity-75 hidden group-hover:block transition-all delay-200 opacity-0 group-hover:opacity-100 backdrop-blur">
              <ul className="border-b border-gray-300 pb-1">
                <li className="whitespace-nowrap rounded-md pl-2 pr-2 hover:bg-[#007AFF] hover:text-white">
                  <a href="https://github.com/m-4verick/team3" target="_blank">
                    team3 GitHub - m-4verick/team3: 3팀이다.
                  </a>
                </li>
              </ul>
              <ul className="pt-1">
                <li className="whitespace-nowrap rounded-md pl-2 pr-2 hover:bg-[#007AFF] hover:text-white">
                  <a href="https://github.com/m-4verick" target="_blank">
                    신진호 GitHub - m-4verick
                  </a>
                </li>
                <li className="whitespace-nowrap rounded-md pl-2 pr-2 hover:bg-[#007AFF] hover:text-white">
                  <a href="https://github.com/smnhree" target="_blank">
                    김민희 GitHub - smnhree
                  </a>
                </li>
                <li className="whitespace-nowrap rounded-md pl-2 pr-2 hover:bg-[#007AFF] hover:text-white">
                  <a href="https://github.com/stevenkim18" target="_blank">
                    김승우 GitHub - stevenkim18
                  </a>
                </li>
                <li className="whitespace-nowrap rounded-md pl-2 pr-2 hover:bg-[#007AFF] hover:text-white">
                  <a
                    href="https://github.com/Obsessive-Curiosity"
                    target="_blank"
                  >
                    민지영 GitHub - Obsessive-Curiosity
                  </a>
                </li>
                <li className="whitespace-nowrap rounded-md pl-2 pr-2 hover:bg-[#007AFF] hover:text-white">
                  <a href="https://github.com/HEES56" target="_blank">
                    김희성 GitHub - HEES56
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="relative group">
            <button className="pt-1 pb-1 pl-1 pr-1">
              <p>File</p>
            </button>
            <div className="bg-white min-w-[100px] w-auto h-auto pr-1 pl-1 pb-1 pt-1 z-10 bg-white rounded-md shadow-xl border border-black border-opacity-10 absolute z-50 bg-opacity-75 hidden group-hover:block transition-all delay-200 opacity-0 group-hover:opacity-100 backdrop-blur">
              <ul className="border-b border-gray-300 pb-1">
                <li className="whitespace-nowrap rounded-md pl-2 pr-2 hover:bg-[#007AFF] hover:text-white">
                  <a
                    href="https://docs.google.com/spreadsheets/d/1lq0dXMobJJ07-slz-yaA2mKv9nMey1_n96jtyYiNo_8/edit?gid=662460631#gid=662460631"
                    target="_blank"
                  >
                    team3 실습 페이지 - Google Sheets
                  </a>
                </li>
              </ul>
              <ul className="pt-1">
                <li className="whitespace-nowrap rounded-md pl-2 pr-2 hover:bg-[#007AFF] hover:text-white">
                  <a href="https://www.codeit.kr/" target="_blank">
                    코드잇 | 코딩, 쉬워질 때도 됐다.
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="relative group">
            <button className="pt-1 pb-1 pl-1 pr-1">
              <p>Edit</p>
            </button>
            <div className="bg-white min-w-[100px] w-auto h-auto pr-1 pl-1 pb-1 pt-1 z-10 bg-white rounded-md shadow-xl border border-black border-opacity-10 absolute z-50 bg-opacity-75 hidden group-hover:block transition-all delay-200 opacity-0 group-hover:opacity-100 backdrop-blur">
              <ul>
                <li className="whitespace-nowrap rounded-md pl-2 pr-2 hover:bg-[#007AFF] hover:text-white">
                  <a
                    href="https://app.gather.town/app/wDi5d4H5atrfu9v3/good101"
                    target="_blank"
                  >
                    good101 | Gather
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="relative group">
            <button className="pt-1 pb-1 pl-1 pr-1">
              <p>View</p>
            </button>
            <div className="bg-white min-w-[100px] w-auto h-auto pr-1 pl-1 pb-1 pt-1 z-10 bg-white rounded-md shadow-xl border border-black border-opacity-10 absolute z-50 bg-opacity-75 hidden group-hover:block transition-all delay-200 opacity-0 group-hover:opacity-100 backdrop-blur">
              <ul>
                <li className="whitespace-nowrap rounded-md pl-2 pr-2 hover:bg-[#007AFF] hover:text-white">
                  뭐하지...
                </li>
              </ul>
            </div>
          </div>

          <div className="relative group">
            <button className="pt-1 pb-1 pl-1 pr-1">
              <p>Go</p>
            </button>
            <div className="bg-white min-w-[100px] w-auto h-auto pr-1 pl-1 pb-1 pt-1 z-10 bg-white rounded-md shadow-xl border border-black border-opacity-10 absolute z-50 bg-opacity-75 hidden group-hover:block transition-all delay-200 opacity-0 group-hover:opacity-100 backdrop-blur">
              <ul className="border-b border-gray-300 pb-1">
                <li className="whitespace-nowrap rounded-md pl-2 pr-2 hover:bg-[#007AFF] hover:text-white">
                  <a
                    className="whitespace-nowrap"
                    href="https://react.dev/"
                    target="_blank"
                  >
                    React
                  </a>
                </li>
                <li className="whitespace-nowrap rounded-md pl-2 pr-2 hover:bg-[#007AFF] hover:text-white">
                  <a
                    className="whitespace-nowrap"
                    href="https://tailwindcss.com/"
                    target="_blank"
                  >
                    Tailwind CSS - Rapidly build modern websites without ever
                    leaving your HTML.
                  </a>
                </li>
                <li className="whitespace-nowrap rounded-md pl-2 pr-2 hover:bg-[#007AFF] hover:text-white">
                  <a
                    className="whitespace-nowrap"
                    href="https://www.coderabbit.ai/"
                    target="_blank"
                  >
                    AI Code Reviews | CodeRabbit | Try for Free
                  </a>
                </li>
                <li className="whitespace-nowrap rounded-md pl-2 pr-2 hover:bg-[#007AFF] hover:text-white">
                  <a
                    className="whitespace-nowrap"
                    href="https://v0.dev/"
                    target="_blank"
                  >
                    v0 by Vercel
                  </a>
                </li>
              </ul>
              <ul className="pt-1">
                <li className="whitespace-nowrap rounded-md pl-2 pr-2 hover:bg-[#007AFF] hover:text-white">
                  더 보기...
                </li>
              </ul>
            </div>
          </div>

          <div className="relative group">
            <button className="pt-1 pb-1 pl-1 pr-1">
              <p>Window</p>
            </button>
            <div className="bg-white min-w-[100px] w-auto h-auto pr-1 pl-1 pb-1 pt-1 z-10 bg-white rounded-md shadow-xl border border-black border-opacity-10 absolute z-50 bg-opacity-75 hidden group-hover:block transition-all delay-200 opacity-0 group-hover:opacity-100 backdrop-blur">
              <ul>
                <li className="whitespace-nowrap rounded-md pl-2 pr-2 hover:bg-[#007AFF] hover:text-white">
                  뭐하남...
                </li>
              </ul>
            </div>
          </div>

          <div className="relative group">
            <button className="pt-1 pb-1 pl-1 pr-1">
              <p>Help</p>
            </button>
            <div className="bg-white min-w-[100px] w-auto h-auto pr-1 pl-1 pb-1 pt-1 z-10 bg-white rounded-md shadow-xl border border-black border-opacity-10 absolute z-50 bg-opacity-75 hidden group-hover:block transition-all delay-200 opacity-0 group-hover:opacity-100 backdrop-blur">
              <ul>
                <li className="whitespace-nowrap rounded-md pl-2 pr-2 hover:bg-[#007AFF] hover:text-white">
                  도움말
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="flex items-center justify-end w-screen gap-3 cursor-pointer">
          <img src={wifi} />
          <img src={search} />
          <img src={profile} />
          <img src={controlpanel} />
          <p className="w-[120px] text-center">{time}</p>
        </div>
      </div>
      {isOpenOverview && (
        <Overview isOpen={isOpenOverview} onClose={handleCloseOverview} />
      )}
    </>
  );
}
