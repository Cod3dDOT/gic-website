import { Slider } from "@components/common";

export interface WeaponScreenProps {
    className?: string;
}

export const WeaponScreen: React.FC<WeaponScreenProps> = ({
    className = "",
}) => {
    return (
        <div className={`flex flex-col ${className}`}>
            <h1 className="sm:text-4xl sm:text-left text-2xl text-center mb-6 font-medium">
                Weapon
            </h1>
            <div className="flex-grow"></div>
        </div>
    );
};
