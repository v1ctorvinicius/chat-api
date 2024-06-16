
class Forum {
  constructor(readonly id: string, readonly name: string, readonly creatorId: string, readonly description: string, readonly topics: Topic[]) {
    this.id = id;
    this.name = name;
    this.description = description;
    this.topics = topics;
  }

  static create(id: string, name: string, creatorId: string, description: string = ""): Forum {
    return new Forum(id, name, creatorId, description, []);
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
