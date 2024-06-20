import { Request, Response } from "express";
import validator from "validator";
import { CreateForumUseCase, GetForumByIdUseCase } from "../ForumUseCases";
import { ForumRepository } from "../ForumRepository";
import { ForumRepositoryRedisImpl, createRedisClient } from "../db/redis";

const redisClient = createRedisClient();
const forumRepository: ForumRepository = new ForumRepositoryRedisImpl(
  redisClient
);
const getForumByIdUseCase = new GetForumByIdUseCase(forumRepository);
const createForumUseCase = new CreateForumUseCase(forumRepository);

const getForums = async (req: Request, res: Response) => {
  return res.json(JSON.parse("ok")).status(200);
};

const createForum = async (req: Request, res: Response) => {
  if (
    !req.body.name ||
    !req.body.creatorId ||
    !req.body.description ||
    !validator.isUUID(req.body.creatorId)
  ) {
    return res.sendStatus(400);
  }
  const newForum = {
    id: req.body.id,
    name: req.body.name,
    creatorId: req.body.creatorId,
    description: req.body.description,
  };

  const response = await createForumUseCase.execute(newForum);
  return res.send(response).status(201);
};

const getForumById = async (req: Request, res: Response) => {
  const { id } = req.params;
  if (!validator.isUUID(id))
    return res.status(400).send("[error] Invalid forum id");

  const response = await getForumByIdUseCase.execute(id);
  console.log("response: ", response);

  if (!response) return res.sendStatus(404);
  return res.send(response).status(200);
};

export default { getForums, createForum, getForumById };
