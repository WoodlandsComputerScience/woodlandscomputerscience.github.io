import type { SVGAttributes } from "react";

export default function TrafficLight(props: SVGAttributes<SVGElement>) {
    return <svg viewBox="0 0 8 2" xmlns="http://www.w3.org/2000/svg" {...props}>
        <circle cx="1" cy="1" r="1" fill="#ff5c5f" />
        <circle cx="4" cy="1" r="1" fill="#febc2e"/>
        <circle cx="7" cy="1" r="1" fill="#28c840" />
    </svg>
}