import { Button, ScrollReveal, RevealPresets } from "@components/common";

export const Header: React.FC = () => {
    return (
        <ScrollReveal hidden={RevealPresets.Bottom}>
            <div className="absolute flex w-screen sm:p-6 p-4 z-10">
                <Button icon="ri-home-5-fill"></Button>
                <span className="flex-grow"></span>
                <Button text="News"></Button>
            </div>
        </ScrollReveal>
    );
};
