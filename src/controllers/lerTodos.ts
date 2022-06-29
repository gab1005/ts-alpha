import itensRepository from "../repositories/itens-repository";
import { Request, Response } from "express";

const controlerLerTodos = (req: Request, res: Response) => {
  itensRepository.lerTodos((itens) => res.json(itens));
};

export { controlerLerTodos };
