import { useEffect, useState } from "react";
import { motion, useAnimation } from "framer-motion";

const defaultHidden: RevealParams = {
    x: 0,
    y: 0,
    opacity: 0,
};

const defaultVisible: RevealParams = {
    x: 0,
    y: 0,
    opacity: 1,
};

export interface RevealParams {
    x?: number;
    y?: number;
    opacity?: number;
    delay?: number;
    duration?: number;
}

export interface ScrollRevealProps {
    className?: string;
    hidden?: RevealParams;
    visible?: RevealParams;
    exit?: RevealParams;
    revealPolicy?: "scroll" | "custom";
    revealed?: boolean;
    motionKey?: string;
    delay?: number;
    duration?: number;
    children: React.ReactNode;
}

export abstract class RevealPresets {
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
    hidden = {},
    visible = {},
    exit = undefined,
    revealPolicy = "scroll",
    revealed = false,

    delay = 0.2,
    duration = 1,
}) => {
    const getValidParams = (params: RevealParams) => {
        return {
            x: params.x,
            y: params.y,
            opacity: params.opacity,
            transition: {
                duration:
                    params.duration !== undefined ? params.duration : duration,
                delay: params.delay !== undefined ? params.delay : delay,
                type: "tween",
                ease: "easeOut",
            },
        };
    };

    hidden = getValidParams({ ...defaultHidden, ...hidden });
    visible = getValidParams({ ...defaultVisible, ...visible });
    if (exit !== undefined)
        exit = getValidParams({ ...defaultHidden, ...exit });

    const control = useAnimation();

    useEffect(() => {
        if (revealPolicy !== "custom") return;
        revealed ? control.start("visible") : control.start("hidden");
    }, [control, revealPolicy, revealed]);

    let addProps: { whileInView?: string } = {};
    if (revealPolicy === "scroll") addProps.whileInView = "visible";

    let variantProps: {
        hidden: RevealParams;
        visible: RevealParams;
        exit?: RevealParams;
    } = {
        hidden: hidden,
        visible: visible,
    };
    if (exit) variantProps.exit = exit;

    return (
        <motion.div
            {...addProps}
            initial="hidden"
            animate={control}
            exit="exit"
            variants={variantProps}
            className={className}
        >
            {children}
        </motion.div>
    );
};

export default ScrollReveal;
