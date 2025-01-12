import Circle from "./components/Circle.jsx";
import SquareCard from "./components/SquareCard.jsx";
import friendsImg from "./assets/friends.png";
import pachinkoImg from "./assets/pachinko.png";
import pointnemoImg from "./assets/yoonha.png";
import theVolunteersLImg from "./assets/theVolunteers_L.png";
import { gradient } from "./components/gradientStyle.js";
import { useState, useEffect } from "react";

export default function KimMinHeePage() {
  const [isOpenAlert, setIsOpenAlert] = useState(false);
  useEffect(() => {
    setIsOpenAlert((prev) => !prev);
  }, [isOpenAlert]);
  return (
    <>
      <div className="px-6 relative">
        <div className="mb-4">
          <h2 className="text-3xl font-bold leading-loose">안녕하세요!</h2>
          <div className="flex flex-col gap-4">
            <p>
              <span className="font-black">풀스택 개발자</span>로서의 새로운
              삶을 준비하고 있는 김민희라고 합니다. 아주 어렸을 때는 나중에 크면
              막연히 컴퓨터 관련 일을 하지 않을까라는 생각을 했을 정도로 관심이
              많았었는데, 어찌 돌고 돌아 이제야 시작해보네요!
            </p>
            <p>
              <span className="font-black">회계학 전공</span> 출신입니다. 대학
              재학 시절 컴퓨터공학 복수전공을 하지 않은 것에 대한 미련이 남아,
              현재
              <span className="font-black">방송통신대학교 컴퓨터과학과</span>에
              재학 중입니다. 이번 학기에 컴퓨터구조 A+, 자료구조 A0 받았습니당
              <span className="text-gray-400">(나머지는...쉿)</span>
            </p>
            <p>
              사실 아직까지는 개발보다 회계가 더 쉽습니다만, 그래도 개발이 더
              재밌어서 계속 해보려구요ㅎㅎ 머 회계는 4년 공부하고 개발은 몇달
              공부했는데 어쩔 수 없는 거겠죠🥹 지금 갑자기 회계와 개발의 비슷한
              점을 얘기해보고 싶어졌습니다. 회계는 계산기를 두드리고, 개발은
              키보드를 두드립니다. 그리고 회계에서 차변과 대변이 틀렸을 때의
              기분과 개발에서 에러가 떠서 디버깅해야 할 때의 기분이 비슷한 것
              같습니다...ㅋ 중요한 얘기는 아닌데 그냥 얘기해보고 싶었어요;;
            </p>
            <p>
              <span className="font-black">성격</span>은 내성적이고 신중한
              편입니다. 밖을 나가는 걸 정말정말 귀찮아 하지만, 누가 꺼내주면 잘
              나갑니다. (위워크도 가야 하는데... 미루기만...🥲)
            </p>
            <p>
              <span className="font-black">
                개개인의 취향과 개성을 존중하고 중요한 가치로 생각합니다.
              </span>
              저 또한 개성있는 사람이 되고 싶고, 저의 취향을 소중히 여기려고
              합니다. 그래서 사람들 각자의 취향을 공유하고 소개할 수 있는
              무언가를 만들어 보고 싶기도 하네요✨
            </p>
          </div>
        </div>
        <div className="mt-4 mb-4">
          <h2 className="text-3xl font-bold leading-loose">
            최근 즐겨찾는 콘텐츠
          </h2>
          <div className="flex flex-row gap-4">
            <SquareCard
              largeText={"파친코"}
              smallText={"최근에 읽기 시작했어요"}
              imgSrc={pachinkoImg}
              gradientColor={gradient.yellowToGreen}
              link="https://product.kyobobook.co.kr/detail/S000061450857"
            />
            <SquareCard
              largeText={"프렌즈"}
              smallText={"최애 캐릭터는 챈들러"}
              imgSrc={friendsImg}
              gradientColor={gradient.gray}
              link="https://www.youtube.com/watch?v=s2TyVQGoCYo"
            />
            <SquareCard
              largeText={"포인트 니모"}
              smallText={"사라지는 모든 것들과 사랑"}
              imgSrc={pointnemoImg}
              gradientColor={gradient.skyToBlue}
              link="https://www.youtube.com/watch?v=GCKSrC6XVOk"
            />
            <SquareCard
              largeText={`"L"`}
              smallText={"무대 영상이 좋아요"}
              imgSrc={theVolunteersLImg}
              gradientColor={gradient.redToYellow}
              link="https://www.youtube.com/watch?v=lvtj-OYRQco"
            />
          </div>
        </div>
      </div>
    </>
  );
}
