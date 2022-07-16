export const slugify = (val: string) => {
    return val.replaceAll(" ", "-").toLowerCase().trim();
};

export const getNextUrl = (url: string) => {
    return (process.env.NEXT_PUBLIC_API_URL || "http://localhost:3000") + url;
};

export { formatPastTime } from "./format-past-time";
