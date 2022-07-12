import { ScreenContainer, ScrollReveal } from "@components/common";
import { WelcomeLogo } from "./logo";
import { WelcomeNews } from "./news";

export interface WelcomeScreenProps {
    version: string;
}

export const WelcomeScreen: React.FC<WelcomeScreenProps> = ({ version }) => {
    return (
        <ScreenContainer className="relative flex justify-around items-center h-screen">
            <WelcomeLogo version={version} />
            <WelcomeNews />
        </ScreenContainer>
    );
};
