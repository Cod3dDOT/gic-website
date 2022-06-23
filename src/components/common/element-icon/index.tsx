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
                        fallback={getIconPath("not-found-dark", ".svg")}
                        sizes="64px"
                        key={`element-icon-${element}`}
                        className="aspect-square w-auto"
                    />
                );
            })}
        </div>
    );
};
