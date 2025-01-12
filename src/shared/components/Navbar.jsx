import appleLogo from "../assets/appleLogo.png";
import wifi from "../assets/wifi.png";
import search from "../assets/search.png";
import profile from "../assets/profile.png";
import controlpanel from "../assets/controlpanel.png";
import useTimer from "../../pages/MainPage/hooks/useTimer.js";
import { useEffect, useState } from "react";
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
        <div className="flex items-center w-full gap-5 cursor-pointer">
          <button onClick={handleOpenOverview}>
            <img src={appleLogo} />
          </button>

          <div className="relative group">
            <button>
              <p>View</p>
            </button>
            <div className="bg-white min-w-[100px] w-auto h-auto pr-2 pl-2 pb-2 pt-1 mt-1 z-10bg-white rounded-md shadow-xl border border-black border-opacity-10 absolute z-50 bg-opacity-90 bg-opacity-90 hidden group-hover:block">
              <ul className="border-b border-gray-300 pb-1">
                <li className="whitespace-nowrap rounded-md pl-1 pr-1 hover:bg-[#007AFF] hover:text-white ">
                  team3 GitHub
                </li>
              </ul>
              <ul className="pt-1">
                <li className="whitespace-nowrap rounded-md pl-1 pr-1 hover:bg-[#007AFF] hover:text-white ">
                  신진호 GitHub
                </li>
                <li className="whitespace-nowrap rounded-md pl-1 pr-1 hover:bg-[#007AFF] hover:text-white ">
                  김민희 GitHub
                </li>
                <li className="whitespace-nowrap rounded-md pl-1 pr-1 hover:bg-[#007AFF] hover:text-white ">
                  김승우 GitHub
                </li>
                <li className="whitespace-nowrap rounded-md pl-1 pr-1 hover:bg-[#007AFF] hover:text-white ">
                  민지영 GitHub
                </li>
                <li className="whitespace-nowrap rounded-md pl-1 pr-1 hover:bg-[#007AFF] hover:text-white ">
                  김희성 GitHub
                </li>
              </ul>
            </div>
          </div>

          <div className="relative group">
            <button>
              <p>File</p>
            </button>
            <div className="bg-white min-w-[100px] w-auto h-auto pr-3 pl-3 pb-2 pt-1 mt-1 z-10bg-white rounded-md shadow-xl border border-black border-opacity-10 absolute z-50  bg-opacity-90 bg-opacity-90 hidden group-hover:block">
              <ul>
                <li className="whitespace-nowrap">
                  <a
                    href="https://docs.google.com/spreadsheets/d/1lq0dXMobJJ07-slz-yaA2mKv9nMey1_n96jtyYiNo_8/edit?gid=662460631#gid=662460631"
                    target="_blank"
                  >
                    team3 실습 페이지
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="relative group">
            <button>
              <p>Edit</p>
            </button>
            <div className="bg-white min-w-[100px] w-auto h-auto pr-3 pl-3 pb-2 pt-1 mt-1 z-10bg-white rounded-md shadow-xl border border-black border-opacity-10 absolute z-50  bg-opacity-90 bg-opacity-90 hidden group-hover:block">
              <ul>
                <li className="whitespace-nowrap">
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
            <button>
              <p>View</p>
            </button>
            <div className="bg-white min-w-[100px] w-auto h-auto pr-3 pl-3 pb-2 pt-1 mt-1 z-10bg-white rounded-md shadow-xl border border-black border-opacity-10 absolute z-50  bg-opacity-90 bg-opacity-90 hidden group-hover:block">
              <ul>
                <li>뭐하지...</li>
              </ul>
            </div>
          </div>

          <div className="relative group">
            <button>
              <p>Go</p>
            </button>
            <div className="bg-white min-w-[100px] w-auto h-auto pr-3 pl-3 pb-2 pt-1 mt-1 z-10bg-white rounded-md shadow-xl border border-black border-opacity-10 absolute z-50  bg-opacity-90 bg-opacity-90 hidden group-hover:block">
              <ul className="border-b border-gray-300 pb-1">
                <li>
                  <a
                    className="whitespace-nowrap"
                    href="https://react.dev/"
                    target="_blank"
                  >
                    React
                  </a>
                </li>
                <li>
                  <a
                    className="whitespace-nowrap"
                    href="https://tailwindcss.com/"
                    target="_blank"
                  >
                    Tailwind CSS - Rapidly build modern websites without ever
                    leaving your HTML.
                  </a>
                </li>
                <li>
                  <a
                    className="whitespace-nowrap"
                    href="https://www.coderabbit.ai/"
                    target="_blank"
                  >
                    AI Code Reviews | CodeRabbit | Try for Free
                  </a>
                </li>
              </ul>
              <ul>
                <li>더 보기...</li>
              </ul>
            </div>
          </div>

          <div className="relative group">
            <button>
              <p>Window</p>
            </button>
            <div className="bg-white min-w-[100px] w-auto h-auto pr-3 pl-3 pb-2 pt-1 mt-1 z-10bg-white rounded-md shadow-xl border border-black border-opacity-10 absolute z-50  bg-opacity-90 bg-opacity-90 hidden group-hover:block">
              <ul>
                <li>뭐하남...</li>
              </ul>
            </div>
          </div>
          <div className="relative group">
            <button>
              <p>Help</p>
            </button>
            <div>
              <ul className="bg-white min-w-[100px] w-auto h-auto pr-3 pl-3 pb-2 pt-1 mt-1 z-10bg-white rounded-md shadow-xl border border-black border-opacity-10 absolute z-50  bg-opacity-90 bg-opacity-90 hidden group-hover:block">
                <li>Q&A</li>
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
