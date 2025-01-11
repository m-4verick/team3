import { gradient } from "./gradientStyle";

export default function Circle({ emoji = "🫥", title }) {
  const style = `${gradient.pinkToPurple} rounded-full w-16 h-16 flex justify-center items-center text-4xl shadow-lg transition duration-300 hover:brightness-75 cursor-pointer`;
  return (
    <div className="flex flex-col items-center gap-1">
      <div className={style}>{emoji}</div>
      <h2 className="font-medium">{title}</h2>
    </div>
  );
}
