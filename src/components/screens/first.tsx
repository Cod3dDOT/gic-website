import { Icon, ScrollReveal, ScreenContainer } from "@components";

import { RevealFromLeft } from "@components/scroll-reveal";

import chImage1 from "@public/characters/chun-yun.webp";
import chImage2 from "@public/characters/bei-dou.webp";

import Image from "next/image";

export const FirstScreen: React.FC = () => {
    return (
        <ScreenContainer>
            <div className="absolute top-1/2 left-1/4 -translate-x-1/2 -translate-y-1/2 flex flex-col">
                <ScrollReveal>
                    <div className="text-white font-medium">
                        <h1 className="text-5xl">Genshin Impact</h1>
                        <h1 className="text-7xl text-end ml-24">Calculator</h1>
                        <ScrollReveal revealParams={{ y: -30, delay: 0.4 }}>
                            <p className="text-end font-thin text-dark-blue">
                                v0.1-alpha
                            </p>
                        </ScrollReveal>
                    </div>
                </ScrollReveal>
            </div>
            <div
                className={`screen-image-mask absolute top-1/2 right-1/4 -translate-y-1/2 translate-x-1/2 w-[650px] h-full p-4`}
            >
                <ScrollReveal
                    revealParams={{ x: -30, delay: 0.4 }}
                    className="relative"
                >
                    <div className="absolute w-full mt-[15vh] h-[85vh] top-full right-0">
                        <Image
                            src={chImage2}
                            layout="fill"
                            objectFit={"contain"}
                            objectPosition="right bottom"
                            priority
                        ></Image>
                    </div>
                </ScrollReveal>

                <ScrollReveal revealParams={RevealFromLeft}>
                    <div className="absolute w-full h-[85vh]">
                        <Image
                            src={chImage1}
                            layout="fill"
                            objectFit={"contain"}
                            objectPosition="left top"
                        ></Image>
                    </div>
                </ScrollReveal>
            </div>

            <div className=" text-white m-auto absolute bottom-10 left-1/2 -translate-x-1/2 text-center">
                <ScrollReveal>
                    <Icon icon="ri-mouse-fill"></Icon>
                    <p className="mt-2">Scroll down to start</p>
                </ScrollReveal>
            </div>
        </ScreenContainer>
    );
};
