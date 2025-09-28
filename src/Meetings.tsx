import {format, isBefore, isToday} from "date-fns";

interface Meeting {
    date: Date;
    title: string;
    details: React.ReactNode;
}

function meetingTime(date: string) : Date {
    return new Date(date + "T11:30:00-05:00");
}

const meetings : Meeting[] = [
    {
        date: meetingTime("2025-09-15"),
        title: "Game Jam Begins",
        details: <>This meeting will be an intro to game development.</>,
    },
    {
        date: meetingTime("2025-09-22"),
        title: "Exploring Game Engines",
        details: <>We'll be teaching <strong>Godot</strong> this year, but feel free to use any engine you wish!</>,
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

export default function Meetings () {
    // @ts-ignore
    let prev: Meeting = meetings[0];
    const today = new Date();
    let next: Meeting | undefined;
    for (const event of meetings) {
        if (isBefore(event.date, today)) {
            prev = event;
        } else {
            next = event;
            break;
        }
    }
    return <div className="flex flex-col gap-8">
        Meetings are weekly on Mondays.
        {next && isToday(next.date) && <p><strong>Our next meeting is today!.</strong></p>}
        {next && !isToday(next.date) && <p>
            Our next meeting will be on <strong>{format(next.date, "MMMM d")}</strong>.
        </p>}
        <ol className="flex flex-col gap-8 border-l-1 border-foreground-dimmed ml-2 list-none">
            {meetings.map((meeting: Meeting) => {
                let titleClass: string;
                let dateClass: string;
                let textClass: string;
                let indicatorClass: string;
                if (meeting == next) {
                    // current
                    indicatorClass = "bg-white";
                    dateClass = "text-sm text-foreground";
                    titleClass = "text-lg text-white";
                    textClass = "text-white";
                } else if (isBefore(meeting.date, today)) {
                    // past
                    indicatorClass = "bg-white";
                    dateClass = "text-sm text-foreground-dimmed";
                    titleClass = "text-lg text-foreground-dimmed";
                    textClass = "text-foreground-dimmed";
                } else {
                    // future
                    indicatorClass = "bg-neutral-400";
                    dateClass = "text-sm text-foreground-dimmed";
                    titleClass = "text-lg text-foreground-dimmed";
                    textClass = "text-foreground-dimmed";
                }
                return <li className="flex">
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