import { useSelectedTab } from '@contexts';
import { DBState, getDBState, getWeapons } from '@lib/gdata';
import { IWeapon } from '@lib/gdata/interfaces';
import { memo, useEffect, useState } from 'react';

import { Tabs } from '..';
import { TabWrapper } from '../wrapper';

// export type WeaponTabProps = {};

export const WeaponTab: React.FC = () => {
	const {
		state: { tab: selectedTab }
	} = useSelectedTab();

	const [weapons, setWeapons] = useState<IWeapon[]>();
	const [chosenWeapon, setChosenWeapon] = useState<IWeapon>();
	const [openedWeaponSettings, setOpenedWeaponSettings] =
		useState<boolean>(false);

	useEffect(() => {
		if (getDBState() !== DBState.READY) return;
		setWeapons(getWeapons());
	}, [getDBState() === DBState.READY]);

	return <TabWrapper tab={Tabs.Weapon}>Weapons</TabWrapper>;
};

export const MWeaponTab = memo(WeaponTab);
