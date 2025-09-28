import {useEffect, useState} from "react";
import {meetingTime} from "./Meetings.tsx";
import {differenceInCalendarDays, differenceInHours, intervalToDuration, isPast} from "date-fns";

export default function GameJamCountdown() {
    const [ countdown, setCountdown ] = useState("...");
    const [ concluded, setConcluded ] = useState(false);
    const endTime = meetingTime("2025-10-13");
    useEffect(() => {
        const update = () => {
            setConcluded(isPast(endTime));
            const duration = intervalToDuration({ end: endTime, start: new Date()});
            const hours = differenceInHours(endTime, new Date()).toString().padStart(2, "0");
            const minutes = (duration.minutes??0).toString().padStart(2, "0");
            const seconds = (duration.seconds??0).toString().padStart(2, "0");
            if (isPast(endTime)) setCountdown("00:00:00");
            else if (differenceInHours(endTime, new Date()) < 100)
                setCountdown(`${hours.toString()}:${minutes}:${seconds}`);
            else setCountdown(`${differenceInCalendarDays(endTime, new Date())} days`);
        };
        update();
        const interval = setInterval(update, 1000);
        return () => clearInterval(interval);
    }, [])


    return <div className="border-2 border-foreground-dimmed rounded-4xl p-8 flex flex-col select-none bg-neutral-900 justify-between">
        <span className="text-xl text-foreground-dimmed text-center">
            {concluded ? "The game jam has concluded!" : "Submissions are due in"}
        </span>
        <span className="text-4xl sm:text-6xl xl:text-7xl font-black text-white mt-4 mb-8 text-center">{countdown}</span>
        {!concluded &&
            <span className="text-lg text-foreground-dimmed text-center">(Monday, October 13)</span>}
    </div>
}