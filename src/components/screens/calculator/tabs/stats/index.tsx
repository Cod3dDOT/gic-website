import { useSelectedTab } from "@utilities/contexts";
import React from "react";
import { Tabs } from "..";
import { TabWrapperProps, TabWrapper } from "../wrapper";

export type StatsTabProps = {};

export const StatsTab: React.FC<StatsTabProps> = ({}) => {
    const {
        state: { tab: selectedTab },
        dispatch,
    } = useSelectedTab();

    return <TabWrapper tab={Tabs.Stats}>Stats</TabWrapper>;
};

export const MStatsTab = React.memo(StatsTab);
