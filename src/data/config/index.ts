import { NEXT_URL } from "@utilities";

export const getConfig = async () => {
    const request = await fetch(NEXT_URL + "/api/config");
    if (request.ok) {
        return request.json();
    }
};
