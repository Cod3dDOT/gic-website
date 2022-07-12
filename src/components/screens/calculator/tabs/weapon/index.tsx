import { Weapon } from "@data/database";
import { TabWrapperProps, TabWrapper } from "../layout";

export type WeaponTabProps = { weapons: Array<Weapon> } & TabWrapperProps;

export const WeaponTab: React.FC<WeaponTabProps> = ({ weapons, visible }) => {
    return <TabWrapper visible={visible}>WEAPONS</TabWrapper>;
};
