import React from "react";

type Props = {
    children: React.ReactNode;
    styles: string;
};

const Card: React.FC<Props> = ({ children, styles = "" }) => {
    return (
        <div
            className={
                "bg-white p-[5px] shadow-[0_0_15px_rgba(115,189,233,0.2)] hover:shadow-[0_0_15px_rgba(233,165,115,0.5)]" +
                styles
            }
        >
            {children}
        </div>
    );
};

export default Card;
