export const slugify = (val: string) => {
    return val.replaceAll(" ", "-").toLowerCase().trim();
};

export { NEXT_URL } from "./api-url";
