import { Search } from '@components/common';
import { useSelectedTab } from '@contexts';
import { IEnemy } from '@lib/gdata/interfaces';
import { memo, useState } from 'react';

import { Tabs } from '..';
import { TabWrapper, TabWrapperProps } from '../wrapper';

// export type EnemyTabProps = {};

export const EnemyTab: React.FC = () => {
	const {
		state: { tab: selectedTab }
	} = useSelectedTab();

	const [openedEnemySettings, setOpenedEnemySettings] =
		useState<boolean>(false);
	const [chosenEnemy, setChosenEnemy] = useState<IEnemy>();

	return (
		<TabWrapper
			tab={Tabs.Enemy}
			className={openedEnemySettings ? 'gap-0' : 'gap-8'}
		>
			<div className="w-full h-full">
				{/* <Search all={enemies} /> */}
				Enemies
			</div>
			<div className="h-full w-full"></div>
		</TabWrapper>
	);
};

export const MEnemyTab = memo(EnemyTab);
