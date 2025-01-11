import Background from "../MainPage/components/Background.jsx";
import lockscreen from '../../shared/assets/lockbackground.png';
import Navbar from "../../shared/components/Navbar.jsx";
import LockScreenTime from "./components/LockScreenTime.jsx";
import profileImage from '../../shared/assets/lockprofile.png';

export default function LockScreen() {
    return (
        <Background background={lockscreen}>
            <Navbar isLock={true}/>
            <LockScreenTime />
            <div className="flex flex-col items-center fixed bottom-20 left-1/2 transform -translate-x-1/2">
                <img src={profileImage} className="rounded-full w-[100px]"/>
                <p className="text-2xl font-black text-white text-opacity-70 mt-3">태진 강</p>
            </div>
        </Background>
    )
}