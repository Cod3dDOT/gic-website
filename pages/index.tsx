import React from "react";

import { Header, Footer } from "@components";
import { FirstScreen, SecondScreen } from "@components/screens";

const Home: React.FC = () => {
    const secondScreenRef = React.useRef<HTMLDivElement>(null);

    return (
        <React.StrictMode>
            <Header />
            <div className="space-y-8">
                <FirstScreen secondScreen={secondScreenRef} />
                <SecondScreen containerRef={secondScreenRef} />
                <Footer />
            </div>
        </React.StrictMode>
    );
};

export default Home;
