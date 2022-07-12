import { Image } from "@components/common";
import PolearmIcon from "@public/icons/weapon-types/icon-polearm.webp";
import { WeaponTypeIconsProps } from "..";

export const Polearm: React.FC<WeaponTypeIconsProps> = ({ ...rest }) => {
    return <Image {...rest} src={PolearmIcon}></Image>;
};
