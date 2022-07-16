import { DBState, getDBState, getWeapons, Weapon } from "@data/database";
import { useSelectedTab } from "@utilities/contexts";
import React from "react";
import { useEffect, useState } from "react";
import { Tabs } from "..";
import { TabWrapperProps, TabWrapper } from "../wrapper";

export type WeaponTabProps = {};

export const WeaponTab: React.FC<WeaponTabProps> = ({}) => {
    const {
        state: { tab: selectedTab },
        dispatch,
    } = useSelectedTab();

    const [weapons, setWeapons] = useState<Array<Weapon>>();
    const [chosenWeapon, setChosenWeapon] = useState<Weapon>();
    const [openedWeaponSettings, setOpenedWeaponSettings] =
        useState<boolean>(false);

    useEffect(() => {
        if (getDBState() !== DBState.READY) return;
        setWeapons(getWeapons());
    }, [getDBState() === DBState.READY]);

    return <TabWrapper tab={Tabs.Weapon}>Weapons</TabWrapper>;
};

export const MWeaponTab = React.memo(WeaponTab);
