export default function Icon({ image, label, onClick }) {
  return (
    <div className="relative inline-block group" onClick={onClick}>
      <div className="absolute top-[-40px] left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 transition bg-white bg-opacity-30 text-[#000000] text-opacity-70 px-2 py-0.5 rounded whitespace-nowrap">
        {label}
      </div>
      <img
        src={image}
        className="h-full hover:scale-110 transition cursor-pointer"
      />
    </div>
  );
}
