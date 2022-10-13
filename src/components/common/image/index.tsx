import { default as NextImage, ImageProps as NextImageProps } from 'next/image';
import { memo, useState } from 'react';

import { Skeleton } from '../skeleton';

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
		console.log(src, 'loaded');
		if (result.naturalWidth === 0 && fallback) {
			setImgSrc(fallback);
			setLoaded(true);
		} else if (result.naturalWidth !== 0) {
			setLoaded(true);
		}
	};

	const onErrorHandler = () => {
		if (!fallback) return;
		setImgSrc(fallback);
		setLoaded(true);
	};

	if (fallback) rest.onError = onErrorHandler;
	if (smoothLoad) rest.onLoadingComplete = onLoad;

	return (
		<div className={`relative h-full w-full ${className}`}>
			<Skeleton
				className={`!absolute inset-0 h-full w-full transition-opacity ${
					loaded && 'opacity-0'
				}`}
			/>
			<MNextImage
				src={imgSrc}
				alt={alt}
				layout={layout}
				objectFit={objectFit}
				className={`transition-opacity opacity-0 duration-300 ${
					loaded && 'opacity-100'
				}`}
				{...rest}
			/>
		</div>
	);
};

export const MNextImage = memo(NextImage);

export const MImage = memo(Image);
