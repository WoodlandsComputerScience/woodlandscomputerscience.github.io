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
        date: meetingTime("2025-11-03"),
        title: "Intro to Web Development",
        details: <>We'll be going over the basics of web dev and introduce HTML/CSS/JavaScript.</>,
    },
    {
        date: meetingTime("2025-11-10"),
        title: "Choosing a Web Framework",
        details: <>Web frameworks simplify and accelerate the development of a site.</>,
    },
];

export const gameJamEndDate = meetingTime("2025-10-20");

export const getNextMeeting = () => meetings.find(meeting => isFuture(meeting.date));