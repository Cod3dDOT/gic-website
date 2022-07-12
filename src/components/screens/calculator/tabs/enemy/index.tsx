import { Search } from "@components/common";
import { Enemy } from "@data/database";
import { useState } from "react";
import { TabWrapperProps, TabWrapper } from "../layout";

export type EnemyTabProps = {
    enemies: Array<Enemy>;
} & TabWrapperProps;

export const EnemyTab: React.FC<EnemyTabProps> = ({ enemies, visible }) => {
    const [openedEnemySettings, setOpenedEnemySettings] =
        useState<boolean>(false);
    const [chosenEnemy, setChosenEnemy] = useState<Enemy>();

    return (
        <TabWrapper
            visible={visible}
            className={openedEnemySettings ? "gap-0" : "gap-8"}
        >
            <div className="w-full h-full">
                <Search all={enemies} />
            </div>
            <div className="h-full w-full"></div>
        </TabWrapper>
    );
};
