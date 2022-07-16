import { ScreenContainer } from "@components/common";
import { useConfig } from "@utilities/contexts";
import { WelocomeRoadmap } from "./welcome-roadmap";
import { WelcomeLogo } from "./logo";
import { MWelcomeNews } from "./news";

export interface WelcomeScreenProps {}

export const WelcomeScreen: React.FC<WelcomeScreenProps> = () => {
    const { state: config, dispatch } = useConfig();
    return (
        <ScreenContainer className="relative flex flex-col md:flex-row justify-around items-center">
            <div className="h-screen md:h-full flex items-center">
                <WelcomeLogo />
            </div>

            {config.underConstruction ? <WelocomeRoadmap /> : <MWelcomeNews />}
        </ScreenContainer>
    );
};
