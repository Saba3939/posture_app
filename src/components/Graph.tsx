import { Line } from "react-chartjs-2";
import {
	Chart as ChartJS,
	LineElement,
	CategoryScale,
	LinearScale,
	PointElement,
} from "chart.js";
import { useEffect, useState } from "react";
import { db } from "@/lib/firebase";
import {
	collection,
	getDocs,
	limit,
	onSnapshot,
	orderBy,
	query,
} from "firebase/firestore";

interface PostureData {
	posture: number;
	class: number;
	time: string;
}
interface ChartData {
	labels: string[];
	datasets: {
		label: string;
		data: number[];
		fill: boolean;
		tension: number;
		borderColor: string;
	}[];
}
ChartJS.register(LineElement, CategoryScale, LinearScale, PointElement);
const Graph = () => {
	const [chartData, setChartData] = useState<ChartData | null>(null);
	const fetchData = async () => {
		try {
			const q = query(
				collection(db, "Users", "user1", "postures"),
				orderBy("time", "desc"),
				limit(13)
			);
			onSnapshot(q, (querySnapshot) => {
				const fetchedData: PostureData[] = querySnapshot.docs.map(
					(doc) => doc.data() as PostureData
				);
				const labels = fetchedData.map((_, index) => `${index}`);
				const dataPoints = fetchedData.map((item) => item.posture);
				setChartData({
					labels,
					datasets: [
						{
							label: "姿勢",
							data: dataPoints,
							fill: false,
							tension: 0.1,
							borderColor: "rgb(255, 255, 255)",
						},
					],
				});
			});
		} catch (error) {
			console.error("Error reading document: ", error);
		}
	};
	useEffect(() => {
		fetchData();
	});
	const options = {
		responsive: true,
		animation: {
			duration: 0,
		},
		scales: {
			x: {
				title: { display: true, text: "時間(分前)" },
				grid: { color: "rgb(255, 255, 255)" },
			},
			y: {
				title: { display: true, text: "姿勢(6段階)" },
				grid: { color: "rgb(255, 255, 255)" },
				ticks: { stepSize: 1.0 },
			},
		},
	};
	return (
		<div className='p-4 bg-black rounded-lg w-full h-[400px] flex justify-center'>
			{chartData ? (
				<Line data={chartData} options={options} />
			) : (
				<p>データがありません</p>
			)}
		</div>
	);
};

export default Graph;
