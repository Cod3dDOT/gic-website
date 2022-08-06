import { Button, FadeReveal } from '@components/common';
import { memo, useEffect, useRef, useState } from 'react';
import { RiArrowUpSLine } from 'react-icons/ri';
import { fetchNews, IPieceOfNews } from 'src/lib/news';

import { MPieceOfNews } from './piece-of-news';

export const WelcomeNews: React.FC = () => {
	const [news, setNews] = useState<IPieceOfNews[]>([]);
	const [scrollToTopVisible, setScrollToTopVisible] =
		useState<boolean>(false);
	const scrollRef = useRef<HTMLDivElement>(null);

	const scrollListener = () => {
		if (!scrollRef.current) return;
		setScrollToTopVisible(scrollRef.current.scrollTop > 50);
	};

	const scrollToTop = () => {
		if (!scrollRef.current) return;
		scrollRef.current.scrollTo({ top: 0, behavior: 'smooth' });
	};

	useEffect(() => {
		if (Array.isArray(news)) return;
		fetchNews().then((fetched) => setNews(fetched));
	}, []);

	useEffect(() => {
		let scrollRefVar: HTMLDivElement;
		if (scrollRef.current) {
			scrollRefVar = scrollRef.current;
		} else return;

		scrollRefVar.addEventListener('scroll', scrollListener, {
			passive: true
		});

		return () => {
			// if (!scrollRefVar) return;
			scrollRefVar.removeEventListener('scroll', scrollListener);
		};
	}, []);

	return (
		<div
			className="xl:h-[60vh] xl:w-[35vw]
                        lg:h-[26rem] lg:w-[24rem]
                        md:h-[24rem] md:w-[20rem]
                        relative md:flex flex-col hidden
                        rounded-lg"
		>
			<p className="text-2xl mb-2">Latest News</p>
			<div
				className="w-full flex-grow space-y-2 overflow-auto"
				ref={scrollRef}
			>
				{news.length > 0
					? news.map((post, index) => {
							return (
								<MPieceOfNews
									news={post}
									key={`news-post-${index}`}
								/>
							);
					  })
					: Array.from({ length: 5 }).map((val, index) => {
							return (
								<MPieceOfNews
									key={`news-post-skeleton-${index}`}
								/>
							);
					  })}
				<div className="mt-4">
					<div className="bg-dark-primary-lighter h-1" />
					<p className=" my-2 text-bse text-dark-primary-lighter">
						That&quot;s everything from us!
					</p>
				</div>
			</div>
			<FadeReveal
				revealed={scrollToTopVisible}
				className="absolute right-4 bottom-4"
			>
				<Button
					className="bg-dark-primary rounded-sm p-2"
					onClick={scrollToTop}
				>
					<RiArrowUpSLine />
				</Button>
			</FadeReveal>
		</div>
	);
};
