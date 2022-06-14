import React from "react";

import { Header, FirstScreen, SecondScreen, Footer } from "@components";

const Home: React.FC = () => {
    return (
        <React.StrictMode>
            <Header />
            <FirstScreen />
            <SecondScreen />
            <Footer />
        </React.StrictMode>
    );
};

export default Home;
