import { Button } from "@components/common";

import { useState } from "react";

export interface NavBarProps {
    onStepChange?: (index: number) => void;
    className?: string;
}

const NavBarButtonStates = {
    inactive: "border-dark-primary-light hover:border-white",
    active: "bg-white text-black",
};

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

    return (
        <div className="flex flex-col justify-between">
            <Button
                icon="ri-information-fill text-3xl"
                theme="none"
                className="p-2"
                onClick={() => setInfoOpen(!infoOpen)}
            ></Button>
            <div className="flex flex-col space-y-4">
                <Button
                    icon="ri-group-fill text-2xl"
                    className={`p-0 w-[50px] h-[50px] ${
                        currentStep === 0
                            ? NavBarButtonStates["active"]
                            : NavBarButtonStates["inactive"]
                    }`}
                    onClick={() => handleButtonClick(0)}
                ></Button>
                <Button
                    icon="ri-sword-fill text-2xl"
                    className={`p-0 w-[50px] h-[50px] ${
                        currentStep === 1
                            ? NavBarButtonStates["active"]
                            : NavBarButtonStates["inactive"]
                    }`}
                    onClick={() => handleButtonClick(1)}
                ></Button>
                <Button
                    image="/icons/icon_artifacts.webp"
                    className={`relative p-1 w-[50px] h-[50px] ${
                        currentStep === 2
                            ? NavBarButtonStates["active"]
                            : NavBarButtonStates["inactive"]
                    }`}
                    onClick={() => handleButtonClick(2)}
                ></Button>
            </div>
            <Button
                icon="ri-play-fill"
                onHoverEffects={false}
                className="border-dark-primary-light text-3xl p-2"
            ></Button>
        </div>
    );
};
