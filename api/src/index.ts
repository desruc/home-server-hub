import "module-alias/register";
import "dotenv/config";

import databaseConnection from "./database";
import getServer from "./core/app";

const initialzeApp = async () => {
  try {
    await databaseConnection.initialize();
    console.log("Database connected!");
  } catch {
    console.log("Error connecting to database.");
  }

  const server = getServer();

  const port = process.env.PORT || 3000;
  server.listen(port, () => {
    console.info(`Server listening on port ${port}`);
  });
};

initialzeApp();
