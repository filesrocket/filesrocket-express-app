import express from "express";
import path from "path";

import FileRoutes from "./apis/files.routes";

const app = express();

app.use("/api", FileRoutes);

app.use("/uploads", express.static(path.resolve("uploads")))

app.listen(3030, () => {
  console.log("App execute in port:3030");
});
