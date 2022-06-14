import { Button, ScrollReveal, RevealFromBottom } from "@components";

export const Header: React.FC = () => {
    return (
        <ScrollReveal revealParams={RevealFromBottom}>
            <div className="flex p-4 absolute w-screen z-10">
                <Button icon="ri-home-5-fill" onHoverEffects></Button>
                <span className="flex-grow"></span>
                <Button text="News" onHoverEffects></Button>
            </div>
        </ScrollReveal>
    );
};
