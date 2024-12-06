import { useState } from "react";
import Header from "./components/Header";
import Home from "./components/Home";
import Contents from "./components/Contents";
import "./App.css";
import AppSidebar from "./components/Sidebar";

function App() {
	return (
		<div className='h-screen bg-opacity-90 bg-black flex'>
			{/* <Header /> */}
			<AppSidebar />
			<div className="flex-1 p-4 flex flex-col gap-6">
				<Home />
				<Contents title="グラフ" children="ここに説明を追加" />
				<Contents title="評価" children="ここに説明を追加" />
				<Contents title="改善案" children="ここに説明を追加" />
				<Contents title="連続記録" children="ここに説明を追加" />
			</div>
		</div>
	);
}
export default App;
