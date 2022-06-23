import { useInView } from "react-intersection-observer";

export interface ScrollRevealProps {
    hidden?: string;
    visible?: string;
    delay?: number;
    duration?: number;
    className?: string;

    revealed?: boolean;

    children: React.ReactNode;
}

export const ScrollReveal: React.FC<ScrollRevealProps> = ({
    hidden = "opacity-0",
    visible = "",
    delay = 0,
    duration = 1000,

    revealed = undefined,

    className = "",
    children,
}) => {
    const [ref, inView] = useInView({ delay: delay });

    const shouldReveal = () => {
        if (revealed !== undefined) return revealed;
        return inView;
    };

    return (
        <div
            ref={ref}
            className={`transition-all ${
                shouldReveal() ? visible : hidden
            } ${className}`}
            style={{ transitionDuration: `${duration}ms` }}
        >
            {children}
        </div>
    );
};

export default ScrollReveal;
