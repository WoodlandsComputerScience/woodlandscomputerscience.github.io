import {FaAngleRight} from "react-icons/fa6";

export default function MeetingNotesSegment() {
    return <>
        <hr className="my-8"/>
        <h2 className="text-3xl font-bold mb-4" id="meeting-notes">Meeting Notes</h2>
        <div className="max-w-2xl">
            <p>
                Past meeting notes and lesson material can be found on our website.
            </p>
        </div>
        <a href="#" className="btn border-2 mt-8">Meeting Notes <FaAngleRight /></a>
    </>
}