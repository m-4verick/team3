import Coding from "./img/codingimg.jpg";
import ChatGPT from "./img/ChatGPTLogo.png";
import YouTube from "./img/YouTube.png";
import LostArk from "./img/LostArk.png";

export function MyStatus() {
  return (
    <>
      <div className="flex flex-col items-center">
        <div className="flex flex-col items-center w-full border-b pt-5 pb-3">
          <p className="text-2xl font-bold">인간외의 친밀도</p>
        </div>

        <div className="flex flex-col justify-center items-center w-[620px] pt-10  gap-10 ">
          <div className=" flex   text-center border-solid border-2 border-stone-300/[.50] rounded-lg">
            <div className="flex flex-col justify-center p-16">
              <p className="text-xl font-bold"> 코딩 / [친밀도 40%]</p>
              <hr className="mt-2 mb-2" />
              <p className=" flex  items-center text-center ">
                요즘 많이 싸우고 있어서, <br />
                좋은 정보다는 미운 정으로 버티고 있다.
              </p>
            </div>
            <img className="w-56 rounded-lg" src={Coding} />
          </div>

          <div className=" flex items-center  text-center border-solid border-2 border-stone-300/[.50] rounded-lg pr-8 gap-7">
            <div className="flex flex-col justify-center p-16">
              <p className="text-xl font-bold">쳇지피티 / [친밀도 80%]</p>
              <hr className="mt-2 mb-2" />
              <p>
                요근래 많이 알아가고 있는 친구, <br />
                애절히 짝사랑하는데 잘 모를것 이다.
              </p>
            </div>
            <img className="w-44 rounded-lg " src={ChatGPT} />
          </div>

          <div className=" flex  items-center text-center border-solid border-2 border-stone-300/[.50] rounded-lg pr-3 gap-1">
            <div className="flex flex-col justify-center p-16">
              <p className="text-xl font-bold">유튜브 / 친밀 [99.99%]</p>
              <hr className="mt-2 mb-2" />
              <p>
                없으면 숨 쉬기 힘들 것 같다,
                <br /> "너는 나에게 공기이자 필수 불가결한 존재".
              </p>
            </div>
            <img className="w-44 rounded-lg" src={YouTube} />
          </div>

          <div className=" flex items-center text-center border-solid border-2 border-stone-300/[.50] rounded-lg pr-3 gap-2">
            <div className="flex flex-col justify-center p-16">
              <p className="text-xl font-bold">
                로스트아크 / 친밀도 [측정불가]
              </p>
              <hr className="mt-2 mb-2" />
              <p>
                "내 끝사랑" <br /> RPG게임을 사랑하는 나에게 이상형 그 자체
              </p>
            </div>
            <img className="w-44 rounded-lg" src={LostArk} />
          </div>
        </div>
      </div>
    </>
  );
}
