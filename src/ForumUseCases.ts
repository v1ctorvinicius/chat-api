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
    const uuid = createUUID();
    this.forumRepository.saveForum(
      Forum.create(`${uuid}`, input.name, input.creatorId, input.description)
    );
    return uuid;
  }
}

export class GetForumByIdUseCase {
  constructor(readonly forumRepository: ForumRepository) {
    this.forumRepository = forumRepository;
  }

  public async execute(id: string): Promise<Forum | null> {
    return await this.forumRepository.getForumById(id);
  }
}

export class GetForumsUseCase {
  constructor(readonly forumRepository: ForumRepository) {
    this.forumRepository = forumRepository;
  }

  public async execute(): Promise<Forum[]> {
    return await this.forumRepository.getForums();
  }
}
