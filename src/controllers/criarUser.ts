import itensRepository from "../repositories/itens-repository";
import { Request, Response } from "express";
import Item from "../models/item";

const controlerCriarUser = (req: Request, res: Response) => {
  const item: Item = req.body;
  console.log(`req = ${req}`);
  itensRepository.criar(item, (id) => {
    if (id) {
      res.status(201).location(`/itens/${id}`).send();
    } else {
      res.status(400).send();
    }
  });
};

export { controlerCriarUser };
