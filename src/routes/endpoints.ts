import { Router } from "express";
import apiController from "../controllers/apiController";
import adviceController from "../controllers/adviceController";

const router = Router();

// Redirect to / from /api
router.get("/", (req, res) => {
  res.redirect("/");
});

// Endpoints
router.get("/courses", apiController.allCoursesController);
router.get("/courses/hindi", apiController.hindiController);
router.get("/courses/commerce", apiController.commerceController);
router.get("/courses/arts", apiController.artsController);
router.get("/courses/science", apiController.scienceController);
router.post("/career/generate", adviceController.queryController);
export default router;
