import {DISCORD_URL, EMAIL_URL, INSTAGRAM_URL} from "../Config.ts";
import {FaDiscord, FaInstagram} from "react-icons/fa6";

export default function Footer() {
    return <div className="flex flex-row items-center justify-between">
        <div className="flex flex-row">
            <a href={INSTAGRAM_URL} className="btn"><FaInstagram /></a>
            <a href={DISCORD_URL} className="btn"><FaDiscord /></a>
        </div>
        <span className="ml-4">Questions or suggestions? <a href={EMAIL_URL} >Email us</a></span>
    </div>
}