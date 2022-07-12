import { Image } from "@components/common";
import CatalystIcon from "@public/icons/weapon-types/icon-catalyst.webp";
import { WeaponTypeIconsProps } from "..";

export const Catalyst: React.FC<WeaponTypeIconsProps> = ({ ...rest }) => {
    return <Image {...rest} src={CatalystIcon}></Image>;
};
