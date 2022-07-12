export interface LoadingOverlayProps {
    loaded: boolean;
}

export const LoadingOverlay: React.FC<LoadingOverlayProps> = ({ loaded }) => {
    return (
        <div
            className={`absolute inset-0 bg-opacity-80 backdrop-blur-sm flex flex-col align-middle justify-center ${
                loaded && " animate-fade-out-invisible"
            }`}
        >
            <div className="mx-auto p-8 rounded-md flex flex-col items-center">
                <div className="w-36 h-36 animate-loader">
                    <span />
                </div>
                <p className="inline-block text-3xl font-medium mt-16">
                    Loading
                </p>
            </div>
        </div>
    );
};
