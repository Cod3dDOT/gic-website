import React from "react";

type SCProps = {
    children?: React.ReactNode;
    className?: string;
};

export const ScreenContainer = React.forwardRef<HTMLDivElement, SCProps>(
    function ScreenContainer({ children, className = "" }, myRef) {
        return (
            <div className={`h-screen ${className}`} ref={myRef}>
                {children}
            </div>
        );
    }
);
