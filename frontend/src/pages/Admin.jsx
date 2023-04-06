import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

const Admin = () => {
	const [seats, setSeats] = useState();

	useEffect(() => {
		fetch(`http://localhost:9999/api/seats`)
			.then((res) => res.json())
			.then((data) => {
				setSeats(data);
			});
	}, []);

	function resetAll() {
		fetch("http://localhost:9999/api/seats", { method: "DELETE" });
	}

	return (
		<main>
			<h1>Dashboard</h1>
			<section>
				<p>freie Sitze</p>
				<p></p>
				<p>belegte Sitze</p>
				<p></p>
			</section>
			<section>
				<p>Umsatz</p>
			</section>
			<button onClick={resetAll}>Reset</button>
			<Link to="/">Home</Link>
		</main>
	);
};

export default Admin;
