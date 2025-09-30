import TrafficLight from "./TrafficLight.tsx";

export interface PaneProps {
    children?: React.ReactNode;
    trafficLight?: boolean;
    className?: string;
}

export default function Pane({children, trafficLight, className} : PaneProps) {
    trafficLight = trafficLight ?? true;
    return <div className={"p-4 shadow-lg bg-neutral-800 rounded-3xl " + className}>
        {trafficLight && <TrafficLight />}
        { children }
    </div>
}