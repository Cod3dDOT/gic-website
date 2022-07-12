import { Button } from "@components/common";
import { fetchNews, News as NewsInfo } from "@data/news";
import { useEffect, useRef, useState } from "react";
import { RiArrowUpSLine } from "react-icons/ri";

import { PieceOfNews } from "./piece-of-news";

export const WelcomeNews: React.FC = () => {
    const [news, setNews] = useState<Array<NewsInfo>>([]);
    const [scrollToTopVisible, setScrollToTopVisible] = useState<boolean>(true);
    const scrollRef = useRef<HTMLDivElement>(null);

    const scrollListener = () => {
        if (!scrollRef.current) return;
        setScrollToTopVisible(scrollRef.current.scrollTop > 50);
    };

    const scrollToTop = () => {
        if (!scrollRef.current) return;
        scrollRef.current.scrollTo({ top: 0, behavior: "smooth" });
    };

    useEffect(() => {
        const newsPromise = fetchNews();
        newsPromise.then((_news) => {
            setNews(_news);
        });
    }, []);

    useEffect(() => {
        let scrollRefVar: any = null;
        if (scrollRef.current) {
            scrollRefVar = scrollRef.current;
        } else {
            return;
        }
        if (!scrollRef.current)
            scrollRefVar.addEventListener("scroll", scrollListener, {
                passive: true,
            });
        return () => {
            if (!scrollRefVar) return;
            scrollRefVar.removeEventListener("scroll", scrollListener);
        };
    }, []);

    return (
        <div
            className="xl:h-[60vh] xl:w-[35vw]
                        lg:h-[26rem] lg:w-[24rem]
                        md:h-[24rem] md:w-[20rem] md:block
                        hidden
                        p-4 rounded-lg"
        >
            <p className="text-2xl mb-2">Latest News</p>
            <div className="w-full h-full gap-2 overflow-auto" ref={scrollRef}>
                {news.map((post, index) => {
                    return (
                        <PieceOfNews news={post} key={`news-post-${index}`} />
                    );
                })}
                <div className="mt-4">
                    <div className="bg-dark-primary-lighter h-1" />
                    <p className=" my-2 text-bse text-dark-primary-lighter">
                        That&quot;s everything from us!
                    </p>
                </div>
            </div>
            <Button
                theme="normal"
                className={`absolute right-4 bottom-4 p-2 transition-opacity duration-250 opacity-0 ${
                    scrollToTopVisible ? "visible opacity-100" : "invisible"
                }`}
                onClick={() => {
                    scrollToTop();
                }}
            >
                <RiArrowUpSLine />
            </Button>
        </div>
    );
};
