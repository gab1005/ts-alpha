import itensRepository from "../repositories/itens-repository";
import { Request, Response } from "express";

const controlerDeletarUm = (req: Request, res: Response) => {
  const id: number = +req.params.id;
  itensRepository.apagar(id, (notFound) => {
    if (notFound) {
      res.status(404).send();
    } else {
      res.status(204).send();
    }
  });
};

export { controlerDeletarUm };
