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
import { GetServerSideProps, GetStaticProps } from "next";

export interface HomeProps {
    config: Config;
}

export const getServerSideProps: GetServerSideProps<HomeProps> = async () => {
    const config = await getConfig();

    return {
        props: {
            config: config || null,
        },
    };
};

const Home: React.FC<HomeProps> = ({ config }) => {
    const [currentTab, setCurrentTab] = useState<Tabs>(Tabs.Character);
    const [settingsOpened, setSettingsOpened] = useState<boolean>(false);

    const toggleSettings = () => {
        setSettingsOpened(!settingsOpened);
    };

    return (
        <React.StrictMode>
            <Header
                underConstruction={config ? config.underConstruction : true}
                onTabChanged={setCurrentTab}
                onSettingsToggle={toggleSettings}
            />

            <WelcomeScreen version={config ? config.publicVersion : ""} />

            {(config ? config.underConstruction : true) ? (
                <ComingSoonScreen lastCommit={config && config.lastCommit} />
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
