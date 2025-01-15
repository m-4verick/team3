import linkedInIcon from "../../../../shared/assets/mjy/linkedIn.svg";

export default function Header() {
  return (
    <header className="flex justify-center bg-white py-[6px] border-b border-gray-300 sticky top-0 z-10">
      <div className="w-[80%] flex items-center gap-[10px]">
        <img
          src={linkedInIcon}
          alt="링크드인 로고"
          className="w-[34.17px] h-[34.17px]"
        />
      </div>
    </header>
  );
}
