export default function SquareCard({
  largeText,
  smallText,
  imgSrc = null,
  gradientColor,
  link,
}) {
  // const gradientStyle =
  const style = `h-64 h-64 ${gradientColor} rounded-lg w-56 h-56 flex flex-col relative overflow-hidden shadow-lg transition duration-300 hover:brightness-75 cursor-pointer`;
  return (
    <a className={style} href={link} target="_blank">
      {imgSrc && <img className="w-full" src={imgSrc} alt="이미지"></img>}
      <h3 className="absolute left-4 bottom-9 text-center text-2xl font-extrabold tracking-tight [text-shadow:1px_1px_10px_rgba(0,0,0,0.2)] text-gray-900">
        {largeText}
      </h3>
      <h4 className="absolute text-sm left-4 bottom-3 [text-shadow:1px_1px_10px_rgba(0,0,0,0.2)] text-gray-900">
        {smallText}
      </h4>
    </a>
  );
}
