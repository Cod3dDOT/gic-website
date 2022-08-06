import { FadeReveal } from '@components/common';
import { useEffect, useState } from 'react';

export interface ErrorOverlayProps {
	visible: boolean;
}

export const ErrorOverlay: React.FC<ErrorOverlayProps> = ({ visible }) => {
	const [quote, setQuote] = useState<string>('');
	const [dev, setDev] = useState<string>('');

	useEffect(() => {
		const quotes = [
			'Looks like something just went fjngjfjvfjb',
			'They ask you how you are, and you just have to say you&rsquo;re fine when you&rsquo;re not really fine, but you just can&rsquo;t get into it, because they would never understand.',
			'Last time he was seen by REDACTED trying to rewrite an excel database in json. I heard nothing from him or REDACTED since.',
			'Imagine 1 idiot arguing with another idiot about should the button be centered or not when the whole thing just does not work.'
		];
		const devs = ['cod3d', 'nickolasha'];
		setQuote(chooseRandom(quotes));
		setDev(chooseRandom(devs));
	}, []);

	const chooseRandom = (arr: string[]) => {
		return arr[Math.floor(Math.random() * arr.length)];
	};

	return (
		<FadeReveal
			className={`absolute inset-0 bg-opacity-80 backdrop-blur-sm flex flex-col align-middle justify-center transition-opacity invisible opacity-0 ${
				visible && 'z-40'
			}`}
			revealed={visible}
		>
			<div className="m-auto w-min">
				<p className="text-4xl text-center font-medium whitespace-nowrap">
					No God, please, NOOO!
				</p>
				<div className="text-dark-primary-lighter mt-8 mx-auto w-fit text-sm text-left rounded-md border-neutral-600">
					<blockquote className="italic inline-block break-words">
						{quote}
					</blockquote>
					<p className="text-right">- {dev}</p>
				</div>
			</div>
		</FadeReveal>
	);
};
