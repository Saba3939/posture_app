import React, { useState, useEffect } from "react";

// StreakPropsインターフェース：dataプロパティを受け取る
// dataは2次元配列で、各セルの状態（0 or 1）を格納
interface StreakProps {
    data: number[][];
}

// Streak：2次元のグリッドとして連続記録を表示
const Streak: React.FC<StreakProps> = ({ data }) => {
    const [gridData, setGridData] = useState<number[][]>([]);
    const [isButtonVisible, setisButtonVisible] = useState(true);

    const days = ["日", "月", "火", "水", "木", "金", "土"];
    const months = ["1月", "2月", "3月", "4月", "5月", "6月", "7月", "8月", "9月", "10月", "11月", "12月"];
    const daysInWeek = 7;

    // 月ラベルの作成
    const monthLabels = Array.from({ length: 53 }, (_, colIndex) => {
        const daysOffset = colIndex * daysInWeek;
        const date = new Date(2024, 0, 1 + daysOffset);
        const monthIndex = date.getMonth();
        return colIndex === 0 || date.getDate() <= 7 ? months[monthIndex] : "";
    });

    //最後の余分なマスを削除
    const trimCells = (data: number[][]) => {
        const trimmed = data.map((row) => row.slice(0, 53));
        while (trimmed.length < 7) {
            trimmed.push(Array(53).fill(0));
        }
        return trimmed;
    }

    // 記録するやつ
    const markToday = () => {
        const today = new Date();
        const dayIndex = today.getDay(); // 0:日, 1:月, ..., 6:土
        const diffInMillis = today.getTime() - new Date(2024, 0, 1).getTime();
        const oneDayInMillis = 1000 * 60 * 60 * 24;
        const daysSinceStart = Math.floor(diffInMillis / oneDayInMillis);
        const weekIndex = Math.floor(daysSinceStart / daysInWeek);

        setGridData((prevData) => {
            const newData = prevData.map((row) => [...row]);
            if (weekIndex >= 0 && weekIndex < 53) {
                newData[dayIndex][weekIndex] = 1; // 緑化
            }
            return newData;
        });
        setisButtonVisible(false); // ボタンを非表示
    };

    useEffect(() => {
        const trimData = trimCells(data);
        setGridData(trimData); // いらんマス削除
    }, []);

    return (
        <div className="flex flex-col gap-2">
            {isButtonVisible && (
                <button onClick={markToday} className="mb-4 px-4 py-2 bg-white text-black rounded hover:bg-[#636363]">
                    done?
                </button>
            )}
            <div className="flex items-center justify-center gap-1 ml-6">
                {monthLabels.map((label, index) => (
                    // 月ラベルを表示するための要素
                    <div key={index} className="w-4 text-center text-xs text-white">
                        {label}
                    </div>
                ))}
            </div>
            <div className="flex">
                <div className="flex flex-col gap-1 mr-2">
                    {days.map((day, index) => (
                        // 曜日ラベルを表示するための要素
                        <div key={index} className="h-4 text-right text-xs text-white">
                            {day}
                        </div>
                    ))}
                </div>
                <div className="grid gap-1 place-items-center mx-auto"
                    style={{
                        // グリッドの行数をdata配列の長さに基づいて動的に設定
                        gridTemplateRows: `repeat(7, minmax(0, 1fr))`,
                        // グリッドの列数をdata[0]の長さに基づいて動的に設定
                        gridTemplateColumns: `repeat(53, minmax(0, 1fr))`,
                    }}>
                    {gridData.map((row, rowIndex) => 
                        row.map((value, colIndex) => {
                            // 53列目の下6つのセルを透明にする
                            const isHiddenCell = colIndex === 52 && rowIndex >= gridData.length - 6;
                            return (
                                // グリッドセルを表示するための要素
                                <div
                                    key={`${rowIndex}-${colIndex}`}
                                    className={`w-4 h-4 rounded-sm ${isHiddenCell ? "bg-transparent" : value === 0 ? "bg-[#636363]" : "bg-green-500"}`}
                                />
                            );
                        })
                    )}
                </div>
            </div>
        </div>
    );
};

export default Streak;
