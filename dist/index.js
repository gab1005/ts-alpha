"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const itens_router_1 = __importDefault(require("./routers/itens-router"));
const PORT = process.env.PORT || 5000;
const HOSTNAME = process.env.HOSTNAME || "http://localhost";
const app = (0, express_1.default)();
// app.use(express.json());
// app.use(express.urlencoded({ extended: true }));
app.get("/", (req, res) => {
    res.send("Bem-vindo!");
});
app.use((0, cors_1.default)({
    origin: ["http://localhost:3000"],
}));
app.use("/api", itens_router_1.default);
app.use((req, res) => {
    res.status(404);
});
app.listen(PORT, () => {
    console.log(`Servidor rodando com sucesso ${HOSTNAME}:${PORT}`);
});
