interface PeriodInterface {
    millis: number;
    appendix: string;
}

const periods: Record<string, PeriodInterface> = {
    month: { millis: 30 * 24 * 60 * 60 * 1000, appendix: "m" },
    week: { millis: 7 * 24 * 60 * 60 * 1000, appendix: "w" },
    day: { millis: 24 * 60 * 60 * 1000, appendix: "d" },
    hour: { millis: 60 * 60 * 1000, appendix: "h" },
    minute: { millis: 600 * 1000, appendix: "m" },
    second: { millis: 1000, appendix: "s" },
};

export const formatPastTime = (time: Date, uncertain: boolean = false) => {
    var diff = Date.now() - time.getTime();

    for (const entry of Object.entries(periods)) {
        if (diff > entry[1].millis) {
            const val = Math.floor(diff / entry[1].millis);
            return uncertain
                ? `A few ${entry[0]}s ago`
                : `${val} ${entry[1].appendix} ago`;
        }
    }

    return "Just now";
};
