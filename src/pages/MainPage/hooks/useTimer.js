import { useEffect, useState } from "react";

export function useTimer() {
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

        return () => clearInterval(intervalId);
    }, []);

    return time;
}
