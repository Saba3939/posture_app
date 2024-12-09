import React from "react";

interface StreakProps {
    data: number[][];
}

const Streak: React.FC<StreakProps> = ({data}) => {
    return (
        <div className="grid gap-1 place-items-center mx-auto"
            style={{
                gridTemplateRows: `repeat(${data.length}, minmax(0, 1fr))`,
                gridTemplateColumns: `repeat(${data[0]?.length || 0}, minmax(0, 1fr))`,
            }}>
            {data.flat().map((value, index) => (
                <div key={index} className={`w-4 h-4 rounded-sm ${value===0 ? "bg-[#636363]" : "bg-green-500"}`} />
            ))}
        </div>
    );
};

export default Streak;