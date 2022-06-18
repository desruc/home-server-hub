import { RequestHandler } from "express";
import { getAllApps, saveApplication } from "../services/application";

interface CreateApplicationRequestBody {
  group: string;
  title: string;
  link: string;
}

export const createApplication: RequestHandler<
  unknown,
  unknown,
  CreateApplicationRequestBody,
  unknown
> = async (req, res) => {
  const app = await saveApplication(req.body);
  res.status(200).json(app);
};

export const getApps: RequestHandler = async (_, res) => {
  const apps = await getAllApps();
  res.status(200).json(apps);
};
