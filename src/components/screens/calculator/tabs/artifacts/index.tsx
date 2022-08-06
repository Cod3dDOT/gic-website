// import { Search } from '@components/common';
import { IArtifact } from '@lib/gdata/interfaces';
import { memo, useState } from 'react';

import { Tabs } from '..';
import { TabWrapper } from '../wrapper';

// export interface ArtifactsTabProps {}

export const ArtifactsTab: React.FC = () => {
	// const {
	// 	state: { tab: selectedTab }
	// } = useSelectedTab();

	const [openedArtifactSettings, setOpenedArtifactSettings] =
		useState<boolean>(false);
	const [chosenArtifacts, setChosenArtifacts] = useState<Array<IArtifact>>();

	return (
		<TabWrapper
			tab={Tabs.Artifacts}
			className={openedArtifactSettings ? 'gap-0' : 'gap-8'}
		>
			<div className="w-full h-full">
				{/* <Search all={artifacts} /> */}
				Artifacts
			</div>
			<div className="w-full h-full"></div>
		</TabWrapper>
	);
};

export const MArtifactsTab = memo(ArtifactsTab);
