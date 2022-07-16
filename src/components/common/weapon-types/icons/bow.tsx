import { MImage } from "@components/common";
import BowIcon from "@public/icons/weapon-types/icon-bow.webp";
import { WeaponTypeIconsProps } from "..";

export const Bow: React.FC<WeaponTypeIconsProps> = ({ ...rest }) => {
    return <MImage {...rest} src={BowIcon} alt="icon-bow" sizes="256px" />;
};
