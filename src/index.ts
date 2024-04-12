import { App } from "./app";
import { config } from "dotenv";
import { resolve } from "path";

config({ path: resolve(__dirname, "../.env") });

const port = process.env.PORT;

function init() {
  return new App().server.listen(port, () => {
    console.log(`Server running on port ${port}`);
  });
}

const app = init();
