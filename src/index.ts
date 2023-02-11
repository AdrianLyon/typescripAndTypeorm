import "reflect-metadata";

import app from "./app";
import { AppDataSource } from "./db";

async function main() {
  try {
    await AppDataSource.initialize();
    console.log("Database connected successfully");
    app.listen(3000);
    console.log("Listening on port");
  } catch (error) {
    console.error(error);
  }
}

main();
