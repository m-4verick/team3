export default function ProfileItem({ history }) {
  return (
    <section className="flex gap-[8px]">
      <img
        src={history.image}
        alt={history.title + history.subTitle}
        className="w-[48px] h-[48px]"
      />
      <span className="flex flex-col justify-start">
        <h3 className="text-[17px] font-bold">{history.title}</h3>
        <p className="text-[15px]">{history.subTitle}</p>
        <p className="text-[15px] text-stone-500">{history.period}</p>
      </span>
    </section>
  );
}
