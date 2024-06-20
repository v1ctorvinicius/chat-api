import { Request, Response } from "express";
import validator from "validator";
import { GetForumByIdUseCase } from "../ForumUseCases";
import { ForumRepository } from "../ForumRepository";
import { ForumRepositoryRedisImpl, createRedisClient } from "../db/redis";

const redisClient = createRedisClient();
const forumRepository: ForumRepository = new ForumRepositoryRedisImpl(redisClient);
const getForumByIdUseCase = new GetForumByIdUseCase(forumRepository);

const getForums = async (req: Request, res: Response) => {
  return res.json(JSON.parse("ok")).status(200);
};

const createForum = async (req: Request, res: Response) => {
  if (!req.body.userId || !req.body.name) return res.sendStatus(400);

  // const forumId = Date.now().toString();
  // const response = await db.sadd(
  //   `forum:${forumId}`,
  //   JSON.stringify([
  //     { userId: "req.body.userId", name: req.body.forumName },
  //     { userId: req.body.userId, name: req.body.forumName },
  //   ])
  // );

  // if (response !== "OK") {
  //   return res.sendStatus(500);
  // }

  return res.json("response").sendStatus(201);
};

const getForumById = async (req: Request, res: Response) => {
  const { id } = req.params;
  if (!validator.isUUID(id))
    return res.status(400).send("[error] Invalid forum id");

  const response = await getForumByIdUseCase.execute(id);
  console.log('response: ', response);
  
  if (!response) return res.sendStatus(404);
  return res.send(response).status(200);
};

export default { getForums, createForum, getForumById };
