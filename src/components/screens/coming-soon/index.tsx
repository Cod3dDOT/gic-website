import { ScreenContainer } from "@components/common";

export interface ComingSoonScreenProps {}

export const ComingSoonScreen: React.FC<ComingSoonScreenProps> = () => {
    return (
        <ScreenContainer className="relative flex justify-around items-center h-screen">
            We are working on it!
        </ScreenContainer>
    );
};
