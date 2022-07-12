import type { NextApiRequest, NextApiResponse } from "next";

interface News {
    header: string;
    date: string;
    body: string;
}

const News: Array<News> = [
    {
        header: "Test news",
        body: "An urgent fix for damage calculations.",
        date: "06.06.2022",
    },
    {
        header: "Test news",
        body: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
        date: "06.06.2022",
    },
    {
        header: "Test news",
        body: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
        date: "06.06.2022",
    },
    {
        header: "Test news",
        body: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
        date: "06.06.2022",
    },
    {
        header: "Test news",
        body: "Loem ipsum dolor sit amet",
        date: "06.06.2022",
    },
];

const response = (req: NextApiRequest, res: NextApiResponse) => {
    res.status(200).json(News);
};

export default response;
