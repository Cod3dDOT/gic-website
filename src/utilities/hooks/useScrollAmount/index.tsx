import { useRef, useState, useEffect, RefObject } from "react";

export const useScrollAmount = (): [RefObject<HTMLDivElement>, number] => {
    const scrollRef = useRef<HTMLDivElement>(null);
    const [scrollPercentage, setScrollPercentage] = useState<number>(NaN);

    const reportScroll = (e: any) => {
        setScrollPercentage(getScrollAmount(e.target));
    };

    useEffect(() => {
        let element = null;
        if (!scrollRef || !scrollRef.current) {
            element = window;
        } else {
            element = scrollRef.current;
        }
        element.addEventListener("scroll", reportScroll, {
            passive: true,
        });
        if (Number.isNaN(scrollPercentage)) {
            setScrollPercentage(getScrollAmount(scrollRef.current));
        }
        return () => {
            let element = null;
            if (!scrollRef || !scrollRef.current) {
                element = window;
            } else {
                element = scrollRef.current;
            }
            element.removeEventListener("scroll", reportScroll);
        };
    }, [scrollPercentage]);

    return [scrollRef, Number.isNaN(scrollPercentage) ? 0 : scrollPercentage];
};

function getScrollAmount(element: any) {
    if (element === null) return NaN;
    if (!element.scrollY) {
        return window.scrollY;
    }
    return element.scrollY;
}
