import React from "react";

// StreakPropsインターフェース：dataプロパティを受け取る
// dataは2次元配列で、各セルの状態（0 or 1）を格納
interface StreakProps {
    data: number[][];
}

// Streak：2次元のグリッドとして連続記録を表示
const Streak: React.FC<StreakProps> = ({data}) => {
    return (
        <div className="grid gap-1 place-items-center mx-auto"
            style={{
                // グリッドの行数をdata配列の長さに基づいて動的に設定
                gridTemplateRows: `repeat(${data.length}, minmax(0, 1fr))`,
                // グリッドの列数をdata[0]の長さに基づいて動的に設定
                gridTemplateColumns: `repeat(${data[0]?.length || 0}, minmax(0, 1fr))`,
            }}>
            {data.flat().map((value, index) => (
                // 各セルにキーを割り当て、スタイルを動的に変更
                <div key={index} className={`w-4 h-4 rounded-sm ${value===0 ? "bg-[#636363]" : "bg-green-500"}`} />
            ))}
        </div>
    );
};

export default Streak;