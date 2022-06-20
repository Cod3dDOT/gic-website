import { Slider } from "@components/common";
import { CharacterSelect } from "./character-select";

import { Character } from "@data/classes";

export interface CharacterScreenProps {
    className?: string;
}

export const CharacterScreen: React.FC<CharacterScreenProps> = ({
    className = "",
}) => {
    const characters = [new Character("Chun Yun", 4, "cryo")];

    return (
        <div className={`flex flex-col ${className}`}>
            <h1 className="text-white text-4xl mb-6 font-medium inline-block">
                Character
            </h1>
            <div className="flex-grow">
                <div className="flex space-x-12 h-full">
                    <div className="space-y-4">
                        <CharacterSelect all={characters} />
                        <Slider name="Character Level" step={10} max={90} />
                        <Slider
                            name="Constellations"
                            step={1}
                            value={80}
                            max={90}
                        />
                    </div>
                    <div className="border-4 border-dark-primary-light flex-grow"></div>
                    <div className="border-4 border-dark-primary-light flex-grow"></div>
                </div>
            </div>
        </div>
    );
};
