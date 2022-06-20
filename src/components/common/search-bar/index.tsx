import { ImageFallback } from "@components/common";

import { useState } from "react";

const rarityToWidth = ["w-0/5", "w-1/5", "w-2/5", "w-3/5", "w-4/5", "w-full"];

export class SearchBarEntry<T> {
    searchValue: string;
    value: T;
    preview: string;

    constructor(searchValue: string, value: T, preview: string = "") {
        this.searchValue = searchValue;
        this.value = value;
        this.preview = preview;
    }
}

export interface SearchBarProps {
    all: Array<SearchBarEntry<any>>;
    placeholder?: string;
    onSelected?: (entry: any) => void;
    className?: string;
}

export const SearchBar: React.FC<SearchBarProps> = ({
    all,
    placeholder = "Enter search value",
    onSelected = (entry) => {},
    className = "",
}) => {
    const [query, setQuery] = useState("");

    return (
        <div className={`w-full h-full space-y-1 ${className}`}>
            <input
                placeholder={placeholder}
                className="w-full h-12 rounded-lg px-2 appearance-none outline-none shadow-lg mb-2"
                onChange={(event) => setQuery(event.target.value.toLowerCase())}
            />
            {all
                .filter((entry) => {
                    if (query === "") return entry;

                    if (entry.searchValue.toLowerCase().includes(query)) {
                        return entry;
                    }
                })
                .map((entry, index) => (
                    <div
                        key={index}
                        className=" flex justify-between
                                    w-full h-12 p-2
                                    text-white  bg-dark-primary shadow-lg
                                    border-2 rounded-lg border-dark-primary hover:border-white transition-colors"
                        onClick={() => onSelected(entry.value)}
                    >
                        <div className="relative h-full aspect-square rounded-full">
                            <ImageFallback
                                src={entry.preview}
                                layout="fill"
                                objectFit="contain"
                                fallback="/characters/preview/not-found-dark.svg"
                            />
                        </div>
                        <div className="block my-auto">
                            <div className="relative w-[50px] h-[10px] [mask:url(/icons/icon_rarity_star.png)_left/10px_10px] float-right">
                                <span
                                    className={`absolute block ${
                                        rarityToWidth[entry.value.rarity]
                                    } h-full bg-yellow-400 right-0`}
                                ></span>
                            </div>
                            <p>{entry.searchValue}</p>
                        </div>
                    </div>
                ))}
        </div>
    );
};
