import { useEffect, useState } from "react";
import { default as NextImage, ImageProps as NextImageProps } from "next/image";
import { ScrollReveal } from "@components/common";

export type ImageProps = {
    fallback?: string;
    smoothLoad?: boolean;
    className?: string;
} & NextImageProps;

export const Image: React.FC<ImageProps> = ({
    fallback = "",
    smoothLoad = false,
    className = "",
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
            revealPolicy="custom"
            revealed={loaded}
            duration={smoothLoad ? 1 : 0}
            delay={0.1}
            className={`relative h-full w-full ${className}`}
        >
            <NextImage
                {...rest}
                src={imgSrc}
                onLoadingComplete={(result) => {
                    if (result.naturalWidth === 0 && fallback)
                        setImgSrc(fallback);
                }}
                onError={() => {
                    fallback && setImgSrc(fallback);
                }}
                alt=""
                loading="lazy"
            />
        </ScrollReveal>
    );
};
