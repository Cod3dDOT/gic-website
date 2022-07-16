import { FadeReveal } from "@components/common";

export interface LoadingOverlayProps {
    visible: boolean;
}

export const LoadingOverlay: React.FC<LoadingOverlayProps> = ({ visible }) => {
    return (
        <FadeReveal
            className={`absolute inset-0 bg-dark-primary-dark bg-opacity-60 backdrop-blur-sm flex flex-col align-middle justify-center ${
                visible && "z-40"
            }`}
            revealed={visible}
        >
            <div className="mx-auto p-8 rounded-md flex flex-col items-center">
                <div className="w-36 h-36 animate-loader">
                    <span />
                </div>
                <p className="inline-block text-3xl font-medium mt-16">
                    Loading
                </p>
            </div>
        </FadeReveal>
    );
};
