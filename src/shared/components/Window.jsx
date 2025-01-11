import {useState} from "react";

export default function Window({children, width = 1100, height = 700}) {
    const [isVisible, setIsVisible] = useState(true);

    const handleClose = () => {
        setIsVisible(false);
    };

    if (!isVisible) return null;

    return (
        <div
            className="bg-white rounded-xl mx-auto mt-10 shadow-xl border border-black border-opacity-10"
            style={{
                width: `${width}px`,
                height: `${height}px`,
            }}
        >
            <div
                className="w-full h-[50px] bg-[#E5E5E5] bg-opacity-50 border border-[#4D4D4D] rounded-t-xl border-opacity-10 flex gap-2 items-center px-5">
                <button onClick={handleClose}
                        className="rounded-full w-3 h-3 bg-[#FF5F57] border border-[#000000] border-opacity-5"></button>
                <button className="rounded-full w-3 h-3 bg-[#FEBC2E] border border-[#000000] border-opacity-5"></button>
                <button className="rounded-full w-3 h-3 bg-[#28C840] border border-[#000000] border-opacity-5"></button>
            </div>
            <div
                 style={{
                     width: `${width - 3}px`,
                     height: `${height - 60}px`,
                overflowWrap: "break-word",
                wordWrap: "break-word",
                overflowY: "auto",
            }}>
                {children}
            </div>
        </div>
    );
}
