import { Application } from "express";
import * as ApplicationController from "../controllers/application";

export const attachRoutes = (app: Application): void => {
  app.post("/apps", ApplicationController.createApplication);
  app.get("/apps", ApplicationController.getApps);
};

export default attachRoutes;
