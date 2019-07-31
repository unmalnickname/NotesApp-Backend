require("dotenv").config();

const app = require("./app");
require("./database.js");

async function main() {
  app.listen(4000);
  await console.log("server on port 4000");
}

main();
