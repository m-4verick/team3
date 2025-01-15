import { useState, useRef, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { fromEvent, takeUntil, finalize } from "rxjs";

const getBgColor = (pathname) => {
  switch (pathname) {
    case "/mjy":
      return "bg-[#f4f2ee]";
    case "/ksw":
      return "bg-black";
    default:
      return "bg-white";
  }
};

export default function Window({ children, isOpenWindow, setIsOpenWindow }) {
  const navigate = useNavigate();
  const location = useLocation();
  const bgColor = getBgColor(location.pathname);

  const windowRef = useRef(null);
  const offsetRef = useRef({ x: 0, y: 0 });
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isDragging, setIsDragging] = useState(false);

  // rxjs를 이용한 관찰자 패턴
  const handleMouseDown = (event) => {
    setIsDragging(true); // 드래그 시작 시 isDragging을 true로 설정

    // 박스의 현재 위치와 마우스 클릭 위치의 차이를 계산
    const windowRect = windowRef.current.getBoundingClientRect();
    // event.clientX: 뷰포트 내 마우스 클릭의 X 좌표
    // windowRect.left: 윈도우의 왼쪽 모서리 X 좌표
    offsetRef.current = {
      x: event.clientX - windowRect.left,
      y: event.clientY - windowRect.top,
    };

    const mouseMove$ = fromEvent(document, "mousemove");
    const mouseUp$ = fromEvent(document, "mouseup");

    // 드래그 시작 시 mouseMove 이벤트를 구독하고 mouseUp 이벤트가 발생할 때까지 계속
    mouseMove$
      .pipe(
        takeUntil(mouseUp$), // mouseUp 이벤트가 발생하면 구독 종료
        finalize(() => setIsDragging(false)) // 마지막에 드래그 종료 시 isDragging을 false로 설정
      )
      .subscribe((moveEvent) => {
        if (windowRef.current) {
          const minTop = 28; // 상단으로부터 28px offset

          // offsetRef.current를 사용하여 window의 위치를 업데이트
          // moveEvent.clientX: 현재 마우스 위치의 X 좌표
          // offsetRef.current.x: 초기 클릭 시 윈도우 내부 오프셋
          let newLeft = moveEvent.clientX - offsetRef.current.x;
          let newTop = moveEvent.clientY - offsetRef.current.y;

          // 상단 제한 (30px 아래로 제한)
          newTop = Math.max(minTop, newTop);

          windowRef.current.style.left = `${newLeft}px`;
          windowRef.current.style.top = `${newTop}px`;
        }
      });
  };

  const handleClose = () => {
    setIsOpenWindow(false);
    navigate("/");
  };

  // 초기화면 위치 설정
  useEffect(() => {
    if (windowRef.current) {
      const rect = windowRef.current.getBoundingClientRect();
      const centerX = window.innerWidth / 2 - rect.width / 2;
      const centerY = window.innerHeight / 2 - rect.height / 2 - 30;
      setPosition({ x: centerX, y: centerY });
    }
  }, [isOpenWindow]);

  if (!isOpenWindow) return null;

  return (
    <div
      ref={windowRef}
      className="bg-white rounded-xl shadow-xl border border-black border-opacity-10 absolute overflow-hidden"
      style={{
        width: "80%",
        height: "75%",
        left: `${position.x}px`,
        top: `${position.y}px`,
      }}
    >
      <div
        className={`w-full h-[50px] bg-[#E5E5E5] bg-opacity-50 border border-[#4D4D4D] rounded-t-xl border-opacity-10 flex gap-2 items-center px-5 ${
          isDragging ? "cursor-grabbing" : "cursor-grab"
        }`}
        onMouseDown={handleMouseDown}
      >
        <button
          onClick={handleClose}
          className="rounded-full w-3 h-3 bg-[#FF5F57] border border-[#000000] border-opacity-5"
        ></button>
        <button className="rounded-full w-3 h-3 bg-[#FEBC2E] border border-[#000000] border-opacity-5"></button>
        <button className="rounded-full w-3 h-3 bg-[#28C840] border border-[#000000] border-opacity-5"></button>
      </div>

      <div
        className={`${bgColor} rounded-b-[12px]`}
        style={{
          overflowWrap: "break-word",
          wordWrap: "break-word",
          overflowY: "auto",
          maxHeight: "calc(75vh - 50px)", // 헤더 높이를 제외한 최대 높이 설정
        }}
      >
        {children}
      </div>
    </div>
  );
}
