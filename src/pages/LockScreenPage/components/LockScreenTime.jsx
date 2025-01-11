import { useEffect, useState } from "react";

export default function LockScreenTime() {
    const [date, setDate] = useState('');
    const [time, setTime] = useState('');

    useEffect(() => {
        const intervalId = setInterval(() => {
            const now = new Date();

            const formattedDate = new Intl.DateTimeFormat('en-US', {
                weekday: 'long',
                month: 'short',
                day: '2-digit',
            }).format(now);

            const formattedTime = new Intl.DateTimeFormat('en-US', {
                hour: '2-digit',
                minute: '2-digit',
                hour12: false,
            }).format(now);

            setDate(formattedDate);
            setTime(formattedTime);
        }, 1000);

        return () => clearInterval(intervalId);
    }, []);

    return (
        <div className="flex flex-col items-center font-black text-white text-opacity-50 text-[50px] mt-10">
            <div>{date}</div>
            <div className="text-[150px]">{time}</div>
        </div>
    );
}
