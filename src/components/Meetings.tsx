import {format, isPast, isToday} from "date-fns";
import {useEffect, useState} from "react";
import { getNextMeeting, meetings, type Meeting } from "../Config";

export default function Meetings ({ showNextMeeting } : { showNextMeeting?: boolean }) {
    const [ nextMeeting, setNextMeeting ] = useState<Meeting | undefined>(undefined);
    useEffect(() => {
        setNextMeeting(getNextMeeting());
    }, []);
        // @ts-ignore
    return <div className="flex flex-col gap-8">

        {showNextMeeting && <div className="mt-4">
                <p>Meetings are held weekly on Mondays.</p>
                {nextMeeting && isToday(nextMeeting.date) && <p><strong>Our next meeting is today!</strong></p>}
                {nextMeeting && !isToday(nextMeeting.date) && <p className="mt-4">
                    Our next meeting will be on <strong>
                        {format(nextMeeting.date, "MMMM d")}
                    </strong> {nextMeeting.notice && <em>({nextMeeting.notice})</em>}.
                </p>}
            </div>
        }

        <ol className="flex flex-col gap-8 border-l-1 p-0 border-foreground-dimmed ml-2 list-none">
            {meetings.map((meeting: Meeting) => {
                let titleClass: string;
                let dateClass: string;
                let textClass: string;
                let indicatorClass: string;
                const next = nextMeeting;
                const highlight = showNextMeeting && meeting == next;
                if (!showNextMeeting || meeting == next) {
                    // current
                    indicatorClass = showNextMeeting ? "bg-white" : "bg-foreground";
                    dateClass = "text-sm text-foreground";
                    titleClass = showNextMeeting ? "text-lg text-white" : "text-lg text-foreground";
                    textClass = showNextMeeting ? "text-white" : "";
                } else if (isPast(nextMeeting?.date ?? 0)) {
                    // past
                    indicatorClass = "bg-foreground-dimmed";
                    dateClass = "text-sm text-foreground-dimmed";
                    titleClass = "text-lg text-foreground-dimmed";
                    textClass = "text-foreground-dimmed";
                } else {
                    // future
                    indicatorClass = "bg-foreground-dimmed";
                    dateClass = "text-sm text-foreground-dimmed";
                    titleClass = "text-lg text-foreground-dimmed";
                    textClass = "text-foreground-dimmed";
                }
                return <li className="flex ps-0" key={meeting.date.toString()}>
                    <span className="flex w-3 h-3 -ml-1.5 mt-1">
                        {highlight && <span className={indicatorClass + " rounded-full w-3 h-3 absolute inline-flex motion-safe:animate-ping "} />}
                        <span className={indicatorClass + " rounded-full w-3 h-3 relative inline-flex"} />
                    </span>
                    <div className={"pl-4 "}>
                        <time className={dateClass} dateTime={meeting.date.toDateString()}>{format(meeting.date, "EEEE MMMM d")}</time>
                        <h2 className={"font-semibold mb-2 " + titleClass}>{meeting.title}</h2>
                        <p className={textClass}>{meeting.details}</p>
                    </div>
                </li>
            })}
        </ol>
    </div>
}