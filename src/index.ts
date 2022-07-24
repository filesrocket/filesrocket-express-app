import express from "express";
import path from "path";

import localRoutes from "./apis/local.routes";
import cloudinaryRoutes from "./apis/cloudinary.routes";

const app = express();

// Register all endpoints.
app.use(localRoutes);
app.use(cloudinaryRoutes);

// Expose static files.
app.use("/uploads", express.static(path.resolve("uploads")));

app.listen(3030, () => console.log("Running..."));