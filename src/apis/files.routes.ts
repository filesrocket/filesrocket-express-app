import { Router } from "express";

import filesrocket from "../filesrocket";

const router = Router();

const controller = filesrocket.controller("local");

router.post("/files", async (req, res, next) => {
  try {
    const files = await controller?.create(req)
    res.status(200).json(files);
  } catch (error) {
    next(error);
  }
});

router.get("/files", async (req, res, next) => {
  try {
    const files = await controller?.list();
    res.status(200).json(files);
  } catch (error) {
    next(error);
  }
});

router.delete("/files", async (req, res, next) => {
  try {
    const { id = "" } = req.query;
  
    const files = await controller?.remove(id.toString());
  
    res.status(200).json(files);
  } catch (error) {
    next(error);
  }
});

export default router;
