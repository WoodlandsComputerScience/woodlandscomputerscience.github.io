import {GITHUB_URL, INSTAGRAM_URL} from "../Config";
import {FaGithub, FaInstagram} from "react-icons/fa6";

export default function Footer() {
    return <div className="flex flex-row items-center justify-between">
        <div className="flex flex-row">
            <a href={INSTAGRAM_URL} className="px-4 py-3 text-foreground hover:text-white border-0 shadow-none" role="button" aria-label="Instagram"><FaInstagram /></a>
            <a href={GITHUB_URL} className="px-4 py-3 text-foreground hover:text-white border-0 shadow-none" role="button" aria-label="GitHub"><FaGithub /></a>
        </div>
        <span className="ml-4 text-right">{new Date().getFullYear()} Woodlands Computer Science</span>
    </div>
}