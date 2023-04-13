import { Router } from "express";
import apiController from "../controllers/apiController";

const router = Router();

// Redirect to / from /api
router.get('/', (req, res) => {
    res.redirect('/');
});

// Endpoints
router.get('/courses', apiController.allCoursesController)
router.get('/courses/hindi', apiController.hindiController);

export default router;