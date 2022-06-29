import itensRepository from "../repositories/itens-repository";
import { Request, Response } from "express";

const controlerAtualizarUm = (req: Request, res: Response) => {
  const id: number = +req.params.id;
  itensRepository.atualizar(id, req.body, (notFound) => {
    if (notFound) {
      res.status(404).send();
    } else {
      res.status(204).send();
    }
  });
};

export { controlerAtualizarUm };
