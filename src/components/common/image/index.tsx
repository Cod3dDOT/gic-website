import { default as NextImage, ImageProps as NextImageProps } from 'next/image';
import { memo, useState } from 'react';

export type ImageProps = {
	fallback?: string;
	smoothLoad?: boolean;
	className?: string;
} & NextImageProps;

export const Image: React.FC<ImageProps> = ({
	fallback,
	smoothLoad = true,
	className = '',

	src,
	alt = '',
	objectFit = 'contain',
	layout = 'fill',

	...rest
}) => {
	const [loaded, setLoaded] = useState<boolean>(false);
	const [imgSrc, setImgSrc] = useState<typeof src>(src);

	const onLoad = (result: {
		naturalWidth: number;
		naturalHeight: number;
	}) => {
		if (result.naturalWidth === 0 && fallback) {
			setImgSrc(fallback);
		} else {
			setLoaded(true);
		}
	};

	const onError = () => {
		if (fallback) setImgSrc(fallback);
		setLoaded(true);
	};

	if (fallback) rest.onError = onError;
	if (smoothLoad) rest.onLoadingComplete = onLoad;

	return (
		<div
			className={`relative h-full w-full transition-opacity opacity-0 duration-300 ${
				loaded && 'opacity-100'
			} ${className}`}
		>
			<MNextImage
				src={imgSrc}
				alt={alt}
				layout={layout}
				objectFit={objectFit}
				{...rest}
			/>
		</div>
	);
};

export const MNextImage = memo(NextImage);

export const MImage = memo(Image);
