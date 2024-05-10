interface Forum {
  id: string;
  name: string;
  description: string;
  topics: Topic[];
}

interface Topic {
  id: string;
}



export { Forum, Topic };
