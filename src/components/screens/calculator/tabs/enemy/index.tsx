import { Search } from "@components/common";
import { Enemy } from "@data/database";
import { useSelectedTab } from "@utilities/contexts";
import React from "react";
import { useState } from "react";
import { Tabs } from "..";
import { TabWrapperProps, TabWrapper } from "../wrapper";

export type EnemyTabProps = {};

export const EnemyTab: React.FC<EnemyTabProps> = ({}) => {
    const {
        state: { tab: selectedTab },
        dispatch,
    } = useSelectedTab();

    const [openedEnemySettings, setOpenedEnemySettings] =
        useState<boolean>(false);
    const [chosenEnemy, setChosenEnemy] = useState<Enemy>();

    return (
        <TabWrapper
            tab={Tabs.Enemy}
            className={openedEnemySettings ? "gap-0" : "gap-8"}
        >
            <div className="w-full h-full">
                {/* <Search all={enemies} /> */}
                Enemies
            </div>
            <div className="h-full w-full"></div>
        </TabWrapper>
    );
};

export const MEnemyTab = React.memo(EnemyTab);
