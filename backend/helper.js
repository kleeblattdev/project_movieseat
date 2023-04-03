import fs from "fs";

export const readFile = () => {
	return new Promise((resolve, reject) => {
		return fs.readFile("./seats.json", (err, data) => {
			if (err) reject(err);
			else {
				resolve(JSON.parse(data.toString()));
			}
		});
	});
};

export const writeFile = (data) => {
	return new Promise((resolve, reject) => {
		fs.writeFile("./seats.json", JSON.stringify(data, null, 1), (err) => {
			if (err) reject(err);
			else {
				resolve("Daten überschrieben");
			}
		});
	});
};

export const overwriteFile = () => {
	return new Promise((resolve, reject) => {
		readFile().then((data, index, i) => {
			data[index].sitze.splice(i, 1, false);
			writeFile(data)
				.then((res) => resolve(data))
				.catch((err) => reject(err));
		});
	});
};

export const deleteFile = () => {
	return new Promise((resolve, reject) => {
		readFile().then((data) => {
			data.sitze
				.forEach((element) => {
					if (element === false) {
						element = true;
					}
				})
				.then((res) => resolve(data))
				.catch((err) => reject(err));
		});
	});
};
