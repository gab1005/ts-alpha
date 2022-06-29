import itensRepository from "../repositories/itens-repository";
import { Request, Response } from "express";

const controlerLerUm = (req: Request, res: Response) => {
  const id: number = +req.params.id;
  itensRepository.ler(id, (item) => {
    if (item) {
      res.json(item);
    } else {
      res.status(404).send();
    }
  });
};

export { controlerLerUm };
