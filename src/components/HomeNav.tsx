import Nav from "./Nav.tsx";
import * as React from "react";
import {useEffect} from "react";

export default function HomeNav() {
    const [ heading, setHeading ] = React.useState("/#");
    useEffect(() => {
        const observer = new IntersectionObserver((headings) => {
            headings.forEach((heading) => {
                if (heading.isIntersecting) {
                    if (heading.target.id == "home") {
                        setHeading("/#");
                        return;
                    } else if (heading.target.id == "calendar") {
                        setHeading("/#calendar");
                    }
                }
            })
        }, {
            rootMargin: '0px 0px -60% 0px',
        });

        document.querySelectorAll("*").forEach((h) => observer.observe(h));
        return () => observer.disconnect();
    }, []);
    return <Nav active={heading} />
}