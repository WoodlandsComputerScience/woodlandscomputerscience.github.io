import { formatDate } from "date-fns";
import { type HTMLAttributes } from "react";

export interface TimeProps extends HTMLAttributes<HTMLElement> {
    dateTime: Date,
    format: string,
}

export default function Time({dateTime, format, ...props}: TimeProps) {
    return <time {...props} dateTime={dateTime.toISOString()}>{formatDate(dateTime, format)}</time>
}