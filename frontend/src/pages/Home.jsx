import { useState, useEffect } from "react";
import { v4 as uuidv4 } from "uuid";
import { Link } from "react-router-dom";
import SeatList from "../components/seatList";
const Home = () => {
	const [seats, setSeats] = useState();

	useEffect(() => {
		fetch("http://localhost:9999/api/seats")
			.then((res) => res.json())
			.then((data) => {
				console.log(data);
				setSeats(data);
			});
	}, []);

	return (
		<main>
			<h1>Home</h1>
			{seats &&
				seats.map((seat) => {
					return (
						<SeatList
							key={uuidv4()}
							reihe={seat.reihe}
							sitze={seat.sitze}
							klasse={seat.klasse}
						/>
					);
				})}
			<Link to="/admin">Admin</Link>
		</main>
	);
};

export default Home;
