import {EMAIL_URL, INSTAGRAM_URL} from "../Config.ts";
import {FaInstagram} from "react-icons/fa6";

export default function Footer() {
    return <div className="flex flex-row items-center justify-between">
        <div className="flex flex-row">
            <a href={INSTAGRAM_URL} className="btn"><FaInstagram /></a>
        </div>
        <span className="ml-4">{new Date().getFullYear()} Woodlands Computer Science</span>
    </div>
}