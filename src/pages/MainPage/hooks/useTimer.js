import {useEffect, useState} from "react";

export default function useTimer() {
    const [time, setTime] = useState('');

    useEffect(() => {
        const intervalId = setInterval(() => {
            const formattedTime = new Intl.DateTimeFormat('en-US', {
                month: 'short',
                day: '2-digit',
                hour: '2-digit',
                minute: '2-digit',
                second: '2-digit',
                hour12: false,
            }).format(new Date());

            setTime(formattedTime);
        }, 1000);

        return () => clearInterval(intervalId); // 컴포넌트 언마운트 시 인터벌 클리어
    }, []);

    return time;
}