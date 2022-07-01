import { Button, ScrollReveal } from "@components/common";

import { RiHome5Fill } from "react-icons/ri";

export const Header: React.FC = () => {
    return (
        <ScrollReveal hidden="opacity-0 translate-y-[30px]">
            <div className="absolute flex w-screen sm:p-6 p-4 z-10">
                <Button>
                    <RiHome5Fill />
                </Button>
                <span className="flex-grow"></span>
                <Button className="p-2 px-4 text-lg font-medium">News</Button>
            </div>
        </ScrollReveal>
    );
};
