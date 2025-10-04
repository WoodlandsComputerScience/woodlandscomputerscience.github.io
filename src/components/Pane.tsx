import type { HTMLAttributes } from "react";
import TrafficLight from "./TrafficLight.tsx";

export interface PaneProps extends HTMLAttributes<HTMLElement> {
    children?: React.ReactNode;
    trafficLight?: boolean;
}

export default function Pane({children, trafficLight, className, ...props} : PaneProps) {
    trafficLight = trafficLight ?? true;
    return <div className={"p-5 shadow-lg bg-neutral-800 rounded-3xl w-auto" + className} {...props}>
        {trafficLight && <TrafficLight />}
        
        { children }
    </div>
}