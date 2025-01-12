import { useNavigate } from "react-router-dom";

export function MyNav() {
  const nav = useNavigate();

  return (
    <div className="flex  space-x-4  justify-between items-center">
      <button
        onClick={() => nav("/khs/Intro")}
        className="px-4 py-2 bg-cyan-300 text-white rounded hover:bg-cyan-400"
      >
        소개
      </button>
      <button
        onClick={() => nav("/khs/Status")}
        className="px-4 py-2 bg-emerald-300 text-white rounded hover:bg-emerald-400"
      >
        상태
      </button>
    </div>
  );
}
