import { ScreenContainer } from "@components/common";
import { WelcomeLogo } from "./logo";
import { MWelcomeNews } from "./news";

export interface WelcomeScreenProps {}

export const WelcomeScreen: React.FC<WelcomeScreenProps> = () => {
    return (
        <ScreenContainer className="relative flex justify-around items-center h-screen">
            <WelcomeLogo />
            <MWelcomeNews />
        </ScreenContainer>
    );
};
