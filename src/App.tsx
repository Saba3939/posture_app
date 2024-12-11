import { useState } from "react";
import Header from "./components/Header";
import Home from "./components/Home";
import Contents from "./components/Contents";
import AppSidebar from "./components/Sidebar";
import Streak from "./components/Streak";
import Graph from "./components/Graph";
import "./App.css";

function App() {
	return (
		<div className='h-screen bg-opacity-90 bg-black flex'>
			{/* <Header /> */}
			<div className="h-screen sticky top-0 bg-black w-[80px] flex-shrink-0 border-r border-[#323232]">
				<AppSidebar />
			</div>
			<div className="flex-1 p-4 flex flex-col gap-6 overflow-y-auto">
				<div id="top" className="text-4xl text-center text-white"><h1>Body Balancer</h1></div>
				<Home />
				<Contents
					id="graph"
					title="グラフ"
					description="このグラフはあなたの姿勢状態を可視化させたグラフです"
				>
					<Graph />
				</Contents>
				<Contents
					id="evalution"
					title="評価"
					description="あなたの姿勢状態に対する評価です"
					children="ここに要素を追加"
				/>
				<Contents
					id="improvement"
					title="改善案"
					description="あなたの姿勢状態を改善するための提案です"
					children="ここに要素を追加"
				/>
				<Contents
					id="streak"
					title="連続記録"
					description="改善への取り組みを記録しています"
				>
					<div className="flex justify-center">
						<Streak               // 縦
							data={Array.from({length: 7}, () =>
								              // 横        今は色をランダムで表示
							Array.from({length: 30}, () => Math.round(Math.random())))}
						/>
					</div>
				</Contents>
			</div>
		</div>
	);
}
export default App;
