import { Button, ScrollReveal, RevealParams } from "@components";

import { RevealFromBottom } from "@components/scroll-reveal";

export const Header: React.FC = () => {
    return (
        <ScrollReveal revealParams={RevealFromBottom}>
            <div className="flex p-4 absolute w-screen z-10">
                <Button icon="ri-home-5-fill" changeOnHover></Button>
                <span className="flex-grow"></span>
                <Button text="News" changeOnHover></Button>
            </div>
        </ScrollReveal>
    );
};
