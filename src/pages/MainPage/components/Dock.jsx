import Icon from "./Icon";
import mapIcon from "../../../shared/assets/map.png";
import safariIcon from "../../../shared/assets/safari.png";
import dictionaryIcon from "../../../shared/assets/dictionary.png";
import maverick from "../../../shared/assets/maverick.png";
import elephant from "../../../shared/assets/elephant.png";
import terminal from "../../../shared/assets/terminalIcon.png";
import linkedInIcon from "../../../shared/assets/mjy/linkedInLogo.png";
import sample from "../../../shared/assets/sample-icon.png";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

const DOCK_LIST = {
  SAFARI: { image: safariIcon, label: "사파리", path: "/safari" },
  MAP: { image: mapIcon, label: "지도", path: "/maps" },
  DICTIONARY: { image: dictionaryIcon, label: "영어사전", path: "/dictionary" },
  SJH: { image: maverick, label: "신진호", path: "/sjh" },
  KMH: { image: elephant, label: "김민희", path: "/kmh" },
  KSW: { image: terminal, label: "김승우", path: "/ksw" },
  MJY: { image: linkedInIcon, label: "민지영", path: "/mjy" },
  KHS: { image: sample, label: "김희성", path: "/khs" },
};

export default function Dock() {
  const [activeKey, setActiveKey] = useState(null);
  const nav = useNavigate();

  // isActive 불린값을 const로 빼고 불린값을 정하게 리펙토링

  return (
    <div className="z-30 fixed bottom-0 left-1/2 transform -translate-x-1/2 bg-white bg-opacity-30 border border-[#1A1A1A] border-opacity-10 mb-2 rounded-2xl p-1">
      <div className="h-[70px] flex">
        {Object.entries(DOCK_LIST).map(([key, dock]) => (
          <Icon
            key={key}
            image={dock.image}
            label={dock.label}
            isActive={activeKey === key}
            onClick={() => {
              setActiveKey(key);
              nav(dock.path);
            }}
          />
        ))}
      </div>
    </div>
  );
}
