import { useEffect, useState } from "react";
import { default as NextImage, ImageProps as NextImageProps } from "next/image";
import { ScrollReveal } from "@components/common";

export type ImageProps = {
    fallback?: string;
    smoothLoad?: boolean;
} & NextImageProps;

export const Image: React.FC<ImageProps> = ({
    fallback = "",
    smoothLoad = false,
    ...rest
}) => {
    const [loaded, setLoaded] = useState<boolean>(false);
    const [imgSrc, setImgSrc] = useState(rest.src);

    useEffect(() => {
        setImgSrc(rest.src);
        setLoaded(true);
    }, [rest.src]);

    return (
        <ScrollReveal
            revealPolicy={"custom"}
            revealed={loaded}
            duration={smoothLoad ? 1 : 0}
            delay={0.1}
            className="relative h-full w-full"
        >
            <NextImage
                {...rest}
                src={imgSrc}
                onLoadingComplete={(result) => {
                    if (result.naturalWidth === 0) setImgSrc(fallback);
                }}
                onError={() => {
                    setImgSrc(fallback);
                }}
                alt=""
                loading="lazy"
            />
        </ScrollReveal>
    );
};
