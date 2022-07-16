import { useState } from "react";
import { Tabs } from "@components/screens/calculator/tabs";

import {
    RiGroupFill,
    RiSwordFill,
    RiTShirtFill,
    RiFocus3Fill,
    RiBarChartFill,
} from "react-icons/ri";
import { MHeaderSideBar } from "./side-bar";
import { MHeaderTopBar } from "./top-bar";
import { useConfig } from "@utilities/contexts";

export const TabIconMap: Record<Tabs | number, any> = {
    [Tabs.Character]: <RiGroupFill />,
    [Tabs.Weapon]: <RiSwordFill />,
    [Tabs.Enemy]: <RiFocus3Fill />,
    [Tabs.Artifacts]: <RiTShirtFill />,
    [Tabs.Stats]: <RiBarChartFill />,
};

export interface HeaderProps {
    onSettingsToggle: () => void;
}

export const Header: React.FC<HeaderProps> = ({ onSettingsToggle }) => {
    const { state: config, dispatch } = useConfig();

    const [sideBarOpened, setSideBarOpened] = useState<boolean>(false);

    return (
        <div>
            <MHeaderTopBar
                underConstruction={config.underConstruction}
                onSettingsToggle={onSettingsToggle}
                onSideBarOpen={() => setSideBarOpened(!sideBarOpened)}
            />
            <div
                className={`fixed -translate-x-full ${
                    sideBarOpened ? "translate-x-0" : ""
                }`}
            >
                <MHeaderSideBar onSettingsToggle={onSettingsToggle} />
            </div>
        </div>
    );
};
