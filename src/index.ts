import { App } from "./app";

const port = process.env.PORT;

const app = new App().server.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
