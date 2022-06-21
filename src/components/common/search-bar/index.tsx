import { Image, ScrollReveal, RarityIcon } from "@components/common";
import { AnimatePresence, AnimateSharedLayout } from "framer-motion";

import { useState } from "react";

export class SearchBarEntry<T> {
    searchValue: string;
    value: T;
    preview: string;
    public id: number = -1;

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
    all = all.map((entry, index) => ({ ...entry, id: index }));

    return (
        <div className={`w-full h-full ${className}`}>
            <input
                placeholder={placeholder}
                className="w-full h-12 rounded-lg px-2 appearance-none outline-none shadow-lg mb-2"
                onChange={(event) => setQuery(event.target.value.toLowerCase())}
            />
            <div className="w-full h-full overflow-y-auto space-y-1">
                <AnimatePresence>
                    {all
                        .filter((entry) => {
                            if (query.length < 1) return;

                            if (
                                entry.searchValue
                                    .toLowerCase()
                                    .startsWith(query)
                            ) {
                                return entry;
                            }
                        })
                        .map((entry, index) => (
                            <ScrollReveal
                                revealPolicy="custom"
                                revealed={true}
                                delay={index / 20}
                                duration={0.1}
                                hidden={{ x: -5 }}
                                key={"character-select-" + entry.id}
                            >
                                <div
                                    className="flex justify-between
                                    w-full h-12 p-2
                                    text-white  bg-dark-primary shadow-lg
                                    border-2 rounded-lg border-dark-primary hover:border-white transition-colors
                                    cursor-pointer"
                                    onClick={() => onSelected(entry.value)}
                                >
                                    <div className="relative h-full aspect-square rounded-full">
                                        <Image
                                            src={
                                                entry.preview
                                                    ? entry.preview
                                                    : "/characters/preview/not-found-dark.svg"
                                            }
                                            layout="fill"
                                            objectFit="contain"
                                            fallback="/characters/preview/not-found-dark.svg"
                                            sizes="32px"
                                            smoothLoad={true}
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
                </AnimatePresence>
            </div>
        </div>
    );
};
