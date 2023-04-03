const SeatList = ({ reihe, sitze }) => {
	return (
		<section>
			<h2>Reihe {reihe}</h2>
			<div>{sitze}</div>
		</section>
	);
};

export default SeatList;
