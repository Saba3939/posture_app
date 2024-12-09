import { useState } from "react";
import Header from "./components/Header";
import Home from "./components/Home";
import Contents from "./components/Contents";
import AppSidebar from "./components/Sidebar";
import Streak from "./components/Streak";
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
				<Contents id="graph" title="グラフ" children="ここに要素を追加" />
				<Contents id="evalution" title="評価" children="ここに要素を追加" />
				<Contents id="improvement" title="改善案" children="ここに要素を追加" />
				<Contents id="streak" title="連続記録">
					<div className="flex justify-center">
						<Streak
							data={Array.from({length: 7}, () =>
							Array.from({length: 30}, () => Math.round(Math.random())))}
						/>
					</div>
				</Contents>
			</div>
		</div>
	);
}
export default App;
