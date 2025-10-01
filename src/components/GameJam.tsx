import {useEffect, useState} from "react";
import {meetingTime} from "./Meetings.tsx";
import {differenceInCalendarDays, differenceInHours, intervalToDuration, isPast} from "date-fns";
import {FaAngleRight} from "react-icons/fa6";

export const gameJamEndDate = meetingTime("2025-10-13");

export function GameJamCountdown() {
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


    return <div className="@container w-full border-2 border-foreground-dimmed rounded-4xl p-8 flex flex-col select-none bg-neutral-900 justify-between">
        <span className="text-xl text-foreground-dimmed text-center">
            {concluded ? "The game jam has concluded!" : "Submissions are due in"}
        </span>
        <span className="text-4xl @xs:text-7xl font-black text-white text-center my-8">{countdown}</span>
        <span className="text-lg text-foreground-dimmed text-center">{!concluded && "(Monday, October 13)"}</span>
    </div>
}

export function GameJamActions() {
    const [concluded, setConcluded] = useState(false);
    useEffect(() => {
        const interval = setInterval(() => setConcluded(isPast(gameJamEndDate)), 1000);
        return () => clearInterval(interval);
    });

    return <>
        {!concluded &&
            <div className="flex flex-col gap-4 items-start mt-4 max-w-full flex-wrap">
                <a href="https://docs.google.com/forms/d/e/1FAIpQLScMlYuaazZTfdOUaqZgT0fYL_2F8TTW5Ihji6-xBKGuSN2a_w/viewform"
                   className="btn border-2">Submit a Game <FaAngleRight /></a>
                <span className="text-foreground-dimmed text-sm italic">
                    Make sure you are signed into your PDSB account
                </span>
            </div>
        }
    </>
}