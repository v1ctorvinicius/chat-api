import { ForumRepositoryRedisImpl } from "../src/db/redis";
import { ForumRepository } from "../src/ForumRepository";
import { CreateForumUseCase, GetForumByIdUseCase } from "../src/ForumUseCases";
import Redis from "ioredis";
import dotenv from "dotenv";

dotenv.config();
const upstashUrl = process.env.UPSTASH_URL;

let forumRepository: ForumRepository;
let createForumUseCase: CreateForumUseCase;
let getForumByIdUseCase: GetForumByIdUseCase;
let redisClient: Redis;

beforeAll(async () => {
  redisClient = new Redis(`${upstashUrl}`);
  forumRepository = new ForumRepositoryRedisImpl(redisClient);
  createForumUseCase = new CreateForumUseCase(forumRepository);
  getForumByIdUseCase = new GetForumByIdUseCase(forumRepository);
});

afterAll(async () => {
  await redisClient.quit();
});

test("must create a new forum", async () => {
  const input = {
    name: "hahaha",
    description: "forum description",
  };

  const createdForumId = await createForumUseCase.execute(input);
  const forum = await getForumByIdUseCase.execute(createdForumId);

  expect(forum?.name).toBe(input.name);
});

test("must create a forum with optional parameters", () => {
  // const forum: Forum = Forum.create("Fórum", "Fórum de teste");
  // expect(forum).toBe(forum);
});
