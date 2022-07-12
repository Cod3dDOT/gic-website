import { useEffect, useState } from "react";
import { ScreenContainer, ScrollReveal } from "@components/common";

import {
    Artifact,
    Character,
    Enemy,
    Weapon,
    fetchData,
    getArtifacts,
    getCharacters,
    getEnemies,
    getWeapons,
} from "@data/database";

import {
    CharacterTab,
    WeaponTab,
    EnemyTab,
    ArtifactsTab,
    StatsTab,
    Tabs,
} from "./tabs";
import { LoadingOverlay, ErrorOverlay, SettingsOverlay } from "./overlays";

export interface CalculatorScreenProps {
    currentTab: Tabs;
    settingsVisible: boolean;
}

export const CalculatorScreen: React.FC<CalculatorScreenProps> = ({
    currentTab,
    settingsVisible,
}) => {
    const [loaded, setLoaded] = useState<boolean>(false);
    const [errored, setErrored] = useState<boolean>(false);

    const [characters, setCharacters] = useState<Array<Character>>([]);
    const [weapons, setWeapons] = useState<Array<Weapon>>([]);
    const [enemies, setEnemies] = useState<Array<Enemy>>([]);
    const [artifacts, setArtifacts] = useState<Array<Artifact>>([]);

    const isTabvisible = (tab: Tabs) => {
        return tab === currentTab;
    };

    useEffect(() => {
        fetchData().then(() => {
            try {
                setLoaded(true);
                setCharacters(getCharacters());
                setWeapons(getWeapons());
                setEnemies(getEnemies());
                setArtifacts(getArtifacts());
            } catch (err) {
                setErrored(true);
                console.log(err);
            }
        });
    }, []);

    return (
        <ScreenContainer
            className="relative h-screen flex flex-col
                                    sm:p-8 sm:pt-0
                                    p-4 pt-0"
        >
            <LoadingOverlay loaded={loaded} />
            <ErrorOverlay errored={errored} />

            <div className="h-[4.5rem] my-4"></div>
            <div className="relative flex-grow flex">
                <CharacterTab
                    characters={characters}
                    visible={isTabvisible(Tabs.Character)}
                />

                <WeaponTab
                    weapons={weapons}
                    visible={isTabvisible(Tabs.Weapon)}
                />

                <EnemyTab
                    enemies={enemies}
                    visible={isTabvisible(Tabs.Enemy)}
                />

                <ArtifactsTab
                    artifacts={artifacts}
                    visible={isTabvisible(Tabs.Artifacts)}
                />

                <StatsTab visible={isTabvisible(Tabs.Stats)} />

                <ScrollReveal
                    className="absolute bg-dark-primary inset-4 -z-10"
                    revealed={settingsVisible}
                    duration={250}
                >
                    <SettingsOverlay />
                </ScrollReveal>
            </div>
        </ScreenContainer>
    );
};
