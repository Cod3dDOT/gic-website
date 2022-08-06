import { getNextUrl } from '@utilities';

export interface IPieceOfNews {
	title: string;
	body: string;
	date: string;
}

export const fetchNews = async (): Promise<IPieceOfNews[]> => {
	const request = await fetch(getNextUrl('/api/news'));
	const news = await request.json();
	return news as IPieceOfNews[];
};
