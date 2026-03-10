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
        date: meetingTime("2026-03-09"),
        title: "Spring Game Jam Begins!",
        details: <>Come to room 100 for our theme reveal and a brainstorming workshop!</>,
    },
];

export const gameJamEndDate = meetingTime("2026-04-06");

export const getNextMeeting = () => meetings.find(meeting => isFuture(meeting.date));