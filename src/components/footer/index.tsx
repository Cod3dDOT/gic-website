import logoImage from "@public/footer/logo.svg";
import Image from "next/image";
import { ScrollReveal } from "@components";

export const Footer: React.FC = () => {
    return (
        <ScrollReveal>
            <div className="w-full justify-center drop-shadow-lg shadow-lg p-4 flex relative text-white border-t-2 border-dark-blue">
                <div className="relative block w-20 m-2">
                    <Image
                        src={logoImage}
                        layout="fill"
                        objectFit={"contain"}
                    ></Image>
                </div>
                <div className="relative block">
                    <p className="text-2xl font-medium">
                        Genshin Impact Calculator
                    </p>
                    <p className="text-dark-blue text-xs text-end pb-1 mb-2 border-b-2 border-white">
                        v0.1-alpha
                    </p>
                    <div className="flex text-xs text-neutral-400">
                        <p className="flex-grow">Developed by Cod3d</p>
                        <p>2022 All rights reserved</p>
                    </div>
                </div>
            </div>
        </ScrollReveal>
    );
};
