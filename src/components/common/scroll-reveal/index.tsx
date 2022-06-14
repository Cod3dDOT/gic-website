import React from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

const defaultRevealParams = {
    duration: 1,
    delay: 0,
    x: 0,
    y: 0,
    opacity: 1,
};

export interface RevealParams {
    duration?: number;
    delay?: number;
    x?: number;
    y?: number;
    opacity?: number;
}

interface ScrollRevealProps {
    className?: string;
    revealParams?: RevealParams;
    children: React.ReactNode;
}

export const RevealFromLeft: RevealParams = {
    x: -30,
};

export const RevealFromRight: RevealParams = {
    x: 30,
};

export const RevealFromTop: RevealParams = {
    y: -30,
};

export const RevealFromBottom: RevealParams = {
    y: 30,
};

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

    React.useEffect(() => {
        if (inView) {
            control.start("visible");
        } else {
            control.start("hidden");
        }
    }, [control, inView]);

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
