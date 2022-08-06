import { Tabs } from '@components/screens/calculator/tabs';
import { useConfig } from '@contexts';
import { useState } from 'react';
import {
	RiBarChartFill,
	RiFocus3Fill,
	RiGroupFill,
	RiSwordFill,
	RiTShirtFill
} from 'react-icons/ri';

import { MHeaderSideBar } from './side-bar';
import { MHeaderTopBar } from './top-bar';

export const TabIconMap: Record<Tabs | number, JSX.Element> = {
	[Tabs.Character]: <RiGroupFill />,
	[Tabs.Weapon]: <RiSwordFill />,
	[Tabs.Enemy]: <RiFocus3Fill />,
	[Tabs.Artifacts]: <RiTShirtFill />,
	[Tabs.Stats]: <RiBarChartFill />
};

export interface HeaderProps {
	onSettingsToggle: () => void;
}

export const Header: React.FC<HeaderProps> = ({ onSettingsToggle }) => {
	const { state: config } = useConfig();

	const [sideBarOpened, setSideBarOpened] = useState<boolean>(false);

	return (
		<div>
			<MHeaderTopBar
				underConstruction={config.underConstruction}
				onSettingsToggle={onSettingsToggle}
				onSideBarOpen={() => setSideBarOpened(!sideBarOpened)}
			/>
			<div
				className={`fixed z-40 transition-transform
                            h-full w-full -translate-x-full
                            ${sideBarOpened ? 'translate-x-0' : ''}`}
			>
				<MHeaderSideBar onSettingsToggle={onSettingsToggle} />
			</div>
		</div>
	);
};
