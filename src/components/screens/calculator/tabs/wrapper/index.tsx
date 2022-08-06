import { FadeReveal } from '@components/common';
import { useSelectedTab } from '@contexts';
import { memo } from 'react';

import { Tabs } from '..';

export interface TabWrapperProps {
	tab: Tabs;
	className?: string;
	children?: React.ReactNode;
}

export const TabWrapper: React.FC<TabWrapperProps> = ({
	tab,
	className = '',
	children
}) => {
	const {
		state: { tab: selectedTab }
	} = useSelectedTab();

	return (
		<FadeReveal
			className={`absolute flex w-full h-full ${className}`}
			revealed={selectedTab === tab}
		>
			<div className="flex md:flex-row lg:w-2/3 w-full flex-col">
				{children}
			</div>
			<div className="flex-grow hidden lg:block">
				{/* <StatsTab visible={true} /> */}
				Stats Element
			</div>
		</FadeReveal>
	);
};

export const MTabWrapper = memo(TabWrapper);
