import { Forum } from "./model/forum";

export interface ForumRepository {
  getForumById(forumId: string): Promise<Forum | null>;
  getForums(): Promise<Forum[]>;
  saveForum(forum: Forum): void;
}
