import database from "../database";
import Application, { IApplication } from "../database/entities/Application";

const applicationRepository = database.getRepository(Application);

export async function saveApplication({ group, title, link }: IApplication) {
  const app = await applicationRepository.save({ group, title, link });
  return app;
}

export async function getAllApps() {
  const apps = await applicationRepository.find();
  return apps;
}
