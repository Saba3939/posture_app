import React from "react";
import { Home, BarChart2, FileText, ChartSpline, User, Settings } from "lucide-react";

const AppSidebar = () => {
    return (
        <div className="bg-black h-screen w-[80px] flex flex-col justify-between items-center border-r border-[#323232]">
            <div className="mt-4 flex flex-col space-y-4">
                <div className="relative group">
                    <Home className="text-[#636363] w-8 h-8 hover:text-white cursor-pointer" />
                    <div className="absolute left-10 top-1/2 transform -translate-y-1/2  opacity-0 group-hover:opacity-100 bg-[#323232] text-white text-sm rounded px-2 py-1 whitespace-nowrap">
                        ホーム
                    </div>
                </div>
                <div className="relative group">
                    <BarChart2 className="text-[#636363] w-8 h-8 hover:text-white cursor-pointer" />
                    <div className="absolute left-10 top-1/2 transform -translate-y-1/2  opacity-0 group-hover:opacity-100 bg-[#323232] text-white text-sm rounded px-2 py-1 whitespace-nowrap">
                        評価
                    </div>
                </div>
                <div className="relative group">
                    <FileText className="text-[#636363] w-8 h-8 hover:text-white cursor-pointer" />
                    <div className="absolute left-10 top-1/2 transform -translate-y-1/2  opacity-0 group-hover:opacity-100 bg-[#323232] text-white text-sm rounded px-2 py-1 whitespace-nowrap">
                        改善案
                    </div>
                </div>
                <div className="relative group">
                    <ChartSpline className="text-[#636363] w-8 h-8 hover:text-white cursor-pointer" />
                    <div className="absolute left-10 top-1/2 transform -translate-y-1/2  opacity-0 group-hover:opacity-100 bg-[#323232] text-white text-sm rounded px-2 py-1 whitespace-nowrap">
                        連続記録
                    </div>
                </div>
            </div>
            <div className="mb-4 flex flex-col space-y-4">
                <div className="relative group">
                    <User className="text-[#636363] w-8 h-8 hover:text-white cursor-pointer" />
                    <div className="absolute left-10 top-1/2 transform -translate-y-1/2  opacity-0 group-hover:opacity-100 bg-[#323232] text-white text-sm rounded px-2 py-1 whitespace-nowrap">
                        アカウント
                    </div>
                </div>
                <div className="relative group">
                    <Settings className="text-[#636363] w-8 h-8 hover:text-white cursor-pointer" />
                    <div className="absolute left-10 top-1/2 transform -translate-y-1/2  opacity-0 group-hover:opacity-100 bg-[#323232] text-white text-sm rounded px-2 py-1 whitespace-nowrap">
                        設定
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AppSidebar;