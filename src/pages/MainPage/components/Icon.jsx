export default function Icon({ image, label, onClick, isActive }) {
  return (
    <div
      className={`relative inline-block group transition-transform ${
        isActive ? "translate-y-[-10px]" : "hover:translate-y-[-10px]"
      }`}
      onClick={onClick}
    >
      {!isActive && (
        <div className="absolute top-[-30px] left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 transition bg-white bg-opacity-30 text-[#000000] text-opacity-70 px-2 py-0.5 rounded whitespace-nowrap">
          {label}
        </div>
      )}
      <img
        src={image}
        className={`h-full transition-transform cursor-pointer ${
          isActive ? "scale-110" : "hover:scale-110"
        }`}
      />
      {isActive && (
        <div
          className={`absolute bottom-[-10px] left-1/2 transform -translate-x-1/2 w-2 h-2 rounded-full bg-white ${
            isActive ? "opacity-100" : "opacity-0 group-hover:opacity-100"
          } transition-opacity`}
        />
      )}
    </div>
  );
}
