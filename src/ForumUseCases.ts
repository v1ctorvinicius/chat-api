import { randomUUID } from "crypto";
import { Forum } from "./model/forum";
import { ForumRepository } from "./ForumRepository";
import { ForumRepositoryRedisImpl } from "./db/redis";

const createUUID = () => {
  return randomUUID();
};

export class CreateForumUseCase {
  constructor(readonly forumRepository: ForumRepository) {
    this.forumRepository = forumRepository;
  }

  public async execute(input: any): Promise<string> {
    if (!input.name) throw new Error("name is required");
    const id = createUUID();
    this.forumRepository.saveForum(
      Forum.create(id, input.name, input.description)
    );
    return id;
  }
}

export class GetForumByIdUseCase {
  constructor(readonly forumRepository: ForumRepository) {
    this.forumRepository = forumRepository;
  }

  public async execute(forumId: string): Promise<Forum | null> {
    return await this.forumRepository.getForumById(forumId);
  }
}
