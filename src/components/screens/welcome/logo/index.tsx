import { Image } from "@components/common";

import PaimonPortrait from "@public/welcome/paimon-portrait.webp";

export interface WelcomeLogoProps {
    version: string;
}

export const WelcomeLogo: React.FC<WelcomeLogoProps> = ({ version }) => {
    return (
        <div
            className="relative flex items-center
                        xl:h-[60vh]
                        lg:h-[26rem]
                        md:h-[24rem]
                        sm:h-[28rem]
                        h-1/2"
        >
            <div
                className="w-auto aspect-[9/16] h-full 
                            md:relative
                            absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
            >
                <Image src={PaimonPortrait} layout="responsive"></Image>
                <div
                    className="absolute top-0 right-0 h-full
                                md:w-24 md:bg-gradient-to-l md:from-dark-primary-dark md:bg-transparent
                                w-full bg-dark-primary-dark bg-opacity-30"
                ></div>
            </div>
            <div className="z-10">
                <h2 className="inline-block lg:text-3xl md:text-2xl text-3xl">
                    <span className="text-blue-500">G</span>enshin{" "}
                    <span className="text-blue-500">I</span>mpact
                </h2>
                <br />
                <h1 className="inline-block lg:text-5xl md:text-4xl text-5xl font-medium">
                    <span className="text-blue-500">C</span>alculator
                </h1>
                <br />

                <p className="inline-block text-sm float-right">v{version}</p>
            </div>
        </div>
    );
};
