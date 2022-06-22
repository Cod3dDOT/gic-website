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
            <div className="absolute top-1/2 left-1/4 -translate-x-1/2 -translate-y-1/2 flex flex-col">
                <ScrollReveal>
                    <div className="text-white font-medium">
                        <h1 className="text-5xl">Genshin Impact</h1>
                        <h1 className="text-7xl text-end ml-24">Calculator</h1>
                        <ScrollReveal
                            hidden={{
                                ...RevealPresets.Top,
                                delay: 0.4,
                            }}
                        >
                            <p className="text-end font-thin text-dark-blue">
                                v0.1-alpha
                            </p>
                        </ScrollReveal>
                    </div>
                </ScrollReveal>
            </div>
            <div
                className={`screen-image-mask absolute flex top-1/2 right-1/4
                            -translate-y-1/2 translate-x-1/2
                            xl:h-[46rem] lg:h-[36rem] w-full max-w-[50%]`}
            >
                <ScrollReveal
                    hidden={RevealPresets.Left}
                    className="absolute top-0 left-0 w-4/5 h-[90%]"
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

            <div className="text-white m-auto absolute bottom-10 left-1/2 -translate-x-1/2 text-center">
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
