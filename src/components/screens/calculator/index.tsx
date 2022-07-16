import { useEffect, useState } from "react";
import { ScreenContainer } from "@components/common";

import { DBState, fetchData, getDBState } from "@data/database";

import {
    MWeaponTab,
    MEnemyTab,
    MArtifactsTab,
    MStatsTab,
    MCharacterTab,
} from "./tabs";

import { LoadingOverlay, ErrorOverlay, SettingsOverlay } from "./overlays";
import { CalculatorDataProvider } from "@utilities/contexts/calculator-data";

export interface CalculatorScreenProps {
    settingsVisible: boolean;
}

export const CalculatorScreen: React.FC<CalculatorScreenProps> = ({
    settingsVisible,
}) => {
    const [loaded, setLoaded] = useState<boolean>(false);
    const [errored, setErrored] = useState<boolean>(false);

    useEffect(() => {
        if (getDBState() !== DBState.NONE) return;

        fetchData().then((data) => {
            setLoaded(true);
        });
    }, []);

    return (
        <ScreenContainer
            className="relative h-screen flex flex-col
                                    sm:p-8 sm:pt-0
                                    p-4 pt-0"
        >
            <LoadingOverlay visible={!loaded} />
            <ErrorOverlay visible={errored} />

            <div className="h-[4.5rem] my-4"></div>
            <div className="relative flex-grow flex">
                <CalculatorDataProvider>
                    <MCharacterTab />

                    <MWeaponTab />

                    <MEnemyTab />

                    <MArtifactsTab />

                    <MStatsTab />

                    <SettingsOverlay opened={settingsVisible} />
                </CalculatorDataProvider>
            </div>
        </ScreenContainer>
    );
};
