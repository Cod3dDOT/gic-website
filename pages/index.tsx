import React from "react";

import { Container, Header } from "@components";

const Home: React.FC = () => {
    return (
        <React.StrictMode>
            <Container>
                <Header />
            </Container>
            <Container>
                <div></div>
            </Container>
        </React.StrictMode>
    );
};

export default Home;
