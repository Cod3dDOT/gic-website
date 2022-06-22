import { ScrollReveal } from "@components/common";

import logoImage from "@public/footer/logo.svg";

import Image from "next/image";

export const Footer: React.FC = () => {
    return (
        <ScrollReveal>
            <div
                className=" relative flex w-full
                            justify-center drop-shadow-lg shadow-lg p-4
                            text-white border-t-2 border-dark-blue"
            >
                <div className="relative block sm:w-20 w-16 m-2">
                    <Image
                        src={logoImage}
                        layout="fill"
                        objectFit={"contain"}
                        alt=""
                    ></Image>
                </div>
                <div className="relative block">
                    <p className="sm:text-2xl text-lg font-medium">
                        Genshin Impact Calculator
                    </p>
                    <p className="text-dark-blue text-xs text-end pb-1 mb-2 border-b-2 border-white">
                        v0.1-alpha
                    </p>
                    <div className="flex text-xs text-neutral-400">
                        <p>Developed by Cod3d</p>
                        <span className="flex-grow"></span>
                        <p className="text-end">2022 All rights reserved</p>
                    </div>
                </div>
            </div>
        </ScrollReveal>
    );
};
