"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const itens_repository_1 = __importDefault(require("../repositories/itens-repository"));
const itensRouter = express_1.default.Router();
itensRouter.post("/itens", (req, res) => {
    const item = req.body;
    itens_repository_1.default.criar(item, (id) => {
        if (id) {
            res.status(201).location(`/itens/${id}`).send();
        }
        else {
            res.status(400).send();
        }
    });
});
itensRouter.get("/itens", (req, res) => {
    itens_repository_1.default.lerTodos((itens) => res.json(itens));
});
itensRouter.get("/itens/:id", (req, res) => {
    const id = +req.params.id;
    itens_repository_1.default.ler(id, (item) => {
        if (item) {
            res.json(item);
        }
        else {
            res.status(404).send();
        }
    });
});
itensRouter.put("/itens/:id", (req, res) => {
    const id = +req.params.id;
    itens_repository_1.default.atualizar(id, req.body, (notFound) => {
        if (notFound) {
            res.status(404).send();
        }
        else {
            res.status(204).send();
        }
    });
});
itensRouter.delete("/itens/:id", (req, res) => {
    const id = +req.params.id;
    itens_repository_1.default.apagar(id, (notFound) => {
        if (notFound) {
            res.status(404).send();
        }
        else {
            res.status(204).send();
        }
    });
});
exports.default = itensRouter;
