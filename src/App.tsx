import { useState } from "react";
import Header from "./components/Header";
import Home from "./components/Home";
import Contents from "./components/Contents";
import "./App.css";
import AppSidebar from "./components/Sidebar";

function App() {
	return (
		<div className='h-screen bg-opacity-90 bg-black grid grid-cols-[80px_1fr]'>
			{/* <Header /> */}
			<AppSidebar />
			<div className="p-4">
				<Home />
				<Contents title="" children="" />
			</div>
		</div>
	);
}
export default App;
