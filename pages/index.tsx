import React from "react";

import { useState } from "react";

import { Header, Footer } from "@components";
import {
    WelcomeScreen,
    CalculatorScreen,
    ComingSoonScreen,
} from "@components/screens";
import { Tabs } from "@components/screens/calculator/tabs";

import { getConfig } from "@data/config";
import { Config } from "./api/config";
import { GetStaticProps } from "next";

export interface HomeProps {
    config: Config;
    loadedConfig: boolean;
}

export const getStaticProps: GetStaticProps<HomeProps> = async (context) => {
    const config = await getConfig();
    console.log(config);
    return {
        props: { config: config || null, loadedConfig: config !== undefined },
    };
};

const Home: React.FC<HomeProps> = ({ config, loadedConfig }) => {
    const [currentTab, setCurrentTab] = useState<Tabs>(Tabs.Character);
    const [settingsOpened, setSettingsOpened] = useState<boolean>(false);

    const toggleSettings = () => {
        setSettingsOpened(!settingsOpened);
    };

    return (
        <React.StrictMode>
            <Header
                underConstruction={
                    loadedConfig ? config.underConstruction : true
                }
                onTabChanged={setCurrentTab}
                onSettingsToggle={toggleSettings}
            />

            <WelcomeScreen version={loadedConfig ? config.publicVersion : ""} />

            {loadedConfig ? (
                config.underConstruction
            ) : true ? (
                <ComingSoonScreen />
            ) : (
                <CalculatorScreen
                    currentTab={currentTab}
                    settingsVisible={settingsOpened}
                />
            )}

            <Footer />
        </React.StrictMode>
    );
};

export default Home;
