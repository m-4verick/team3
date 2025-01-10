
export default function Window({ children }) {
    return (
        <div className="w-[1100px] h-[700px] bg-white rounded-xl mx-auto mt-10 shadow-xl border border-black border-opacity-10">
            <div className="w-full h-[60px] bg-[#E5E5E5] border border-[#4D4D4D] rounded-t-xl border-opacity-10 flex gap-2 items-center px-5">
                <button className="rounded-full w-3 h-3 bg-[#FF5F57] border border-[#000000] border-opacity-5"></button>
                <button className="rounded-full w-3 h-3 bg-[#FEBC2E] border border-[#000000] border-opacity-5"></button>
                <button className="rounded-full w-3 h-3 bg-[#28C840] border border-[#000000] border-opacity-5"></button>
            </div>
            <div className="p-3">
                {children}
            </div>
        </div>
    );
}
