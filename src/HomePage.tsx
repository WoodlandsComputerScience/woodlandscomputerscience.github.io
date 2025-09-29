import Template from "./components/Template.tsx";
import TrafficLight from "./components/TrafficLight.tsx";
import Meetings, {nextMeeting} from "./components/Meetings.tsx";
import {FaAngleRight, FaDiscord} from "react-icons/fa6";
import {DISCORD_URL} from "./Config.ts";
import {format, isToday} from "date-fns";
import * as React from "react";
import {useEffect} from "react";

export default function HomePage() {
    // Keep active heading highlighted in navbar
    const [ heading, setHeading ] = React.useState("/#");
    useEffect(() => {
        const observer = new IntersectionObserver((headings) => {
            headings.forEach((heading) => {
                if (heading.isIntersecting) {
                    if (heading.target.id == "home") {
                        setHeading("/#");
                        return;
                    } else if (heading.target.id == "calendar") {
                        setHeading("/#calendar");
                    }
                }
            })
        }, {
            rootMargin: '0px 0px -60% 0px',
        });

        document.querySelectorAll("*").forEach((h) => observer.observe(h));
        return () => observer.disconnect();
    }, []);

    return (
      <Template active={heading}>
          <div className="p-4 shadow-lg bg-neutral-800 rounded-3xl mb-4" id="top">
              <TrafficLight />
              <h1 className="text-3xl font-bold mb-4" id="home">Woods CS is back for 2025</h1>
              <div className="flex flex-col gap-4 items-start max-w-3xl">
                  <p>
                      Welcome to the Woodlands computer science community!
                  </p>
                  <p>
                      Join us <strong className="text-neutral-200 underline"> Monday lunches in Room 100</strong> for:
                  </p>
                  <ul>
                      <li>Lessons and workshops</li>
                      <li>Contest programming (CCC)</li>
                      <li>Game dev</li>
                      <li>Cybersecurity</li>
                      <li>ML/AI</li>
                      <li>Web dev</li>
                      <li>Open studio</li>
                  </ul>
                  <p>Beginning programmers or those interested in CS are encouraged to attend!</p>
                  <div className="flex gap-4 items-start mt-4 max-w-full flex-wrap">
                      <a href="#calendar" className="btn bg-brand text-white font-bold">See What's Happening <FaAngleRight /></a>
                      <a href={DISCORD_URL} className="btn bg-social-discord text-white"><FaDiscord /> Join us on Discord</a>
                  </div>
              </div>
              <hr className="my-8"/>
              <div className="flex flex-col-reverse xl:flex-row items-start">
                  <div>
                      <div className="flex flex-col gap-4 max-w-3xl items-start">
                          <h1 className="text-3xl font-bold" id="game-jam">Game Jam 2025</h1>
                          <p>This month, we're once again hosting our annual Game Jam! The theme this year is <strong>Comes in Pairs</strong>.</p>
                          <p>Are you passionate about art, modeling, music, or coding? Have you always wanted to make a game of your very own?
                              Come join us in Room 100, where we'll teach you how to use the <strong>Godot Game Engine</strong>
                              &mdash;&mdash;no technical or gamedev experience necessary.</p>
                          <p className="text-foreground-dimmed text-sm"><i>Submissions are due on October 13.</i></p>
                          <a href="/game-jam" className="btn border-2">Details <FaAngleRight /></a>
                      </div>
                      <hr  className="my-8"/>
                      <div className="flex flex-col gap-4">
                          <h1 className="text-3xl font-bold" id="calendar">Calendar</h1>
                          <div className="mb-4">
                              <p>Meetings are held weekly every Monday.</p>
                              {nextMeeting && isToday(nextMeeting.date) && <p><strong>Our next meeting is today!</strong></p>}
                              {nextMeeting && !isToday(nextMeeting.date) && <p>
                                  Our next meeting will be on <strong>{format(nextMeeting.date, "MMMM d")}</strong>.
                              </p>}
                          </div>
                          <Meetings />
                      </div>
                  </div>
                  <img alt="Game jam poster" src="/GameJam.png" className="xl:sticky xl:top-8 w-2xl md:max-w-3/7 mb-8 xl:my-0 xl:mx-8" />
              </div>
              <hr className="my-8"/>
              <h1 className="text-3xl font-bold mb-4">hack::peel</h1>
              <div className="flex flex-col-reverse xl:flex-row items-start justify-between">
                  <article className="flex flex-col gap-4 items-start max-w-3xl">
                      <p>
                          hack::peel is the Woodlands' annual Peel-wide hackathon.
                          Join over 100 students from across the Peel region and turn a special idea into your very own hack!
                      </p>
                      <p>
                          Students enrolled in a Peel region high-school (including DPCSB) are eligible to participate in hack::peel.
                      </p>
                      <p className="text-foreground-dimmed text-sm"><i>More details coming soon, stay tuned!</i></p>
                  </article>
                  <img alt="hack::peel logo" id="hack-peel" src="/HackPeelLogo.png" className="hidden lg:block w-lg md:max-w-3/4 my-8 xl:my-0 xl:mx-8" />
              </div>


          </div>
      </Template>
    )
}
