import { Request, Response } from "express";
import db from "../db/connection";

const getForums = async (req: Request, res: Response) => {
  const busca = req.params;
  console.log("busca", busca);

  const response = await db.get("forums");
  console.log("response", response);
  

  if (!response) {
    return res.sendStatus(404);
  }
  return res.json(JSON.parse('response')).status(200);
};

const createForum = async (req: Request, res: Response) => {
  if (!req.body.userId || !req.body.forumName) return res.sendStatus(400);

  const forumId = 2;

  const response = await db.sadd(
    `${forumId}`,
    JSON.stringify([{ userId: 'req.body.userId', name: req.body.forumName }, { userId: req.body.userId, name: req.body.forumName }])
  );

  // if (response !== "OK") {
  //   return res.sendStatus(500);
  // }

  return res.sendStatus(201);
};

const getForumById = async (req: Request, res: Response) => {
  if (!req.params.forumId) return res.sendStatus(400);

  const response = await db.get(req.params.forumId);
  console.log(response);
  if (!response) return res.sendStatus(404);
  return res.json(JSON.parse(response)).status(200);
};

export default { getForums, createForum, getForumById };
