import TrafficLight from "./TrafficLight.tsx";

export interface PaneProps {
    children?: React.ReactNode;
    trafficLight?: boolean;
    overflowScroll?: boolean;
    className?: string;
}

export default function Pane({children, trafficLight, overflowScroll, className} : PaneProps) {
    trafficLight = trafficLight ?? true;
    return <div className={"p-4 shadow-lg bg-neutral-800 rounded-3xl max-w-full " + className}>
        {trafficLight && <TrafficLight />}
        <div className={"h-full w-full max-w-full " + (overflowScroll ? "overflow-x-auto"  : "")}>
            { children }
        </div>
    </div>
}