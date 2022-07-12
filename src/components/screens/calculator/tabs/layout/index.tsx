import { StatsTab } from "../stats";

export interface TabWrapperProps {
    visible: boolean;
    className?: string;
    children?: React.ReactNode;
}

export const TabWrapper: React.FC<TabWrapperProps> = ({
    visible,
    className = "",
    children,
}) => {
    return (
        <div
            className={`absolute flex w-full h-full ${
                visible
                    ? "animate-fade-in-visible"
                    : "animate-fade-out-invisible"
            } ${className}`}
        >
            <div className="flex lg:flex-row lg:w-2/3 w-full flex-col">
                {children}
            </div>
            <div className="flex-grow hidden lg:block">
                <StatsTab visible={true} />
            </div>
        </div>
    );
};
