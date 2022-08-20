import { Router } from "express";

import filesrocket from "../filesrocket";

const router = Router();

const controller = filesrocket.controller("cloudinary");

router.post("/cloudinary/files", async (req, res, next) => {
  try {
    const files = await controller?.create(req, {
      query: { path: req.query.path as string }
    });
    
    res.status(200).json(files);
  } catch (error) {
    next(error);
  }
});

router.get("/cloudinary/files", async (req, res, next) => {
  try {
    const files = await controller?.list(req.query);
    res.status(200).json(files);
  } catch (error) {
    next(error);
  }
});

router.delete("/cloudinary/files", async (req, res, next) => {
  try {
    const { id = "" } = req.query;
  
    const files = await controller?.remove(id.toString());
  
    res.status(200).json(files);
  } catch (error) {
    next(error);
  }
});

export default router;
