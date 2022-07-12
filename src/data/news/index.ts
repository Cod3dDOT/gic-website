import { NEXT_URL } from "@utilities";

export interface News {
    header: string;
    body: string;
    date: string;
}

export const fetchNews = async () => {
    const request = await fetch(NEXT_URL + "/api/news");
    if (request.ok) {
        return request.json();
    }
};
