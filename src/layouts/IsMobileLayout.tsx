import React, { useState, useEffect } from "react";

import isMobilePhoto from "../image/isMobilePhoto.png";

type Props = {
    children: React.ReactNode;
};

const IsMobileLayout: React.FC<Props> = ({ children }) => {
    const [width, setWidth] = useState(window.innerWidth);
    // const [height, setHeight] = useState(window.innerHeight);

    useEffect(() => {
        window.addEventListener("resize", () => {
            setWidth(window.innerWidth);
            // setHeight(window.innerHeight);
        });
    }, []);

    return (
        <>
            {/* {width > 1350 && height > 400 ? ( */}
            {width > 1350 ? (
                <>{children}</>
            ) : (
                <section>
                    <div className="flex flex-col pt-[150px] text-center">
                        <div className="flex items-center justify-center">
                            <img
                                src={isMobilePhoto}
                                alt="isMobilePhoto"
                                className="mb-[70px] w-[80vw] max-w-md"
                            />
                        </div>
                        <p className="mb-[18px] text-[24px] font-bold text-basetext">
                            {`Недоступно :(`}
                        </p>
                        <p className="mb-[28px] text-[20px] text-[#707070]">
                            Пожалуйста, откройте на ПК
                        </p>
                        {/* <div>
                            <button className="cursor-pointer rounded-[10px] bg-base py-3 px-10 text-white shadow-[0_0_15px_0_rgba(115,189,233,0.2)]">
                                Закрыть
                            </button>
                        </div> */}
                    </div>
                </section>
            )}
        </>
    );
};

export default IsMobileLayout;
