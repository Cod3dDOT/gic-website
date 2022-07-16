import {
    Character,
    Weapon,
    Enemy,
    Artifact,
} from "@data/database/data-classes";
import { useRef, useState } from "react";
import { RiSearch2Line } from "react-icons/ri";
import { Button } from "../button";
import {
    SearchRarityFilter,
    SearchElementsFilter,
    SearchWeaponTypesFilter,
} from "./filters";

export type AvailableSearchTypes = Character | Weapon | Enemy | Artifact;

export interface SearchProps {
    all: Array<AvailableSearchTypes>;
    def?: AvailableSearchTypes | number | undefined;
    amount?: number;
    onSelected?: (selected: AvailableSearchTypes) => void;
    onAllSelected?: (selected: Array<AvailableSearchTypes>) => void;
    className?: string;
}

export const Search: React.FC<SearchProps> = ({
    all,
    def = undefined,
    onSelected,
    onAllSelected,
    className = "",
}) => {
    const [selected, setSelected] = useState<AvailableSearchTypes>();
    const inputRef = useRef<HTMLInputElement>(null);
    return (
        <div className={`w-full ${className}`}>
            <div
                className="flex w-full bg-dark-primary-light rounded-md items-center group
                            h-12"
            >
                <Button className="aspect-square text-xl h-full text-dark-primary-lighter transition-colors group-focus-within:text-white">
                    <RiSearch2Line />
                </Button>
                <input
                    ref={inputRef}
                    type="text"
                    placeholder="Search..."
                    className="w-full font-normal placeholder:text-dark-primary-lighter bg-transparent h-full outline-none appearance-none "
                />
            </div>
            <div className="flex flex-wrap mt-2 p-0 gap-1 rounded-md md:p-2 md:gap-2 md:mt-1 md:bg-dark-primary">
                <SearchRarityFilter rarity={5} />
                <SearchWeaponTypesFilter />
                <SearchElementsFilter />
            </div>
        </div>
    );
};
