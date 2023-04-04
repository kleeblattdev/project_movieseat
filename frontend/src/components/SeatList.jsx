import { useState, useEffect } from "react";
import { v4 as uuidv4 } from "uuid";

const SeatList = ({ reihe, sitze, klasse, indexReihe, setRefresh }) => {
	function handleClick(index) {
		console.log(indexReihe, index);

		fetch(`http://localhost:9999/api/seats/${indexReihe}/${index}`, {
			method: "PUT",
		}).then(() => setRefresh((prev) => !prev));
	}

	return (
		<section>
			<h2>Reihe {reihe}</h2>
			<section className="sitzReihe">
				{sitze.map((elem, index) => {
					return (
						<div
							key={uuidv4()}
							className={`${klasse} ${elem ? "" : "reserved"}`}
							onClick={() => handleClick(index)}
						></div>
					);
				})}
			</section>
		</section>
	);
};

export default SeatList;
