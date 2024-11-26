import React from "react";

const Sidebar = () => {
    return (
        <div className="bg-black h-screen w-[80px] fixed flex flex-col justify-between items-center">
            <div className="mt-4 flex flex-col space-y-4">
                <div className="w-8 h-8 bg-[#636363] rounded-full"></div>
                <div className="w-8 h-8 bg-[#636363] rounded-full"></div>
                <div className="w-8 h-8 bg-[#636363] rounded-full"></div>
                <div className="w-8 h-8 bg-[#636363] rounded-full"></div>
            </div>
            <div className="mb-4 flex flex-col space-y-4">
                <div className="w-8 h-8 bg-[#636363] rounded-full"></div>
                <div className="w-8 h-8 bg-[#636363] rounded-full"></div>
            </div>
        </div>
    );
};

export default Sidebar;
