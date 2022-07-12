import { ScreenContainer } from "@components/common";

export interface ComingSoonScreenProps {}

export const ComingSoonScreen: React.FC<ComingSoonScreenProps> = () => {
    return (
        <ScreenContainer className="relative flex justify-around items-center h-screen">
            <div className="flex flex-col">
                <span className="text-2xl sm:text-5xl font-medium leading-relaxed sm:leading-relaxed text-transparent bg-clip-text bg-gradient-to-r from-dark-primary to-dark-primary-lighter animate-pulse">
                    We are working on it!
                </span>
                <div className="p-4 bg-dark-primary rounded-md mt-8 font-thin flex text-neutral-200 justify-between">
                    <span>Last commit was</span>
                    <span className="text-neutral-400">
                        {process.env.NEXT_PUBLIC_VERCEL_GIT_COMMIT_SHA ||
                            "a long time ago..."}
                    </span>
                </div>
            </div>
        </ScreenContainer>
    );
};
