import youtube from "../../../shared/assets/youtube.png";
import profileImage from "../../../shared/assets/lockprofile.png";
import youtubeAside from '../../../shared/assets/youtubeAside.png';
import comment from "../../../shared/assets/youtubeComment.png";

export default function SafariPage() {
    return (
        <>
            <div className="flex justify-between mb-5 px-10">
                <img src={youtube} className="w-[150px]"/>
                <div className="flex gap-1">
                    <input
                        type="text"
                        className="border border-black rounded-xl px-2 py-1 w-[300px]"
                    />
                    <button className="bg-gray-700 rounded-xl text-white px-2 py-1">
                        검색
                    </button>
                </div>
                <div className="flex gap-5">
                    <button className="bg-gray-700 rounded-xl text-white px-2 py-1">
                        + 만들기
                    </button>
                    <img src={profileImage} className="w-10 rounded-full"/>
                </div>
            </div>
            <div className="flex gap-10">
                <div className="flex flex-col">
                    <iframe
                        width="900px"
                        height="500px"
                        src="https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1&si=Qv6vGw5I7hXybwjO&controls=1"
                        title="YouTube video player"
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        referrerPolicy="strict-origin-when-cross-origin"
                        allowFullScreen
                        className="mt-4 ml-5"></iframe>

                    <img src={comment} className="w-600px"/>
                </div>
                <img src={youtubeAside} className="w-full"/>
            </div>
        </>
    );
}
