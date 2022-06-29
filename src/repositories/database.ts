import sqlite3 from "sqlite3";
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
    )`;

const SQL_TRANSACOES_CREATE = `
    CREATE TABLE transacoes (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      id_conta_origem INTEGER,
      id_conta_destinatario INTEGER,
      tipo_transacao INTEGER,
      valor TEXT,
      FOREIGN KEY (tipo_transacao) REFERENCES tipo_transacao (id)
    )
`;

const SQL_TIPO_TRANSACOES_CREATE = `
    CREATE TABLE tipo_transacao (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      nome_do_tipo TEXT,
      taxa REAL
    )
`;

const database = new sqlite3.Database(DBSOURCE, (err) => {
  if (err) {
    console.error(err.message);
    throw err;
  } else {
    console.log("Base de dados conectada com sucesso.");
    database.run(SQL_USER_CREATE, (err) => {
      if (err) {
        // Possivelmente a tabela já foi criada
        console.log(err.message);
      } else {
        console.log("Tabela user criada com sucesso.");
      }
    });
    database.run(SQL_CONTAS_CREATE, (err) => {
      if (err) {
        // Possivelmente a tabela já foi criada
        console.log(err.message);
      } else {
        console.log("Tabela contas criada com sucesso.");
      }
    });

    database.run(SQL_TRANSACOES_CREATE, (err) => {
      if (err) {
        // Possivelmente a tabela já foi criada
        console.log(err.message);
      } else {
        console.log("Tabela transacoes criada com sucesso.");
      }
    });

    database.run(SQL_TIPO_TRANSACOES_CREATE, (err) => {
      if (err) {
        // Possivelmente a tabela já foi criada
        console.log(err.message);
      } else {
        console.log("Tabela tipo_transacao criada com sucesso.");
      }
    });
  }
});
export default database;
