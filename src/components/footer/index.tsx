import { Image } from "@components/common";

import logoImage from "@public/footer/logo.svg";

export const Footer: React.FC = () => {
    return (
        <div
            className=" relative sm:flex block w-full bg-dark-primary
                        justify-between drop-shadow-lg shadow-lg p-8
                        border-t-2 border-dark-blue"
        >
            <div className="flex">
                <div className="relative block sm:w-16 w-16 aspect-square mr-8">
                    <Image src={logoImage}></Image>
                </div>
                <div className="flex-grow">
                    <p className="sm:text-2xl text-lg font-medium">
                        Genshin Impact
                    </p>
                    <p className="sm:text-2xl text-lg font-medium">
                        Calculator
                    </p>
                    <p className="text-dark-blue text-sm">v0.1-alpha</p>
                </div>
            </div>
            <div className="sm:mt-auto sm:block flex mt-12 text-xs text-neutral-400">
                <p>Developed by Cod3d</p>
                <span className="flex-grow"></span>
                <p className="text-end">2022 All rights reserved</p>
            </div>
        </div>
    );
};
