import { Footer, Header } from '@components';
import { CalculatorScreen, WelcomeScreen } from '@components/screens';
import { ConfigProvider, SelectedTabProvider } from '@contexts';
import { getConfig, IConfig } from '@lib/config';
import { GetServerSideProps } from 'next';
import { StrictMode, useState } from 'react';

export const getServerSideProps: GetServerSideProps<IHomeProps> = async () => {
	const config = await getConfig();

	return {
		props: {
			config: config
		}
	};
};

interface IHomeProps {
	config: IConfig;
}

const Home: React.FC<IHomeProps> = ({ config }) => {
	const [settingsOpened, setSettingsOpened] = useState<boolean>(false);

	const toggleSettings = () => {
		setSettingsOpened(!settingsOpened);
	};

	return (
		<StrictMode>
			<ConfigProvider config={config}>
				<SelectedTabProvider>
					<Header onSettingsToggle={toggleSettings} />

					<WelcomeScreen />

					{!config.underConstruction && (
						<CalculatorScreen settingsVisible={settingsOpened} />
					)}

					<Footer />
				</SelectedTabProvider>
			</ConfigProvider>
		</StrictMode>
	);
};

export default Home;
