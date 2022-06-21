import { Button, ScrollReveal, RevealPresets } from "@components/common";

export const Header: React.FC = () => {
    return (
        <ScrollReveal hidden={RevealPresets.Bottom}>
            <div className="flex p-6 absolute w-screen z-10">
                <Button icon="ri-home-5-fill"></Button>
                <span className="flex-grow"></span>
                <Button text="News"></Button>
            </div>
        </ScrollReveal>
    );
};
