import { Image, ScrollReveal, RarityIcon } from "@components/common";

import { RiSearch2Line } from "react-icons/ri";

import { useState } from "react";

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
    const [selected, setSelected] = useState<SearchBarEntry<any>>();
    const [query, setQuery] = useState<string>("");

    const _onSelected = (entry: SearchBarEntry<any>) => {
        onSelected(entry.value);
        setSelected(entry);
    };

    return (
        <div className={`w-full h-full flex flex-col ${className}`}>
            <div className="flex items-center bg-dark-primary mb-2 h-12 px-2 rounded-lg border-2 border-transparent transition-colors focus-within:border-white">
                <RiSearch2Line className="mx-2" />
                <input
                    placeholder={placeholder}
                    className="w-full p-2 rounded-lg appearance-none outline-none shadow-lg bg-dark-primary"
                    onChange={(event) => {
                        setQuery(event.target.value.toLowerCase());
                    }}
                />
            </div>
            <div className="flex-grow overflow-y-auto space-y-1">
                {all
                    .filter((entry) => {
                        if (query.length < 1) return entry;

                        if (entry.searchValue.toLowerCase().startsWith(query)) {
                            return entry;
                        }
                    })
                    .map((entry, index) => (
                        <ScrollReveal
                            duration={50}
                            hidden="-translate-x-[5px] opacity-0"
                            key={`character-select-${index}`}
                        >
                            <div
                                className={`flex justify-between transition-colors
                                    h-12 p-2 shadow-lg rounded-md cursor-pointer
                                    ${
                                        selected === entry
                                            ? "bg-dark-primary-light"
                                            : "bg-dark-primary"
                                    }
                                    border-2 border-dark-primary-light hover:border-white`}
                                onClick={() => onSelected(entry.value)}
                            >
                                <div className="relative h-full aspect-square rounded-full">
                                    <Image
                                        src={
                                            entry.preview
                                                ? entry.preview
                                                : "/characters/preview/not-found-dark.svg"
                                        }
                                        fallback="/characters/preview/not-found-dark.svg"
                                        sizes="32px"
                                    />
                                </div>
                                <div className="flex flex-col my-auto">
                                    <RarityIcon
                                        rarity={entry.value.rarity}
                                        className="ml-auto"
                                        align="right"
                                        height={10}
                                    />
                                    <div className="text-right">
                                        {entry.searchValue}
                                    </div>
                                </div>
                            </div>
                        </ScrollReveal>
                    ))}
            </div>
        </div>
    );
};
