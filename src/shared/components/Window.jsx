import { useState, useRef, useEffect } from "react";

export default function Window({ children }) {
  const [isVisible, setIsVisible] = useState(true);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isDragging, setIsDragging] = useState(false);
  const [dragStart, setDragStart] = useState({ x: 0, y: 0 });
  const windowRef = useRef(null);

  const handleClose = () => {
    setIsVisible(false);
  };

  const handleMouseDown = (e) => {
    setIsDragging(true);
    setDragStart({
      x: e.clientX - position.x,
      y: e.clientY - position.y,
    });
    windowRef.current.setPointerCapture(e.pointerId);
  };

  const handleMouseMove = (e) => {
    if (isDragging && windowRef) {
      const parentRect =
        windowRef.current.parentElement.getBoundingClientRect();
      const windowRect = windowRef.current.getBoundingClientRect();

      let newX = e.clientX - dragStart.x;
      let newY = e.clientY - dragStart.y;

      // Window 컴포넌트를 부모 요소 내부로 제한

      // 마우스 포인터를 부모 요소 내부로 제한
      if (e.clientX < parentRect.left) newX = 0;
      if (e.clientX > parentRect.right)
        newX = parentRect.width - windowRect.width;
      if (e.clientY < parentRect.top) newY = 0;
      if (e.clientY > parentRect.bottom)
        newY = parentRect.height - windowRect.height;

      newY = Math.max(28, newY); // 위쪽 경계만 제한

      setPosition({ x: newX, y: newY });
    }
  };

  const handleMouseUp = (e) => {
    setIsDragging(false);
    windowRef.current.releasePointerCapture(e.pointerId);
  };

  // 초기화면 위치 설정
  useEffect(() => {
    if (windowRef.current) {
      const rect = windowRef.current.getBoundingClientRect();
      const centerX = window.innerWidth / 2 - rect.width / 2;
      const centerY = window.innerHeight / 2 - rect.height / 2 - 30;
      setPosition({ x: centerX, y: centerY });
    }
  }, []);

  useEffect(() => {
    if (isDragging) {
      document.addEventListener("mousemove", handleMouseMove);
      document.addEventListener("mouseup", handleMouseUp);
    } else {
      document.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseup", handleMouseUp);
    }
    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseup", handleMouseUp);
    };
  }, [isDragging]);

  if (!isVisible) return null;

  return (
    <div
      ref={windowRef}
      className="bg-white rounded-xl shadow-xl border border-black border-opacity-10 absolute"
      style={{
        width: "80%",
        height: "75%",
        left: `${position.x}px`,
        top: `${position.y}px`,
        position: "absolute",
      }}
    >
      <div
        className="w-full h-[50px] bg-[#E5E5E5] bg-opacity-50 border border-[#4D4D4D] rounded-t-xl border-opacity-10 flex gap-2 items-center px-5 cursor-move"
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
        className="m-5"
        style={{
          overflowWrap: "break-word",
          wordWrap: "break-word",
          overflowY: "auto",
        }}
      >
        {children}
      </div>
    </div>
  );
}
