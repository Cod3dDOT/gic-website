import { Element } from "@data/database/data-classes/element";
import { Anemo } from "./icons/anemo";
import { Cryo } from "./icons/cryo";
import { Dendro } from "./icons/dendro";
import { Electro } from "./icons/electro";
import { Geo } from "./icons/geo";
import { Hydro } from "./icons/hydro";
import { Pyro } from "./icons/pyro";

export interface ElementIconProps {
    color?: string;
    className?: string;
}

export const ElementIcons = {
    [Element.Anemo]: Anemo,
    [Element.Cryo]: Cryo,
    [Element.Dendro]: Dendro,
    [Element.Electro]: Electro,
    [Element.Geo]: Geo,
    [Element.Hydro]: Hydro,
    [Element.Pyro]: Pyro,
};
