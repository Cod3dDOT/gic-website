import React from "react";
// import whyDidYouRender from "@welldone-software/why-did-you-render";

import type { AppProps } from "next/app";
import Head from "next/head";

import "@styles/tailwind.css";
import "@styles/global.css";
import "@styles/animations.css";

// if (process.env.NODE_ENV === "development") {
//     whyDidYouRender(React, {
//         trackAllPureComponents: true,
//         trackHooks: true,
//         logOwnerReasons: true,
//         logOnDifferentValues: true,
//         collapseGroups: true,
//     });
// }

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
