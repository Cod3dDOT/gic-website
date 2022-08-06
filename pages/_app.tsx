import '@styles/tailwind.css';
import '@styles/global.css';
import '@styles/animations.css';

import type { AppProps } from 'next/app';
import Head from 'next/head';

// import { withWDYR } from '@utilities';
// withWDYR();

function MyApp({ Component, pageProps }: AppProps): JSX.Element {
	return (
		<>
			<Head>
				<title>Genshin Impact Calculator</title>
			</Head>
			<Component {...pageProps} />
		</>
	);
}

export default MyApp;
