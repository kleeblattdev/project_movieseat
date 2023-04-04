import { useState, useEffect } from "react";

const SeatList = ({ reihe, sitze }) => {
	const [available, setAvailable] = useState(false);

	return (
		<section>
			<h2>Reihe {reihe}</h2>
			<section className="sitzReihe">
				{sitze.map((sitz) => {
					return <div className=""></div>;
				})}
			</section>
		</section>
	);
};

export default SeatList;
