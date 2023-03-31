import express from "express";
import morgan from "morgan";
import cors from "cors";

const PORT = process.env.PORT || 8080;

const app = express();

app.use(
	morgan(":method :url :status :res[content-length] - :response-time ms")
);

app.use(cors());

app.use(express.json());

app.listen(PORT, () => console.log("Server listening on port", PORT));
