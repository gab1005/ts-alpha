"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sqlite3_1 = __importDefault(require("sqlite3"));
const DBSOURCE = "db.sqlite";
const SQL_USER_CREATE = `
    CREATE TABLE user (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        nome TEXT,
        data_nascimento TEXT,
        email TEXT,
        cpf TEXT
    )`;
const SQL_CONTAS_CREATE = `
    CREATE TABLE contas (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      id_user INTEGER,
      numeroAgencia TEXT,
      digitoVerificadorAgencia TEXT,
      numeroConta TEXT,
      digitoVerificadorConta TEXT,
      saldo TEXT,
      FOREIGN KEY (id_user) REFERENCES user (id)

    )
`;
const database = new sqlite3_1.default.Database(DBSOURCE, (err) => {
    if (err) {
        console.error(err.message);
        throw err;
    }
    else {
        console.log("Base de dados conectada com sucesso.");
        database.run(SQL_USER_CREATE, (err) => {
            if (err) {
                // Possivelmente a tabela já foi criada
                console.log(err.message);
            }
            else {
                console.log("Tabela user criada com sucesso.");
            }
        });
        database.run(SQL_CONTAS_CREATE, (err) => {
            if (err) {
                // Possivelmente a tabela já foi criada
                console.log(err.message);
            }
            else {
                console.log("Tabela contas criada com sucesso.");
            }
        });
    }
});
exports.default = database;
