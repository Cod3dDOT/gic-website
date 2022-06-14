import React from "react";

type SCProps = {
    children?: React.ReactNode;
    className?: string;
};

export const ScreenContainer: React.FC<SCProps> = ({
    children,
    className = "",
}) => {
    return <div className={`h-screen ${className}`}>{children}</div>;
};
