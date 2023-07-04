"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const apiController_1 = __importDefault(require("../controllers/apiController"));
const adviceController_1 = __importDefault(require("../controllers/adviceController"));
const router = (0, express_1.Router)();
// Redirect to / from /api
router.get("/", (req, res) => {
    res.redirect("/");
});
// Endpoints
router.get("/courses", apiController_1.default.allCoursesController);
router.get("/courses/hindi", apiController_1.default.hindiController);
router.get("/courses/commerce", apiController_1.default.commerceController);
router.get("/courses/arts", apiController_1.default.artsController);
router.get("/courses/science", apiController_1.default.scienceController);
router.post("/career/generate", adviceController_1.default.queryController);
exports.default = router;
//# sourceMappingURL=endpoints.js.map