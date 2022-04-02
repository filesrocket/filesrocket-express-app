import { Filesrocket } from "filesrocket";
import dotenv from "dotenv";

dotenv.config();

import { LocalFileService } from "filesrocket-local";
import { CloudinaryFileService } from "filesrocket-cloudinary";

const filesrocket = new Filesrocket();

filesrocket.register("local", new LocalFileService({
  pagination: { default: 15, max: 50 },
  directory: "uploads",
  host: "http://localhost:3030"
}));

filesrocket.register("cloudinary", new CloudinaryFileService({
  pagination: { default: 15, max: 50 },
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET
}));

export default filesrocket;
