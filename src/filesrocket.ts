import { Filesrocket, Pagination } from "@filesrocket/core";
// import { CloudinaryService } from "@filesrocket/cloudinary";
// import { AmazonS3Service } from "@filesrocket/amazons3";
import { LocalService } from "@filesrocket/local";
import dotenv from "dotenv";

dotenv.config();

const filesrocket = new Filesrocket();

const PAGINATION: Pagination = { default: 15, max: 50 };

filesrocket.register("local", new LocalService({
  pagination: PAGINATION,
  directory: "uploads",
  host: "http://localhost:3030"
}));

// filesrocket.register("cloudinary", new CloudinaryService({
//   pagination: PAGINATION,
//   cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
//   api_key: process.env.CLOUDINARY_API_KEY,
//   api_secret: process.env.CLOUDINARY_API_SECRET
// }));

// filesrocket.register("amazons3", new AmazonS3Service({
//   Pagination: PAGINATION,
//   Bucket: process.env.AMAZONS3_BUCKET as string,
//   region: process.env.AMAZONS3_REGION as string,
//   credentials: {
//     accessKeyId: process.env.AMAZONS3_ACCESS_KEY_API as string,
//     secretAccessKey: process.env.AMAZONS3_SECRET_ACCESS_KEY as string
//   }
// }));

export default filesrocket;
