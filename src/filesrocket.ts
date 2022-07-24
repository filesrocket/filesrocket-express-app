import { Filesrocket, Pagination } from "@filesrocket/core";
import { CloudinaryFileService } from "@filesrocket/cloudinary";
import { LocalFileService } from "@filesrocket/local";
import dotenv from "dotenv";

dotenv.config();

const filesrocket = new Filesrocket();

const PAGINATION: Pagination = { default: 15, max: 50 };

filesrocket.register("local", new LocalFileService({
  pagination: PAGINATION,
  directory: "uploads",
  host: "http://localhost:3030"
}));

filesrocket.register("cloudinary", new CloudinaryFileService({
  pagination: { default: 15, max: 50 },
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET
}));

// filesrocket.register("amazons3", new AmazonS3FileService({
//   Pagination: { default: 15, max: 50 },
//   Bucket: process.env.AMAZONS3_BUCKET as string,
//   region: process.env.AMAZONS3_REGION as string,
//   credentials: {
//     accessKeyId: process.env.AMAZONS3_ACCESS_KEY_API as string,
//     secretAccessKey: process.env.AMAZONS3_SECRET_ACCESS_KEY as string
//   }
// }));

export default filesrocket;
