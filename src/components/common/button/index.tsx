import { Image } from "@components/common";

const ButtonThemes = {
    none: {
        default: "",
        hover: "",
        border: "",
    },
    normal: {
        default: " bg-dark-primary-dark",
        hover: " hover:bg-dark-primary-light",
        border: " border-2 border-dark-primary-light",
    },
};

export type ButtonProps = {
    image?: string;
    theme?: "none" | "normal";
    link?: string;
    onHoverEffects?: boolean;
    border?: boolean;
} & React.DetailedHTMLProps<
    React.ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
>;

export const Button: React.FC<ButtonProps> = ({
    image = "",
    theme = "normal",
    link = "",
    onHoverEffects = true,
    border = true,

    className = "",
    ...rest
}) => {
    let _theme = ButtonThemes[theme];
    className += _theme.default;
    if (onHoverEffects) className += _theme.hover;
    if (border) className += _theme.border;

    const getChildren = () => {
        let children = image ? (
            <Image
                src={image}
                width={0}
                height={0}
                layout="responsive"
                sizes="32px"
            />
        ) : (
            rest.children
        );

        if (link) return <a href={link}>{children}</a>;
        return children;
    };

    return (
        <button
            className={`leading-none p-4 text-md transition-colors rounded-md
            flex flex-col items-center justify-center ${className}`}
            {...rest}
        >
            {getChildren()}
        </button>
    );
};
