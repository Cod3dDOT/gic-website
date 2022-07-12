import { Image } from "@components/common";
import ClaymoreIcon from "@public/icons/weapon-types/icon-claymore.webp";
import { WeaponTypeIconsProps } from "..";

export const Claymore: React.FC<WeaponTypeIconsProps> = ({ ...rest }) => {
    return <Image {...rest} src={ClaymoreIcon}></Image>;
};
