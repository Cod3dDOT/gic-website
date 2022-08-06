import { ScreenContainer } from '@components/common';
import { useConfig } from '@contexts';

import { WelcomeLogo } from './logo';
import { WelcomeNews } from './news';
import { WelocomeRoadmap } from './welcome-roadmap';

export const WelcomeScreen: React.FC = () => {
	const { state: config } = useConfig();
	return (
		<ScreenContainer className="relative flex flex-col md:flex-row justify-around items-center">
			<div className="h-screen md:h-full flex items-center">
				<WelcomeLogo />
			</div>

			{config.underConstruction ? <WelocomeRoadmap /> : <WelcomeNews />}
		</ScreenContainer>
	);
};
