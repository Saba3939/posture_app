import React from "react";

interface ContentsBoxProps {
    title : string;
    children : React.ReactNode;
}

const Contents: React.FC<ContentsBoxProps> = ({ title, children }) => {
    return (
        <div className="bg-black p-6 text-white">
            <h2 className="text-lg mb-4">{title}</h2>
            <div>{children}</div>
        </div>
    )
}

export default Contents;