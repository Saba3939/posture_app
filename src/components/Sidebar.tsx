import React from "react";
import { Home, BarChart2, FileText, ChartSpline, User, Settings } from "lucide-react";

const AppSidebar = () => {
    return (
        <div className="bg-black h-screen w-[80px] flex flex-col justify-between items-center">
            <div className="mt-4 flex flex-col space-y-4">
                <Home className="text-[#636363] w-8 h-8 hover:text-white cursor-pointer" />
                <BarChart2 className="text-[#636363] w-8 h-8 hover:text-white cursor-pointer" />
                <FileText className="text-[#636363] w-8 h-8 hover:text-white cursor-pointer" />
                <ChartSpline className="text-[#636363] w-8 h-8 hover:text-white cursor-pointer" />
            </div>
            <div className="mb-4 flex flex-col space-y-4">
                <User className="text-[#636363] w-8 h-8 hover:text-white cursor-pointer" />
                <Settings className="text-[#636363] w-8 h-8 hover:text-white cursor-pointer" />
            </div>
        </div>
    );
};

export default AppSidebar;