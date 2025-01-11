import me from "../../shared/assets/wanted.png";
import ad1 from "../../shared/assets/ad1.jpg";
import ad2 from "../../shared/assets/ad2.jpg";

export default function ShinJinHoPage() {
  return (
    <>
      <div className="mx-5 px-5 flex flex-col items-center justify-center border-b-4 border-black py-5">
        <p className="text-4xl font-bold">UNDERWORLD POST</p>
        <p className="text-xl font-bold mt-2">고수가 될 사나이 특집</p>
      </div>

      <div className="flex justify-between px-5 py-5 gap-3">
        <div>
          <p className="text-2xl font-bold">
            신진호. 마성의 매력을 가진 사나이
          </p>
          <hr className="mt-2 mb-2" />
          <p>
            경기도 고양시 신원동에 거주 중인 신진호군(25세)의 출사표가 세간의
            화제가 되고 있다. 3년여간의 프롤레타리아 직장인 생활을 마무리한 그는
            1년간의 갭이어를 갖기로 결심하게 된다. 1년 내내 놀고 먹기도 뭐했던
            그는 코드잇 풀스택 5기에 합류하였다.
          </p>
          <p>
            평소 눈치백단 잔재주가 많았던 그는 부트캠프 합류 이후 눈부신 활약을
            펼치게 되었다.{" "}
            <strong>신진호군의 마성의 매력과 그에 비례한 실력</strong>은 모두를
            놀라게 하였다.
          </p>
          <p>
            유튜브 쇼츠보기, 디비자기, 뒹굴거리기, 소맥 황금비율 주조, 술먹고
            전화하기 외에도 <strong>'을지로 8차'(노래방 포함 9차)</strong>{" "}
            기록이라는 전무후무한 기록을 가진 음주가무 분야의 권위자였던 그는
            과거의 영광은 뒤로한 채 고수가 되겠다는 자신의 꿈을 실현시키기 위해
            방 문을 닫고 정진하기 시작하였다.
          </p>
          <p>
            안주빨로 달리던 부작용으로인해 불어났던 체중이 부트캠프 합류 이후
            8kg이 줄어들었다는 사실은 누리꾼들로 하여금 감탄을 자아냈다.
          </p>
          <p>
            '담배는 마쎄이'라던 올곧았던 자신의 신념을 '건강이란걸
            챙겨보겠다.'라는 일념으로 아이코스로 바꾼 일화는 유명하다.{" "}
          </p>
          <p>
            이처럼 모든 것을 내려놓고 황야로 내걸을 수 있는 사나이.{" "}
            <strong>'사랑은 내 CPU가 식기전에 반드시 다시 찾아오겠다.'</strong>
            라는 그의 당찬 포부가 실현될 수 있을지에 대한 누리꾼들 사이의 의견이
            분분한 가운데 그는 새로운 출사표를 던졌다.
          </p>
          <p>
            "고수가 되겠다." 앞으로의 그의 귀추가 주목된다. [UP 신진현 기자]
          </p>
        </div>
        <div className="flex flex-col items-center">
          <img src={me} className="w-[600px] rounded" />
          <p>신진호 (25세)</p>
          <p>밤샘 코딩으로 인해 지친 모습이다.</p>
        </div>
      </div>
      <div className="flex w-full px-5 gap-5">
        <img src={ad1} className="w-[300px]" />
        <img src={ad2} className="w-[500px]" />
      </div>
    </>
  );
}
