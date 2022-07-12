import { Rarity, RarityStar, RarityProps, Button } from "@components/common";
import { useState } from "react";

export type SearchRarityFilterProps = RarityProps & {
    onRaritySelected?: (rarity: number) => void;
};

export const SearchRarityFilter: React.FC<SearchRarityFilterProps> = ({
    full = true,
    rarity,
    className = "",
    onRaritySelected,
}) => {
    rarity = rarity as number;
    const [selectedRarity, _setSelectedRarity] = useState<number>(rarity);

    const setSelectedRarity = (rarity: number) => {
        if (onRaritySelected) onRaritySelected(rarity);
        _setSelectedRarity(rarity);
    };

    return (
        <div className="flex p-2 flex-[40%] items-center leading-none rounded-sm bg-dark-primary-light">
            <p className="flex-grow">Rarity</p>
            <div className="flex h-8">
                {Array.from({ length: rarity }, (_, index) => {
                    if (!full && selectedRarity === index) return;
                    return (
                        <Button
                            key={`rarity_star_${index}`}
                            theme="none"
                            onClick={() => setSelectedRarity(index)}
                            className="p-[0.05rem]"
                        >
                            <RarityStar
                                color={
                                    selectedRarity >= index ? "FFB802" : "888"
                                }
                                className={`w-auto aspect-square transition-colors text-lg ${className}`}
                            />
                        </Button>
                    );
                })}
            </div>
        </div>
    );
};
