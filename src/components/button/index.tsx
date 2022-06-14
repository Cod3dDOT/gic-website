import React from "react";
import { Icon } from "..";

export enum ButtonThemeType {
    Normal = 0,
    Info = 1,
    Error = 2,
}

const ButtonThemes = {
    0: {
        default: "text-white bg-dark-primary-dark border-2 border-white",
        hover: " hover:text-dark-primary-dark hover:bg-white",
    },
    1: {
        default:
            "text-dark-blue bg-dark-primary-dark border-2 border-dark-blue",
        hover: " hover:text-white hover:bg-dark-blue",
    },
    2: {
        default: "text-dark-red bg-dark-primary-dark border-2 border-dark-red",
        hover: " hover:text-white hover:bg-dark-red",
    },
};

interface IButtonProps {
    text?: string;
    icon?: string;
    buttonTheme?: ButtonThemeType;
    link?: string;
    changeOnHover?: boolean;
}

export type IButton = IButtonProps &
    React.DetailedHTMLProps<
        React.ButtonHTMLAttributes<HTMLButtonElement>,
        HTMLButtonElement
    >;

export const Button: React.FC<IButton> = ({
    text = "default",
    icon = "",
    buttonTheme = ButtonThemeType.Normal,
    link = "",
    changeOnHover = false,

    className = "",
    children,
    ...rest
}) => {
    let childElements =
        icon === "" ? (
            <p className="font-poppins leading-none text-md">{text}</p>
        ) : (
            <Icon icon={icon}></Icon>
        );

    let theme = ButtonThemes[buttonTheme];

    return (
        <button
            className={`p-4 transition-colors rounded-md ${
                changeOnHover ? theme.default + theme.hover : theme.default
            } ${className}`}
            {...rest}
        >
            {link === "" ? childElements : <a href={link}>{childElements}</a>}
            {children}
        </button>
    );
};
