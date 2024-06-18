import Redis from "ioredis";
import { Forum } from "../model/forum";
import { ForumRepository } from "../ForumRepository";
import { ResourceManagement } from "../ResourceManagement";

class ForumRepositoryRedisImpl implements ForumRepository, ResourceManagement {
  private client: Redis;

  constructor(client: Redis) {
    this.client = client;
  }

  async getForumById(uuid: string): Promise<Forum | null> {
    await this.client.smembers("forums");
    const forum = await this.client.hgetall(`forum:${uuid}`);
    return Forum.create(
      forum.id,
      forum.name,
      forum.creatorId,
      forum.description
    );
  }

  async getForums(): Promise<Forum[]> {
    throw new Error("Method not implemented.");
  }

  async saveForum(forum: Forum) {
    await this.client.sadd("forums", forum.id);
    await this.client.hset(`forum:${forum.id}`, {
      id: forum.id,
      name: forum.name,
      creatorId: forum.creatorId,
      description: forum.description,
    });
  }

  async disconnect(): Promise<void> {
    await this.client.quit();
  }
}

export { ForumRepositoryRedisImpl };
