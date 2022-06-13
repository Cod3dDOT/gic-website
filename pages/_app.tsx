import React from "react";
import { AppProps } from "next/app";

import "tailwindcss/tailwind.css";
import "remixicon/fonts/remixicon.css";
import "@styles/global.css";

function MyApp({ Component, pageProps }: AppProps): JSX.Element {
    return <Component {...pageProps} />;
}

export default MyApp;
