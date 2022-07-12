import { useEffect, useState } from "react";
import { default as NextImage, ImageProps as NextImageProps } from "next/image";

export type ImageProps = {
    fallback?: string;
    smoothLoad?: boolean;
    className?: string;
} & NextImageProps;

export const Image: React.FC<ImageProps> = ({
    fallback = "",
    smoothLoad = true,
    className = "",

    src,
    alt = "",
    objectFit = "contain",
    layout = "fill",

    ...rest
}) => {
    const [loaded, setLoaded] = useState<boolean>(false);
    const [imgSrc, setImgSrc] = useState(src);

    useEffect(() => {
        setLoaded(false);
        setImgSrc(src);
    }, [src]);

    const onLoad = (result: {
        naturalWidth: number;
        naturalHeight: number;
    }) => {
        if (result.naturalWidth === 0 && fallback) {
            setImgSrc(fallback);
        }
        setLoaded(true);
    };

    const onError = () => {
        if (fallback) setImgSrc(fallback);
        setLoaded(true);
    };

    return (
        <div
            className={`relative h-full w-full transition-opacity duration-300
                        ${loaded ? "opacity-100" : "opacity-0"} ${className}`}
        >
            <NextImage
                src={imgSrc}
                onLoadingComplete={onLoad}
                onError={onError}
                alt={alt}
                layout={layout}
                objectFit={objectFit}
                {...rest}
            />
        </div>
    );
};
