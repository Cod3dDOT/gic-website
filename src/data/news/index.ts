import { getNextUrl } from "@utilities";

export interface News {
    header: string;
    body: string;
    date: string;
}

export const fetchNews = async () => {
    const request = await fetch(getNextUrl() + "api/news");
    if (request.ok) {
        return request.json();
    }
};
