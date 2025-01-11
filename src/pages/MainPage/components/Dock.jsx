import Icon from "./Icon";
import memoIcon from "../../../shared/assets/memo.png";
import mapIcon from "../../../shared/assets/map.png";
import safariIcon from "../../../shared/assets/safari.png";
import dictionaryIcon from "../../../shared/assets/dictionary.png";
import maverick from "../../../shared/assets/maverick.png";
import sample from "../../../shared/assets/sample-icon.png";
import { useNavigate } from "react-router-dom";

const DOCK_LIST = {
  SAFARI: { image: safariIcon, label: "사파리", path: "/safari" },
  MEMO: { image: memoIcon, label: "메모", path: "/memo" },
  MAP: { image: mapIcon, label: "지도", path: "/maps" },
  DICTIONARY: { image: dictionaryIcon, label: "영어사전", path: "/dictionary" },
  SJH: { image: maverick, label: "신진호", path: "/sjh" },
  KMH: { image: sample, label: "김민희", path: "/kmh" },
  KSW: { image: sample, label: "김승우", path: "/ksw" },
  MJY: { image: sample, label: "민지영", path: "/mjy" },
  KHS: { image: sample, label: "김희성", path: "/khs" },
};

export default function Dock() {
  const nav = useNavigate();

  return (
    <div className="z-30 fixed bottom-0 left-1/2 transform -translate-x-1/2 bg-white bg-opacity-30 border border-[#1A1A1A] border-opacity-10 mb-2 rounded-2xl p-1">
      <div className="h-[70px] flex">
        {Object.entries(DOCK_LIST).map(([key, dock]) => (
          <Icon
            key={key}
            image={dock.image}
            label={dock.label}
            onClick={() => nav(dock.path)}
          />
        ))}
      </div>
    </div>
  );
}
