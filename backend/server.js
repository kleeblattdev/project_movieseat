import express from "express";
import morgan from "morgan";
import cors from "cors";
import nodemailer from "nodemailer";
import { overwriteFile, readFile } from "./helper.js";
import "./config/config.js";

const PORT = process.env.PORT || 8080;
const transport = nodemailer.createTransport({
	host: process.env.MAIL_HOST,
	port: process.env.MAIL_PORT,
	auth: {
		user: process.env.MAIL_USER,
		pass: process.env.MAIL_PASS,
	},
});

const app = express();

//logger
app.use(
	morgan(":method :url :status :res[content-length] - :response-time ms")
);

app.use(cors({ origin: "http://localhost:5173" }));

//middlware body parser
app.use(express.json());

//email route
app.get("/email", (req, res) => {
	const message = {
		from: "test@example.com",
		to: "ichBinderEmpfänger@example.com",
		subject: "Willkommen",
		text: "Ich bin ein einfacher Text",
		html: "<h1>Ich bin eine H1</h1>",
	};

	transport.sendMail(message, (err, info) => {
		if (err) console.log("Der Error", err);
		else {
			console.log("Die Info", info);
			res.end();
		}
	});
});

app.get("/api/seats", (req, res) => {
	readFile()
		.then((data) => res.json(data))
		.catch((error) => console.log(error));
});

app.put("/api/seats", (req, res) => {
	const data = req.body;
	overwriteFile(data);
});

app.delete("/api/seats", (req, res) => {});

app.listen(PORT, () => console.log("Server listening on port", PORT));
