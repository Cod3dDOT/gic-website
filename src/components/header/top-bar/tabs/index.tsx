import { Tabs } from "@components/screens/calculator/tabs";
import { TabIconMap } from "../..";
import { useSelectedTab } from "@utilities/contexts";
import { HeaderTopBarTabButton } from "./tab-button";

export const HeaderTopBarTabs: React.FC = () => {
    const {
        state: { tab: selectedTab },
        dispatch,
    } = useSelectedTab();

    return (
        <div className="relative flex items-center gap-2 h-full text-2xl">
            <span
                className="absolute -z-10 aspect-square h-full bg-dark-primary-light rounded-md transition-transform"
                style={{
                    transform: `translateX(calc(${selectedTab * 100}% + ${
                        selectedTab * 0.5
                    }rem)`,
                }}
                key="top-bar-tabs-bg"
            />
            {Object.keys(TabIconMap).map((val, index: number) => {
                if (index === Tabs.Stats) return;
                return (
                    <HeaderTopBarTabButton
                        tab={index}
                        onClick={() => dispatch({ tab: index })}
                        key={`tab-button-${index}`}
                        className={
                            selectedTab !== index
                                ? "text-dark-primary-lighter"
                                : ""
                        }
                    />
                );
            })}
            <HeaderTopBarTabButton
                tab={Tabs.Stats}
                onClick={() => dispatch({ tab: Tabs.Stats })}
                key="tab-button-stats"
                className={
                    selectedTab !== Tabs.Stats
                        ? "text-dark-primary-lighter lg:hidden"
                        : "flex lg:hidden"
                }
            />
        </div>
    );
};
