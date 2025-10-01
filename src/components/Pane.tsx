import TrafficLight from "./TrafficLight.tsx";

export interface PaneProps {
    children?: React.ReactNode;
    trafficLight?: boolean;
    overflow?: boolean;
    className?: string;
}

export default function Pane({children, trafficLight, overflow, className} : PaneProps) {
    trafficLight = trafficLight ?? true;
    return <div className={"p-4 shadow-lg bg-neutral-800 rounded-3xl " + className}>
        {trafficLight && <TrafficLight />}
        <div className={"h-full w-full " + (overflow ? ""  : "overflow-x-auto")}>
            { children }
        </div>
    </div>
}