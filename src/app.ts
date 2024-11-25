import express from "express";
import helmet from "helmet";
import morgan from "morgan";
import cors from "cors";
import bodyParser from "body-parser";
import dotenv from "dotenv";
import router from "./routes/routes";
dotenv.config({ path: __dirname + "/../.env" });


const app = express();

app.use(cors());
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(helmet());
app.use(morgan("tiny"));
app.use(router);

export default app;
