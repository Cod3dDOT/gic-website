import { WeaponType } from "@data/database/data-classes";

import { Catalyst } from "./icons/catalyst";
import { Sword } from "./icons/sword";
import { Claymore } from "./icons/claymore";
import { Polearm } from "./icons/polearm";
import { Bow } from "./icons/bow";

import { ImageProps } from "@components/common";

export interface WeaponTypeIconsProps extends Omit<ImageProps, "src"> {}

export const WeaponTypeIcons = {
    [WeaponType.Catalyst]: Catalyst,
    [WeaponType.Sword]: Sword,
    [WeaponType.Claymore]: Claymore,
    [WeaponType.Polearm]: Polearm,
    [WeaponType.Bow]: Bow,
};
