import { ScreenContainer } from "@components/common";

import { CharacterScreen } from "./character-screen";
import { NavBar } from "./navbar";

import { useState } from "react";

export interface SecondScreenProps {
    containerRef: React.RefObject<HTMLDivElement>;
}

export const SecondScreen: React.FC<SecondScreenProps> = ({ containerRef }) => {
    const [currentStep, setCurrentStep] = useState<number>(0);

    return (
        <ScreenContainer className="flex p-6" ref={containerRef}>
            <div className="relative flex-grow mr-6 h-full">
                <CharacterScreen className="absolute w-full h-full" />
            </div>
            <NavBar onStepChange={(step) => setCurrentStep(step)} />
        </ScreenContainer>
    );
};
