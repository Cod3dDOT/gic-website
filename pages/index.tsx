import React from "react";

import { useState } from "react";

import { Header, Footer } from "@components";
import {
    WelcomeScreen,
    CalculatorScreen,
    ComingSoonScreen,
} from "@components/screens";

import { getConfig } from "@data/config";
import { Config } from "./api/config";
import { GetServerSideProps } from "next";
import { SelectedTabProvider, ConfigProvider } from "@utilities/contexts";

export interface HomeProps {
    config: Config;
}

export const getServerSideProps: GetServerSideProps<HomeProps> = async () => {
    const config = await getConfig();

    return {
        props: {
            config: config,
        },
    };
};

const Home: React.FC<HomeProps> = ({ config }) => {
    const [settingsOpened, setSettingsOpened] = useState<boolean>(false);

    const toggleSettings = () => {
        setSettingsOpened(!settingsOpened);
    };

    return (
        <React.StrictMode>
            <ConfigProvider config={config}>
                <SelectedTabProvider>
                    <Header onSettingsToggle={toggleSettings} />

                    <WelcomeScreen />

                    {config.underConstruction ? (
                        <ComingSoonScreen />
                    ) : (
                        <CalculatorScreen settingsVisible={settingsOpened} />
                    )}

                    <Footer />
                </SelectedTabProvider>
            </ConfigProvider>
        </React.StrictMode>
    );
};

export default Home;
