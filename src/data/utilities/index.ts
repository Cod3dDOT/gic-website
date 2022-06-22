export const slugify = (val: string) => {
    return val.replaceAll(" ", "-").toLowerCase().trim();
};

export interface Map<V> {
    [key: string]: V;
}
