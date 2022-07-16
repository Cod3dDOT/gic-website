import { MImage } from "@components/common";
import CatalystIcon from "@public/icons/weapon-types/icon-catalyst.webp";
import { WeaponTypeIconsProps } from "..";

export const Catalyst: React.FC<WeaponTypeIconsProps> = ({ ...rest }) => {
    return (
        <MImage
            {...rest}
            src={CatalystIcon}
            alt="icon-catalyst"
            sizes="256px"
        />
    );
};
