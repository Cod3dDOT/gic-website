import { RemixIcon, Image } from "@components/common";

const ButtonThemes = {
    none: {
        default: " text-white",
        hover: "",
        border: "",
    },
    normal: {
        default: " text-white bg-dark-primary-dark",
        hover: " hover:text-dark-primary-dark hover:bg-white",
        border: " border-2 border-white",
    },
    error: {
        default: " text-dark-blue bg-dark-primary-dark",
        hover: " hover:text-white hover:bg-dark-blue",
        border: " border-2 border-dark-blue",
    },
    info: {
        default: " text-dark-red bg-dark-primary-dark",
        hover: " hover:text-white hover:bg-dark-red",
        border: " border-2 border-dark-red",
    },
};

export type ButtonProps = {
    text?: string;
    icon?: string;
    image?: string;
    displayType?: "text" | "icon" | "image" | "auto";
    theme?: "none" | "normal" | "error" | "info";
    link?: string;
    onHoverEffects?: boolean;
    border?: boolean;
} & React.DetailedHTMLProps<
    React.ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
>;

export const Button: React.FC<ButtonProps> = ({
    text = "",
    icon = "",
    image = "",
    displayType = "auto",
    theme = "normal",
    link = "",
    onHoverEffects = true,
    border = true,

    className = "",
    ...rest
}) => {
    let childElements;
    if (displayType === "auto") {
        if (icon !== "" && text === "" && image === "") displayType = "icon";
        if (icon === "" && text !== "" && image === "") displayType = "text";
        if (icon === "" && text === "" && image !== "") displayType = "image";
    }
    switch (displayType) {
        case "text":
            childElements = <p className="leading-none text-md">{text}</p>;
            break;

        case "icon":
            childElements = <RemixIcon icon={icon} />;
            break;

        case "image":
            childElements = (
                <Image
                    src={image}
                    width={0}
                    height={0}
                    layout="responsive"
                    objectFit="contain"
                    className="group-hover:invert"
                    alt=""
                />
            );
            break;
    }

    let _theme = ButtonThemes[theme];
    className += _theme.default;
    if (onHoverEffects) className += _theme.hover;
    if (border) className += _theme.border;

    return (
        <button
            className={`p-4 transition-colors rounded-md ${className}`}
            {...rest}
        >
            {link === "" ? childElements : <a href={link}>{childElements}</a>}
            {rest.children}
        </button>
    );
};
