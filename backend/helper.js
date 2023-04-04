import fs from "fs";
import nodemailer from "nodemailer";

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

export const overwriteFile = (index, i) => {
	return new Promise((resolve, reject) => {
		readFile().then((data) => {
			data[index].sitze[i] = !data[index].sitze[i];
			writeFile(data)
				.then(() => resolve(data))
				.catch((err) => reject(err));
		});
	});
};

const transport = nodemailer.createTransport({
	host: process.env.MAIL_HOST,
	port: process.env.MAIL_PORT,
	auth: {
		user: process.env.MAIL_USER,
		pass: process.env.MAIL_PASS,
	},
});

export const sendEmail = () => {
	const message = {
		from: "test@example.com",
		to: "ichBinderEmpfänger@example.com",
		subject: "Sitzplatzreservierung",
		text: "Es wurde ein Platz reserviert",
		html: "<h1>Ich bin eine H1</h1>",
	};

	transport.sendMail(message, (err, info) => {
		if (err) console.log("Der Error", err);
		else {
			console.log("Die Info", info);
		}
	});
};

export const deleteFile = () => {
	return new Promise((resolve, reject) => {
		readFile().then((data) => {
			const newData = data.map((elem) => {
				console.log(elem.sitze);
			});
			writeFile(data)
				.then(() => resolve(data))
				.catch((err) => reject(err));
		});
	});
};
