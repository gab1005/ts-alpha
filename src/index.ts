import express from "express";
import cors from "cors";
import { criarConta } from "./routers";
import dotenv from "dotenv";

const app = express();
dotenv.config();
const PORT = process.env.PORT || 4000;
const HOST = process.env.HOST || "http://localhost";
const corsConfig = { origin: "http://localhost" };

app.use(criarConta);

app.use((req, res) => {
  res.status(404).send("opa, não tem esse end point ai");
});

app.listen(PORT, () => {
  console.log("porta 8080");
});

// app.use((req, res) => {
//   res.status(404);
// });

// app.listen(PORT, () => {
//   console.log(`Servidor rodando com sucesso ${HOSTNAME}:${PORT}`);
// });
