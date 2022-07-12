import { useInView } from "react-intersection-observer";

export interface ScrollRevealProps {
    onStartHidden?: string;
    onStartVisible?: string;

    delay?: number;
    duration?: number;
    className?: string;

    revealed?: boolean;

    children: React.ReactNode;
}

export const ScrollReveal: React.FC<ScrollRevealProps> = ({
    onStartHidden: hidden = "opacity-0",
    onStartVisible: visible = "",
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

    const getClasses = () => {
        return shouldReveal() ? visible : hidden;
    };

    return (
        <div
            ref={ref}
            className={`transition-all ${getClasses()} ${className}`}
            style={{ transitionDuration: `${duration}ms` }}
        >
            {children}
        </div>
    );
};

export default ScrollReveal;
