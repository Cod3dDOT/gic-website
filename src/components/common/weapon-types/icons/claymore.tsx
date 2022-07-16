import { MImage } from "@components/common";
import ClaymoreIcon from "@public/icons/weapon-types/icon-claymore.webp";
import { WeaponTypeIconsProps } from "..";

export const Claymore: React.FC<WeaponTypeIconsProps> = ({ ...rest }) => {
    return (
        <MImage
            {...rest}
            src={ClaymoreIcon}
            alt="icon-claymore"
            sizes="256px"
        />
    );
};
