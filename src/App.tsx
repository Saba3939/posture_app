import { useState } from "react";
import Header from "./components/Header";
import Home from "./components/Home";
import "./App.css";
import Sidebar  from "./components/Sidebar";

function App() {
	return (
		<div>
			{/* <Header /> */}
			<Sidebar></Sidebar>
			<Home />
		</div>
	);
}
export default App;
