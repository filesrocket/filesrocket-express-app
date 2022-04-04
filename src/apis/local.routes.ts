import { Router } from "express";

import filesrocket from "../filesrocket";

const router = Router();

const controller = filesrocket.controller("local");

router.post("/local/files", async (req, res, next) => {
  try {
    const files = await controller?.create(req);
    res.status(200).json(files);
  } catch (error) {
    next(error);
  }
});

router.get("/local/files", async (req, res, next) => {
  try {
    const files = await controller?.list(req.query);
    res.status(200).json(files);
  } catch (error) {
    next(error);
  }
});

router.delete("/local/files", async (req, res, next) => {
  try {
    const { id = "" } = req.query;
  
    const files = await controller?.remove(id.toString());
  
    res.status(200).json(files);
  } catch (error) {
    next(error);
  }
});

export default router;
