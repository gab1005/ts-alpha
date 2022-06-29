import contaRepository from "../../repositories/contas";
import { Request, Response } from "express";
import Conta from "../../models/contas";

const controlerCriarConta = (req: Request, res: Response) => {
  const conta: Conta = req.body;
  console.log(`req = ${req}`);
  contaRepository.criar(conta, (id) => {
    if (id) {
      res.status(201).location(`/itens/${id}`).send();
    } else {
      res.status(400).send();
    }
  });
};

export { controlerCriarConta };
