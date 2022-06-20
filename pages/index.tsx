import React from "react";

import { Header, Footer } from "@components";
import { FirstScreen, SecondScreen } from "@components/screens";

const Home: React.FC = () => {
    const secondScreenRef = React.useRef<HTMLDivElement>(null);

    return (
        <React.StrictMode>
            <Header />
            <FirstScreen secondScreen={secondScreenRef} />
            <SecondScreen containerRef={secondScreenRef} />
            <Footer />
        </React.StrictMode>
    );
};

export default Home;
