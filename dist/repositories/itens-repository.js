"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const database_1 = __importDefault(require("./database"));
const itensRepository = {
    criar: (item, callback) => {
        console.log("rodando aqui", item);
        const sql = "INSERT INTO user (nome, data_nascimento, email, cpf) VALUES (?, ?, ?, ?)";
        const params = [item.nome, item.data_nascimento, item.email, item.cpf];
        database_1.default.run(sql, params, function (_err) {
            callback(this === null || this === void 0 ? void 0 : this.lastID);
        });
    },
    lerTodos: (callback) => {
        const sql = "SELECT * FROM user";
        const params = [];
        database_1.default.all(sql, params, (_err, rows) => callback(rows));
    },
    ler: (id, callback) => {
        const sql = "SELECT * FROM user WHERE id = ?";
        const params = [id];
        database_1.default.get(sql, params, (_err, row) => callback(row));
    },
    atualizar: (id, item, callback) => {
        const sql = "UPDATE user SET nome = ?, data_nascimento = ?, email = ?, cpf = ? WHERE id = ?";
        const params = [item.nome, item.data_nascimento, item.email, item.cpf, id];
        database_1.default.run(sql, params, function (_err) {
            callback(this.changes === 0);
        });
    },
    apagar: (id, callback) => {
        const sql = "DELETE FROM user WHERE id = ?";
        const params = [id];
        database_1.default.run(sql, params, function (_err) {
            callback(this.changes === 0);
        });
    },
};
exports.default = itensRepository;
