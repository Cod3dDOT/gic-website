import { ScreenContainer, Button, ButtonTheme } from "@components/common";

import { useState } from "react";
import { CharacterScreen } from "./character-screen";
import { NavBar } from "./navbar";

interface Props {
    containerRef: React.RefObject<HTMLDivElement>;
}

export const SecondScreen: React.FC<Props> = ({ containerRef }) => {
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
