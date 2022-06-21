import { Slider } from "@components/common";

export interface WeaponScreenProps {
    className?: string;
}

export const WeaponScreen: React.FC<WeaponScreenProps> = ({
    className = "",
}) => {
    return (
        <div className={`flex flex-col ${className}`}>
            <h1 className="text-white text-4xl mb-6 font-medium inline-block">
                Weapon
            </h1>
            <div className="flex-grow"></div>
        </div>
    );
};
