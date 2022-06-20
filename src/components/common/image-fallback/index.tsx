import { useEffect, useState } from "react";

import { ImageProps } from "next/image";
import Image from "next/image";

export type ImageFallbackProps = { fallback: string } & ImageProps;

export const ImageFallback: React.FC<ImageFallbackProps> = ({
    fallback,
    ...rest
}) => {
    const [imgSrc, setImgSrc] = useState(rest.src);

    useEffect(() => {
        setImgSrc(rest.src);
    }, [rest.src]);

    return (
        <Image
            {...rest}
            src={imgSrc}
            onLoadingComplete={(result) => {
                if (result.naturalWidth === 0) setImgSrc(fallback);
            }}
            onError={() => {
                setImgSrc(fallback);
            }}
        />
    );
};
