import express from "express";
import morgan from "morgan";
import cors from "cors";
import { overwriteFile, readFile, deleteFile, sendEmail } from "./helper.js";
import "./config/config.js";

const PORT = process.env.PORT || 8080;

const app = express();

//logger
app.use(
	morgan(":method :url :status :res[content-length] - :response-time ms")
);

app.use(cors({ origin: "http://localhost:5173" }));

//middlware body parser
app.use(express.json());

app.get("/api/seats", (req, res) => {
	readFile()
		.then((data) => res.json(data))
		.catch((error) => console.log(error));
});

// send email on put request
app.put("/api/seats/:id/:seatID", (req, res) => {
	const index = req.params.id;
	const seatID = req.params.seatID;
	overwriteFile(index, seatID);
	/* sendEmail() */
	res.end();
});

app.delete("/api/seats", (req, res) => {
	deleteFile();
	res.end();
});

app.listen(PORT, () => console.log("Server listening on port", PORT));
