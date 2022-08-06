import type { NextApiRequest, NextApiResponse } from 'next';

interface News {
	header: string;
	date: string;
	body: string;
}

const News: Array<News> = [
	{
		header: 'Progress update',
		body: 'The project has moved been rewritten several times now.',
		date: '06.06.2022'
	}
];

const response = (req: NextApiRequest, res: NextApiResponse) => {
	res.status(200).json(News);
};

export default response;
