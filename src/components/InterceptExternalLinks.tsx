import {useEffect} from "react";

export default function InterceptExternalLinks() {
    useEffect(() => {
        document.querySelectorAll(".blog-post a").forEach(_a => {
            const a = _a as HTMLAnchorElement;
            if (a.href.includes("http") && !a.href.includes("://" + location.hostname)) {
                a.target = "_blank";
            }
        });
    }, []);
    return <></>
}