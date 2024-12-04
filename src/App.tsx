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
			<div className="flex-1 p-4">
				<Home />
				<Contents title="" children="" />
			</div>
		</div>
	);
}
export default App;
