import { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Admin from "./pages/Admin";

import "./App.css";

function App() {
	const [seats, setSeats] = useState();

	useEffect(() => {
		fetch("http://localhost:9999/api/seats")
			.then((res) => res.json())
			.then((data) => setSeats(data));
	}, []);

	return (
		<div className="App">
			<BrowserRouter>
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/admin" element={<Admin />} />
				</Routes>
			</BrowserRouter>
		</div>
	);
}

export default App;
