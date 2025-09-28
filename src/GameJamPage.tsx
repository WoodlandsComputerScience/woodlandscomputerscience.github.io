import Template from "./components/Template.tsx";
import TrafficLight from "./components/TrafficLight.tsx";
import GameJamCountdown from "./components/GameJamCountdown.tsx";
import {FaRegClock} from "react-icons/fa6";
import Meetings from "./components/Meetings.tsx";
import {LuCherry} from "react-icons/lu";
import {DISCORD_URL} from "./Config.ts";
import {FaExternalLinkAlt} from "react-icons/fa";

export default function GameJamPage() {


    return (
        <Template active="/game-jam">
            <div className="p-4 shadow-lg bg-neutral-800 rounded-3xl mb-4" id="top">
                <TrafficLight />
                <div className="flex flex-col-reverse xl:flex-row items-start justify-between">
                    <div className="flex flex-col grow">
                        <h1 className="text-5xl font-bold mb-4">Game Jam 2025</h1>
                        <div className="text-xl flex flex-col gap-2">
                            <p className="flex flex-row items-start gap-4">
                                <strong className="icon-text"><FaRegClock />When: </strong> September 16 to October 13
                            </p>
                            <p className="flex flex-row items-start gap-4"><strong className="icon-text">
                                <LuCherry />Theme: </strong>Comes in Pairs
                            </p>
                        </div>
                        <hr className="my-4" />
                        <div className="flex flex-col gap-4">
                            <p>
                                This year, we want you to think of duos, doubles, and siblings&mdash;&mdash;things
                                that can't exist alone.
                                Whether it's intertwined characters, puzzles with matching parts, or parallel dimensions,
                                your challenge is to build a game around the power of pairs.
                            </p>
                            <p>
                                Join us in Room 100 for lessons on how to use the Godot game engine, and feel free to ask on
                                our <a href={DISCORD_URL} className="icon-text">Discord <FaExternalLinkAlt /></a> for
                                help on any challenges you encounter.
                            </p>
                        </div>
                        <hr className="my-4" />
                        <h1 className="text-3xl font-bold mb-4">Schedule</h1>
                        <Meetings />
                        <hr className="my-4" />
                        <h1 className="text-3xl font-bold mb-4">FAQ</h1>
                        <details name="faq">
                            <summary>Do I have to use the Godot engine?</summary>
                            Nope! You are free to use any engine you wish. However, club lessons will be focused on Godot
                            this year.
                        </details>
                        <details name="faq">
                            <summary>How large can my team be?</summary>
                            Traditionally, teams have been 4 people, but that is not a hard limit.
                        </details>
                        <details name="faq">
                            <summary>Do I have to follow the theme?</summary>
                            The theme is meant to inspire rather than constrain. Use it as a starting point when brainstorming
                            your game's premise.
                        </details>
                    </div>
                    <div className="w-auto flex flex-col sm:flex-row xl:flex-col gap-8 xl:sticky xl:top-8 xl:max-w-3/7 mb-8 xl:my-0 xl:mx-8">
                        <GameJamCountdown />
                        <img alt="Game jam poster" src="/GameJam.png" className="max-w-full sm:max-w-1/2 xl:max-w-full" />
                    </div>
                </div>
            </div>
        </Template>
    )
}
