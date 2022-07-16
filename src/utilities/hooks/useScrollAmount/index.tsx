import {
    useRef,
    useState,
    useEffect,
    RefObject,
    Dispatch,
    SetStateAction,
} from "react";

export const useScrollAmount = (
    precision: number = 20
): [RefObject<HTMLDivElement>, number] => {
    const scrollRef = useRef<HTMLDivElement>(null);
    const [scrollAmount, setScrollAmount] = useState<number>(NaN);

    const reportScroll = (e: any) => {
        const n = getScrollAmount(e.target);
        if (Math.abs(scrollAmount - n) < precision) return;
        setScrollAmount(n);
    };

    useEffect(() => {
        let element = null;
        if (!scrollRef.current) {
            element = window;
        } else {
            element = scrollRef.current;
        }
        element.addEventListener("scroll", reportScroll, {
            passive: true,
        });
        if (Number.isNaN(setScrollAmount)) {
            setScrollAmount(getScrollAmount(scrollRef.current));
        }
        return () => {
            let element = null;
            if (!scrollRef.current) {
                element = window;
            } else {
                element = scrollRef.current;
            }
            element.removeEventListener("scroll", reportScroll);
        };
    }, [scrollAmount]);

    return [scrollRef, Number.isNaN(scrollAmount) ? 0 : scrollAmount];
};

function getScrollAmount(element: any) {
    if (element && element.scrollY) return element.scrollY;
    return window.scrollY;
}

export const useScrolledMoreThan = (
    boundary?: number
): [boolean, RefObject<HTMLDivElement>, Dispatch<SetStateAction<number>>] => {
    const [_boundary, setBoundary] = useState<number>(boundary || -1);

    const scrollRef = useRef<HTMLDivElement>(null);
    const [scrolledMore, setScrolledMore] = useState<boolean>(false);

    const reportScroll = (e: any) => {
        if (_boundary === -1) return;

        const newval = getScrollAmount(e.target);
        const isMore = newval > _boundary;

        if (isMore === scrolledMore) return;
        setScrolledMore(isMore);
    };

    useEffect(() => {
        let element = null;
        if (!scrollRef.current) {
            element = window;
        } else {
            element = scrollRef.current;
        }
        element.addEventListener("scroll", reportScroll, {
            passive: true,
        });

        return () => {
            let element = null;
            if (!scrollRef.current) {
                element = window;
            } else {
                element = scrollRef.current;
            }
            element.removeEventListener("scroll", reportScroll);
        };
    }, [scrolledMore, _boundary]);

    return [scrolledMore, scrollRef, setBoundary];
};
