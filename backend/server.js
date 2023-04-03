import express from "express";
import morgan from "morgan";
import cors from "cors";
import { overwriteFile, readFile } from "./helper.js";
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

app.put("/api/seats", (req, res) => {
	const data = req.body;
	overwriteFile(data);
});

app.delete("/api/seats", (req, res) => {});

app.listen(PORT, () => console.log("Server listening on port", PORT));
