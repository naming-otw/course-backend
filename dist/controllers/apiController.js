"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const axios_1 = __importDefault(require("axios"));
// "https://www.real.discount/api-web/all-courses/?store=&page=1&per_page=10&orderby=undefined&free=1&search=&language=&cat=&subcat=&editorschoices=";
const endpointCreator = (page, perPage, search, language, category, subcategory, free, editorsChoices) => {
    let endpoint = "https://www.real.discount/api-web/all-courses/?store=Udemy&page=" +
        page +
        "&per_page=" +
        perPage +
        "&orderby=undefined&free=" +
        free +
        "&search=" +
        search +
        "&language=" +
        language +
        "&cat=" +
        category +
        "&subcat=" +
        subcategory +
        "&editorschoices=" +
        editorsChoices;
    return endpoint;
};
// All courses endpoints
const allCoursesController = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const response = yield axios_1.default.get(endpointCreator(1, 100, "", "All", "All", "", false, false));
        res.json(response.data);
    }
    catch (error) {
        res.json(error);
    }
});
const hindiController = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const response = yield axios_1.default.get(endpointCreator(1, 100, "", "Hindi", "All", "", false, false));
        res.json(response.data);
    }
    catch (error) {
        res.json(error);
    }
});
const commerceController = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const response = yield axios_1.default.get(endpointCreator(1, 100, "", "All", "5", "", false, false));
        res.json(response.data);
    }
    catch (error) {
        res.json(error);
    }
});
const artsController = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const response = yield axios_1.default.get(endpointCreator(1, 100, "", "All", "12", "", false, false));
        res.json(response.data);
    }
    catch (error) {
        res.json(error);
    }
});
const scienceController = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const response = yield axios_1.default.get(endpointCreator(1, 100, "", "All", "2", "", false, false));
        res.json(response.data);
    }
    catch (error) {
        res.json(error);
    }
});
exports.default = {
    allCoursesController,
    hindiController,
    commerceController,
    artsController,
    scienceController,
};
//# sourceMappingURL=apiController.js.map