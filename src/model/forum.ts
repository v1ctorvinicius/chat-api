import { randomUUID } from "crypto";

class Forum {
  public id: string;
  public name: string;
  public description: string;
  public topics: Topic[];

  constructor(id: string, name: string, description: string, topics: Topic[]) {
    this.id = id;
    this.name = name;
    this.description = description;
    this.topics = topics;
  }

  static create(id: string, name: string, description: string = ""): Forum {
    return new Forum(id, name, description, []);
  }
}

type ForumDTO = {
  id: string;
  name: string;
  description: string;
  topics: Topic[];
};

type Topic = {};

export { Forum, ForumDTO, Topic };
