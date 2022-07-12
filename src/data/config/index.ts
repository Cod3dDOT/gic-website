import { NEXT_URL } from "@data";

export const getConfig = async () => {
    const request = await fetch(NEXT_URL + "/api/config");
    if (request.ok) {
        return request.json();
    }
};
