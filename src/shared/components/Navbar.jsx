import appleLogo from "../assets/appleLogo.png";
import wifi from "../assets/wifi.png";
import search from "../assets/search.png";
import profile from "../assets/profile.png";
import controlpanel from "../assets/controlpanel.png";
import useTimer from "../../pages/MainPage/hooks/useTimer.js";

export default function Navbar({isLock = false}) {
    const time = useTimer();

    if (isLock) return (
        <div className="w-full h-7 flex items-center px-5 justify-between">
            <div className="flex items-center justify-end w-screen gap-3 cursor-pointer">
                <img src={wifi}/>
                <img src={profile}/>
                <img src={controlpanel}/>
            </div>
        </div>
    )

    return (
        <div className="w-full h-7 flex items-center px-5 justify-between bg-white bg-opacity-50">
            <div className="flex items-center w-full gap-5 cursor-pointer">
                <img src={appleLogo}/>
                <p>Finder</p>
                <p>File</p>
                <p>Edit</p>
                <p>View</p>
                <p>Go</p>
                <p>Window</p>
                <p>Help</p>
            </div>
            <div className="flex items-center justify-end w-screen gap-3 cursor-pointer">
                <img src={wifi}/>
                <img src={search}/>
                <img src={profile}/>
                <img src={controlpanel}/>
                <p className="w-[120px] text-center">{time}</p>
            </div>
        </div>
    )
}