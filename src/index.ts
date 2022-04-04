import express from "express";
import path from "path";

import LocalRoutes from "./apis/local.routes";
// import AmazonS3Routes from "./apis/amazons3.routes";
// import CloudinaryRoutes from "./apis/cloudinary.routes";

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use("/api", LocalRoutes);
// app.use("/api", AmazonS3Routes);
// app.use("/api", CloudinaryRoutes);

app.use("/uploads", express.static(path.resolve("uploads")));

app.listen(3030, () => {
  console.log("App execute in port:3030");
});
