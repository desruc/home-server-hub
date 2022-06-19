import "module-alias/register";
import "dotenv/config";

import logger from "./core/logger";
import { databaseConnection } from "./database";
import getServer from "./core/app";

const initialzeApp = async () => {
  try {
    await databaseConnection.initialize();
    logger.info("Database connected!");
  } catch {
    logger.error("Error connecting to database.");
  }

  const server = getServer();

  const port = process.env.PORT || 3000;
  server.listen(port, () => {
    logger.info("Server listening on port {port}", { port });
  });
};

initialzeApp();
