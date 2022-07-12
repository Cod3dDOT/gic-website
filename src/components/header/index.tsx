import { useEffect, useState } from "react";
import {
    RiGroupFill,
    RiSwordFill,
    RiTShirtFill,
    RiFocus3Fill,
    RiBarChartFill,
    RiSettings3Fill,
    RiMenu3Line,
} from "react-icons/ri";

import { Button, ScrollReveal, Image } from "@components/common";
import { Tabs } from "@components/screens/calculator/tabs";
import { useIsMobile, useScrollAmount } from "@utilities/hooks";

import PaimonLogo from "@public/header/paimon-portrait-circle.png";

const TabIconMap: Record<Tabs | number, any> = {
    [Tabs.Character]: <RiGroupFill />,
    [Tabs.Weapon]: <RiSwordFill />,
    [Tabs.Enemy]: <RiFocus3Fill />,
    [Tabs.Artifacts]: <RiTShirtFill />,
    [Tabs.Stats]: <RiBarChartFill />,
};

export interface HeaderProps {
    underConstruction?: boolean;
    onTabChanged: (tab: Tabs) => void;
    onSettingsToggle: () => void;
}

export const Header: React.FC<HeaderProps> = ({
    underConstruction = false,
    onTabChanged,
    onSettingsToggle,
}) => {
    const [scrollRef, scrollInPixels] = useScrollAmount();
    const [IsMobile, IsTablet, IsLargeTablet] = useIsMobile();

    const [selectedTab, _setSelectedTab] = useState<Tabs>(Tabs.Character);
    const setSelectedTab = (tab: Tabs) => {
        _setSelectedTab(tab);
        onTabChanged(tab);
    };

    const [sideBarOpened, setSideBarOpened] = useState<boolean>(false);

    let shouldReveal =
        typeof window !== "undefined" &&
        scrollInPixels > window.innerHeight / 1.1 &&
        !underConstruction;

    const getButtonStyle = (tab: Tabs) => {
        return selectedTab !== tab ? "text-dark-primary-lighter" : "";
    };

    const getHeaderStyles = () => {
        if (sideBarOpened) {
            return "bg-dark-primary border-transparent";
        }
        if (shouldReveal) {
            return "md:border-dark-primary-lighter bg-dark-primary border-transparent";
        }
        return "border-transparent";
    };

    return (
        <div>
            <ScrollReveal
                duration={500}
                onStartHidden="opacity-0 translate-y-[30px]"
                className={`fixed top-0 z-50 flex justify-center
                sm:h-[4.5rem] sm:inset-x-8
                h-[4.5rem] p-3 inset-x-4
                rounded-lg border-2 mt-4 ${getHeaderStyles()}`}
            >
                <div className="z-50 h-full flex gap-2 items-center flex-1">
                    <Image
                        src={PaimonLogo}
                        className="w-auto aspect-square"
                    ></Image>
                    <div>
                        <h4 className="sm:text-base text-sm">Genshin Impact</h4>
                        <h3 className="leading-none text-xl font-medium">
                            Calculator
                        </h3>
                    </div>
                </div>

                <ScrollReveal
                    revealed={shouldReveal}
                    duration={200}
                    className="md:flex hidden relative items-center gap-2 h-full text-2xl"
                >
                    <span
                        className="absolute -z-10 aspect-square h-full bg-dark-primary-light rounded-md transition-transform"
                        style={{
                            transform: `translateX(calc(${
                                selectedTab * 100
                            }% + ${selectedTab * 0.5}rem)`,
                        }}
                    />
                    {Object.keys(TabIconMap).map((val, index: number) => {
                        if (!IsLargeTablet && index === Tabs.Stats) return;
                        return (
                            <Button
                                className={`h-full aspect-square ${getButtonStyle(
                                    index
                                )}`}
                                theme="none"
                                key={index}
                                onClick={() => {
                                    setSelectedTab(index);
                                }}
                            >
                                {TabIconMap[index]}
                            </Button>
                        );
                    })}
                </ScrollReveal>
                <ScrollReveal
                    revealed={shouldReveal}
                    duration={200}
                    className={`sm:flex-1 flex-shrink-0 text-2xl duration-200 ${
                        shouldReveal
                            ? "animate-fade-in-visible"
                            : "animate-fade-out-invisible"
                    }`}
                >
                    <Button
                        className="h-full aspect-square ml-auto md:flex hidden"
                        theme="none"
                        onClick={() => onSettingsToggle()}
                    >
                        <RiSettings3Fill />
                    </Button>
                    <Button
                        className="h-full aspect-square ml-auto md:hidden"
                        theme="none"
                        onClick={() => setSideBarOpened(!sideBarOpened)}
                    >
                        <RiMenu3Line />
                    </Button>
                </ScrollReveal>
            </ScrollReveal>
            <ScrollReveal
                revealed={sideBarOpened}
                onStartHidden="-translate-x-full"
                className="fixed w-4/5 sm:w-42 h-full z-40 flex flex-col bg-dark-primary justify-between"
            >
                <div className="w-full mt-24 p-4">
                    {Object.keys(TabIconMap).map((val, index: number) => {
                        if (!IsLargeTablet && index === Tabs.Stats) return;
                        return (
                            <Button
                                className={`w-full [align-items:start_!important] p-4 text-lg
                                         ${getButtonStyle(index)}`}
                                theme="none"
                                key={index}
                                onClick={() => {
                                    setSelectedTab(index);
                                }}
                            >
                                <div className="flex gap-4">
                                    {TabIconMap[index]}
                                    {Tabs[index]}
                                </div>
                            </Button>
                        );
                    })}
                </div>
                <div className="p-4 gap-2">
                    <div className="mb-2">
                        <Button
                            className="w-full [align-items:start_!important] p-4 text-lg"
                            theme="none"
                            onClick={() => {
                                onSettingsToggle();
                            }}
                        >
                            <div className="flex gap-4">
                                <RiSettings3Fill />
                                Settings
                            </div>
                        </Button>
                    </div>
                    <div className="p-4 border-t-2 border-dark-primary-lighter text-dark-primary-lighter">
                        <p>
                            Developed by Mind
                            <span
                                className=" animate-flicker text-dark-primary-lighter after:w-full
                                            after:[-webkit-box-shadow:-22px_0px_25px_3px__rgba(255,255,255,0.8)]
	                                        after:[-moz-box-shadow:-22px_0px_25px_3px_rgba(255,255,255,0.8)]
	                                        after:[box-shadow:-22px_0px_25px_3px_rgba(255,255,255,0.8)]"
                            >
                                Break
                            </span>
                        </p>
                        <p>&#169;2022 MindBreak. All rights reserved.</p>
                    </div>
                </div>
            </ScrollReveal>
        </div>
    );
};
