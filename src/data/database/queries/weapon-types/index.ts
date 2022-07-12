import { WeaponType } from "@data/database/data-classes";

export const getWeaponTypes = () => {
    return Object.values(WeaponType);
};
