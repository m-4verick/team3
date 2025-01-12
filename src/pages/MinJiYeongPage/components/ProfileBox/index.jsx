export default function ProfileBox({ title, children }) {
  return (
    <section className="w-[80%] bg-white p-[12px] border border-stone-300 rounded-xl mt-[12px]">
      <h2 className="text-[20px] font-bold p-[12px]">{title}</h2>
      <div className="p-[12px]">{children}</div>
    </section>
  );
}
