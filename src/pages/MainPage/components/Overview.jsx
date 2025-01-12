import { useEffect, useRef } from "react";
import image from "../../../shared/assets/team3.png";

export default function Overview({ isOpen, onClose }) {
  const overviewRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (overviewRef.current && !overviewRef.current.contains(e.target)) {
        onClose();
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div
      ref={overviewRef}
      className="bg-white w-64 h-auto p-5 z-10bg-white rounded-xl shadow-xl border border-black border-opacity-10 fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-50 bg-opacity-95 m-1"
    >
      <div className="flex flex-col items-center text-[#444444]">
        <img src={image} className="w-1/2 mt-3" />
        <p className="text-3xl font-bold mt-3">MacBook Pro</p>
        <p className="text-md text-[#A0A0A0]">14-inch 2024</p>

        <div className="flex flex-col items-center mt-10 gap-1">
          <div className="grid grid-cols-2 w-full gap-3">
            <p className="text-center">Chip</p>
            <p className="text-left font-semibold">Jinho Shin</p>
          </div>
          <div className="grid grid-cols-2 w-full gap-3">
            <p className="text-center">Memory</p>
            <p className="text-left font-semibold">Jiyeong Min</p>
          </div>
          <div className="grid grid-cols-2 w-full gap-3">
            <p className="text-center">Startup Disk</p>
            <p className="text-left font-semibold">Seungwoo Kim</p>
          </div>
          <div className="grid grid-cols-2 w-full gap-3">
            <p className="text-center">Serial number</p>
            <p className="text-left font-semibold">Heeseong Kim</p>
          </div>
          <div className="grid grid-cols-2 w-full gap-3">
            <p className="text-center">macOS</p>
            <p className="text-left font-semibold">MinHee Kim</p>
          </div>
        </div>

        <button className="px-3 bg-[#C6C6C6] rounded mt-5">More Info...</button>

        <div className="text-[#A2A2A2] text-center">
          <p className="mt-5">Regulatory Certification</p>
          <p>™ and &copy; 1983-2024 Apple Inc.</p>
          <p>All Rights Reserved.</p>
        </div>
      </div>
    </div>
  );
}
