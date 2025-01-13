export default function ProfileItem({ history, isIcon }) {
  const handleImageClick = () => {
    if (history.link) {
      window.open(history.link, "_blank");
    }
  };

  return (
    <section className="flex gap-[8px] justify-start">
      <img
        src={history.image}
        alt={history.title + history.subTitle}
        className={`w-[48px] ${
          isIcon ? "h-[48px]" : "h-auto"
        } hover:cursor-pointer hover:brightness-75 transition-all duration-300 ease-in-out`}
        onClick={handleImageClick}
      />

      <span className="flex flex-col justify-start">
        <h3 className="text-[17px] font-bold">{history.title}</h3>
        <p className="text-[15px]">{history.subTitle}</p>
        <p className="text-[15px] text-stone-500">{history.period}</p>
      </span>
    </section>
  );
}
