export default function SquareCard2({ largeText, gradientColor, link }) {
  // const gradientStyle =
  const style = `h-64 h-24 ${gradientColor} rounded-lg w-56 h-56 flex flex-col items-center justify-center overflow-hidden shadow-lg transition duration-300 hover:brightness-75 cursor-pointer`;
  return (
    <a className={style} href={link} target="_blank">
      <h3 className="text-center text-2xl tracking-tight [text-shadow:1px_1px_10px_rgba(0,0,0,0.2)] text-gray-900">
        {largeText}
      </h3>
    </a>
  );
}
