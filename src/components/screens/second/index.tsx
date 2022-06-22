import {
    ScreenContainer,
    ScrollReveal,
    RevealPresets,
} from "@components/common";

import { CharacterScreen } from "./character-screen";
import { WeaponScreen } from "./weapon-screen";
import { NavBar } from "./navbar";

import { useState } from "react";
import { AnimatePresence } from "framer-motion";

export interface SecondScreenProps {
    containerRef: React.RefObject<HTMLDivElement>;
}

export const SecondScreen: React.FC<SecondScreenProps> = ({ containerRef }) => {
    const [currentStep, setCurrentStep] = useState<number>(0);

    const getScreen = () => {
        switch (currentStep) {
            case 0:
                return (
                    <ScrollReveal
                        revealPolicy="scroll"
                        duration={0.5}
                        hidden={{ x: 100 }}
                        exit={{ x: -100 }}
                        key="second-screen-characters"
                        className="absolute h-full w-full"
                    >
                        <CharacterScreen className="absolute w-full h-full" />
                    </ScrollReveal>
                );

            case 1:
                return (
                    <ScrollReveal
                        revealPolicy="scroll"
                        duration={0.5}
                        hidden={{ x: 100 }}
                        exit={{ x: -100 }}
                        key="second-screen-weapons"
                        className="absolute w-full h-full"
                    >
                        <WeaponScreen className="relative w-full h-full" />
                    </ScrollReveal>
                );
        }
    };

    return (
        <ScreenContainer
            className="flex sm:flex-row flex-col-reverse p-6 max-w-full"
            ref={containerRef}
        >
            <div className="relative sm:mr-6 sm:mt-0 mt-4 w-full h-full max-w-full">
                <AnimatePresence>{getScreen()}</AnimatePresence>
            </div>
            <NavBar onStepChange={(step) => setCurrentStep(step)} />
        </ScreenContainer>
    );
};
