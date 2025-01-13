import Header from "./components/Header";
import Profile from "./components/Profile";
import ProfileBox from "./components/ProfileBox";
import ProfileItem from "./components/ProfileItem";
import NavBar from "./components/NavBar";

import companyIcon from "../../shared/assets/mjy/company.svg";
import hanyangIcon from "../../shared/assets/mjy/hanyang.jpeg";
import dimigoIcon from "../../shared/assets/mjy/dimigo.jpg";

const employmentHistory = [
  {
    image: companyIcon,
    title: "대리",
    subTitle: "제이텍구조엔지니어링 · 정규직",
    period: "2022년 2월 - 2024년 6월",
  },
];
const educationHistory = [
  {
    image: hanyangIcon,
    title: "한양대학교",
    subTitle: "스마트시스템공학 석사",
    period: "2020년 3월 - 2022년 3월",
  },
  {
    image: hanyangIcon,
    title: "한양대학교 ERIACA 캠퍼스",
    subTitle: "건축공학 학사",
    period: "2013년 3월 - 2016년 3월",
  },
  {
    image: dimigoIcon,
    title: "한국디지털미디어고등학교",
    subTitle: "웹프로그래밍학 고졸",
    period: "2013년 3월 - 2016년 3월",
  },
];
const skills = ["HTML CSS Javascript", "REACT.JS", "NODE.JS", "EXPRESS"];

export default function MinJiYeongPage() {
  return (
    <section className="relative">
      <Header />
      <main className="w-full py-[40px] flex flex-col justify-center items-center relative">
        <Profile />

        <ProfileBox title="경력 사항">
          {employmentHistory.map((history, index) => (
            <ProfileItem key={index} history={history} />
          ))}
        </ProfileBox>

        <ProfileBox title="학력">
          <main className="flex flex-col gap-[16px]">
            {educationHistory.map((history, index) => (
              <ProfileItem key={index} history={history} isIcon={true} />
            ))}
          </main>
        </ProfileBox>

        <ProfileBox title="보유기술">
          <ul>
            {skills.map((skill, index) => (
              <li
                className="py-[12px] font-bold border-b border-stone-300"
                key={index}
              >
                {skill}
              </li>
            ))}
          </ul>
        </ProfileBox>

        <ProfileBox title="관심 분야">
          <NavBar />
        </ProfileBox>
      </main>
    </section>
  );
}
