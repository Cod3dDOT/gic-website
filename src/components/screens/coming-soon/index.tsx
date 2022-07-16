import { ScreenContainer } from "@components/common";
import { useConfig } from "@utilities/contexts";

export interface ComingSoonScreenProps {}

export const ComingSoonScreen: React.FC<ComingSoonScreenProps> = ({}) => {
    const { state: config, dispatch } = useConfig();
    return (
        <ScreenContainer className="relative flex justify-around items-center h-screen">
            <div className="flex flex-col items-center">
                <span className="text-2xl sm:text-5xl font-medium leading-relaxed sm:leading-relaxed text-transparent bg-clip-text bg-gradient-to-r from-dark-primary-light to-dark-primary-lighter animate-pulse">
                    We are working on it!
                </span>
                <div className="bg-dark-primary rounded-md mt-8 flex items-center overflow-clip justify-between w-full">
                    <span className="font-thin text-neutral-200 w-full p-4">
                        Last commit
                    </span>
                    <span
                        className={`text-dark-primary p-4  whitespace-nowrap text-right font-medium ${
                            config.lastCommit?.status === "success"
                                ? "bg-green-600"
                                : "bg-red-600"
                        }`}
                    >
                        {config.lastCommit
                            ? config.lastCommit.date
                            : "a long time ago..."}
                    </span>
                </div>
            </div>
        </ScreenContainer>
    );
};
