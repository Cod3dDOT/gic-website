import { ScreenContainer, ScrollReveal } from "@components/common";

import { CharacterScreen } from "./character-screen";
import { WeaponScreen } from "./weapon-screen";
import { NavBar } from "./navbar";

import { useState } from "react";

export interface SecondScreenProps {
    containerRef: React.RefObject<HTMLDivElement>;
}

export const SecondScreen: React.FC<SecondScreenProps> = ({ containerRef }) => {
    const [currentStep, setCurrentStep] = useState<number>(0);

    const getStyles = (index: number) => {
        if (index !== currentStep) return "-translate-x-[100px] opacity-0";
        return "z-10";
    };

    return (
        <ScreenContainer
            className="flex sm:flex-row flex-col-reverse p-6"
            ref={containerRef}
        >
            <div className="relative sm:mr-6 sm:mt-0 mt-4 w-full h-full">
                <CharacterScreen
                    className={`absolute w-full h-full transition-all duration-1000
                                ${getStyles(0)}`}
                />

                <WeaponScreen
                    className={`absolute w-full h-full transition-all duration-1000
                                ${getStyles(1)}`}
                />

                <div
                    className={`absolute w-full h-full transition-all duration-1000
                                ${getStyles(2)}`}
                ></div>
            </div>
            <NavBar onStepChange={(step) => setCurrentStep(step)} />
        </ScreenContainer>
    );
};
