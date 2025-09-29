import {GITHUB_URL, INSTAGRAM_URL} from "../Config.ts";
import {FaGithub, FaInstagram} from "react-icons/fa6";

export default function Footer() {
    return <div className="flex flex-row items-center justify-between">
        <div className="flex flex-row">
            <a href={INSTAGRAM_URL} className="btn"><FaInstagram /></a>
            <a href={GITHUB_URL} className="btn"><FaGithub /></a>
        </div>
        <span className="ml-4 text-right">{new Date().getFullYear()} Woodlands Computer Science</span>
    </div>
}