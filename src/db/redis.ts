import Redis from "ioredis";
import { Forum } from "../model/forum";
import { ForumRepository } from "../ForumRepository";
import { ResourceManagement } from "../ResourceManagement";

import dotenv from "dotenv";
dotenv.config();

export function createRedisClient(): Redis {
  return new Redis(process.env.UPSTASH_URL!);
}

class ForumRepositoryRedisImpl implements ForumRepository, ResourceManagement {
  private client: Redis;

  constructor(client: Redis) {
    this.client = client;
  }

  async getForumById(uuid: string): Promise<Forum | null> {
    const forum = await this.client.hgetall(`forum:${uuid}`);
    return Forum.create(
      forum.id,
      forum.name,
      forum.creatorId,
      forum.description
    );
  }

  async getForums(): Promise<Forum[]> {
    const forumsIds = await this.client.smembers("forums");
    const forums = await Promise.all(
      forumsIds.map(async (forumId) => {
        const forum = await this.client.hgetall(`forum:${forumId}`);
        return Forum.create(
          forum.id,
          forum.name,
          forum.creatorId,
          forum.description
        );
      })
    );
    return forums;
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
