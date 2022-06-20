import { Icon } from "@components/common";

import Image from "next/image";

export enum ButtonTheme {
    None = -1,
    Normal = 0,
    Info = 1,
    Error = 2,
}

const ButtonThemes = {
    "-1": {
        default: "text-white",
        hover: "",
        border: "",
    },
    0: {
        default: "text-white bg-dark-primary-dark",
        hover: " hover:text-dark-primary-dark hover:bg-white",
        border: " border-2 border-white",
    },
    1: {
        default: "text-dark-blue bg-dark-primary-dark",
        hover: " hover:text-white hover:bg-dark-blue",
        border: " border-2 border-dark-blue",
    },
    2: {
        default: "text-dark-red bg-dark-primary-dark",
        hover: " hover:text-white hover:bg-dark-red",
        border: " border-2 border-dark-red",
    },
};

interface IButtonProps {
    text?: string;
    icon?: string;
    image?: string;
    buttonTheme?: ButtonTheme;
    link?: string;
    onHoverEffects?: boolean;
    border?: boolean;
}

export type IButton = IButtonProps &
    React.DetailedHTMLProps<
        React.ButtonHTMLAttributes<HTMLButtonElement>,
        HTMLButtonElement
    >;

export const Button: React.FC<IButton> = ({
    text = "",
    icon = "",
    image = "",
    buttonTheme = ButtonTheme.Normal,
    link = "",
    onHoverEffects = true,
    border = true,

    className = "",
    children,
    ...rest
}) => {
    let childElements = <p className="leading-none text-md">{text}</p>;
    if (icon !== "") {
        childElements = <Icon icon={icon}></Icon>;
    }
    if (image !== "") {
        childElements = (
            <Image
                src={image}
                width={0}
                height={0}
                layout="responsive"
                objectFit="contain"
                className="group-hover:invert"
            ></Image>
        );
    }

    let theme = ButtonThemes[buttonTheme];
    let cls = theme.default;
    if (onHoverEffects) cls += theme.hover;
    if (border) cls += theme.border;

    return (
        <button
            className={`p-4 transition-colors rounded-md ${cls} ${className}`}
            {...rest}
        >
            {link === "" ? childElements : <a href={link}>{childElements}</a>}
            {children}
        </button>
    );
};
