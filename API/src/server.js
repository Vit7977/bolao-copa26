import express from "express";
import cors from "cors";
import { routes } from "./map.js";
import "dotenv/config";

const PORT = process.env.API_PORT || 3001;

const api = express();

api.use(express.json());
api.use(cors());

routes.forEach(({ path, router }) => {
  api.use(path, router);
});

api.listen(PORT, () => {
  console.log(`API: http://localhost:${PORT}`);
});
