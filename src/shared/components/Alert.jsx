import {useState} from "react";

export default function Alert({appIcon, title, content, closeButton, width = 260, height = 280}) {
    const [isVisible, setIsVisible] = useState(true);

    const handleClose = () => {
        setIsVisible(false);
    };

    if (!isVisible) return null;


    return (
        <div className={`bg-white rounded-xl mx-auto mt-20 shadow-xl border border-black border-opacity-10`}
             style={{width: `${width}px`, height: `${height}px`}}>
            <div className="w-full p-3 text-[#000000] text-opacity-80 flex flex-col items-center">
                <img src={appIcon} className="mt-5 w-[64px]"/>
                <p className="font-bold text-[13px] mt-4">{title}</p>
                <p className="text-[11px] mt-2.5">{content}</p>
                <button onClick={handleClose} className="w-full bg-[#007AFF] border-white border-opacity-5 rounded py-1.5 text-white mt-4">{closeButton}</button>
                <div className="flex gap-[6px] mt-4">
                    <input type="checkbox" className="border border-[#000000] border-opacity-15"/>
                    <p className="text-[13px]">Don&apos;t ask again</p>
                </div>
            </div>
        </div>
    );
}
