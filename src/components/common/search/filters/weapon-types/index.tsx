import { Button, WeaponTypeIcons } from "@components/common";
import { getWeaponTypes } from "@data/database";
import { WeaponType } from "@data/database/data-classes";
import { useState } from "react";

export type SearchWeaponTypesFilterProps = {
    weaponTypes?: Array<WeaponType>;
    def?: Array<WeaponType>;
    onSelected?: (element: WeaponType) => void;
    className?: string;
};

export const SearchWeaponTypesFilter: React.FC<
    SearchWeaponTypesFilterProps
> = ({
    weaponTypes = getWeaponTypes(),
    def = weaponTypes,
    onSelected,
    className = "",
}) => {
    const [selectedElements, setSelectedElements] =
        useState<Array<WeaponType>>(def);

    const toggleSelectedElement = (element: WeaponType) => {
        if (onSelected) onSelected(element);
        if (selectedElements.includes(element)) {
            setSelectedElements((old) =>
                old.filter((item) => item !== element)
            );
        } else {
            setSelectedElements((old) => [...old, element]);
        }
    };

    return (
        <div className="flex p-2 flex-[40%] items-center leading-none rounded-sm bg-dark-primary-light">
            <p className="flex-grow">Weapon types</p>
            <div className="flex h-8">
                {weaponTypes.map((wpType) => {
                    return (
                        <Button
                            key={`element_${wpType}`}
                            theme="none"
                            onClick={() => toggleSelectedElement(wpType)}
                            className="h-full aspect-square mx-0 sm:mx-1"
                        >
                            {WeaponTypeIcons[wpType]({
                                className: `h-full w-full transition-opacity brightness-200
                            ${
                                selectedElements.includes(wpType)
                                    ? "opacity-100"
                                    : "opacity-20"
                            } ${className}`,
                            })}
                        </Button>
                    );
                })}
            </div>
        </div>
    );
};
