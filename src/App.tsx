import { useEffect, useState } from "react";
import Home from "./components/Home";
import Contents from "./components/Contents";
import AppSidebar from "./components/Sidebar";
import Streak from "./components/Streak";
import Graph from "./components/Graph";
import "./App.css";
import {
	collection,
	limit,
	onSnapshot,
	orderBy,
	query,
} from "firebase/firestore";
import { db } from "./lib/firebase";
import postureAdvice from "./data/postureAdvice";
interface PostureData {
	posture: number;
	class: number;
	time: string;
}

// const postureAdvice: PostureAdvice = require("./data/postureAdvice.json");

const classes: string[] = ["正常", "右寄り", "前傾", "左寄り", "後傾"];
function App() {
	const [data, setData] = useState<PostureData[]>([]);
	const [advice, setAdvice] = useState<string>("");
	const fetchData = async () => {
		try {
			const q = query(
				collection(db, "Users", "user1", "postures"),
				orderBy("time", "desc"),
				limit(1)
			);
			onSnapshot(q, (querySnapshot) => {
				const fetchedData: PostureData[] = querySnapshot.docs.map(
					(doc) => doc.data() as PostureData
				);
				setData(fetchedData);
				if (fetchedData.length > 0) {
					const latestData = fetchedData[0];
					const postureClass = latestData.class.toString();
					const postureQuality = latestData.posture.toString();
					const postureAdviceDetails =
						postureAdvice.advice[postureQuality][postureClass];
					setAdvice(postureAdviceDetails.details);
				}
			});
		} catch (error) {
			console.error("Error reading document: ", error);
		}
	};
	useEffect(() => {
		fetchData();
	}, []);
	return (
		<div className='h-screen bg-opacity-90 bg-black flex'>
			<div className='h-screen sticky top-0 bg-black w-[80px] flex-shrink-0 border-r border-[#323232]'>
				<AppSidebar />
			</div>
			<div className='flex-1 p-4 flex flex-col gap-6 overflow-y-auto'>
				<div id='top' className='text-4xl text-center text-white'>
					<h1>Body Balancer</h1>
				</div>
				{/* <Home /> */}
				<Contents
					id='graph'
					title='グラフ'
					description='このグラフはあなたの姿勢状態を可視化させたグラフです'
				>
					<Graph />
				</Contents>
				<Contents
					id='evalution'
					title='評価'
					description='あなたの姿勢状態に対する評価です'
					children={
						<div>
							{data &&
								data.map((data, _) => (
									<div className='text-xl'>
										<div>
											現在の姿勢状態:
											<div className='text-2xl font-bold text-center'>
												{classes[data.class]}
											</div>
										</div>
									</div>
								))}
						</div>
					}
				/>
				<Contents
					id='improvement'
					title='改善案'
					description='あなたの姿勢状態を改善するための提案です'
					children={<div>{advice}</div>}
				/>
				<Contents
					id='streak'
					title='連続記録'
					description='改善への取り組みを記録しています'
				>
					<div className='flex justify-center'>
						<Streak data={Array.from({ length: 7 }, () => Array(53).fill(0))} />
					</div>
				</Contents>
			</div>
		</div>
	);
}
export default App;
