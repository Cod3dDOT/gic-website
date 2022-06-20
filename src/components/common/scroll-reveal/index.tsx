import { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

const defaultRevealParams: RevealParams = {
    duration: 1,
    delay: 0.2,
    x: 0,
    y: 0,
    opacity: 1,
    revealPolicy: "scroll",
    revealed: false,
};

export interface RevealParams {
    duration?: number;
    delay?: number;
    x?: number;
    y?: number;
    opacity?: number;
    revealPolicy?: string;
    revealed?: boolean;
}

interface ScrollRevealProps {
    className?: string;
    revealParams?: RevealParams;
    children: React.ReactNode;
}

export abstract class RevealFrom {
    static Left: RevealParams = {
        x: -30,
    };
    static Right: RevealParams = {
        x: 30,
    };
    static Bottom: RevealParams = {
        y: 30,
    };
    static Top: RevealParams = {
        y: -30,
    };
}

export const ScrollReveal: React.FC<ScrollRevealProps> = ({
    className = "",
    children,
    revealParams = defaultRevealParams,
}) => {
    var revealParams: RevealParams = {
        ...defaultRevealParams,
        ...revealParams,
    };

    const control = useAnimation();
    const [ref, inView] = useInView();

    useEffect(() => {
        let condition = false;
        if (revealParams.revealPolicy === "scroll") {
            condition = inView;
        }
        if (revealParams.revealPolicy === "custom") {
            condition = revealParams.revealed === true;
        }

        if (condition) {
            control.start("visible");
        } else {
            control.start("hidden");
        }
    }, [control, inView, revealParams.revealed]);

    let hid = {
        opacity: 0,
        x: revealParams.x,
        y: revealParams.y,
    };

    let vis = {
        opacity: revealParams.opacity,
        x: 0,
        y: 0,
    };

    return (
        <motion.div
            ref={ref}
            initial="hidden"
            animate={control}
            variants={{
                hidden: hid,
                visible: vis,
            }}
            transition={{
                delay: revealParams.delay,
                duration: revealParams.duration,
                type: "tween",
                ease: "easeOut",
            }}
            className={className}
        >
            {children}
        </motion.div>
    );
};

export default ScrollReveal;
