export const slugify = (val: string) => {
    return val.replaceAll(" ", "-").toLowerCase().trim();
};
