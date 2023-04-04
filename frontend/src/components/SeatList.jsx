import { useState, useEffect } from "react";
import { v4 as uuidv4 } from "uuid";

const SeatList = ({ reihe, sitze, klasse }) => {
	const [available, setAvailable] = useState(false);
	console.log(available);

	function handleClick() {
		setAvailable((prev) => !prev);
	}

	return (
		<section>
			<h2>Reihe {reihe}</h2>
			<section className="sitzReihe">
				{sitze.map(() => {
					return (
						<div
							key={uuidv4()}
							className={`${klasse} ${available ? "reserved" : ""}`}
							onClick={handleClick}
						></div>
					);
				})}
			</section>
		</section>
	);
};

export default SeatList;
