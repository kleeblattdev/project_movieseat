import { useState, useEffect } from "react";
import { v4 as uuidv4 } from "uuid";
import { Link } from "react-router-dom";
import SeatList from "../components/seatList";

const Home = () => {
	const [seats, setSeats] = useState();
	const [refresh, setRefresh] = useState(true);

	useEffect(() => {
		fetch("http://localhost:9999/api/seats")
			.then((res) => res.json())
			.then((data) => {
				console.log(data);
				setSeats(data);
			});
	}, [refresh]);

	return (
		<main>
			<h1>Home</h1>
			{seats &&
				seats.map((seat, index) => {
					return (
						<SeatList
							key={uuidv4()}
							indexReihe={index}
							reihe={seat.reihe}
							sitze={seat.sitze}
							klasse={seat.klasse}
							setRefresh={setRefresh}
						/>
					);
				})}
			<Link to="/admin">Admin</Link>
		</main>
	);
};

export default Home;
