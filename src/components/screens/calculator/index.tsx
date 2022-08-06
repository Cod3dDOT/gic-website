import { ScreenContainer } from '@components/common';
import { SelectedItemsProvider } from '@contexts';
import { DBState, fetchData, getDBState } from '@lib/gdata';
import { useEffect, useState } from 'react';

import { ErrorOverlay, LoadingOverlay, SettingsOverlay } from './overlays';
import {
	CharacterTab,
	MArtifactsTab,
	MEnemyTab,
	MStatsTab,
	MWeaponTab
} from './tabs';

export interface CalculatorScreenProps {
	settingsVisible: boolean;
}

export const CalculatorScreen: React.FC<CalculatorScreenProps> = ({
	settingsVisible
}) => {
	const [loaded, setLoaded] = useState<boolean>(false);
	const [errored] = useState<boolean>(false);

	useEffect(() => {
		if (getDBState() !== DBState.NONE) return;

		fetchData().then(() => setLoaded(true));
	}, []);

	return (
		<ScreenContainer
			className="relative h-screen flex flex-col
                                    sm:p-8 sm:pt-0
                                    p-4 pt-0"
		>
			<LoadingOverlay visible={!loaded} />
			<ErrorOverlay visible={errored} />

			<div className="h-[4.5rem] my-4"></div>
			<div className="relative flex-grow flex">
				<SelectedItemsProvider>
					<CharacterTab />

					<MWeaponTab />

					<MEnemyTab />

					<MArtifactsTab />

					<MStatsTab />

					<SettingsOverlay opened={settingsVisible} />
				</SelectedItemsProvider>
			</div>
		</ScreenContainer>
	);
};
