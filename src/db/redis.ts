import Redis from "ioredis";
import { Forum } from "../model/forum";
import { ForumRepository } from "../ForumRepository";
import { ResourceManagement } from "../ResourceManagement";

class ForumRepositoryRedisImpl implements ForumRepository, ResourceManagement {
  private client: Redis;

  constructor(client: Redis) {
    this.client = client;
  }

  async getForumById(forumId: string): Promise<Forum | null> {
    const forum = await this.client.hgetall(`forum:${forumId}`)
    if (forum) {
      return Forum.create(forum.name, forum.description); // Substitua com os campos corretos do objeto Forum
    }
    return null;
  }

  async getForums(): Promise<Forum[]> {
    throw new Error("Method not implemented.");
  }

  async saveForum(forum: Forum) {
    await this.client.sadd("forums", forum.id);
    await this.client.hset(`forum:${forum.id}`, forum);
  }

  async disconnect(): Promise<void> {
    await this.client.quit();
  }
}

export { ForumRepositoryRedisImpl };
