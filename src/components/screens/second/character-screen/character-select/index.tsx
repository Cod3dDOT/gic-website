import { Character } from "@data/classes";

import { useRef } from "react";

import Image from "next/image";

const rarityToWidth = ["w-0/5", "w-1/5", "w-2/5", "w-3/5", "w-4/5", "w-full"];

export interface CharacterSelectProps {
    all: Array<Character>;
    def?: number;
    onCharacterSelect?: (character: Character) => void;
    className?: string;
}

export const CharacterSelect: React.FC<CharacterSelectProps> = ({
    all,
    def = 0,
    onCharacterSelect = () => {},
    className = "",
}) => {
    let selected = useRef<Character>(all[def]);

    return (
        <div
            className={`relative h-88 w-72 border-4 border-dark-primary-light rounded-lg overflow-hidden ${className}`}
        >
            <div className="absolute w-full h-full character-image-mask">
                <div className="relative block mt-4 w-full h-full">
                    <Image
                        src={`/characters/${selected.current.name
                            .replaceAll(" ", "-")
                            .toLowerCase()}.webp`}
                        layout="fill"
                        objectFit="cover"
                        objectPosition="center top"
                    ></Image>
                </div>
            </div>

            <div className="absolute bottom-0 p-4 w-full text-white flex justify-between">
                <div className="relative block w-8 h-8 my-auto">
                    <Image
                        src={`/icons/elements/icon_element_${selected.current.element}.webp`}
                        layout="fill"
                        objectFit="contain"
                    ></Image>
                </div>
                <div>
                    <div className="relative w-[75px] h-[15px] [mask:url(/icons/icon_rarity_star.png)_left/15px_15px] float-right">
                        <span
                            className={`absolute block ${
                                rarityToWidth[selected.current.rarity]
                            } h-full bg-yellow-400 right-0`}
                        ></span>
                    </div>

                    <p className="text-right font-medium text-xl">
                        {selected.current.name}
                    </p>
                </div>
            </div>
        </div>
    );
};
