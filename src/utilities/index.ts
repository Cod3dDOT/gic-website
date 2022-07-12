export const slugify = (val: string) => {
    return val.replaceAll(" ", "-").toLowerCase().trim();
};

export const getNextUrl = () => {
    return process.env.NEXT_PUBLIC_API_URL || "http://localhost:3000";
};

export { formatPastTime } from "./format-past-time";
