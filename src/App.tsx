import { useState } from "react";
import Header from "./components/Header";
import Home from "./components/Home";
import "./App.css";
import AppSidebar from "./components/Sidebar";

function App() {
	return (
		<div className='h-screen bg-opacity-90 bg-black'>
			{/* <Header /> */}
			<AppSidebar />
			<Home />
		</div>
	);
}
export default App;
