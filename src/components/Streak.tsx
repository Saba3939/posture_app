import React from "react";
import { Label } from "./ui/label";

// StreakPropsインターフェース：dataプロパティを受け取る
// dataは2次元配列で、各セルの状態（0 or 1）を格納
interface StreakProps {
    data: number[][];
}

// Streak：2次元のグリッドとして連続記録を表示
const Streak: React.FC<StreakProps> = ({data}) => {
    const days = ["月", "火", "水", "木", "金", "土", "日"];
    const months = ["1月", "2月", "3月", "4月", "5月", "6月", "7月", "8月", "9月", "10月", "11月", "12月"];
    const daysInWeek = 7;
    const monthLabels = Array.from({ length: 53 }, (_, colIndex) => {
        const currentDay0fYear = colIndex * daysInWeek;
        const date = new Date(2024, 0, 1);
        date.setDate(currentDay0fYear + 1);
        const monthIndex = date.getMonth();
        return colIndex === 0 || date.getDate() <= 7 ? months[monthIndex]: "";
    })
    return (
        <div className="flex flex-col gap-2">
            <div className="flex items-center justify-center gap-1 ml-6">
                {monthLabels.map((label, index) => (
                    <div key={index} className="w-4 text-center text-xs text-white">
                        {label}
                    </div>
                ))}
            </div>

            <div className="flex">
                <div className="flex flex-col gap-1 mr-2">
                    {days.map((day, index) => (
                        <div key={index} className="h-4 text-right text-xs text-white">
                            {day}
                        </div>
                    ))}
                </div>
                <div className="grid gap-1 place-items-center mx-auto"
                    style={{
                    // グリッドの行数をdata配列の長さに基づいて動的に設定
                    gridTemplateRows: `repeat(${data.length}, minmax(0, 1fr))`,
                    // グリッドの列数をdata[0]の長さに基づいて動的に設定
                    gridTemplateColumns: `repeat(53, minmax(0, 1fr))`,
                }}>
                    {data.flat().map((value, index) => (
                        // 各セルにキーを割り当て、スタイルを動的に変更
                        <div key={index} className={`w-4 h-4 rounded-sm ${value===0 ? "bg-[#636363]" : "bg-green-500"}`} />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Streak;