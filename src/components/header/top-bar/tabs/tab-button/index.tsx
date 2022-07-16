import { Button } from "@components/common";
import { ButtonProps } from "@components/common/button";
import { TabIconMap } from "@components/header";
import { Tabs } from "@components/screens/calculator/tabs";
import React from "react";

type HeaderTopBarTabButtonProps = {
    tab: Tabs;
} & ButtonProps;

export const HeaderTopBarTabButton: React.FC<HeaderTopBarTabButtonProps> = ({
    tab,
    onClick,
    className,
}) => {
    return (
        <Button
            className={`h-full aspect-square ${className}`}
            onClick={onClick}
        >
            {TabIconMap[tab]}
        </Button>
    );
};
