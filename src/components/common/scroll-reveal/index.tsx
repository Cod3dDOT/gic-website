import { useEffect } from "react";
import { motion, useAnimation, AnimatePresence } from "framer-motion";
import { useInView } from "react-intersection-observer";

const defaultFrom: RevealParams = {
    x: 0,
    y: 0,
    opacity: 0,
};

const defaultTo: RevealParams = {
    x: 0,
    y: 0,
    opacity: 1,
};

export interface RevealParams {
    x?: number;
    y?: number;
    opacity?: number;
}

export interface ScrollRevealProps {
    className?: string;
    duration?: number;
    delay?: number;
    from?: RevealParams;
    to?: RevealParams;
    revealPolicy?: "scroll" | "custom";
    revealed?: boolean;
    key?: string;
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
    key = "",
    children,
    duration = 1,
    delay = 0.2,
    from = {},
    to = {},
    revealPolicy = "scroll",
    revealed = false,
}) => {
    from = { ...defaultFrom, ...from };
    to = { ...defaultTo, ...to };

    const control = useAnimation();
    const [ref, inView] = useInView();

    useEffect(() => {
        let condition = false;
        switch (revealPolicy) {
            case "scroll":
                condition = inView;
                break;
            case "custom":
                condition = revealed === true;
                break;
        }

        condition ? control.start("visible") : control.start("hidden");
    }, [control, inView, revealPolicy, revealed]);

    return (
        <AnimatePresence>
            <motion.div
                key={key}
                ref={ref}
                initial="hidden"
                animate={control}
                exit={"exit"}
                variants={{
                    hidden: from,
                    visible: to,
                    exit: from,
                }}
                transition={{
                    delay: delay,
                    duration: duration,
                    type: "tween",
                    ease: "easeOut",
                }}
                className={className}
            >
                {children}
            </motion.div>
        </AnimatePresence>
    );
};

export default ScrollReveal;
