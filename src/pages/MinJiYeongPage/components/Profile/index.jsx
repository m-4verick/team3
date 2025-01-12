import bgImage from "../../../../shared/assets/mjy/bgimg.svg";
import companyImage from "../../../../shared/assets/mjy/company.svg";
import hanyangImage from "../../../../shared/assets/mjy/hanyang.jpeg";
import profileImage from "../../../../shared/assets/mjy/profile.jpeg";

export default function Profile() {
  return (
    <section className="w-[80%] bg-white border border-stone-300 rounded-[12px] mt-[12px]">
      <div className="relative">
        <img src={bgImage} alt="배경 이미지" className="rounded-t-[10px]" />
        <img
          src={profileImage}
          alt="프로필 이미지"
          className="absolute top-[70%] left-[3%] rounded-full border-[3px] border-white"
        />
      </div>

      <div className="mt-[10px] p-[24px] flex justify-between">
        <div className="flex flex-col gap-[8px]">
          <div>
            <h2 className="text-[24px] text-bold">민지영</h2>
            <p>풀스택 웹개발자 꿈나무</p>
          </div>
          <p className="text-[14px] text-stone-500">
            대한민국 서울 송파구 잠실동
            <span className="text-[#0A66C2] cursor-pointer"> · 연락처</span>
          </p>
        </div>

        <div className="text-[14px] flex flex-col gap-[8px] pr-[40px] justify-start">
          <p className="flex items-center gap-[8px]">
            <img
              src={companyImage}
              alt="제이텍구조엔지니어링"
              className="w-[32px] h-[32px]"
            />
            제이텍구조엔지니어링
          </p>
          <p className="flex items-center gap-[8px]">
            <img
              src={hanyangImage}
              alt="한양대학교"
              className="w-[32px] h-[32px]"
            />
            한양대학교
          </p>
        </div>
      </div>
    </section>
  );
}
