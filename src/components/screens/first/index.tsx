import {
    RemixIcon,
    ScrollReveal,
    ScreenContainer,
    RevealPresets,
    Button,
} from "@components/common";

import chImage1 from "@public/characters/chun-yun.webp";
import chImage2 from "@public/characters/bei-dou.webp";

import Image from "next/image";
import { useEffect, useState } from "react";

interface Props {
    secondScreen: React.RefObject<HTMLDivElement>;
}

export const FirstScreen: React.FC<Props> = ({ secondScreen }) => {
    const executeScroll = () => {
        if (!secondScreen.current) return;
        secondScreen.current.scrollIntoView({ behavior: "smooth" });
    };

    return (
        <ScreenContainer>
            <div
                className=" absolute top-1/2
                            sm:left-1/4 left-1/2
                            -translate-x-1/2 -translate-y-1/2
                            flex flex-col z-10"
            >
                <ScrollReveal>
                    <div className="text-white font-medium">
                        <h1
                            className=" xl:text-5xl lg:text-4xl sm:text-3xl text-2xl
                                        whitespace-nowrap"
                        >
                            Genshin Impact
                        </h1>
                        <h1
                            className=" text-center sm:text-end
                                        xl:text-7xl lg:text-6xl sm:text-4xl text-4xl
                                        xl:ml-24 lg:ml-16 sm:ml-16 ml-0"
                        >
                            Calculator
                        </h1>
                        <ScrollReveal
                            delay={0.4}
                            hidden={{ ...RevealPresets.Top }}
                        >
                            <p
                                className=" text-end text-dark-blue
                                            sm:font-thin sm:text-xl font-medium text-sm
                                            sm:w-full sm:m-0 w-fit ml-auto"
                            >
                                v0.1-alpha
                            </p>
                        </ScrollReveal>
                    </div>
                </ScrollReveal>
            </div>
            <div
                className={`screen-image-mask absolute
                            top-1/2 sm:left-3/4 left-0
                            -translate-y-1/2 sm:-translate-x-1/2
                            xl:h-[46rem] lg:h-[36rem] md:h-[30rem] sm:h-[24rem] h-1/2
                            w-full sm:max-w-[50%]`}
            >
                <ScrollReveal
                    hidden={RevealPresets.Left}
                    className="absolute left-0 top-0 sm:w-4/5 w-3/5 h-[90%]"
                >
                    <Image
                        src={chImage1}
                        layout="fill"
                        objectFit="contain"
                        alt=""
                        sizes="384px"
                    ></Image>
                </ScrollReveal>

                <ScrollReveal
                    hidden={{ ...RevealPresets.Left, delay: 0.4 }}
                    className="absolute -bottom-20 right-0 w-3/5 h-full -z-10"
                >
                    <Image
                        src={chImage2}
                        layout="fill"
                        objectFit="contain"
                        alt=""
                        sizes="384px"
                    ></Image>
                </ScrollReveal>
            </div>

            <div className="text-white absolute sm:bottom-10 bottom-4 left-1/2 -translate-x-1/2 text-center">
                <ScrollReveal hidden={RevealPresets.Top}>
                    <Button theme="none" onClick={() => executeScroll()}>
                        <RemixIcon icon="ri-mouse-fill" />
                        <p className="mt-2">Scroll down to start</p>
                    </Button>
                </ScrollReveal>
            </div>
        </ScreenContainer>
    );
};
