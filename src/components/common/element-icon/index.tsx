import { Image } from "@components/common";

const getIconPath = (element: string, ext: string) => {
    return "/icons/elements/element-" + element + ext;
};

export interface ElementIconProps {
    elements: Array<string>;
    className?: string;
    style?: React.CSSProperties;
}

export const ElementIcon: React.FC<ElementIconProps> = ({
    elements,
    className = "",
}) => {
    return (
        <div className={`relative w-full h-full gap-2 ${className}`}>
            {elements.map((element) => {
                return (
                    <Image
                        src={getIconPath(element, ".png")}
                        layout="fill"
                        objectFit="contain"
                        fallback={getIconPath("not-found-dark", ".svg")}
                        className="aspect-square"
                        key={`element-icon-${element}`}
                        sizes="64px"
                    ></Image>
                );
            })}
        </div>
    );
};
