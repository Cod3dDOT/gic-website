import { Button } from "@components/common";
import {
    RiInformationFill,
    RiGroupFill,
    RiSwordFill,
    RiPlayFill,
} from "react-icons/ri";

import { useState } from "react";

export interface NavBarProps {
    onStepChange?: (index: number) => void;
    className?: string;
}

export const NavBar: React.FC<NavBarProps> = ({
    onStepChange = (index) => {},
    className = "",
}) => {
    const [currentStep, setCurrentStep] = useState<number>(0);
    const [infoOpen, setInfoOpen] = useState<boolean>(false);

    const handleButtonClick = (index: number) => {
        setCurrentStep(index);
        onStepChange(index);
    };

    const getStyles = (index: number) => {
        if (index === currentStep) return "border-white bg-dark-primary-light";
        return "";
    };

    return (
        <div className={`flex sm:flex-col justify-between z-10 ${className}`}>
            <Button
                theme="none"
                className="p-0 aspect-square"
                onClick={() => setInfoOpen(!infoOpen)}
            >
                <RiInformationFill className="h-8 w-8 m-auto" />
            </Button>
            <div className="flex sm:flex-col gap-4">
                <Button
                    className={`p-0 aspect-square ${getStyles(0)}`}
                    onClick={() => handleButtonClick(0)}
                >
                    <RiGroupFill className="h-6 w-6" />
                </Button>
                <Button
                    className={`p-0 aspect-square ${getStyles(1)}`}
                    onClick={() => handleButtonClick(1)}
                >
                    <RiSwordFill className="h-6 w-6" />
                </Button>
                <Button
                    image="/icons/icon_artifacts.webp"
                    className={`p-2 w-[50px] h-[50px] ${getStyles(2)}`}
                    onClick={() => handleButtonClick(2)}
                ></Button>
            </div>
            <Button
                onHoverEffects={false}
                className="p-2 aspect-square text-dark-primary-light"
            >
                <RiPlayFill className="w-6 h-6" />
            </Button>
        </div>
    );
};
