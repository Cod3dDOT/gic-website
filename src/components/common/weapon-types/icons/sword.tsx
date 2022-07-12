import { Image } from "@components/common";
import SwordIcon from "@public/icons/weapon-types/icon-sword.webp";
import { WeaponTypeIconsProps } from "..";

export const Sword: React.FC<WeaponTypeIconsProps> = ({ ...rest }) => {
    return <Image {...rest} src={SwordIcon}></Image>;
};
