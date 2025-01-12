import GO from "./img/go.png";
import I from "./img/I.png";
import N from "./img/N.png";
import F from "./img/F.png";

export function IntroduceSelf() {
  return (
    <>
      <div className="flex flex-col items-center">
        <div className="flex flex-col items-center w-full border-b pt-5 pb-3">
          <p className="text-2xl font-bold">
            <strong>김희성</strong> 그는 누구인가?
          </p>
          <p className="text-xl  text-green-600/[.50]">선의의 옹호자</p>
        </div>

        <div className="flex flex-col justify-center items-center w-[620px] pt-5  gap-10 ">
          <div className=" flex border-solid border-2 border-stone-300/[.50] rounded-lg gap-5">
            <div className="flex flex-col justify-center text-center pl-10 ">
              <p className="text-xl">"절대 외향형과 가까이 있지마!"</p>
              <hr className="mt-2 mb-2" />
              <p>극한의 I로 온라인의 강하다. 허나 오프라인으로</p>
              <p> 환경변수가 바뀌면 입에 자물쇠가 걸린다.</p>
            </div>
            <img className="w-64 rounded-lg" src={I} />
          </div>

          <div className="flex justify-between border-solid border-2 border-stone-300/[.50] rounded-lg gap-7">
            <div className="flex flex-col   rounded-lg text-center pl-16 pt-16 pb-16 ">
              <p className="text-xl">
                "진짜 엘리베이터 떨어질때 <br /> 어떻게 떨어질리 상상 안해봐?"
              </p>
              <hr className="mt-2 mb-2" />
              <div>
                <p>
                  별별 상상에 집합소를 뇌속에 가지고 있다. <br /> State="props에
                  대해 상상 중"
                </p>
              </div>
            </div>
            <img className="w-64 rounded-lg" src={N} />
          </div>

          <div className="flex  items-center   border-solid border-2 border-stone-300/[.50] rounded-lg gap-7">
            <div className="flex flex-col text-center pl-14 pt-16 pb-16">
              <p className="text-xl">"선택적 감성쟁이"</p>

              <hr className="mt-2 mb-2" />
              <p className="whitespace-nowrap">
                주입식 T친구 교육으로 뒤틀려버린 감성쟁이다.
              </p>
            </div>
            <img className="w-60 rounded-lg" src={F} />
          </div>

          <div className="flex items-center   border-solid border-2 border-stone-300/[.50] rounded-lg gap-11">
            <div className="flex flex-col text-center pl-16 pt-16 pb-16">
              <p className="text-xl">"이대로 진행시켜"</p>
              <hr className="mt-2 mb-2" />
              <p className="whitespace-nowrap">
                주입식 T친구 교육으로 아직 감성적이다.
              </p>
            </div>
            <img className="w-64 rounded-lg" src={GO} />
          </div>
        </div>
      </div>
    </>
  );
}
