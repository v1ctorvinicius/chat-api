import { App } from "./app";

require("dotenv").config();

const port = process.env.PORT;

function init() {
  return new App().app.listen(port, () => {
    console.log(`Server running on port ${port}`);
  });
}

const app = init();
