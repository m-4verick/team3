import wallpaper from "../../../shared/assets/wallpaper.png";

export default function Background({ children, background = wallpaper }) {
  return (
    <div
      style={{
        backgroundImage: `url(${background})`,
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        width: "100%",
        height: "100dvh",
        overflow: "hidden",
        msOverflowStyle: "none", // IE와 Edge를 위한 스크롤바 숨김
        scrollbarWidth: "none", // Firefox를 위한 스크롤바 숨김
        position: "relative",
      }}
    >
      {children}
    </div>
  );
}
