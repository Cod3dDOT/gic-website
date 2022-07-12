import { useState, useEffect } from "react";

export const useIsMobile = (): [boolean, boolean, boolean] => {
    const [width, setWidth] = useState<number>(0);

    function handleWindowSizeChange() {
        setWidth(window.innerWidth);
    }

    useEffect(() => {
        setWidth(window.innerWidth);
        window.addEventListener("resize", handleWindowSizeChange);
        return () => {
            window.removeEventListener("resize", handleWindowSizeChange);
        };
    }, []);

    return [width <= 640, width <= 768, width <= 1024];
};
