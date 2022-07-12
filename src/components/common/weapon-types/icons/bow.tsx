import { Image } from "@components/common";
import BowIcon from "@public/icons/weapon-types/icon-bow.webp";
import { WeaponTypeIconsProps } from "..";

export const Bow: React.FC<WeaponTypeIconsProps> = ({ ...rest }) => {
    return <Image {...rest} src={BowIcon}></Image>;
};
