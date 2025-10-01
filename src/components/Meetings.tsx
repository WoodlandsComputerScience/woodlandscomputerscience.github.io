import {format, isFuture, isPast, isToday} from "date-fns";
import * as React from "react";
import {useEffect} from "react";

export interface Meeting {
    date: Date;
    title: string;
    details: React.ReactNode;
}

export function meetingTime(date: string) : Date {
    return new Date(date + "T11:00:00");
}

const meetings : Meeting[] = [
    {
        date: meetingTime("2025-09-15"),
        title: "Intro to Game Development",
        details: <>We're now kicking off our game development series for 2025!
            This meeting is an intro into the principles of game development.</>,
    },
    {
        date: meetingTime("2025-09-22"),
        title: "Game Jam Begins!",
        details: <>The theme has been revealed: <strong>Comes in Pairs</strong><br /><br />
            This meeting will be focused on exploring the Godot game engine.</>,
    },
    {
        date: meetingTime("2025-09-29"),
        title: "Prototyping Your Game",
        details: <>Start prototyping your idea first to make sure it's viable and fun.</>,
    },
    {
        date: meetingTime("2025-10-06"),
        title: "Reiterating and Polishing",
        details: <>Begin finalizing your game and adding the finishing touches.</>,
    },
    {
        date: meetingTime("2025-10-13"),
        title: "Showcase",
        details: <>Game jam submissions are due!</>,
    },
];

export const getNextMeeting = () => meetings.find(meeting => isFuture(meeting.date));

export default function Meetings ({ showMeetingInfo } : { showMeetingInfo?: boolean }) {
    const [ nextMeeting, setNextMeeting ] = React.useState<Meeting | undefined>(undefined);
    useEffect(() => {
        setNextMeeting(getNextMeeting());
    }, []);
        // @ts-ignore
    return <div className="flex flex-col gap-8">

        {showMeetingInfo && <div className="mt-4">
                <p>Meetings are held weekly every Monday.</p>
                {nextMeeting && isToday(nextMeeting.date) && <p><strong>Our next meeting is today!</strong></p>}
                {nextMeeting && !isToday(nextMeeting.date) && <p>
                    Our next meeting will be on <strong>{format(nextMeeting.date, "MMMM d")}</strong>.
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
                if (meeting == next) {
                    // current
                    indicatorClass = "bg-white";
                    dateClass = "text-sm text-foreground";
                    titleClass = "text-lg text-white";
                    textClass = "text-white";
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
                        {meeting == next && <span className={indicatorClass + " rounded-full w-3 h-3 absolute inline-flex motion-safe:animate-ping "} />}
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