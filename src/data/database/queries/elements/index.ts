import { Element } from "@data/database/data-classes";

export const getElements = (): Array<Element> => {
    return Object.values(Element);
};
