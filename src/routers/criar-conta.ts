import express from "express";
import cors from "cors";

import dotenv from "dotenv";
dotenv.config();
const PORT = process.env.PORT || 4000;
const HOST = process.env.HOST || "http://localhost";

const app = express();
const corsConfig = { origin: [`${HOST}:${PORT}`] };
app.use(cors(corsConfig));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const criarConta = express.Router();

criarConta.get("/criar-conta", (req, res) => {
  res.status(201).send("conta criada");
});

export { criarConta };
