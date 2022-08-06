import { Button } from '@components/common';
import { useSelectedTab } from '@contexts';
import React, { memo } from 'react';
import { RiSettings3Fill } from 'react-icons/ri';

import { TabIconMap } from '..';
import { HeaderSideBarFooter } from './footer';
import { HeaderSideBarTabButton } from './tab-button';

interface HeaderSideBarProps {
	onSettingsToggle: () => void;
	onClosed?: () => void;
}

const HeaderSideBar: React.FC<HeaderSideBarProps> = ({ onSettingsToggle }) => {
	const {
		state: { tab: selectedTab },
		dispatch
	} = useSelectedTab();

	return (
		<div className="h-full w-4/5 sm:w-42 flex flex-col justify-between bg-dark-primary">
			<div className="w-full mt-24 p-4">
				{Object.keys(TabIconMap).map((val, index: number) => {
					return (
						<HeaderSideBarTabButton
							tab={index}
							onClick={() => dispatch({ tab: index })}
							key={`tab-button-${index}`}
							className={
								selectedTab !== index
									? 'text-dark-primary-lighter'
									: ''
							}
						/>
					);
				})}
			</div>
			<div className="p-4 gap-2">
				<Button
					className="w-full [align-items:start_!important] p-4 text-lg"
					onClick={onSettingsToggle}
				>
					<div className="flex gap-4">
						<RiSettings3Fill />
						Settings
					</div>
				</Button>

				<span className="block h-2 mt-2 border-t-2 border-dark-primary-lighter" />
				<HeaderSideBarFooter />
			</div>
		</div>
	);
};

export const MHeaderSideBar = memo(HeaderSideBar);
