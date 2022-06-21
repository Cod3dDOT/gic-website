interface Map {
    [key: string]: string | undefined;
}

const rarityToWidth: Map = {
    "0": "w-0/5",
    "1": "w-1/5",
    "2": "w-2/5",
    "3": "w-3/5",
    "4": "w-4/5",
    "5": "w-full",
};

export type RarityIconProps = {
    rarity: number | string;
    align?: "left" | "right";
    height?: number;
    className?: string;
};

export const RarityIcon: React.FC<RarityIconProps> = ({
    rarity,
    align = "left",
    height = 15,
    className = "",
}) => {
    return (
        <div
            className={`relative float-${align}
                        w-[${height * 5}px] h-[${height}px]
                        [mask:url(/icons/icon_rarity_star.png)_left/${height}px_${height}px]
                        ${className}`}
        >
            <span
                className={`absolute block ${rarityToWidth[rarity]} h-full bg-yellow-400 ${align}-0`}
            ></span>
        </div>
    );
};
