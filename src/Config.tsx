import { isFuture } from "date-fns";

export const DISCORD_URL: string = ""; // unused
export const INSTAGRAM_URL: string = "https://www.instagram.com/woodlands.cs/";
export const EMAIL_URL: string = "";
export const GITHUB_URL: string = "https://github.com/WoodlandsComputerScience";

export interface Meeting {
    date: Date;
    title: string;
    details: React.ReactNode;
    notice?: string;
}

export function meetingTime(date: string) : Date {
    return new Date(date + "T11:00:00");
}

export const meetings : Meeting[] = [
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
        date: meetingTime("2025-10-16"),
        title: "Showcase",
        details: <>Game jam submissions are due!</>,
        notice: "moved to Thursday due to Thanksgiving",
    },
];

export const gameJamEndDate = meetingTime("2025-10-20");

export const getNextMeeting = () => meetings.find(meeting => isFuture(meeting.date));