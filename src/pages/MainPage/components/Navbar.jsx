import appleLogo from "../../../shared/assets/appleLogo.png";
import wifi from "../../../shared/assets/wifi.png";
import search from "../../../shared/assets/search.png";
import profile from "../../../shared/assets/profile.png";
import controlpanel from "../../../shared/assets/controlpanel.png";
import {useTimer} from "../hooks/useTimer.js";

export default function Navbar() {
    const time = useTimer();

    return (
        <div className="w-full h-7 flex items-center px-5 justify-between bg-white bg-opacity-50">
            <div className="flex items-center w-full gap-5">
                <img src={appleLogo}/>
                <p>Finder</p>
                <p>File</p>
                <p>Edit</p>
                <p>View</p>
                <p>Go</p>
                <p>Window</p>
                <p>Help</p>
            </div>
            <div className="flex items-center justify-end w-screen gap-3">
                <img src={wifi}/>
                <img src={search}/>
                <img src={profile}/>
                <img src={controlpanel}/>
                <p className="w-[120px]">{time}</p>
            </div>
        </div>
    )
}