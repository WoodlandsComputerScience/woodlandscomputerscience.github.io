import {useEffect, useState} from "react";
import {meetingTime} from "./Meetings.tsx";
import {differenceInCalendarDays, differenceInHours, intervalToDuration, isPast} from "date-fns";

export const gameJamEndDate = meetingTime("2025-10-13");

export default function GameJamCountdown() {
    const [ countdown, setCountdown ] = useState("...");
    const [ concluded, setConcluded ] = useState(false);
    useEffect(() => {
        const update = () => {
            setConcluded(isPast(gameJamEndDate));
            const duration = intervalToDuration({ end: gameJamEndDate, start: new Date()});
            const hours = differenceInHours(gameJamEndDate, new Date()).toString().padStart(2, "0");
            const minutes = (duration.minutes??0).toString().padStart(2, "0");
            const seconds = (duration.seconds??0).toString().padStart(2, "0");
            if (isPast(gameJamEndDate)) setCountdown("00:00:00");
            else if (differenceInHours(gameJamEndDate, new Date()) < 100)
                setCountdown(`${hours.toString()}:${minutes}:${seconds}`);
            else setCountdown(`${differenceInCalendarDays(gameJamEndDate, new Date())} days`);
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
        <span className="text-lg text-foreground-dimmed text-center">{!concluded && "(Monday, October 13)"}</span>
    </div>
}