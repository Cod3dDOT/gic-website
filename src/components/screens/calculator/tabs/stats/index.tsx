import { useSelectedTab } from '@contexts';
import { memo } from 'react';

import { Tabs } from '..';
import { TabWrapper, TabWrapperProps } from '../wrapper';

export const StatsTab: React.FC = () => {
	const {
		state: { tab: selectedTab }
	} = useSelectedTab();

	return <TabWrapper tab={Tabs.Stats}>Stats</TabWrapper>;
};

export const MStatsTab = memo(StatsTab);
