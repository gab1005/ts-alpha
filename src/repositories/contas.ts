import Contas from "../models/contas";
import database from "./database";

const contaRepository = {
  criar: (conta: Contas, callback: (id: number) => void) => {
    const sql =
      "INSERT INTO contas (id, id_user, numeroAgencia, digitoVerificadorAgencia, numeroConta, digitoVerificadorConta, saldo) VALUES (?, ?, ?, ?, ?, ?, ?)";
    const params = [
      conta.id,
      conta.id_user,
      conta.numeroAgencia,
      conta.digitoVerificadorAgencia,
      conta.numeroConta,
      conta.digitoVerificadorConta,
      conta.saldo,
    ];
    database.run(sql, params, function (_err) {
      callback(this?.lastID);
    });
  },

  lerTodos: (callback: (conta: Contas[]) => void) => {
    const sql = "SELECT * FROM contas";
    const params: any[] = [];
    database.all(sql, params, (_err, rows) => callback(rows));
  },

  // ler: (id: number, callback: (conta?: Contas) => void) => {
  //   const sql = "SELECT * FROM user WHERE id = ?";
  //   const params = [id];
  //   database.get(sql, params, (_err, row) => callback(row));
  // },

  // atualizar: (
  //   id: number,
  //   conta: Contas,
  //   callback: (notFound: boolean) => void
  // ) => {
  //   const sql =
  //     "UPDATE user SET nome = ?, data_nascimento = ?, email = ?, cpf = ? WHERE id = ?";
  //   const params = [conta.nome, conta.data_nascimento, conta.email, conta.cpf, id];
  //   database.run(sql, params, function (_err) {
  //     callback(this.changes === 0);
  //   });
  // },

  // apagar: (id: number, callback: (notFound: boolean) => void) => {
  //   const sql = "DELETE FROM user WHERE id = ?";
  //   const params = [id];
  //   database.run(sql, params, function (_err) {
  //     callback(this.changes === 0);
  //   });
  // },
};

export default contaRepository;
