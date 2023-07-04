import generate from "../generate";
import { Request, Response } from "express";

const queryController = async (req: Request, res: Response) => {
  const { queryDescription } = req.body;
  try {
    const sqlQuery = await generate(queryDescription);
    res.json({ sqlQuery });
  } catch (error) {
    res.status(500).json({ err: error });
  }
};

export default { queryController };
