import React from "react";

type SCProps = {
    children?: React.ReactNode;
    className?: string;
};

export const ScreenContainer: React.FC<SCProps> = React.forwardRef<
    HTMLDivElement,
    SCProps
>(({ children, className = "" }, myRef) => {
    return (
        <div className={`h-screen ${className}`} ref={myRef}>
            {children}
        </div>
    );
});
