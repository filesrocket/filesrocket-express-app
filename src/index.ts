import express from "express";
import path from "path";

import localRoutes from "./apis/local.routes";
// import cloudinaryRoutes from "./apis/cloudinary.routes";
// import amazonRoutes from "./apis/amazons3.routes";

const app = express();

// Register all endpoints.
app.use(localRoutes);
// app.use(cloudinaryRoutes);
// app.use(amazonRoutes);

// Expose static files.
app.use("/uploads", express.static(path.resolve("uploads")));

app.listen(3030, () => {
  console.log("Execute app in http://localhost:3030")
});