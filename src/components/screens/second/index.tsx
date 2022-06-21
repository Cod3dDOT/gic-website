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
        <ScreenContainer className="flex p-6" ref={containerRef}>
            <div className="relative mr-6 w-full h-full">
                <AnimatePresence>{getScreen()}</AnimatePresence>
            </div>
            <NavBar
                onStepChange={(step) => setCurrentStep(step)}
                className="z-10"
            />
        </ScreenContainer>
    );
};
