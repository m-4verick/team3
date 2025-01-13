import { useState } from "react";
import sajuIcon from "../../../../shared/assets/mjy/saju.png";
import tarotIcon from "../../../../shared/assets/mjy/tarot.webp";
import voundyIcon from "../../../../shared/assets/mjy/voundy.webp";
import chanIcon from "../../../../shared/assets/mjy/chanheyok.webp";
import d4vdIcon from "../../../../shared/assets/mjy/d4vd.jpeg";
import littleForestIcon from "../../../../shared/assets/mjy/littleForest.webp";
import exhumaIcon from "../../../../shared/assets/mjy/Exhuma.webp";

import ProfileItem from "../ProfileItem";

const hobbyHistory = [
  {
    image: sajuIcon,
    title: "사주",
    subTitle: "수능이 끝나고 할게 없어서 공부하기 시작함.",
    period: "2016년 1월 - ing",
    link: "https://namu.wiki/w/%EC%82%AC%EC%A3%BC%ED%8C%94%EC%9E%90",
  },
  {
    image: tarotIcon,
    title: "타로",
    subTitle: "타로카드를 사서 가끔 봄. 해석을 잘 못할 뿐이지.. 결과는 맞음🫢",
    period: "2023년 - ing",
    link: "https://namu.wiki/w/%ED%83%80%EB%A1%9C",
  },
];

const musicHistory = [
  {
    image: voundyIcon,
    title: "바운디",
    subTitle: "요즘에 빠진 가수 초반 멜로디가 좋아서 계속 듣게 됨",
    period: "2019년 데뷔",
    link: "https://www.youtube.com/watch?v=5Y2qeLUpzF8&t=483s",
  },
  {
    image: chanIcon,
    title: "이찬혁",
    subTitle: "장례희망이라는 노래제목이 중의적이고 재밌음",
    period: "2014년 데뷔",
    link: "https://www.youtube.com/watch?v=iIn_1_XDuBM",
  },
  {
    image: d4vdIcon,
    title: "d4vd",
    subTitle:
      "d4vd의 Here With Me 이희상의 애열은 같은 샘플링 곡이다. 그 샘플링이 좋다",
    period: "2022년 7월 17일 발매",
    link: "https://www.youtube.com/watch?v=Ip6cw8gfHHI",
  },
];

const movieHistory = [
  {
    image: littleForestIcon,
    title: "리틀포레스트",
    subTitle: "힐링 영화 🌱",
    period: "2018년 2월 28일 개봉",
    link: "https://www.youtube.com/watch?v=lV-JBwFzuis&t=1001s",
  },
  {
    image: exhumaIcon,
    title: "파묘",
    subTitle:
      "물에 젖은 나무는 불에 달궈진 쇠보다 질기다. 인왕한 목이 관다신약한 쇠보다 강하다.",
    period: "2024년 2월 22일 개봉",
    link: "https://www.youtube.com/watch?v=7oE2DZsjATg",
  },
];

function NavItem({ children, isSelect, onClick }) {
  return (
    <li
      className={`
      py-[12px] px-[8px] cursor-pointer
      ${
        isSelect
          ? "border-b-[3px] border-[#01754F]"
          : "hover:border-b-[3px] hover:border-[#01754F]"
      }`}
      onClick={onClick}
    >
      {children}
    </li>
  );
}

const navItems = ["취미", "음악", "영화"];

export default function NavBar() {
  const [selectIndex, setSelectIndex] = useState(0);

  const handleClick = (index) => setSelectIndex(index);

  return (
    <>
      <nav>
        <ul className="flex gap-[16px]">
          {navItems.map((item, index) => (
            <NavItem
              key={index}
              isSelect={index === selectIndex}
              onClick={() => handleClick(index)}
            >
              {item}
            </NavItem>
          ))}
        </ul>
      </nav>

      <div className="py-[12px]">
        {selectIndex === 0 && (
          <div className="flex flex-col gap-[16px]">
            {hobbyHistory.map((history, index) => (
              <ProfileItem key={index} history={history} isIcon={true} />
            ))}
          </div>
        )}
        {selectIndex === 1 && (
          <div className="flex flex-col gap-[16px]">
            {musicHistory.map((history, index) => (
              <ProfileItem key={index} history={history} isIcon={true} />
            ))}
          </div>
        )}
        {selectIndex === 2 && (
          <div className="flex flex-col gap-[16px]">
            {movieHistory.map((history, index) => (
              <ProfileItem key={index} history={history} isIcon={false} />
            ))}
          </div>
        )}
      </div>
    </>
  );
}
